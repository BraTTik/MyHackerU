var photoArr = [
    'https://pics.me.me/javascript-javascript-the-good-parts-7me-definitive-guide-reilly-darid-62800569.png',
    'https://pics.me.me/python-ol-javascript-c-what-the-hell-is-this-seriously-62360973.png',
    'https://pics.me.me/programming-pro-tip-code-javascript-underwater-so-nobody-could-see-62401907.png',
    'https://pics.me.me/when-you-code-in-javascript-and-your-colleagues-talk-about-62198955.png',
    'https://pics.me.me/drunk-member-this-is-my-favorite-javascript-language-redcoders-11-62100635.png',
    'https://pics.me.me/ahoy-me-again-seriously-missing-before-statement-undefined-is-not-61753641.png'
]

$(document).ready(function() {
    loadGallery(photoArr);

    let photoSize = setPhotoSize();
    let photoElems = $('#gallery .photo');

    setZIndex(photoElems);
    changePhotoHandler(photoElems, photoSize);

});

function loadGallery(list) {
    let galleryContainer = $('#gallery .container')
    list.forEach(function(element) {
        galleryContainer.append(`<div class="photo" style = "background-image: url('${element}')"></div>`);
    });
}

function setZIndex(list) {
    for (let i = 0; i < list.length; i++) {
        list.eq(i).css('z-index', i);
    }
}

function setPhotoSize() {
    return parseInt($('#gallery .container .photo').css('width'));
}

function changePhotoHandler(list, photoSize) {

    window.addEventListener('resize', function() {
        photoSize = setPhotoSize();
    });

    list.on('click', function() {

        $(this).stop(true).animate({
            'top': -photoSize / 1.25 - 20 + 'px',
            'left': photoSize / 5 + 'px',
            'width': photoSize / 1.25 + 'px',
            'height': photoSize / 1.25 + 'px',
        }, function() {
            for (let i = 0; i < list.length; i++) {
                let curZindex = Number(list.eq(i).css('z-index'));
                list.eq(i).css('z-index', curZindex + 1);
            }
            $(this).css('z-index', 0);

        });

        $(this).animate({
            'top': photoSize / 2 + 'px',
            'width': photoSize / 4 + 'px',
            'height': photoSize / 4 + 'px'
        }, function() {

            $(this).css({
                'top': 0,
                'left': 0,
                'width': '100%',
                'height': '100%'
            })
        });

    });
}