$('.scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    $('#menu-responsive ul').slideToggle("slow");
    return false;
});