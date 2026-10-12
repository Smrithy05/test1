var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DIGITALELEVATIONMODEL_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DIGITAL ELEVATION MODEL<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_0.png" /> 88<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_1.png" /> 95<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_2.png" /> 102<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_3.png" /> 108<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_4.png" /> 115<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_5.png" /> 122<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_6.png" /> 129<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_7.png" /> 135<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_2_8.png" /> 140<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DIGITALELEVATIONMODEL_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539364.521861, 1198213.183124, 8546229.223793, 1203185.699806]
        })
    });
var lyr_SLOPE_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_3_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_3_1.png" /> 14.8279<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539337.075973, 1198174.183122, 8546257.663948, 1203224.859159]
        })
    });
var lyr_TOPOSHEET_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPOSHEET<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPOSHEET_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8539342.194894, 1198184.807107, 8546244.225962, 1203205.260749]
        })
    });
var format_SOIL_5 = new ol.format.GeoJSON();
var features_SOIL_5 = format_SOIL_5.readFeatures(json_SOIL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_5.addFeatures(features_SOIL_5);
var lyr_SOIL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_5, 
                style: style_SOIL_5,
                popuplayertitle: 'SOIL',
                interactive: false,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_5_0.png" /> Black Soil<br />\
    <img src="styles/legend/SOIL_5_1.png" /> Hill Soil<br />\
    <img src="styles/legend/SOIL_5_2.png" /> <br />' });
var format_GEOLOGY_6 = new ol.format.GeoJSON();
var features_GEOLOGY_6 = format_GEOLOGY_6.readFeatures(json_GEOLOGY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_6.addFeatures(features_GEOLOGY_6);
var lyr_GEOLOGY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_6, 
                style: style_GEOLOGY_6,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_6_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_6_1.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_6_2.png" /> <br />' });
var format_GEOMORPHOLOGY_7 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_7 = format_GEOMORPHOLOGY_7.readFeatures(json_GEOMORPHOLOGY_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_7.addFeatures(features_GEOMORPHOLOGY_7);
var lyr_GEOMORPHOLOGY_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_7, 
                style: style_GEOMORPHOLOGY_7,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_7_0.png" /> Flood Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_7_1.png" /> Pediplain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_7_2.png" /> Plateau<br />\
    <img src="styles/legend/GEOMORPHOLOGY_7_3.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_7_4.png" /> <br />' });
var format_BUILDINGDATA_8 = new ol.format.GeoJSON();
var features_BUILDINGDATA_8 = format_BUILDINGDATA_8.readFeatures(json_BUILDINGDATA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGDATA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGDATA_8.addFeatures(features_BUILDINGDATA_8);
var lyr_BUILDINGDATA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDINGDATA_8, 
                style: style_BUILDINGDATA_8,
                popuplayertitle: 'BUILDING DATA',
                interactive: false,
                title: '<img src="styles/legend/BUILDINGDATA_8.png" /> BUILDING DATA'
            });
var format_CONTOUR_9 = new ol.format.GeoJSON();
var features_CONTOUR_9 = format_CONTOUR_9.readFeatures(json_CONTOUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_9.addFeatures(features_CONTOUR_9);
var lyr_CONTOUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_9, 
                style: style_CONTOUR_9,
                popuplayertitle: 'CONTOUR',
                interactive: false,
                title: '<img src="styles/legend/CONTOUR_9.png" /> CONTOUR'
            });
var format_streams_10 = new ol.format.GeoJSON();
var features_streams_10 = format_streams_10.readFeatures(json_streams_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streams_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streams_10.addFeatures(features_streams_10);
var lyr_streams_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streams_10, 
                style: style_streams_10,
                popuplayertitle: 'streams',
                interactive: false,
                title: '<img src="styles/legend/streams_10.png" /> streams'
            });
var format_ROADS_11 = new ol.format.GeoJSON();
var features_ROADS_11 = format_ROADS_11.readFeatures(json_ROADS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_11.addFeatures(features_ROADS_11);
var lyr_ROADS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_11, 
                style: style_ROADS_11,
                popuplayertitle: 'ROADS',
                interactive: true,
                title: '<img src="styles/legend/ROADS_11.png" /> ROADS'
            });
var format_POLTICALMAP_12 = new ol.format.GeoJSON();
var features_POLTICALMAP_12 = format_POLTICALMAP_12.readFeatures(json_POLTICALMAP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLTICALMAP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLTICALMAP_12.addFeatures(features_POLTICALMAP_12);
var lyr_POLTICALMAP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLTICALMAP_12, 
                style: style_POLTICALMAP_12,
                popuplayertitle: 'POLTICAL MAP',
                interactive: true,
    title: 'POLTICAL MAP<br />\
    <img src="styles/legend/POLTICALMAP_12_0.png" /> AMBALAPPARAMBU<br />\
    <img src="styles/legend/POLTICALMAP_12_1.png" /> CHIRAVATTOM<br />\
    <img src="styles/legend/POLTICALMAP_12_2.png" /> CHOORIKKAD<br />\
    <img src="styles/legend/POLTICALMAP_12_3.png" /> COOLIMUTTOM<br />\
    <img src="styles/legend/POLTICALMAP_12_4.png" /> KALLUKOOTTIYAL<br />\
    <img src="styles/legend/POLTICALMAP_12_5.png" /> KAVASSERIKULAMBU<br />\
    <img src="styles/legend/POLTICALMAP_12_6.png" /> MANTHAPARAMBU<br />\
    <img src="styles/legend/POLTICALMAP_12_7.png" /> NEDUMPURA<br />\
    <img src="styles/legend/POLTICALMAP_12_8.png" /> NELLUKUTHUPARA<br />\
    <img src="styles/legend/POLTICALMAP_12_9.png" /> PANAYUR<br />\
    <img src="styles/legend/POLTICALMAP_12_10.png" /> PLAPULLY<br />\
    <img src="styles/legend/POLTICALMAP_12_11.png" /> POOTHAMPULLY<br />\
    <img src="styles/legend/POLTICALMAP_12_12.png" /> PUTHUKKUDY<br />\
    <img src="styles/legend/POLTICALMAP_12_13.png" /> VERKOLY<br />\
    <img src="styles/legend/POLTICALMAP_12_14.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DIGITALELEVATIONMODEL_2.setVisible(true);lyr_SLOPE_3.setVisible(true);lyr_TOPOSHEET_4.setVisible(true);lyr_SOIL_5.setVisible(true);lyr_GEOLOGY_6.setVisible(true);lyr_GEOMORPHOLOGY_7.setVisible(true);lyr_BUILDINGDATA_8.setVisible(true);lyr_CONTOUR_9.setVisible(true);lyr_streams_10.setVisible(true);lyr_ROADS_11.setVisible(true);lyr_POLTICALMAP_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_DIGITALELEVATIONMODEL_2,lyr_SLOPE_3,lyr_TOPOSHEET_4,lyr_SOIL_5,lyr_GEOLOGY_6,lyr_GEOMORPHOLOGY_7,lyr_BUILDINGDATA_8,lyr_CONTOUR_9,lyr_streams_10,lyr_ROADS_11,lyr_POLTICALMAP_12];
lyr_SOIL_5.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_GEOLOGY_6.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORPHOLOGY_7.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_BUILDINGDATA_8.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_CONTOUR_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_streams_10.set('fieldAliases', {'ORDER1': 'ORDER1', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', 'layer': 'layer', 'path': 'path', });
lyr_ROADS_11.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_POLTICALMAP_12.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_SOIL_5.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_GEOLOGY_6.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_GEOMORPHOLOGY_7.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_BUILDINGDATA_8.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_CONTOUR_9.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_streams_10.set('fieldImages', {'ORDER1': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', 'layer': '', 'path': '', });
lyr_ROADS_11.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_POLTICALMAP_12.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_SOIL_5.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'inline label - visible with data', });
lyr_GEOLOGY_6.set('fieldLabels', {'ROCK_GROUP': 'inline label - visible with data', 'NAME': 'no label', });
lyr_GEOMORPHOLOGY_7.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'inline label - visible with data', 'TYPE2': 'no label', });
lyr_BUILDINGDATA_8.set('fieldLabels', {'source': 'no label', 'height': 'no label', });
lyr_CONTOUR_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - visible with data', });
lyr_streams_10.set('fieldLabels', {'ORDER1': 'no label', 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ROADS_11.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_POLTICALMAP_12.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_POLTICALMAP_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});