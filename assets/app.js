$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();


// Fixed header
    chkScroll(scrollOfset);

    $(window).on("scroll", function() {

        scrollOfset =$(this).scrollTop();

        chkScroll(scrollOfset);
        
    });

    function chkScroll(scrollOfset) {
        
        if( scrollOfset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        };
    };

// Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data("scroll"),
            blockOfset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOfset - 90,
        }, 500)
    });

// Menu nav toggle 
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

// Collapse

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            elementId = $(this).data("collapse");
        
        $(elementId).toggleClass("active");

        console.log(elementId);
    });

    $("[data-arrow]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            arrowId = $(this).data("arrow");

        $(arrowId).toggleClass("active");

        console.log(arrowId);
    });

// Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })

});