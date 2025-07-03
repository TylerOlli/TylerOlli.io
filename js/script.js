/*global $, window, document, setTimeout, WOW, jQuery*/
$(document).ready(function () {

    'use strict';

    // Defining used variables
    var logo                = $('a.brand'),
        toggleMenuButton    = $('button#toggleMenu'),
        navigationMenu      = $('.navigation-container'),
        scrollTopButton     = $('#scrollTop'),
        navigationLiks      = $('ul#navMenu > li a'),
        wHeight             = $(window).height() - 600,
        skill               = $('.skill'),
        filterButton        = $(".filter-button"),
        filteredItem        = $('.filter'),
        testimonialSlider   = $("#testimonial-slider"),
        revealed            = $('.wow'),
        triangleIframe      = $('.triangle-container iframe'),
        triangleLoading     = $('.triangle-loading');

    // Handle triangle header iframe loading
    function initTriangleHeader() {
        // Fallback if iframe fails to load after 3 seconds
        setTimeout(function() {
            if (triangleIframe.css('opacity') === '0') {
                triangleIframe.css('opacity', '1');
                triangleLoading.hide();
            }
        }, 3000);
    }
    
    // Initialize triangle header
    initTriangleHeader();

    // Fade in menu button after page loads (mobile only)
    if (window.innerWidth <= 768) {
        setTimeout(function() {
            toggleMenuButton.css('opacity', '1');
        }, 300);
    }

    //Show Color Switcher When Click the Gear Button
    $('.theme-option .open-theme').on('click', function(){
        $('.theme-option .colors-theme').toggle();
    });
    //Change Theme Colors
    $('.theme-option ul li span').on('click', function(){
        $('link[href*="color"]').attr('href', $(this).attr('data-value'));
    });


    //initialize Slick slider (testimonial slider)
    testimonialSlider.slick({
        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"> << </button>',
        nextArrow: '<button type="button" class="slick-next"> >> </button>',
        arrows: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
				breakpoint: 768,
				settings: {
					arrows: true,
                    slidesToShow: 1
				}  
            }
        ]
    });


    filterButton.on('click', function () {
        var value = $(this).attr('data-filter');
        
        if (value === "all") {
            filteredItem.show('1000');
        } else {
            filteredItem.not('.' + value).hide('3000');
            filteredItem.filter('.' + value).show('3000');  
        }
    });
    
    if (filterButton.removeClass("active")) {
        $(this).removeClass("active");
    }
        $(this).addClass("active");



    $(window).on('scroll', function () {
        var wScroll = $(window).scrollTop();

        // animating progress values on scroll
        if (wScroll > (skill.offset().top - 400)) {
            skill.each(function (i) {
                setTimeout(function () {
                    skill.eq(i).find('.progress-bar').attr('style', 'width: ' + skill.eq(i).find('li.strength').text() + '');
                }, 200 + (200 * i));
            });
        }

        // changing scroll to top button background color according to section background color
        if (wScroll >= $('.resume').offset().top - wHeight && wScroll < $('.skills').offset().top - wHeight) {
            scrollTopButton.removeClass('darken');
        } else if (wScroll >= $('.features').offset().top - wHeight && wScroll < $('.portfolio').offset().top - wHeight) {
            scrollTopButton.removeClass('darken');
        } else if (wScroll >= $('.contact').offset().top - wHeight && wScroll < $('footer').offset().top - wHeight) {
            scrollTopButton.removeClass('draken');
        } else {
            scrollTopButton.addClass('darken');
        }

        // show/hide scroll to top button
        if (wScroll >= 1000) {
            scrollTopButton.fadeIn();
        } else {
            scrollTopButton.fadeOut();
        }
    });

    // showing the complete width of scroll to top button on mouse enter
    toggleMenuButton.add(scrollTopButton).on('mouseenter', function () {
        scrollTopButton.addClass('is-visible')
                       .css('left', ($(window).outerWidth() - logo.offset().left - 113) + 'px');
    });
    // hiding the complete width of scroll to top button on mouse leave
    toggleMenuButton.add(scrollTopButton).on('mouseleave', function () {
        scrollTopButton.removeClass('is-visible')
                       .css('left', ($(window).outerWidth() - logo.offset().left - 60) + 'px');
    });
    // redirecting to the top of the page when clicking on the scroll to top button
    scrollTopButton.on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });

    // Showing navigation menu on button click
    toggleMenuButton.add(navigationLiks).on('click', function () {
        toggleMenuButton.toggleClass('active');

        if (toggleMenuButton.hasClass('active')) {
            navigationMenu.addClass('is-visible');
        } else {
            navigationMenu.removeClass('is-visible');
        }
    });

    // positioning the scroll to top button and menu button properly
    $(window).on('resize', function () {
        toggleMenuButton.add(scrollTopButton).css('left', ($(window).outerWidth() - logo.offset().left - 60) + 'px');
        
        // Show/hide menu button based on screen size
        if (window.innerWidth <= 768) {
            toggleMenuButton.show().css('opacity', '1');
        } else {
            toggleMenuButton.hide().css('opacity', '0');
        }
    });
    toggleMenuButton.add(scrollTopButton).css('left', ($(window).outerWidth() - logo.offset().left - 60) + 'px');


    // Initialization of scrollSpeed.js
    

    // Initialization if wow.js
    var wow = new WOW({
        offset: 200
    });
    wow.init();
    // set transition duration for reveal animation
    revealed.attr('data-wow-duration', '0.5s');

});
