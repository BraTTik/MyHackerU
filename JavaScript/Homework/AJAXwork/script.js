var tempData;
let userId;
let loadButton = document.getElementById('loadButton');

function loadPosts(idUser) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            AJAXHandlerPosts(JSON.parse(this.responseText));
        }
    }
    xhttp.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${idUser}`, true);
    xhttp.send();
}

function loadUserInfo(idUser) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            AJAXHandlerUserInfo(JSON.parse(this.responseText));
        }
    }
    xhttp.open('GET', `https://jsonplaceholder.typicode.com/users?id=${idUser}`, true);
    xhttp.send();
}

function AJAXHandlerPosts(data) {
    let postsElem = document.querySelector('.posts');
    postsElem.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let post = document.createElement('div')
        post.classList.add('post');
        let h3Elem = document.createElement('h3');
        let parag = document.createElement('p');

        h3Elem.innerText = data[i]["title"];
        parag.innerText = data[i]["body"];

        post.appendChild(h3Elem);
        post.appendChild(parag);
        postsElem.appendChild(post);
    }
}

function AJAXHandlerUserInfo(data) {
    let tableElem = document.getElementById('user-info');
    tableElem.innerHTML = '';

    for (let key in data[0]) {
        if (key == "company") continue;
        let trElem = document.createElement('tr');
        let thElem = document.createElement('th');
        let tdElem = document.createElement('td');

        thElem.innerHTML = `${key}:`;
        tdElem.innerHTML = `${data[0][key]}`;
        if (typeof(data[0][key]) == 'object') {
            tdElem.innerHTML = '';
            for (let param in data[0][key]) {
                if (param == "geo") continue;
                tdElem.innerHTML += data[0][key][param] + ', ';
            }
            tdElem.innerHTML = tdElem.innerHTML.slice(0, -2);
        }

        trElem.appendChild(thElem);
        trElem.appendChild(tdElem);
        tableElem.appendChild(trElem);
    }
}

loadButton.addEventListener('click', function() {
    let userId = document.getElementById('userID').value;
    if (isNaN(userId) || userId > 10) {
        alert('Такого пользователя нет');
        return;
    }
    loadUserInfo(userId);
    loadPosts(userId);
});