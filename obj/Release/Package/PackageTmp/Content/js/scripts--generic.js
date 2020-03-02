/*------------------------------------------------*/
// HELPER - check IE version
/*------------------------------------------------*/

function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

    else
        return 0; //It is not IE
}

/*------------------------------------------------*/
// GENERAL - Animate on Scroll init and settings
/*------------------------------------------------*/

AOS.init({
    disable: window.innerWidth < 1024,
    duration: 1000
});

/*------------------------------------------------*/
// GENERAL - Video embed responsiveness
/*------------------------------------------------*/

$(function () {

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='https://www.youtube.com']"),

        // The element that is fluid width
        $fluidEl = $(".sidebar");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function () {

        $(this)
          .data('aspectRatio', this.height / this.width)

          // and remove the hard coded width/height
          .removeAttr('height')
          .removeAttr('width');

    });

    // When the window is resized
    $(window).resize(function () {

        var newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function () {

            var $el = $(this);
            $el
              .width(newWidth)
              .height(newWidth * $el.data('aspectRatio'));

        });

        // Kick off one resize to fix all videos on page load
    }).resize();

});

/*------------------------------------------------*/
// GENERAL - Maps
/*------------------------------------------------*/

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 46.715419, lng: 8.468969 },
        zoom: 13,
        scrollwheel: false,
        mapTypeId: 'satellite'
    });
}

/*------------------------------------------------*/
// GENERAL - Scroll function
/*------------------------------------------------*/

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $('body').addClass("scrolled");
    }
    if (scroll < 150) {
        $('body').removeClass("scrolled");
    }
});

/*------------------------------------------------*/
// GENERAL - Modal open/close
/*------------------------------------------------*/

//$(document).on("click", ".modal-trigger", function (e) {

//    e.preventDefault();

//    if (!$("body").hasClass("modal-open")) {

//        $("body").removeClass("modal-hidden");
//        $("body").addClass("modal-open");
            

//        setTimeout(function () {
//            $("body").addClass("noverflow");
//        }, 500);

//    } else {

//        setTimeout(function () {
//            $("body").removeClass("modal-open noverflow");
//        }, 600);
//        setTimeout(function () {

//            $("body").addClass("modal-hidden");
//        }, 1000);
//    }
//});

/*------------------------------------------------*/
// GENERAL - form inputs check for content
/*------------------------------------------------*/
$('input, textarea').focus(function () {
    $(this).parent().addClass('input-focus');
});

$('input').blur(function () {
    tmpval = $(this).val();
    if (tmpval == '') {
        $(this).parent().addClass('empty');
        $(this).parent().removeClass('not-empty');
        $(this).parent().removeClass('input-focus');
    } else {
        $(this).parent().addClass('not-empty');
        $(this).parent().removeClass('empty');
    }
});

$('textarea').blur(function () {
    tmpvaltext = $(this).val().length;
    console.log(tmpvaltext);
    if (tmpvaltext == 0) {
        $(this).parent().addClass('empty');
        $(this).parent().removeClass('not-empty');
        $(this).parent().removeClass('input-focus');
    } else {
        $(this).parent().addClass('not-empty');
        $(this).parent().removeClass('empty');
    }
});

/*------------------------------------------------*/
// GENERAL - cookies bar accept
/*------------------------------------------------*/

$('.cookies-bar__accept').on("click", function (e) {
    e.preventDefault();
    $('.cookies-bar').addClass('cookies-bar--accepted');
});

/*------------------------------------------------*/
// NAV - Dropdowns
/*------------------------------------------------*/

$(function () {

    if ($(window).width() > 1025) {

        var dropdownLinks = $('.nav-links-dropdown-menu__list ul, .nav-links-dropdown-menu__list p');

        $('.nav-links__link--dropdown').on('mouseenter', function () {
            TweenMax.staggerTo(dropdownLinks, 0.5, { opacity: 1 }, 0.15);
        });

        $('.nav-links__link--dropdown').on('mouseleave', function () {
            dropdownLinks.css('opacity', 0);
        });

    }
});
