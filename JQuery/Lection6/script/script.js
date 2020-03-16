var arrOfImg = [
    'https://www.sefiles.net/merchant/2166/images/site/bk-hp-staff-picks-2-slimC.jpg',
    'https://www.sefiles.net/merchant/2166/images/site/2166_WEB_C4_Rentals-slimC1.jpg',
    'https://www.sefiles.net/merchant/2166/images/site/2166_WEB_C4_Price-Match-slimC1.jpg',
    'https://cdn.shopify.com/s/files/1/2715/7000/files/paint-gallery-_4.jpg'
]
$(document).ready(function() {
    loadGallery();
    var photoList = $('#gallery .photo');
    setZIndex(photoList);
    changePhotoHandler(photoList)
});

function loadGallery() {
    let galleryElem = $('#gallery');

    arrOfImg.forEach(function(element) {
        galleryElem.append(`<div style = "background-image:url('${element}')" class = "photo"></div>`);
    });
}

function setZIndex(list) {
    for (let i = 0; i < list.length; i++) {
        list.eq(i).css('z-index', i);
    }
}

function changePhotoHandler(list) {
    list.on('click', function() {
        let side = parseInt($(this).css('width'));
        let photoLeft = parseInt($(this).css('left'));
        let photoTop = parseInt($(this).css('top'));

        $(this).stop(true).animate({
            left: photoLeft + side,
            top: photoTop - side
        }, function() {
            for (let i = 0; i < list.length; i++) {
                let curVal = Number(list.eq(i).css('z-index'));
                list.eq(i).css('z-index', curVal + 1);
            }
            $(this).css('z-index', '0');

        });

        $(this).animate({
            left: photoLeft,
            top: photoTop
        })

    });
}