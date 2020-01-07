var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([24.84492, 60.25877]),
        zoom: 14
    })
});

var marker = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([24.84492, 60.25877])
    ),
});

var vectorSource = new ol.source.Vector({
    features: [marker]
});

var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});


map.addLayer(markerVectorLayer);

var marker11 = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-71, 25])
    ),
});

var vectorSource11 = new ol.source.Vector({
    features: [marker11]
});

var markerVectorLayer11 = new ol.layer.Vector({
    source: vectorSource11,
});


map.addLayer(markerVectorLayer11);