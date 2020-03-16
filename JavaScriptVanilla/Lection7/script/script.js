'use strict';

let promise = new Promise(function(reslve, reject){
    setTimeout(()=>reslve('процесс выполнился'), 3000);
});

promise.then(result=> console.log(result), err=>console.log(err));

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json(),
        error    => console.log(error)
    )
    .then(json => console.log(json)); */

function getInfo(id, type){
    return fetch(`https://jsonplaceholder.typicode.com/${type}/${id}`)
}

function getPostInfo(id){
    return fetch(`https://jsonplaceholder.typicode1.com/todos/${id}`)
}

function getPersonInfo(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}

getInfo(3, 'todos').then(response => response.json(),
                    error => errorHandler('Сервер не ответил'))

                .then(json => {render(json, 'todo'); return getInfo(json.userId, 'users')},
                    error => errorHandler('Сервер ответил как-то не так'))

                .then(response => response.json(),
                    error => errorHandler('Сервер не ответил'))

                .then(json => {render(json, 'user'); console.log(json)},
                    error => errorHandler('Сервер ответил как-то не так'))

function render(json, type){
    let root = document.getElementById('root');
    let pElem = document.createElement('p');

    if(type === 'todo'){
        pElem.innerText = json.title;
    }else{
        pElem.innerText = json.name;
    }

    root.appendChild(pElem);
}

function errorHandler(errorMessage){
    let modalElem = document.getElementById('modal');
    modalElem.classList.add('active');
    modalElem.querySelector('.innerModal').innerText = errorMessage;

    setTimeout(()=>modalElem.classList.remove('active'), 3000);
}