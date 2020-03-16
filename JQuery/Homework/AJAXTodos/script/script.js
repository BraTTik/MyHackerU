$(document).ready(function() {
    let methods = {};
    methods['success'] = successHandler;
    //methods['error'] = errorHandler;
    methods['beforeSend'] = beforeSendHandler;
    methods['complete'] = completeHandler;

    $('.searchBlock .getTodosBtn').on('click', function() {
        let idVal = ($('.searchBlock input').val() !== '') ? $('.searchBlock input').val() : '';
        $('.searchBlock input').val('');

        AJAXget(idVal, methods);
    });

    function dataHandler(data, textStatus) {
        $('.listOfTodos').html('');

        data.forEach((elem, index) => {
            let itemHTML = makeItemHTML(elem);
            $('.listOfTodos').append(itemHTML);
            let currentElem = $('.listOfTodos').children().last();
            if (elem.completed) {
                currentElem.css({
                    'border': '1px solid green',
                    'color': 'green'
                });
            }
        });
    }

    function singleDataHandler(data, textStatus) {
        let itemHTML = makeItemHTML(data);
        $('.listOfTodos').html(itemHTML);
        let currentElem = $('.listOfTodos').children().last();
        if (data.completed) {
            currentElem.css({
                'border-color': 'green',
                'color': 'green'
            })
        }
    }

    function makeItemHTML(elem) {
        let completed = elem.completed ? 'DONE' : 'NOT DONE';
        let itemHTML = ['<div class="todoItem">',
            `<div>№${elem.id}</div>`,
            `<h3>${elem.title}</h3>`,
            `<p>${completed}</p>`,
            '</div>'
        ].join('');

        return itemHTML;
    }

    function successHandler(data, textStatus) {
        if (Array.isArray(data)) {
            dataHandler(data, textStatus);
        } else {
            singleDataHandler(data, textStatus);
        }
    }

    function errorHandler() {
        $('#modalWindow').css('display', 'flex');
        let modalHTML = [
            '<div class="message">',
            '<p>Что-то пошло не так</p>',
            '<div class="closeBtn">Закрыть</div>',
            '</div>'
        ].join('');
        $('#modalWindow').append(modalHTML);

        $('#modalWindow .message').stop(true).animate({ 'height': '155px' }, 500);

        $('#modalWindow .closeBtn').click(function() {
            $(this).parent().stop(true).animate({ 'height': '0' }, 500, function() {
                $('#modalWindow').html('');
                $('#modalWindow').hide();
            })
        });
    }

    function beforeSendHandler(textStatus) {
        $('#modalWindow').css('display', 'flex');
        let modalHTML = [
            '<div class="message">',
            '<p>Загрузка</p>',
            '</div>'
        ].join('');
        $('#modalWindow').append(modalHTML);
        $('#modalWindow .message').stop(true).animate({ 'height': '155px' }, 500);

    }

    function completeHandler(status) {
        $('#modalWindow .message').stop(true).animate({ 'height': '0' }, 500, function() {
            $('#modalWindow').html('');
            $('#modalWindow').hide();
            if (status.statusText == 'error') {
                errorHandler();
            }
        });
    }

    function AJAXget(idVal, methods) {

        let AJAXObj = {};
        AJAXObj['url'] = `https://jsonplaceholder.typicode.com/todos/${idVal}`;
        AJAXObj['dataType'] = 'json';
        for (let key in methods) {
            AJAXObj[key] = methods[key];
        }

        $.ajax(AJAXObj);
    }
});