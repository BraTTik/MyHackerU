'use strict';

function parseCookies(cookies){
    let cookieArr = cookies.split('; ');
    cookieArr = cookieArr.map(elem => {
        let [key, value] = elem.split('=');
        return {key, value}
    })

    return cookieArr;
}

function getCookie(key){
    let cookieArr = parseCookies(document.cookie);
    let curCookie = cookieArr.find(function(elem){
        return elem.key === key;
    });
    return (curCookie == undefined || curCookie.value == '0') ? 0 : 1;
}

let cookieBtn = document.getElementById('addCookie');

cookieBtn.addEventListener('click', function(){

    document.cookie =`darkMode=${getCookie('darkMode') ? 0 : 1}`;
    console.log(document.cookie);

    setMode();
})

function setMode(){
    if(getCookie('darkMode')){
        document.body.classList.add('darkMode');
    }else{
        document.body.classList.remove('darkMode');
    }
}

setMode();