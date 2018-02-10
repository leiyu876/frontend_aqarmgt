
   var map;
    map = new GMaps({
        el: '#map',
        lat: 26.290682,
        lng: 50.177106,
        scrollwheel: false
    });

    map.addMarker({
        lat: 26.290682,
        lng: 50.177106,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>Dammam, Eastern Province, Saudi Arabia<a href="#"  target="_blank"> AQARMGT</a></p>'
        }
    });    