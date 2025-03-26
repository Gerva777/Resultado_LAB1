ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([662792.869274, 5903252.865694, 664340.004674, 5903977.667074]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COORD_3_1 = new ol.format.GeoJSON();
var features_COORD_3_1 = format_COORD_3_1.readFeatures(json_COORD_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_COORD_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COORD_3_1.addFeatures(features_COORD_3_1);
cluster_COORD_3_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_COORD_3_1
});
var lyr_COORD_3_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_COORD_3_1, 
                style: style_COORD_3_1,
                popuplayertitle: 'COORD_3',
                interactive: true,
                title: '<img src="styles/legend/COORD_3_1.png" /> COORD_3'
            });

lyr_OSMStandard_0.setVisible(true);lyr_COORD_3_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_COORD_3_1];
lyr_COORD_3_1.set('fieldAliases', {'Name': 'Name', 'T_pregunt': 'T_pregunt', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Porc_Corr': 'Porc_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_Incor': 'Preg_Incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_COORD_3_1.set('fieldImages', {'Name': 'TextEdit', 'T_pregunt': 'TextEdit', 'N°_Preg_I': 'TextEdit', 'N°_Preg_C': 'TextEdit', 'Porc_Corr': 'TextEdit', 'Porc_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Preg_Incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_COORD_3_1.set('fieldLabels', {'Name': 'inline label - always visible', 'T_pregunt': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Porc_Corr': 'inline label - visible with data', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_Incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_COORD_3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});