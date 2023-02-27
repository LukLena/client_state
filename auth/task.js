const signin =  document.getElementsByClassName('signin')
const control = document.getElementsByClassName('control')
signin[0].classList.add('signin_active')
const btn = document.getElementsByClassName('btn')

const welcome = document.getElementsByClassName('welcome')
const span = document.querySelector('#user_id')

function send(event){
   event.preventDefault()
   let xhr = new XMLHttpRequest()
   xhr.open('POST', `https://students.netoservices.ru/nestjs-backend/auth`, true)
   let formData = new FormData();
   let lgn = control[0].value
   let psw = control[1].value  
   formData.append('login', lgn)
   formData.append ('password', psw)

   xhr.send(formData);
   xhr.onload = function(){
        const answer = JSON.parse(xhr.response)
        if(answer.success == false){
            alert('Неверный логин/пароль')
        }
        else{
            localStorage.setItem('id', answer.user_id)
            signin[0].classList.remove('signin_active')
            welcome[0].classList.add('welcome_active')
            span.innerHTML = answer.user_id
        }
    }
}

btn[0].addEventListener('click', send)
if (localStorage.getItem('id')){
    signin[0].classList.remove('signin_active')
    welcome[0].classList.add('welcome_active')
    span.innerHTML = localStorage.getItem('id')
}


