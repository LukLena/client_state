const modal = document.getElementsByClassName('modal')
const modalClose = document.getElementsByClassName('modal__close')
console.log(modal)
 
if (!getCookie('isClosed')) {
   modal[0].classList.add('modal_active')
    }

function close(event){
    modal[0].classList.remove('modal_active')
    setCookie('isClosed', 'true', {secure: true, 'max-age': 3600});
    console.log(document.cookie)

    
    function setCookie(name, value, props) {
    props = props || {}
    var exp = props.expires
    if (typeof exp == "number" && exp) {
        var d = new Date()
        d.setTime(d.getTime() + exp*1000)
        exp = props.expires = d
    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
    value = encodeURIComponent(value)
    var updatedCookie = name + "=" + value
    for(var propName in props){
        updatedCookie += "; " + propName
        var propValue = props[propName]
        if(propValue !== true){ updatedCookie += "=" + propValue }
    }
    document.cookie = updatedCookie
}

//    console.log(localStorage)
}
modalClose[0].addEventListener('click', close)
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}
function deleteCookie(name) {

    setCookie(name, null, { expires: -1 })

}


//function setCookie(name, value, options = {}) {
//
//  options = {
//    path: '/',
//    // при необходимости добавьте другие значения по умолчанию
//    ...options
//  };
//
//  if (options.expires instanceof Date) {
//    options.expires = options.expires.toUTCString();
//  }
//
//  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
//
//  for (let optionKey in options) {
//    updatedCookie += "; " + optionKey;
//    let optionValue = options[optionKey];
//    if (optionValue !== true) {
//      updatedCookie += "=" + optionValue;
//    }
//  }
//
//  document.cookie = updatedCookie;
//}

// Пример использования:


// возвращает куки с указанным name,
// или undefined, если ничего не найдено
//function getCookie(name) {
//  let matches = document.cookie.match(new RegExp(
//    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//  ));
//  return matches ? decodeURIComponent(matches[1]) : undefined;
//}