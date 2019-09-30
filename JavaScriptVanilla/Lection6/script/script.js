'use strict';

function getData(){
    let elems = document.querySelectorAll('input');
    let [key, value] = [elems[0].value, elems[1].value];
    return{key, value};
}

