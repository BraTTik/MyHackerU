var psp;

$(document).ready(function() {
    let $usersContainer = $('#usersInfo');
    let page = 1;
    let totalPage;
    let loadData = loadUsers($usersContainer, page);
    loadData();
    $(document).scroll(function() {
        let bodyScrollHeight = $('body').get(0).scrollHeight;
        let screenHeight = document.documentElement.clientHeight;
        if ((bodyScrollHeight - ($(this).scrollTop() + screenHeight) <= 0) && page <= totalPage) {
            loadData();
        }
    });
    $('#newUserBtn').on('click', function(){ $('#modalContainer').css('display', 'flex')});
    $('.addUserBtn').on('click', function(){ addNewUser() });
    $('.close').on('click', function(){ $('#modalContainer').hide()});

    function loadUsers(container, pageCnt) {
        let pageNum = pageCnt;
        return function() {
            $.ajax({
                url: `https://reqres.in/api/users?page=${pageNum}`,
                data: 'json',
                success: function(data) {
                    totalPage = data.total_pages;
                    if (pageNum <= data.total_pages) {
                        showUsers(data, container);
                        pageNum++;
                        page = pageNum;
                    }
                },
                error: function() {
                    console.log('Со Скотти что-то не так...');
                }
            })
        }
    }

    function showUsers(data, $container) {
        let usersArr = data.data || data;
        console.log(data);
        if(Array.isArray(usersArr)){
            usersArr.forEach(element => {
                makeHTMLUser(element, $container);
            });
        }else{
            makeHTMLUser(data, $container);
        }
        $('.userCard .delBtn').off();
        $('.userCard .delBtn').on('click', function() { deleteUser($(this)) });
        $('.userCard .showEmailBtn').on('click', function() {
            $(this).animate({
                left: '200%'
            }, function() {
                $(this).siblings().animate({
                    left: '0'
                });
            });
        });
    }

    function makeHTMLUser(element, $container){
        let userHTML = [
            '<div class="userCard">',
            '<span class = "delBtn">x</span>',
            `<span class = "userId">${element.id}</span>`,
            '<div class="photoBlock">',
            `<div class="photo" style = "background-image: url('${element.avatar}')"></div>`,
            '</div>',
            '<div class="userInfo">',
            '<div class="firstNameBlock">',
            '<div class="nameLabel">First name:</div>',
            `<div class="name">${element.first_name}</div>`,
            '</div>',
            '<div class="lastNameBlock">',
            '<div class="nameLabel">Last name:</div>',
            `<div class="name">${element.last_name}</div>`,
            '</div>',
            '<div class="emailBlock">',
            '<div class="showEmailBtn">Fetch e-mail</div>',
            `<div class="userEmail">${element.email}</div>`,
            '</div>',
            '</div>',
            '</div>'
        ].join('');
        $container.append(userHTML);
    }

    function deleteUser($obj) {
        let id = $($obj).parent().find('.userId').text();
        let firstName = $($obj).parent().find('.firstNameBlock .name').text();
        let lastName = $($obj).parent().find('.lastNameBlock .name').text();
        $.ajax({
            url: `https://reqres.in/api/users/${id}`,
            type: 'DELETE',
            success: function(data, status) {
                $($obj).parent().remove();
                console.log(data);
                alert(`user ${firstName} ${lastName} is removed`);
            },
            error: function() {
                console.log('Со Скотти что-то не так...');
            }
        })
    }

    function addNewUser(obj){
        let newUser = {}
        newUser.avatar = 'https://vignette.wikia.nocookie.net/spongebob/images/2/2a/SpongeBob_SquarePants%28copy%290.png'
        newUser.first_name = $('#inputFirstName').val();
        newUser.last_name = $('#inputLastName').val();
        newUser.email = $('#inputEmail').val();
        $('#inputFirstName').val('');
        $('#inputLastName').val('');
        $('#inputEmail').val('');

        $.ajax({
            url: 'https://reqres.in/api/users',
            type: 'POST',
            data: newUser,
            success: function(data){
                showUsers(data, $usersContainer);
                $('#modalContainer').hide();
            }
        })
    }
});