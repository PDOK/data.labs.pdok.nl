var scrollPage = {
    init: function () {
        var $scrollclick = $(".js-scroll-click");

        if ($scrollclick.length > 0 ) {
            this.onClick($scrollclick);
        }
    },
    onClick: function ($scrollclick) {
        $scrollclick.on('click', function () {
            var target = $(this).data('target'),
                $scrollElement = $('html, body');

            $scrollElement.animate({scrollTop: $(target).position().top}, 500);
        });
    }
};

var toggleElement = {
    init: function () {
        var $toggle = $('.js-toggle');

        $toggle.on('click', function(e) {
            var $target = $(this).data('target');
            e.preventDefault();
            $($target).toggleClass('is-open');
        })
    }
};

/*
var matchHeight = {
    init: function() {
        var $el = $('.js-match-height');

        if ($(window).width() >= 768) {

        }
        $el.matchHeight();
    }
};
*/

function is_touch_device() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

$(document).ready(function() {
    scrollPage.init();
    toggleElement.init();
    // matchHeight.init();

    if (is_touch_device()) {
        $('html').addClass('touch-device');
    }

    $('.js-dataset-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.dataset').toggleClass('hover');
    });
});