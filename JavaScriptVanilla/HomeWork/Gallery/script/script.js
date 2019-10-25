'use strict';

let imageData ={
    curImage: 0,
    images: [
        {
            path: 'https://images.wallpaperscraft.ru/image/ford_mustang_gt_vid_sboku_krasnyj_94340_1600x1200.jpg'
        },
        {
            path: 'https://images.wallpaperscraft.ru/image/bmw_325i_e30_belyj_avto_93276_1600x1200.jpg'
        },
        {
            path: 'https://images.wallpaperscraft.ru/image/toyota_gt86_vid_szadi_vecher_105093_1600x1200.jpg'
        }
    ]
} 

let rootElem = document.getElementById('root');


createGallery();
browseImage(imageData.curImage);

function createGallery(){
    let leftDivElem = document.createElement('div');
    leftDivElem.classList.add('imgList');
    let rightDivElem = document.createElement('div');
    rightDivElem.classList.add('imgBrowser');

    imageData.images.forEach(elem => {
        addImageInList(leftDivElem, elem.path);
    })

    rootElem.appendChild(leftDivElem);
    rootElem.appendChild(rightDivElem);


}

function addImageInList(parent, img){
    let imgContainer = document.createElement('div');
    imgContainer.style.backgroundImage = `url('${img}')`;
    imgContainer.addEventListener('click', changeImage)

    parent.appendChild(imgContainer);
}

function browseImage(curElem){
    let browser = document.querySelector('.imgBrowser');
    browser.innerHTML = '';
    let divElem = document.createElement('div');
    divElem.style.backgroundImage = `url('${imageData.images[curElem].path}')`;

    divElem.addEventListener('mousemove', function(event){
        magnifierHandler(event, this);
    });
    divElem.addEventListener('mouseout', function(event){
        this.style.backgroundSize = 'cover';
        this.style.backgroundPosition = 'center';
    });

    browser.appendChild(divElem);
}

function changeImage(){
    let path = this.style.backgroundImage
    path = path.slice(path.indexOf('"')+1, path.lastIndexOf('"'));
    let index;
    imageData.images.forEach((elem, i)=>{
        console.log(elem.path);
        if(elem.path === path){
            index = i;
        }
    });
    browseImage(index);
}

function getImagePath(elem){
    let path = elem.style.backgroundImage
    return path.slice(path.indexOf('"')+1, path.lastIndexOf('"') )
}

function magnifierHandler(event, self){
    let posX = event.offsetX/self.offsetWidth;
    let posY = event.offsetY/self.offsetHeight;
    self.style.backgroundSize = '300%';
    self.style.backgroundPosition = `${Math.round(posX*100)}% ${Math.round(posY*100)}%`;
}