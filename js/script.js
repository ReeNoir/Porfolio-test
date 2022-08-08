$("img.modal__close-img").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

$(function() {

    /* Filter */
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let category =  $(this).data('filter');

        if (category == 'all')
        {
            $("[data-categor]").removeClass('display_none');
        }
        else
        {
            $("[data-categor]").each(function() {

                let workCat = $(this).data('categor');
        
                if(workCat != category)
                {
                    $(this).addClass('display_none');
                }
                else
                {
                    $(this).removeClass('display_none');
                }
        
            });
        }

    });


    /* Modal */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(".modal").addClass('display_none');
        $(modalId).removeClass('display_none');
        $('body').addClass('no-scroll');

        $('#works__slider').slick('setPosition');
    });

    modalClose.on("click", function() {
        $(".modal").addClass('display_none');
        $('body').removeClass('no-scroll');
    });

    $(".modal").on("click", function() {
        $(this).addClass('display_none');
        $('body').removeClass('no-scroll');
    });

    $(".modal__inner").on("click", function(event) {
        event.stopPropagation();
    });




    /* Slider: https://kenwheeler.github.io/slick/ */
    $('#works__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.works__prev').on('click', function(event) {
        event.preventDefault();

        $('#works__slider').slick('slickPrev');
    });

    $('.works__next').on('click', function(event) {
        event.preventDefault();

        $('#works__slider').slick('slickNext');
    });

});