$(document).ready(function() {
    let isMenuOpen = false;
    $('#pageNavMenu').on('click', function() { menuOpenerHandler($(this)) });
    $('#pageNavMenu li').on('click', function() { scrollHandler($(this)) })

    function menuOpenerHandler($obj) {
        let heightElem = $obj.height();
        let menuButtons = $obj.find('li');
        if (!isMenuOpen) {
            menuButtons.toggleClass('open')
            for (let i = 0; i < menuButtons.length; i++) {
                menuButtons.eq(i).animate({
                    top: (heightElem + 10) * (i + 1) + 'px'
                });
            }
            isMenuOpen = true;
        } else {
            menuButtons.toggleClass('open')
            for (let i = 0; i < menuButtons.length; i++) {
                menuButtons.eq(i).animate({
                    top: '0'
                });
            }
            isMenuOpen = false;
        }
    }

    function scrollHandler($obj) {
        $('html').animate({
            scrollTop: $('.page').eq($($obj).index()).offset().top,
        });
        $obj.siblings().removeClass('active');
        $obj.addClass('active');
    }

    let pages = $('.page');
    let pageOffsets = [];
    let pageHeight = $('.page').eq(0).height();
    for (let i = 0; i < pages.length; i++) {
        pageOffsets.push(parseInt($('.page').eq(i).offset().top) - pageHeight / 2);
    }
    pageOffsets.push($('.page').eq(pages.length - 1).offset().top);
    console.log(pageOffsets);

    $(document).scroll(function() {
        let scrollPosition = $(this).scrollTop();
        let buttons = $('#pageNavMenu li')
        pageOffsets.forEach((element, index, arr) => {
            if (scrollPosition > element && scrollPosition < arr[index + 1]) {
                buttons.eq(index).addClass('active');
                buttons.eq(index).siblings().removeClass('active');
            }
        });

    })
});