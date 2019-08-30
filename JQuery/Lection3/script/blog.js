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

    });



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