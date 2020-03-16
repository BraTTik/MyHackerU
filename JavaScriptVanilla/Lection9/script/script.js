'use strict';

let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    searchHandler();
});

function searchHandler(){
    let nums = document.getElementById('nums');
    let arrId = nums.value.split(',');
    if(arrId.length == 1 && arrId[0] === ''){
        nums.classList.remove('error');
        nums.classList.add('error');
        return;
    }
    arrId = map(elem => replaceAll(elem)).filter(elem => elem.length > 0);
    arrId.forEach(id =>loadPost(id));
}

function getPost(id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

function loadPost(id){
    getPost(id)
        .then(response => response.json(),
                error => {throw new Error(error)}
        )
        .then(json => renderData(json),
        error => {throw new Error(error)}
        )
}

function replaceAll(str, substr = ' '){
    while(str.indexOf(substr) != -1){
        str = str.replace(substr, '');
    }
    return str;
}

function renderData(data){
    let resultElem = document.getElementById('result');

    resultElem.appendChild(makePost(data));

    function makePost(data){
        let divElem = document.createElement('div');
        let hElem = document.createElement('h3');
        let pElem = document.createElement('p');
        let btnElem = document.createElement('button');

        btnElem.innerText = 'Кто автор?';
        hElem.innerText = data.title;
        pElem.innerText = data.body;

        btnElem.addEventListener('click', ()=>{
            console.log(data.userId);
            getUser(data.userId)
                .then(response => response.json())
                .then(json => console.log(json));
        })

        divElem.appendChild(hElem);
        divElem.appendChild(pElem);
        divElem.appendChild(btnElem);
        divElem.classList.add('post');

        return divElem;
    }
}

function getUser(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

