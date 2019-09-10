$(document).ready(function() {
    $('#AJAXGetbtn').click(function() {
        let idVal = $('.search input').val();
        let idValStr = (idVal === '') ? '' : `/${idVal}`;

        let methods = {};
        methods['complete'] = completeHandler;
        methods['beforeSend'] = beforeSendHandler;
        methods['success'] = successHandler;
        methods['error'] = errorHandler;

        AJAXGet(idValStr, methods);

        function successHandler(data, textStatus) {
            if (Array.isArray(data)) {
                dataHandler(data);
            } else {
                singleDataHandler(data);
            }
        }

        function errorHandler() {
            console.log('Всё плохо');
        }

        function completeHandler() {
            console.log('completeHandler is working!');
        }

        function beforeSendHandler() {
            console.log('beforeSendHandler is working!');
        }
    })

    $('#AJAXPostbtn').click(function() {
        let newData = {};
        newData['title'] = $('#newPost input').val();
        newData['body'] = $('#newPost textarea').val();
        newData['userId'] = 1;

        $('#newPost input').val('');
        $('#newPost textarea').val('');

        $.ajax({
            type: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            data: JSON.stringify(newData),
            success: function(data, textStatus) {
                console.log(data);
                //dataHandler(data);
            },
            error: function() {
                console.log('Всё плохо');
            }
        });
    });
});

function singleDataHandler(data) {
    let newPostHtml = [
        '<div>',
        `<h2>${data.title}</h2>`,
        `<p>${data.body}</p>`,
        '<div class = ".delBtn">x</div>',
        '</div>'
    ].join('');
    $('.container').html(newPostHtml);
}

function dataHandler(data) {
    $('.container').html('');

    data.forEach(function(element, index) {
        let newPostHtml = [
            '<div>',
            `<h2>${element.title}</h2>`,
            `<p>${element.body}</p>`,
            '</div>'
        ].join('');
        $('.container').append(newPostHtml);

    });
}

function AJAXGet(idValStr, methods) {

    let AJAXObj = {};
    AJAXObj['url'] = `https://jsonplaceholder.typicode.com/posts/${idValStr}`;
    AJAXObj['dataType'] = 'json';

    for (let key in methods) {
        AJAXObj[key] = methods[key];
    }
    $.ajax(AJAXObj);

}