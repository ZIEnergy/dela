var mapContainer = document.getElementById('map');
var myOptions = {
    center: new google.maps.LatLng(54.9981168,82.9066994),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
};
var map = new google.maps.Map(mapContainer, myOptions);