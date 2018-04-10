$(document).ready(function () {
    window.onload = function () {
        $('.loading').hide();
    };


    // Grid functions
    let $grid = $('.grid').imagesLoaded(function () {
        $grid.masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            horizontalOrder: true,
            columnWidth: '.grid-sizer'
        })
    });

    $('.filter-trigger').on('click',function (e) {
        e.preventDefault();
        $('body').addClass('filters-active');
        $('html,body').animate({
            scrollTop: $('.grid').offset().top+'px'
        },500);
        $('.filter-container').fadeIn();
    });

    $('.filter-container').on('click', function(e){
        e.preventDefault();
        $('body').removeClass('filters-active');
        $('.filter-container').fadeOut();
    });

    $('.filter').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        let selected = $(this).attr('data-filter');
        $('.filter.active').removeClass('active');
        $(this).addClass('active');
        $('.grid').find('.case-box:not(.'+selected+')').css({
            '-webkit-transition' : 'all .25s',
            'transition' : 'all .25s',
            '-webkit-transform' : 'scale(0)',
            'transform' : 'scale(0)',
            '-webkit-opacity' : '0',
            'opacity' : '0',
        });
        setTimeout(function(){
            $('.grid').find('.case-box:not(.'+selected+')').hide(0);
            $('.grid').find('.'+selected).show(0).css({
                '-webkit-transform' : 'scale(1)',
                '-webkit-opacity' : '1',
                'transform' : 'scale(1)',
                'opacity' : '1'
            });
            $grid.masonry('layout');
        }, 250);
    });

    // Contact Us function
    let btnContactUs = false;
    $(".btn-contact").on("click", function () {
        if (btnContactUs) {
            $(".btn-close").trigger("click");
        } else {
            $(".contact-content").animate({height: "+=370"}, 300);
            $(".navbar").animate({top: "+=370"}, 300);
            $('.container-fluid').animate({marginTop: "+=370"},300);
            $(this).addClass("on");
            btnContactUs = true;
        }
    });

    // close button
    $(".btn-close").click(function () {
        $(".btn-contact").removeClass("on");
        $(".contact-content").animate({height: "-=370"}, 300);
        $(".navbar").animate({top: "-=370"}, 300,function () {
            $("navbar").css({top: ""});
        });
        $('.container-fluid').animate({marginTop: "-=370"},300);
        btnContactUs = false;
    });

    $(window).on('scroll', function () {
        let scrollPos = $('#mainNav').offset().top;
        let scrollPosMobile = $('#navbar-mobile').offset().top;
        if (scrollPos > 100) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
        if(scrollPosMobile > 50){
            $('.navbar-mobile').addClass('fixed-mobile');
        }else{
            $('.navbar-mobile').removeClass('fixed-mobile');
        }
    });

    //navigation mobile
    $('.btn-bar').on('click', function () {
        $('.btn-bar').addClass('on');
        $('.nav-mobile').slideToggle(600);
        $('.nav-mobile').css('opacity', '1');
    });

    $('.btn-close-mobile').on('click', function () {
        $('.nav-mobile').slideToggle(600);
        $('.nav-mobile').css('opacity', '0');
        $('.btn-bar').removeClass('on');
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-service', {
        duration: 600,
        scale: 0.2,
        distance: '0px'
    }, 600);
    sr.reveal('.sr-hero', {
        duration: 600,
        scale: 1,
        distance: '80px',
        reset: true
    });
    sr.reveal('.sr-heroImg', {
        duration: 600,
        delay: 300,
        scale: 0.6,
        distance: '0px',
        reset: true
    });
    sr.reveal('.sr-case', {
        duration: 600,
        scale: 0.2,
        distance: '0px'
    });
    sr.reveal('.sr-team', {
        duration: 600,
        scale: 0.2,
        distance: '0px'
    }, 600);

    sr.reveal('.sr-op', {
        duration: 1000,
        scale: 1,
        opacity: 0.3,
        distance: '0px',
        reset: true
    });
});