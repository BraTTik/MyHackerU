$(document).ready(function() {
    let $form = $('#todoList .form');

    $form.find('.addBtn').on('click', function() { makeTask($form) });

    function makeTask(form) {
        let tasksBlock = $('#todoList .tasks');
        let data = {};
        data['title'] = form.find('input').val();
        data['description'] = form.find('textarea').val().split(/\r?\n+/);
        form.find('input').val('');
        form.find('textarea').val('');
        console.log(data.description);

        let ulHTML = [
            '<ul>',
            addLi(data.description),
            '</ul>'
        ].join('');

        let taskHTML = [
            '<div class="task">',
            '<span class="close">&#10008;</span>',
            '<span class="done">&#10004;</span>',
            '<div class="task-title">',
            `<h3>${data.title}</h3>`,
            '</div>',
            '<div class="task-description">',
            ulHTML,
            '</div>',
            '</div>'
        ].join('');

        tasksBlock.append(taskHTML);
        tasksBlock.find('.close').on('click', function() {
            $(this).parent('.task').remove();
        });
        tasksBlock.find('.done').on('click', function() {
            $(this).parent('.task').css('background-color', '#98fd8f');
        });
        tasksBlock.find('ul').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through');
        });

        function addLi(data) {
            let str = '';
            for (let i = 0; i < data.length; i++) {
                str += `<li>${data[i]}</li>`
            }
            return str;
        }
    }
});