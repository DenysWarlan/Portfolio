window.onload = function() {
    $('.slick-dots').wrap('<div class="container" style="display: flex; justify-content: flex-end;"></div>');

};


$('.nav-item').on('click', function () {
    var ui = $(this),
        link = $('.nav-item');
    ui.toggleClass('active');

    if (ui.hasClass('active')) {
        link.not(ui).removeClass('active');
    }
});
$('#banner-title').mouseenter(function () {
    $('#btn-more').addClass('hover');
});
$('#banner-title').mouseleave(function () {
    $('#btn-more').removeClass('hover');
});

$(document).ready(function () {

});


$(document).ready(function () {
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false
                }
            }]
    });
})
;
