var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Police_bounds_1 = new ol.format.GeoJSON();
var features_Police_bounds_1 = format_Police_bounds_1.readFeatures(json_Police_bounds_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Police_bounds_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Police_bounds_1.addFeatures(features_Police_bounds_1);
var lyr_Police_bounds_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Police_bounds_1, 
                style: style_Police_bounds_1,
                popuplayertitle: 'Police_bounds',
                interactive: true,
    title: 'Police_bounds<br />\
    <img src="styles/legend/Police_bounds_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Police_bounds_1_1.png" /> 0 - 1<br />\
    <img src="styles/legend/Police_bounds_1_2.png" /> 1 - 3.4<br />\
    <img src="styles/legend/Police_bounds_1_3.png" /> 3.4 - 8.2<br />\
    <img src="styles/legend/Police_bounds_1_4.png" /> 8.2 - 62<br />' });

lyr_ESRIStandard_0.setVisible(true);lyr_Police_bounds_1.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Police_bounds_1];
lyr_Police_bounds_1.set('fieldAliases', {'COMPNT_NM': 'COMPNT_NM', 'CREATE_DT': 'CREATE_DT', 'VERSION': 'VERSION', 'wc_sex_murder_Drugs — Sheet1_Sexual Crimes': 'wc_sex_murder_Drugs — Sheet1_Sexual Crimes', 'wc_sex_murder_Drugs — Sheet1_Drugs': 'wc_sex_murder_Drugs — Sheet1_Drugs', 'wc_sex_murder_Drugs — Sheet1_Murder': 'wc_sex_murder_Drugs — Sheet1_Murder', });
lyr_Police_bounds_1.set('fieldImages', {'COMPNT_NM': 'TextEdit', 'CREATE_DT': 'TextEdit', 'VERSION': 'TextEdit', 'wc_sex_murder_Drugs — Sheet1_Sexual Crimes': 'Range', 'wc_sex_murder_Drugs — Sheet1_Drugs': 'Range', 'wc_sex_murder_Drugs — Sheet1_Murder': 'Range', });
lyr_Police_bounds_1.set('fieldLabels', {'COMPNT_NM': 'inline label - visible with data', 'CREATE_DT': 'no label', 'VERSION': 'no label', 'wc_sex_murder_Drugs — Sheet1_Sexual Crimes': 'no label', 'wc_sex_murder_Drugs — Sheet1_Drugs': 'inline label - visible with data', 'wc_sex_murder_Drugs — Sheet1_Murder': 'no label', });
lyr_Police_bounds_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});