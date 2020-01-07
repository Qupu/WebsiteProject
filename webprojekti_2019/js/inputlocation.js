function distance() {
    let n1 = parseFloat(document.getElementsByTagName('input')[0].value);
    let n2 = parseFloat(document.getElementsByTagName('input')[1].value);

    var marker3 = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([n2, n1])
        ),
    });

    var vectorSource3 = new ol.source.Vector({
        features: [marker3]
    });

    var markerVectorLayer3 = new ol.layer.Vector({
        source: vectorSource3,
    });
    map.addLayer(markerVectorLayer3);

    alert(measure(n1,n2,25,-71)+'km from the truth.')
}