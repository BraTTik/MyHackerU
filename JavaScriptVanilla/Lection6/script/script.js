'use strict';

let addDataBtn = document.getElementById('addData');

addDataBtn.addEventListener('click', function(){
    addHandler();
});

function getData(){
    let elems = document.querySelectorAll('input');
    let [key, value] = [elems[0].value, elems[1].value];
    return{key, value};
}

function addHandler(){
    let data = getData();
    localStorage.setItem(data.key, data.value);
    updateData();
}

function updateData(){
    let list = document.getElementById('list');
    list.innerText = '';

    for(let i = 0; i < localStorage.length; i++){
        let key     = localStorage.key(i);
        let value   = localStorage.getItem(key);

        let liElem  = document.createElement('li');
        let spanKey = makeSpan(key);
        let spanValue = makeSpan(value);

        liElem.appendChild(spanKey);
        liElem.innerText += ' ';
        liElem.appendChild(spanValue);
        addDelBtn(liElem, key);
        list.appendChild(liElem);


    }
}

function makeSpan(content){
    let span = document.createElement('span');
    span.innerText = content;
    return span;
}

function addDelBtn(parent, key){
    let btn = makeSpan('x');
    btn.classList.add('delData');
    btn.addEventListener('click', function(){
        deleteData(key);
        parent.remove();
    });
    parent.appendChild(btn);
}

function deleteData(key){
    localStorage.removeItem(key);
}