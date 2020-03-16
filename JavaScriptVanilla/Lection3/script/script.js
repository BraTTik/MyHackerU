'use strict'

/* class Snake{

    constructor(age){
        this.age = age;
        this.color = 'yellow';
    }

    get age(){
        return this._age + ' лет';
    }

    set age(age){
        if(age > 50){
            console.log('Error');
            return
        }
        this._age = age;
    }

}
 */

var canvasElem = document.getElementById('canvas');
canvasElem.width = 500;
canvasElem.height = 500;

var ctx = canvasElem.getContext('2d');

var rectArr = [];

class Rect{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.direction = 1;
        this.speed = 1;
    }

    move(){
        var curSpeed = Math.round(this.speed);
        
        switch(this.direction){
            case 0:
                this.y -= curSpeed;
                break;
            case 1:
                this.x += curSpeed;
                break;
            case 2:
                this.y += curSpeed;
                break;
            case 3:
                this.x -= curSpeed;
                break;
        }
        if(this.x >= (500-this.width)){
            this.direction = 3;
        }else if(this.x <= 0){
            this.direction = 1;
        }else if(this.y <= 0){
            this.direction = 2;
        }else if(this.y >= (500 - this.height)){
            this.direction = 0;
        }
    }

    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

function keyPressHandler(event){
    switch(event.code){
        case 'KeyW':
            rectArr.forEach(item => item.direction = 0);
            break;
        case 'KeyD':
            rectArr.forEach(item => item.direction = 1);
            break;
        case 'KeyS':
            rectArr.forEach(item => item.direction = 2);
            break;
        case 'KeyA':
            rectArr.forEach(item => item.direction = 3);
            break;
        case 'Space':
            rectArr.push(new Rect(10, 10));
            break;
    }

}

ctx.fillStyle = '#123456';

function draw(){
    ctx.clearRect(0, 0, 500, 500);

    rectArr.forEach(item => item.move());
    rectArr.forEach(item => item.draw());
    rectArr.forEach(item => item.speed+=0.025);
}

setInterval(draw, 10);

document.addEventListener('keypress', function(event){ keyPressHandler(event) });

ctx.strokeStyle = '#56ffde';
ctx.strokeRect(50, 50, 25, 50);

ctx.clearRect(0, 30, 100, 30);