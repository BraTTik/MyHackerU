let addForm = document.querySelector('.addForm');
let firstNameElem   = addForm.querySelector('.firstName input'),
    lastNameElem    = addForm.querySelector('.lastName input'),
    phoneNumberElem = addForm.querySelector('.phoneNumber input'),
    emailElem       = addForm.querySelector('.email input'),
    tasksElem       = addForm.querySelector('.tasks textarea'),
    addBtn      = addForm.querySelector('.addBtn');

addBtn.addEventListener('click', function(){
    clearErrors();
    let userElems = {};
    userElems['firstName'] = [firstNameElem.previousElementSibling.innerHTML, firstNameElem.value];
    userElems['lastName'] = [lastNameElem.previousElementSibling.innerHTML, lastNameElem.value];
    userElems['phoneNumber'] = [phoneNumberElem.previousElementSibling.innerHTML, phoneNumberElem.value];
    userElems['email'] = [emailElem.previousElementSibling.innerHTML, emailElem.value];
    userElems['tasks'] = ['Задания', tasksElem.value.split(',')];
    if( checkEmptyFields(userElems)
        &&
        validateFields(userElems))
        {
            makeUserCard(userElems);
        }
});

function validateFields(obj){
    let flag = true;
    if(!validatePhoneNum(obj['phoneNumber'][1])){
        showErrorText('phoneNumber', 'Должно быть 10-ти значное число');
        flag = false;
    }
    if(!validateEmail(obj['email'][1])){
        showErrorText('email', 'Введите корректный email');
        flag = false;
    }
    return flag;
}

function validatePhoneNum(str){
    return !isNaN(str) && str.length == 10 && !isEmptyStr(str);
}

function validateEmail(str){
    return (
        str.includes('@')
        && 
        (str.indexOf('@') > 0) 
        && 
        str.includes('.') 
        && 
        ((str.length-1) - str.lastIndexOf('.') >= 2)
        &&
        (str.lastIndexOf('.') - str.indexOf('@') > 1)
    );
}

function isEmptyStr(str){
    if(str.trim() == 0)
        return true;
    return false;
}

function makeUserCard(obj){
    let cardsContainer = document.querySelector('#cardsContainer');
    let userCardElem = document.createElement('div')
    userCardElem.classList.add('userCard');

    let userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('userInfo');

    let userTasksDiv = document.createElement('div');
    userTasksDiv.classList.add('userTasks');

    for(let key in obj){
        if(key != 'tasks'){
            let block = makeLabel(obj[key]);
            userInfoDiv.appendChild(block);
        }else{
            makeUserTaskList(obj);
        }
    }

    userCardElem.appendChild(userInfoDiv);
    userCardElem.appendChild(userTasksDiv);
    cardsContainer.appendChild(userCardElem);

    function makeUserTaskList(obj){
        let tasksElems = obj['tasks'];
        let ulElem = document.createElement('ul');

        let h2Elem = document.createElement('h2');
        h2Elem.innerText = tasksElems[0];
        userTasksDiv.appendChild(h2Elem);

        tasksElems[1].forEach(elem => {
            let li = document.createElement('li');
            li.innerText = elem.trim();
            if(li.innerText.length != 0){
                ulElem.appendChild(li);
            }
        });
        if(ulElem.children.length == 0){
            ulElem.innerHTML = '<h2>Заданий нет</h2>';
        }
        userTasksDiv.appendChild(ulElem);
    }
    function makeLabel(elems){
        let divElem = document.createElement('div');
        elems.forEach(elem => {
            let pElem = document.createElement('p');
            pElem.innerText = elem;
            divElem.append(pElem);
        })

        return divElem;
    }

}

function clearErrors(){
    let errors = addForm.querySelectorAll('.error');
    for(let i = 0; i < errors.length; i++){
        errors[i].innerHTML = '';
    }
}

function checkEmptyFields(obj){
    let flag = true;
    for(let key in obj){
        if(key != 'tasks' && isEmptyStr(obj[key][1])){
            showErrorText(key, 'Поле должно быть заполнено');
            flag = false;
        }
    }
    return flag;
}

function showErrorText(field, text){
    addForm.querySelector(`.${field} .error`).innerHTML = text;
}