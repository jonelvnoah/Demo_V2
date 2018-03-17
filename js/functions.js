$(document).ready(function () {
    // Parallax background script, use the ".parallax" class.
    let parallaxSpeed = 0.15;

    function parallax(){
        // Parallax scrolling function
        $('.parallax').each(function(){
            let el = $(this);
            let yOffset = $(window).scrollTop(),
                parallaxOffset = yOffset * parallaxSpeed,
                parallaxOffset = +parallaxOffset.toFixed(2);
            if(el.hasClass('fs')){
                el.css('transform','translate3d(-50%,-'+(50-parallaxOffset*0.15)+'%,0)');
            } else {
                el.css('transform','translate3d(0,'+parallaxOffset+'px,0)');
            }
        });
    }

    // Initialize functions on scroll
    $(window).on('scroll', function(){
        window.requestAnimationFrame(parallax); // Parallax
    });

    let $animation_elements = $('.item, .fadein'); // The fly-in element, used for elements that fly-in the window after they're visible on screen

    function inView() { // Function when element is in view
        let window_height =   $(window).height();
        let window_top_position =   $(window).scrollTop();
        let window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            let $element = $(this);
            let element_height = $element.outerHeight();
            let element_top_position = $element.offset().top-100;
            let element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $(window).on('scroll resize', function(){
        window.requestAnimationFrame(inView);
        $('.anchor').each(function(){
            let id = '#'+$('.in-view').attr('id');
            if(id == $(this).attr('href')){
                $('.anchor').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    $(window).on('load', function(){
        window.requestAnimationFrame(inView);
    });

    $(window).on('pageshow', function(event) {
        if (event.originalEvent.persisted) {
            window.location.reload()
        }
    });

    // Contact Us function
    let btnContactUs = false;
    $(".btn-contact").on("click",function () {
        if(btnContactUs){
            $(".btn-close").trigger("click");
        }else{
            $(".contact-content").animate({height: "+=370"},300);
            $(".navbar").animate({top: "+=370"},300);
            $(".hero").animate({marginTop: "+= 370"},300);
            $(this).addClass("on");
            btnContactUs = true;
        }
    });

    // close button
    $(".btn-close").click(function () {
        $(".btn-contact").removeClass("on");
        $(".contact-content").animate({height:"-=370"},300);
        $(".navbar").animate({top: "-=370"},300);
        btnContactUs = false;
    });
});