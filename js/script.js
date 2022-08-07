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

});