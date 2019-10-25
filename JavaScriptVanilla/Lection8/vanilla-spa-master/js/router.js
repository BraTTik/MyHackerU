'use strict';
var buttons = document.querySelectorAll('button');
var curUser;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        curUser = this.firstChild.innerHTML;
        fetch(`data/${curUser}.json`)
        .then(response => response.json())
        .then(json => makeUserCard(json));
    });
}

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        var hash = window.location.hash;
        var curRoute;

        if (hash.length > 0) {
            curRoute = r.find(elem => elem.isActiveRoute(hash));
        } else {
            curRoute = r.find(elem => elem.default);
        }
        scope.goToRoute(curRoute.htmlName);
    },

    goToRoute: function (htmlName) {
        (function(scope){
            fetch('data/' + htmlName)
            .then(response => response.json(),
            error => console.log(error))
            .then(json => scope.rootElem.innerHTML = makeUserCard(json),
                error => console.log(error));
            
/*             if(htmlName === 'user.html'){
                fetch(`data/${curUser}.json`)
                .then(response => response.json())
                .then(json => makeUserCard(json));
            } */
        })(this);
    },

};


function makeUserCard(data){
    console.log(data.name);
    let html = [`<div class="userCard">`,
                `<p>Name: <span class="name">${data.name}</span></p>`,
                `<p>Last name: <span class="username">${data.username}</span></p>`,
                `<p>E-mail: <span class="email">${data.email}</span></p>`,
                `<p>Phone: <span class="phone">${data.phone}</span></p>`,
            `</div>`].join('');

    return html;
}