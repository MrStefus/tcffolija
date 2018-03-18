jQuery(document).ready(function($){

    // Scrolling
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });


    // Scroll on top page
    $('#top-button').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });


    // Scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    });


});
