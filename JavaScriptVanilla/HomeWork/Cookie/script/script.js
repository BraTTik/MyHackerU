let cookie = document.cookie;
let changeStateBtn = document.getElementById('stateBtn');

addCookie('bigLetters', '0');
checkState(changeStateBtn);
changeStateBtn.addEventListener('click', function(){
    if(getCookie('bigLetters') == undefined || getCookie('bigLetters').value == '0'){
        setCookie('bigLetters', '1');
    }else{
        setCookie('bigLetters', '0');
    }
    checkState(this);
})

function parseCookie(cookie){
    let cookieArr = cookie.split('; ');
    cookieArr = cookieArr.map(elem => {
        let [key, value] = elem.split('=');
        return {key, value};
    })
    return cookieArr;
}

function setCookie(key, value){
    document.cookie = `${key}=${value};`;
}

function getCookie(key){
    let cookie = parseCookie(document.cookie);
    let curCookie = cookie.find(elem => {
        return elem.key === key;
    });
    return curCookie;
}

function isState(cookie){
    return (cookie.value == '1') ? 1 : 0;
}

function addCookie(key, value){
    if(getCookie(key) == undefined){
        setCookie(key, value);
    }
}

function checkState(btn){
    if(isState(getCookie('bigLetters'))){
        document.body.classList.add('bigLetters');
        btn.innerText = 'Отключить режим для слабовидящих';
    }else{
        document.body.classList.remove('bigLetters');
        btn.innerText = 'Версия для слабовидящих';
    }
}