(function ($) {
    window.onload = function () {
        $('.slick-dots').wrap('<div class="container" style="display: flex; justify-content: flex-end;"></div>');

    };


    $('.nav-item').on('click', function () {
        var ui = $(this),
            link = $('.nav-item');
        ui.addClass('active');

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
                        dots: false
                    }
                }]
        });
    });


    $('#form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mes: {
                required: true
            }

        }
    });

    $(document).ready(function () {
        $(function () {
            $('#form').on('submit', function (e) {
                if (!e.isDefaultPrevented()) {
                    var url = "mail.php",
                        formMes = $('.btn-form');

                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        beforeSend: function () {
                            formMes.next().text('Sending your letter...');
                        },
                        success: function (res) {
                            if (res == 0) {
                                formMes.next().text('Sent letter ');
                                formMes.next().addClass('success');
                                $('#form')[0].reset();
                                setTimeout(resetSpan, 5000);
                            } else {
                                formMes.next().text('Something was wrong. Try later');
                                formMes.next().addClass('error');
                                setTimeout(resetSpan, 5000);
                            }
                        },
                        error: function () {
                            formMes.next().text('Something was wrong. Try later');
                            formMes.next().addClass('error');
                            setTimeout(resetSpan, 5000);

                        }
                    });
                    return false;
                }
            })
        });
    });

    function resetSpan() {
        $('.btn-form').next().text(' ');
    }



})(jQuery);