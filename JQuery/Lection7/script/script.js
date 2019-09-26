var data = []

data.push({
    title: '1Lorem ipsum dolor',
    body: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic praesentium totam odio error quis, accusantium vero quisquam facere sequi corporis reprehenderit unde deserunt quod non delectus commodi nulla nihil.'
});
data.push({
    title: '2Lorem ipsum dolor',
    body: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic praesentium totam odio error quis, accusantium vero quisquam facere sequi corporis reprehenderit unde deserunt quod non delectus commodi nulla nihil.'
});
data.push({
    title: '3Lorem ipsum dolor',
    body: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic praesentium totam odio error quis, accusantium vero quisquam facere sequi corporis reprehenderit unde deserunt quod non delectus commodi nulla nihil.'
});
data.push({
    title: '4Lorem ipsum dolor',
    body: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic praesentium totam odio error quis, accusantium vero quisquam facere sequi corporis reprehenderit unde deserunt quod non delectus commodi nulla nihil.'
});
data.push({
    title: '5Lorem ipsum dolor',
    body: '5Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic praesentium totam odio error quis, accusantium vero quisquam facere sequi corporis reprehenderit unde deserunt quod non delectus commodi nulla nihil.'
});


$(document).ready(function() {
    loadData();

    var listState = false;

    var list = $('#listBlock li');
    var listHeightArr = [];

    for (let i = 0; i < list.length; i++) {
        listHeightArr.push(list.eq(i).find('p').height());
    }

    list.find('p').css('height', 0);

    list.on('click', function() { animateHandler(this) });

    function animateHandler(obj) {
        if (!listState) {
            listState = true;
            var objHeight = $(obj).find('p').height();

            list.find('p').animate({
                height: 0
            });

            if (!objHeight) {
                let heightElement = listHeightArr[$(obj).index()];
                $(obj).find('p').animate({
                    height: `${heightElement}px`
                }, function() {
                    listState = false;
                });
            } else {
                listState = false;
            }
        }
    }
    var isOpenMenu = false;

    $('#menu .menuOpener').on('click', function() { menuHandler(this) });


    function menuHandler(obj) {
        let buttonList = $("#menu").find('.button').not('.menuOpener');
        let buttonHeight = $(obj).height();
        if (!isOpenMenu) {
            for (let i = 0; i < buttonList.length; i++) {
                buttonList.eq(i).animate({
                    top: (-(buttonHeight + 10) * (buttonList.length - i)) + 'px',
                    opacity: 0.5
                }, 500, function() { isOpenMenu = true; })
            }
        } else {
            for (let i = 0; i < buttonList.length; i++) {
                buttonList.eq(i).animate({
                    top: 0,
                    opacity: 0
                }, 500, function() { isOpenMenu = false; })
            }
        }

    }

    let buttons = $("#menu").find('.button').not('.menuOpener');

    buttons.on('click', function() {
        scrollHandler(this);
    });

    function scrollHandler(obj) {
        $('html').animate({
            scrollTop: $('.page').eq($(obj).index() - 1).offset().top,
        });
        buttons.css({
            opacity: 0.45,
            border: 'none'
        });
        $(obj).css({
            opacity: 1,
            border: '2px solid black'
        });
    }
});

function loadData() {
    var container = $('#listBlock ul');

    data.forEach(function(element) {
        var elem = $('<li></li>');
        var pElem = $('<p></p>').text(element.body);
        var h3Elem = $('<h3></h3>').text(element.title);

        elem.append(h3Elem);
        elem.append(pElem);
        container.append(elem);

    })

}