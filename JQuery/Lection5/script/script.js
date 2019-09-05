$(document).ready(function() {
    $('#AJAXGetbtn').click(function() {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/',
            dataType: 'json',
            success: function(data, textStatus) {
                console.log(data);
                dataHandler(data);
            },
            error: function() {
                console.log('Всё плохо');
            }
        });
    })

    $('#AJAXPostbtn').click(function() {
        let newData = {};
        newData['title'] = $('#newPost input').val();
        newData['body'] = $('#newPost textarea').val();
        $('#newPost input').val('');
        $('#newPost textarea').val('');

        $.ajax({
            type: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            data: JSON.stringify({
                title: newData.title,
                body: newData.body,
                userId: 1
            }),
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

function dataHandler(data) {
    /*     $(data).each(function(index) {
            let newPostHtml = [
                '<div>',
                `<h2>${data[index].title}</h2>`,
                `<p>${data[index].body}</p>`,
                '</div>'
            ].join('');

            $('.container').append(newPostHtml);
        })
     */
    for (let i = 0; i < data.length; i++) {
        let newPostHtml = [
            '<div>',
            `<h2>${data[i].title}</h2>`,
            `<p>${data[i].body}</p>`,
            '</div>'
        ].join('');
        $('.container').append(newPostHtml);
    }
}