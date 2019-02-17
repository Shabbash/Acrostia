$(document).ready(function() {

    // Smooth Scroll To Elements
    $('.navbar li a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);

    });

    // Add Active Class On Navbar Link and remove from siblings

    $('.navbar li a').click(function() {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function() {

        //Sync Navbar Links With Sections

      /*  $('.block').each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                //console.log($(this).attr('id'));
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockID + '"]').addClass('active');
            }
        });*/

                //Sync Navbar Links With Sections

        $('.block').each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                //console.log($(this).attr('id'));
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockID + '"]').addClass('active');
            }
        });

        // Scroll-to-top button

        var scrollToTop = $('.scroll-to-top');
        if ($(window).scrollTop() > 1100) {
            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(400);
            }
        } else {
            scrollToTop.fadeOut(400);
        }
    });

    // Start  Work -- portfolio

    $('.work .portfolio ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') === 'all') {
            $('.gallery .col-lg-3').delay(300).fadeIn();
        } else {
            $('.gallery .col-lg-3').fadeOut();
            $($(this).data('class')).delay(400).fadeIn();

        }
    });
    // End  Work -- portfolio

    /////// Nice Scroll /////////

    $("html").niceScroll();

    ///////// SCROLL TOP BUTTUN ///////

    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        //  console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }

    });

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

});