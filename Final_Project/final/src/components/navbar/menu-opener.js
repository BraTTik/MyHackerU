import $ from 'jquery';

export default function (){
    $('#nav-menu').on('show.bs.collapse', function(){
        $('#user-mobile').addClass('menu-opened');
    });
    $('.navbar-collapse').on('hidden.bs.collapse', function(){
        $('#user-mobile').removeClass('menu-opened');
    })
};