
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {

    var marker2 = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude])
        ),
    });

    var vectorSource2 = new ol.source.Vector({
        features: [marker2]
    });

    var markerVectorLayer2 = new ol.layer.Vector({
        source: vectorSource2,
    });
    map.addLayer(markerVectorLayer2);


    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude +
        ' <br>Distance to the truth: ' + measure(position.coords.latitude,position.coords.longitude,24,-71) + 'km';
}

function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d.toFixed(0);
}