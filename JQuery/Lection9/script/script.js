$(document).ready(function() {
    $('li').click(function() {
        handler($(this));
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        let elemArr = $(this).siblings().toArray();
        elemArr.forEach(function(elem) {
            $(elem).css('transform', `scale(${Math.random() + 0.5}) rotate(${Math.random()*180 + 0.5}deg)`)
        });
    });

    function handler(obj) {
        if (obj.hasClass('active')) {
            console.log('удыу');
        } else {
            console.log('Тяжёлый процессинг...');
        }
    }
});