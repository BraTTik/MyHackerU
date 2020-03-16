var imgArray = ['https://cs9.pikabu.ru/post_img/2018/03/26/8/1522069661167527398.jpg',
    'https://cs10.pikabu.ru/post_img/2018/03/26/8/1522069646128892530.jpg',
    'https://cs8.pikabu.ru/post_img/2018/03/26/8/1522069612194776541.jpg',
    'https://cs8.pikabu.ru/post_img/2018/03/26/8/1522069566199676512.jpg'
];

$(document).ready(function() {
    var randomNumber = setRandom($('li'));

    $('li').eq(randomNumber).addClass('activeBtn');
    $('li').eq(randomNumber).find('span').hide();

    console.log($('li'));

    $('.result').css('background-image', `url(${imgArray[randomNumber]})`);


    $('li').on('click', function() {
        $('li').removeClass('activeBtn');
        $('li span').show();
        var curElem = $(this);

        curElem.addClass('activeBtn');
        curElem.find('span').hide();

        $('.result').stop(true).animate({ 'opacity': '0', 'width': '0', 'height': '0' }, 500, function() {
            $('.result').text(curElem.text());
            $('.result').css('background-image', `url(${imgArray[$('li').index(curElem)]})`);
        });
        $('.result').animate({ 'opacity': '1', 'width': '90%', 'height': '500px' }, 500);
    });

    let ul = $('ul.test');
    console.log(ul.find('.test').nextAll());

})

function setRandom(list) {
    var lastIndex = list.length - 1;
    var randValue = Math.round(lastIndex * Math.random());

    return randValue;
}