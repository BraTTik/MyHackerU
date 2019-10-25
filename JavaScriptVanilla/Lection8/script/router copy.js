'use strict';

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
            fetch('views/' + htmlName)
            .then(response => response.text(),
            error => console.log(error))
            .then(html => scope.rootElem.innerHTML = html,
                error => console.log(error));
        })(this);
    },
};