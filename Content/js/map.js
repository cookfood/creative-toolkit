var map;
var initMap;

var map;
initMap = function () {

    var mapLat = parseFloat($("#Latitude").val());
    var mapLong = parseFloat($("#Longitude").val());

    if (mapLat != 0 && mapLong != 0) {
        var customMapType = new google.maps.StyledMapType([
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#413c3c"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e4ded7"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#d2c8b6"
            },
            {
                "weight": "0.80"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "1.00"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            },
            {
                "weight": "0.95"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b8d9e6"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dce7eb"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "lightness": "-15"
            }
        ]
    }
        ]);
        var customMapTypeId = 'custom_style';
        var mapClass = $('.map');
        var mapOptions = {
            center: { lat: mapLat, lng: mapLong },
            zoom: 12,
            scrollwheel: false,
            mapTypeControl: false
        };
        map = new google.maps.Map(mapClass[0], mapOptions);
        map.mapTypes.set(customMapTypeId, customMapType);
        map.setMapTypeId(customMapTypeId);

        var image = $('.map').data('map-pin');
        var marker = new google.maps.Marker({
            position: { lat: mapLat, lng: mapLong },
            map: map,
            icon: image
        });
    }
}

