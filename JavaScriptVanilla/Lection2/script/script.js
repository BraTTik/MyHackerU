'use strict';

function tasksManager(title, tasks) {
    let card = document.createElement('div');
    let titleElem = document.createElement('h2');
    titleElem.innerText = title;
    card.appendChild(titleElem);

    if (tasks.length == 0) {
        var emptyList = document.createElement('p');
        olElem.innerText = 'Ты ленив или всё сделал(но это вряд ли)';
        card.appendChild(emptyList);
    } else {
        var doneUlElem = document.createElement('ul');
        var notDoneUlElem = document.createElement('ul');

        tasks = tasks.map((elem) => {
            let li = document.createElement('li');
            li.innerText = elem.trim().toLowerCase();
            return li;
        });

        tasks.forEach(elem => {
            olElem.appendChild(elem);
        });

        card.appendChild(olElem);
    }

    document.body.appendChild(card);

}

var addForm = document.querySelector('.addElem');

function addItem() {
    let title = addForm.querySelector('input').value,
        todo = addForm.querySelector('textarea').value,
        errorElem = addForm.querySelector('.error');
    let todoArr = todo.split(',');
    todoArr = todoArr.map(item => {
        item.trim().toLocaleLowerCase();;
        let arr = item.split(':');
        arr = arr.map(item => {return item.trim();});
        let obj = {
            'doneFlg': Boolean(+arr[0]),
            'task': arr[1]
        }
        return obj;
    });

    todoArr = todoArr.filter((item) => {
        return item.title;
    });
    
    todoArr = todoArr.map(elem => {
       return (workCheck(elem.title)) ? 'не ' + elem.title : elem.title;
    });

    if(title){
        tasksManager(title, todoArr);
        errorElem.style.display = 'none';
    }else{
        errorElem.innerText = 'Вы не ввели заголовок';
        errorElem.style.display = 'block';
    }
}
function workCheck(str){
    let permVal = 'за';
    return str.includes('работ') && !str.includes('за');
}


var addBtn = addForm.querySelector('button');

addBtn.addEventListener('click', () => { addItem(); });

