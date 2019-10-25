'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('1', '1.json', true),            
            new Route('2', '2.json'),
            new Route('3', '3.json'),
            new Route('4', '4.json')
        ]);
    }
    init();
}());
