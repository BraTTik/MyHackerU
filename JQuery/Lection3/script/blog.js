$(document).ready(function() {
    var p = $('.blog');

    p.find('.addBtn').on('click', function() {
        var data = getContent();
        p.find('.posts').append(createPost(data));
        var allPosts = p.find('.posts .post');
        var allPostsLength = allPosts.length;
        var curPost = allPosts.eq(allPostsLength - 1);

        curPost.find('.close').on('click', function() {
            $(this).parent('.post').remove();
        });
        curPost.find('.editBtn').on('click', function() {
            editHandler($(this).parent('.post'));
        });


    });

    function editHandler(obj) {
        $('#modalContainer').css('display', 'flex');
        let previousValues = {};
        previousValues['title'] = obj.find('h2').text();
        previousValues['content'] = obj.find('p').text();
        let modalHTML = [`<p>Заголовок</p>`,
            `<input type="text" value = "${previousValues['title']}" >`,
            `<p>Контент</p>`,
            `<textarea>${previousValues['content']}</textarea>`,
            `<div class="saveBtn">Сохранить</div>`
        ].join('');
        $('#modal').html(modalHTML);
        $('#modal .saveBtn').on('click', function() {
            saveHandler(obj);
        });
    }

    function saveHandler(obj) {
        obj.find('h2').text($('#modal input').val());
        obj.find('p').text($('#modal textarea').val());
        $('#modal').html('');
        $('#modalContainer').hide();
    }

    function getContent() {
        var title = p.find('.title').val();
        var content = p.find('.content').val();
        p.find('.title').val('');
        p.find('.content').val('');
        return {
            'title': title,
            'content': content
        };
    }

    function createPost(data) {
        var newPost = [`<div class = "post">`,
            '<span class = "close">X</span>',
            `<h2>${data.title}</h2>`,
            `<p>${data.content}</p>`,
            `<div class = "editBtn">Редактировать</div>`,
            '</div>'
        ].join('');
        return newPost;

    }
});