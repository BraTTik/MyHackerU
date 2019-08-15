function changeFontSize(className){
    let elements = document.getElementsByClassName(className);
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.toggle('active');
        elements[i].style.fontSize = `${Math.round(Math.random()*(25 - 10)+10)}px`;
        elements[i].style.color = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}`;
        elements[i].style.transform = `rotate(${Math.round(Math.random()*45-20)}deg)`;
    }
}

changeFontSize('crazy-link');
setInterval(function(){changeFontSize('crazy-link')}, 1000);