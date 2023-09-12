$(document).ready(function(){
    
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toogle');
    });

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toogle');
    })
});
