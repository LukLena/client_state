const editor= document.getElementById('editor')

function write(event){
    const text = editor.value
    localStorage.setItem('editor', text )
    console.log(localStorage.editor)  
}
editor.addEventListener('input', write)

editor.value = localStorage.getItem('editor');
