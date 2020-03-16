/* function sum(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mult(a, b){
    return a*b;
}

function div(a, b){
    if(b == 0){
        return 'Делить на 0 нельзя';
    }else{
        return a/b;
    }
}

function calc(a, b, callback){
    console.log(callback(a, b));
    return callback(a, b);
} */

/* class Book {
    constructor(title, author, pagesCnt){
        this.title = title;
        this.author = author;
        this.pagesCnt = pagesCnt;
        this.pagePosition = 0;
    }

    findPage(num){
        alert(`Страница № ${num} открыта!`);
    }

    startAudio(){
        alert('Начали слушать книгу');
    }

    nextPage(){
        this.pagePosition += 1;
    }

    previousPage(){
        this.pagePosition -= 1;
    }
} */

function beautify(className){
    var elements = document.getElementsByClassName(className);
    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
    }
}