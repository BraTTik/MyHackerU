'use strict';

(function(){
    var f = ['⇙', '⇓', '⇘'];


function checkPoint(x, y){
    let windowWidth = window.innerWidth/2;

    if(x + y < windowWidth){
        return 0;
    }else if(x > windowWidth && y < windowWidth && x - y > windowWidth){
        return 2;
    }else{
        return 1;
    }
}

window.addEventListener('mousemove', function(event){
    location.hash = f[checkPoint(event.clientX, event.clientY)];
})
})();


(function(){
    function move(x, y){
        let xCenter = x - window.innerWidth/2;
        let yCenter = y - window.innerHeight/2;
    
        let shiftX = xCenter/(window.innerWidth/2);
        let shiftY = yCenter/(window.innerHeight/2);
    
        let elem = document.querySelector('.blot');
    
        elem.style.left = -shiftX * 10 + 'px';
        elem.style.top = -shiftY * 10 + 'px';
    }
    
    window.addEventListener('mousemove', function(event){
        move(event.clientX, event.clientY);
    })
})();

(function(){
    let good = document.querySelector('.good .imgContainer');

    good.addEventListener('mouseenter', function(){
    });

    good.addEventListener('mousemove', function(event){
        let loupeElem = document.querySelector('.loupe');

        if(good.offsetLeft < event.pageX
            && event.pageX < good.offsetLeft + good.offsetWidth
            && good.offsetTop < event.pageY
            && event.pageY < good.offsetTop + good.offsetHeight){
                loupeElem.classList.add('active');
        }else{
            loupeElem.classList.remove('active');
        }

        let loupeX = (event.pageX - good.offsetLeft) / good.offsetWidth;
        let loupeY = (event.pageY - good.offsetTop) / good.offsetHeight;
        loupeElem.style.backgroundPosition = `${loupeX*100}% ${loupeY*100}%`;

        loupeElem.style.left = event.pageX-loupeElem.offsetWidth/2 + 'px';
        loupeElem.style.top = event.pageY-loupeElem.offsetHeight/2 + 'px';
    });

})();

(function(){
    let sliderData = {
        curSlide: 0,
        isSlide: false,
         data: [
            {
                title: 'Слайд 1',
                content: 'контент 1'
            },
            {
                title: 'Слайд 2',
                content: 'контент 2'
            },
            {
                title: 'Слайд 3',
                content: 'контент 3'
            },
            {
                title: 'Слайд 4',
                content: 'контент 4'
            }
        ]
    
    }
    
    let sliderElem = document.querySelector('.sliderContainer');
    sliderElem.appendChild(createNode(0));
    
    function createNode(slideNum, shift){
        let slideElem = document.createElement('div');
        slideElem.classList.add('slide');
    
        let header = document.createElement('h2');
        header.innerText = sliderData.data[slideNum].title;
    
        let content = document.createElement('p');
        content.innerText = sliderData.data[slideNum].content;
    
        slideElem.appendChild(header);
        slideElem.appendChild(content);
        if(shift == 'l'){
            slideElem.style.left = sliderElem.offsetWidth + 'px';
        }else if(shift == 'r'){
            slideElem.style.left = -sliderElem.offsetWidth + 'px';
        }else{
            slideElem.style.left = 0;
        }
    
        return slideElem;
    }
    
    function goLeft(){
        if(sliderData.isSlide) return
    
        sliderData.isSlide = !sliderData.isSlide;
        sliderData.curSlide == 0 ? (sliderData.curSlide = sliderData.data.length - 1) : sliderData.curSlide--;
        sliderElem.appendChild(createNode(sliderData.curSlide, 'l'));
    
        scrollHandler(-1, function(){
            document.querySelector('.slide').remove();
            sliderData.isSlide = !sliderData.isSlide;
        });
    }
    
    function goRight(){
        if(sliderData.isSlide) return
    
        sliderData.isSlide = !sliderData.isSlide;
        sliderData.curSlide == (sliderData.data.length - 1) ? (sliderData.curSlide = 0) : sliderData.curSlide++;
        sliderElem.appendChild(createNode(sliderData.curSlide, 'r'));
    
        scrollHandler(1, function(){
            document.querySelector('.slide').remove();
            sliderData.isSlide = !sliderData.isSlide;
        });
    }
    
    function scrollHandler(direction, callback){
        let widthElem = sliderElem.offsetWidth;
        let elem = document.querySelector('.slide');
        let elemArr = document.querySelectorAll('.slide');
        
        [...elemArr].forEach(function(elem){
            elem.style.left = parseInt(elem.style.left) + direction + 'px';
        })
        let left = parseInt(elem.style.left);
        
        if(Math.abs(left) < widthElem){
            setTimeout(()=>scrollHandler(direction, callback), 1);
        }else{
            callback();
        }
    }
    
})();


