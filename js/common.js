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


    function initMap() {
        var styledMapType = new google.maps.StyledMapType(
            [
                {elementType: 'geometry', stylers: [{color: '#d4d6d2'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
                {
                    featureType: 'administrative',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#d4d6d2'}]
                },
                {
                    featureType: 'administrative.neighborhood',
                    elementType: 'label.text',
                    stylers: [{visibility: 'on'}]
                },
                {
                    featureType: 'administrative.province',
                    elementType: 'label.text',
                    stylers: [{visibility: 'on'}]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'geometry.stroke',
                    stylers: [
                        {
                            color: '#d4d6d2',
                            visibility: 'on'
                        }
                    ]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#ae9e90'}]
                },
                {
                    featureType: 'landscape',
                    elementType: 'label.text',
                    stylers: [{visibility: 'on'}]
                },
                {
                    featureType: 'landscape.natural',
                    elementType: 'geometry',
                    stylers: [{color: '#d4d6d2'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{color: '#d4d6d2'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text',
                    stylers: [{visibility: 'on'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#93817c'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.icon',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry.fill',
                    stylers: [{color: '#a5b076'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#447530'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#f5f1e6'}]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'geometry',
                    stylers: [{color: '#fdfcf8'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#f8c967'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#e9bc62'}]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry',
                    stylers: [{color: '#e98d58'}]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#db8555'}]
                },
                {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#806b63'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{color: '#dfd2ae'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#8f7d77'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#ebe3cd'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{color: '#dfd2ae'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry.fill',
                    stylers: [{color: '#b9d3c2'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#92998d'}]
                }
            ],
            {name: 'Styled Map'});

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 23.03, lng: 72.5669967},
            zoom: 12
        });
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

    }

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