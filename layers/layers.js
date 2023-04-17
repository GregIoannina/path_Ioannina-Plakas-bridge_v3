ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2100").setExtent([233134.784101, 4382286.663988, 238040.009686, 4386301.911935]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlehybrid_1 = new ol.layer.Tile({
            'title': 'google hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2100'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Υφιστάμενο Μονοπάτι'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2100'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Χωματόδρομος'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2100'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Άσφαλτος-Πλακόστρωτο'
            });
var format_19451960_5 = new ol.format.GeoJSON();
var features_19451960_5 = format_19451960_5.readFeatures(json_19451960_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2100'});
var jsonSource_19451960_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19451960_5.addFeatures(features_19451960_5);
var lyr_19451960_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_19451960_5, 
                style: style_19451960_5,
                interactive: true,
                title: '<img src="styles/legend/19451960_5.png" /> Παλαιό Μονοπάτι 1945-1960'
            });

lyr_OSMStandard_0.setVisible(true);lyr_googlehybrid_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_19451960_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_googlehybrid_1,lyr__2,lyr__3,lyr__4,lyr_19451960_5];
lyr__2.set('fieldAliases', {'id': 'id', 'Διαδρ': 'Διαδρ', 'Απόστ': 'Απόστ', 'Κοινό': 'Κοινό', 'Δήμος': 'Δήμος', });
lyr__3.set('fieldAliases', {'id': 'id', 'Διαδρ': 'Διαδρ', 'Απόστ': 'Απόστ', 'Κοινό': 'Κοινό', 'Δήμος': 'Δήμος', });
lyr__4.set('fieldAliases', {'id': 'id', 'Διαδρ': 'Διαδρ', 'Απόστ': 'Απόστ', 'Κοινό': 'Κοινό', 'Δήμος': 'Δήμος', });
lyr_19451960_5.set('fieldAliases', {'Αφετη': 'Αφετη', 'Τέρμα': 'Τέρμα', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'Διαδρ': 'TextEdit', 'Απόστ': 'TextEdit', 'Κοινό': 'TextEdit', 'Δήμος': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'Διαδρ': 'TextEdit', 'Απόστ': 'TextEdit', 'Κοινό': 'TextEdit', 'Δήμος': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'Διαδρ': 'TextEdit', 'Απόστ': 'TextEdit', 'Κοινό': 'TextEdit', 'Δήμος': 'TextEdit', });
lyr_19451960_5.set('fieldImages', {'Αφετη': '', 'Τέρμα': '', });
lyr__2.set('fieldLabels', {'id': 'no label', 'Διαδρ': 'no label', 'Απόστ': 'no label', 'Κοινό': 'no label', 'Δήμος': 'no label', });
lyr__3.set('fieldLabels', {'id': 'no label', 'Διαδρ': 'no label', 'Απόστ': 'no label', 'Κοινό': 'no label', 'Δήμος': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', 'Διαδρ': 'no label', 'Απόστ': 'no label', 'Κοινό': 'no label', 'Δήμος': 'no label', });
lyr_19451960_5.set('fieldLabels', {'Αφετη': 'no label', 'Τέρμα': 'no label', });
lyr_19451960_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});