'use strict';

function tasksManager(title, tasks) {
    let card = document.createElement('div');
    let titleElem = document.createElement('h2');
    titleElem.innerText = title;

    if (tasks.length == 0) {
        var olElem = document.createElement('p');
        olElem.innerText = 'Ты ленив или всё сделал(но это вряд ли)';
    } else {
        var olElem = document.createElement('ol');
        tasks = tasks.map((elem) => {
            let li = document.createElement('li');
            li.innerText = elem.trim();
            return li;
        });

        tasks.forEach(elem => {
            olElem.appendChild(elem);
        })
    }

    card.appendChild(titleElem);
    card.appendChild(olElem);
    document.body.appendChild(card);

}

var addForm = document.querySelector('.addElem');

function addItem() {
    let title = addForm.querySelector('input').value,
        todo = addForm.querySelector('textarea').value;
    let todoArr = todo.split(',');
    todoArr = todoArr.map(item => {
        return item.trim();
    });
    todoArr = todoArr.filter((item) => {
        return item;
    });
    tasksManager(title, todoArr);
}

var addBtn = addForm.querySelector('button');

addBtn.addEventListener('click', () => { addItem(); });