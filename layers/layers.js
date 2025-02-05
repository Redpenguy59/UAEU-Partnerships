var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Dark_2 = new ol.layer.Tile({
            'title': 'Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Light_3 = new ol.layer.Tile({
            'title': 'Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UmbrellaOrganisations_4 = new ol.format.GeoJSON();
var features_UmbrellaOrganisations_4 = format_UmbrellaOrganisations_4.readFeatures(json_UmbrellaOrganisations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UmbrellaOrganisations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UmbrellaOrganisations_4.addFeatures(features_UmbrellaOrganisations_4);
var lyr_UmbrellaOrganisations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UmbrellaOrganisations_4, 
                style: style_UmbrellaOrganisations_4,
                popuplayertitle: 'Umbrella Organisations',
                interactive: true,
    title: 'Umbrella Organisations<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_0.png" /> 1) Air Quality Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_1.png" /> 9) Public Procurement Partnership of the UAEU (2017-2024)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_2.png" /> 8) Jobs and Skills Partnerships of the UAEU (2017-2020)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_3.png" /> 13) Security in Public Spaces Partnership of the UAEU (2019-2022)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_4.png" /> 14) Culture and Cultural Heritage Thematic Partnership of the UAEU (2019-2024)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_5.png" /> 15) Greening Cities Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_6.png" /> 18) Cities of Equality Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_7.png" /> 19) Water Sensitive City Partnership of the UAEU (2025-2028)<br />\
    <img src="styles/legend/UmbrellaOrganisations_4_8.png" /> 20) Building Decarbonisation Partnership of the UAEU (2025-2028)<br />'
        });
var format_OtherStakeholders_5 = new ol.format.GeoJSON();
var features_OtherStakeholders_5 = format_OtherStakeholders_5.readFeatures(json_OtherStakeholders_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherStakeholders_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherStakeholders_5.addFeatures(features_OtherStakeholders_5);
cluster_OtherStakeholders_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OtherStakeholders_5
});
var lyr_OtherStakeholders_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OtherStakeholders_5, 
                style: style_OtherStakeholders_5,
                popuplayertitle: 'Other Stakeholders',
                interactive: true,
    title: 'Other Stakeholders<br />\
    <img src="styles/legend/OtherStakeholders_5_0.png" /> 1) Air Quality Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/OtherStakeholders_5_1.png" /> 2) Housing Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/OtherStakeholders_5_2.png" /> 3) Urban Poverty Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/OtherStakeholders_5_3.png" /> 4) Inclusion of Migrants and Refugees Partnership of the UAEU (2016-2024)<br />\
    <img src="styles/legend/OtherStakeholders_5_4.png" /> 5) Digital Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/OtherStakeholders_5_5.png" /> 6) Urban Mobility Partnership for the UAEU (2017-2020)<br />\
    <img src="styles/legend/OtherStakeholders_5_6.png" /> 7) Circular Economy Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/OtherStakeholders_5_7.png" /> 9) Public Procurement Partnership of the UAEU (2017-2024)<br />\
    <img src="styles/legend/OtherStakeholders_5_8.png" /> 10) Sustainable Land Use Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/OtherStakeholders_5_9.png" /> 11) Energy Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/OtherStakeholders_5_10.png" /> 12) Climate Adaptation Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/OtherStakeholders_5_11.png" /> 14) Culture and Cultural Heritage Partnership of the UAEU (2019-2024)<br />\
    <img src="styles/legend/OtherStakeholders_5_12.png" /> 15) Greening Cities Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/OtherStakeholders_5_13.png" /> 16) Sustainable Tourism Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/OtherStakeholders_5_14.png" /> 17) Food Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/OtherStakeholders_5_15.png" /> 18) Cities of Equality Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/OtherStakeholders_5_16.png" /> 19) Water Sensitive City Partnership of the UAEU (2025-2028)<br />\
    <img src="styles/legend/OtherStakeholders_5_17.png" /> 20) Building Decarbonisation Partnership of the UAEU (2025-2028)<br />'
        });
var format_RegionalAuthorities_6 = new ol.format.GeoJSON();
var features_RegionalAuthorities_6 = format_RegionalAuthorities_6.readFeatures(json_RegionalAuthorities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionalAuthorities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionalAuthorities_6.addFeatures(features_RegionalAuthorities_6);
cluster_RegionalAuthorities_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RegionalAuthorities_6
});
var lyr_RegionalAuthorities_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RegionalAuthorities_6, 
                style: style_RegionalAuthorities_6,
                popuplayertitle: 'Regional Authorities',
                interactive: true,
    title: 'Regional Authorities<br />\
    <img src="styles/legend/RegionalAuthorities_6_0.png" /> 3) Urban Poverty Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/RegionalAuthorities_6_1.png" /> 5) Digital Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/RegionalAuthorities_6_2.png" /> 6) Urban Mobility Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/RegionalAuthorities_6_3.png" /> 9) Public Procurement Partnership of the UAEU (2017-2024)<br />\
    <img src="styles/legend/RegionalAuthorities_6_4.png" /> 11) Energy Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/RegionalAuthorities_6_5.png" /> 13) Security in Public Spaces Partnership of the UAEU (2019-2020)<br />\
    <img src="styles/legend/RegionalAuthorities_6_6.png" /> 14) Culture and Culutral Heritage Partnership of the UAEU (2019-2024)<br />\
    <img src="styles/legend/RegionalAuthorities_6_7.png" /> 15) Greening Cities Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/RegionalAuthorities_6_8.png" /> 16) Sustainable Tourism Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/RegionalAuthorities_6_9.png" /> 18) Cities of Equality Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/RegionalAuthorities_6_10.png" /> 20) Building Decarbonisation Partnership of the UAEU (2025-2028)<br />'
        });
var format_MemberStates_7 = new ol.format.GeoJSON();
var features_MemberStates_7 = format_MemberStates_7.readFeatures(json_MemberStates_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MemberStates_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MemberStates_7.addFeatures(features_MemberStates_7);
cluster_MemberStates_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MemberStates_7
});
var lyr_MemberStates_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MemberStates_7, 
                style: style_MemberStates_7,
                popuplayertitle: 'Member States',
                interactive: true,
    title: 'Member States<br />\
    <img src="styles/legend/MemberStates_7_0.png" /> 1) Air Quality Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/MemberStates_7_1.png" /> 2) Housing Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/MemberStates_7_2.png" /> 3) Urban Poverty Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/MemberStates_7_3.png" /> 4) Inclusion of Migrants and Refugees Partnership of the UAEU (2016-2024)<br />\
    <img src="styles/legend/MemberStates_7_4.png" /> 5) Digital Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/MemberStates_7_5.png" /> 6) Urban Mobility Partnership for the UAEU (2017-2020)<br />\
    <img src="styles/legend/MemberStates_7_6.png" /> 7) Circular Economy Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/MemberStates_7_7.png" /> 8) Jobs and Skills Partnerships of the UAEU (2017-2020)<br />\
    <img src="styles/legend/MemberStates_7_8.png" /> 9) Public Procurement Partnership of the UAEU (2017-2024)<br />\
    <img src="styles/legend/MemberStates_7_9.png" /> 10) Sustainable Land Use Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/MemberStates_7_10.png" /> 11) Energy Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/MemberStates_7_11.png" /> 12) Climate Adaptation Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/MemberStates_7_12.png" /> 13) Security in Public Spaces Partnership of the UAEU (2019-2022)<br />\
    <img src="styles/legend/MemberStates_7_13.png" /> 14) Culture and Cultural Heritage Partnership of the UAEU (2019-2024)<br />\
    <img src="styles/legend/MemberStates_7_14.png" /> 15) Greening Cities Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/MemberStates_7_15.png" /> 16) Sustainable Tourism Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/MemberStates_7_16.png" /> 17) Food Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/MemberStates_7_17.png" /> 18) Cities of Equality Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/MemberStates_7_18.png" /> 19) Water Sensitive City Partnership of the UAEU (2025-2028)<br />\
    <img src="styles/legend/MemberStates_7_19.png" /> 20) Building Decarbonisation Partnership of the UAEU (2025-2028)<br />'
        });
var format_Coordinators_8 = new ol.format.GeoJSON();
var features_Coordinators_8 = format_Coordinators_8.readFeatures(json_Coordinators_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coordinators_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coordinators_8.addFeatures(features_Coordinators_8);
cluster_Coordinators_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Coordinators_8
});
var lyr_Coordinators_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Coordinators_8, 
                style: style_Coordinators_8,
                popuplayertitle: 'Coordinators',
                interactive: true,
    title: 'Coordinators<br />\
    <img src="styles/legend/Coordinators_8_0.png" /> 1) Air Quality Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/Coordinators_8_1.png" /> 2) Housing Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/Coordinators_8_2.png" /> 3) Urban Poverty Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/Coordinators_8_3.png" /> 4) Inclusion of Migrants and Refugees Partnership of the UAEU (2016-2024)<br />\
    <img src="styles/legend/Coordinators_8_4.png" /> 5) Digital Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Coordinators_8_5.png" /> 6) Urban Mobility Partnership for the UAEU (2017-2020)<br />\
    <img src="styles/legend/Coordinators_8_6.png" /> 7) Circular Economy Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Coordinators_8_7.png" /> 8) Jobs and Skills Partnerships of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Coordinators_8_8.png" /> 9) Public Procurement Partnership of the UAEU (2017-2024)<br />\
    <img src="styles/legend/Coordinators_8_9.png" /> 10) Sustainable Land Use Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Coordinators_8_10.png" /> 11) Energy Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Coordinators_8_11.png" /> 12) Climate Adaptation Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Coordinators_8_12.png" /> 13) Security in Public Spaces Partnership of the UAEU (2019-2022)<br />\
    <img src="styles/legend/Coordinators_8_13.png" /> 14) Culture and Cultural Heritage Partnership of the UAEU (2019-2024)<br />\
    <img src="styles/legend/Coordinators_8_14.png" /> 15) Greening Cities Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/Coordinators_8_15.png" /> 16) Sustainable Tourism Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/Coordinators_8_16.png" /> 17) Food Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/Coordinators_8_17.png" /> 18) Cities of Equality Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/Coordinators_8_18.png" /> 19) Water Sensitive City Partnership of the UAEU (2025-2028)<br />\
    <img src="styles/legend/Coordinators_8_19.png" /> 20) Building Decarbonisation Partnership of the UAEU (2025-2028)<br />'
        });
var format_Cities_9 = new ol.format.GeoJSON();
var features_Cities_9 = format_Cities_9.readFeatures(json_Cities_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cities_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_9.addFeatures(features_Cities_9);
cluster_Cities_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Cities_9
});
var lyr_Cities_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Cities_9, 
                style: style_Cities_9,
                popuplayertitle: 'Cities',
                interactive: true,
    title: 'Cities<br />\
    <img src="styles/legend/Cities_9_0.png" /> 1) Air Quality Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/Cities_9_1.png" /> 2) Housing Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/Cities_9_2.png" /> 3) Urban Poverty Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/Cities_9_3.png" /> 4) Inclusion of Migrants and Refugees Partnership of the UAEU (2016-2024)<br />\
    <img src="styles/legend/Cities_9_4.png" /> 5) Digital Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Cities_9_5.png" /> 6) Urban Mobility Partnership for the UAEU (2017-2020)<br />\
    <img src="styles/legend/Cities_9_6.png" /> 7) Circular Economy Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Cities_9_7.png" /> 8) Jobs and Skills Partnerships of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Cities_9_8.png" /> 9) Public Procurement Partnership of the UAEU (2017-2024)<br />\
    <img src="styles/legend/Cities_9_9.png" /> 10) Sustainable Land Use Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Cities_9_10.png" /> 11) Energy Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Cities_9_11.png" /> 12) Climate Adaptation Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/Cities_9_12.png" /> 13) Security in Public Spaces Partnership of the UAEU (2019-2022)<br />\
    <img src="styles/legend/Cities_9_13.png" /> 14) Culture and Cultural Heritage Partnership of the UAEU (2019-2024)<br />\
    <img src="styles/legend/Cities_9_14.png" /> 15) Greening Cities Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/Cities_9_15.png" /> 16) Sustainable Tourism Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/Cities_9_16.png" /> 17) Food Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/Cities_9_17.png" /> 18) Cities of Equality Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/Cities_9_18.png" /> 19) Water Sensitive City Partnership of the UAEU (2025-2028)<br />\
    <img src="styles/legend/Cities_9_19.png" /> 20) Building Decarbonisation Partnership of the UAEU (2025-2028)<br />'
        });
var format_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10 = new ol.format.GeoJSON();
var features_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10 = format_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10.readFeatures(json_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10.addFeatures(features_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10);
var lyr_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10, 
                style: style_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10,
                popuplayertitle: '20) Building Decarbonisation Partnership of the UAEU (2025-2028)',
                interactive: true,
    title: '20) Building Decarbonisation Partnership of the UAEU (2025-2028)<br />\
    <img src="styles/legend/20BuildingDecarbonisationPartnershipoftheUAEU20252028_10_0.png" /> City<br />\
    <img src="styles/legend/20BuildingDecarbonisationPartnershipoftheUAEU20252028_10_1.png" /> European Institution<br />\
    <img src="styles/legend/20BuildingDecarbonisationPartnershipoftheUAEU20252028_10_2.png" /> Coordinator<br />\
    <img src="styles/legend/20BuildingDecarbonisationPartnershipoftheUAEU20252028_10_3.png" /> National Authority<br />\
    <img src="styles/legend/20BuildingDecarbonisationPartnershipoftheUAEU20252028_10_4.png" /> Regional Authority<br />\
    <img src="styles/legend/20BuildingDecarbonisationPartnershipoftheUAEU20252028_10_5.png" /> Other Stakeholder<br />\
    <img src="styles/legend/20BuildingDecarbonisationPartnershipoftheUAEU20252028_10_6.png" /> Umbrella Organisation<br />'
        });
var format_19WaterSensitiveCityPartnershipoftheUAEU20252028_11 = new ol.format.GeoJSON();
var features_19WaterSensitiveCityPartnershipoftheUAEU20252028_11 = format_19WaterSensitiveCityPartnershipoftheUAEU20252028_11.readFeatures(json_19WaterSensitiveCityPartnershipoftheUAEU20252028_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19WaterSensitiveCityPartnershipoftheUAEU20252028_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19WaterSensitiveCityPartnershipoftheUAEU20252028_11.addFeatures(features_19WaterSensitiveCityPartnershipoftheUAEU20252028_11);
var lyr_19WaterSensitiveCityPartnershipoftheUAEU20252028_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19WaterSensitiveCityPartnershipoftheUAEU20252028_11, 
                style: style_19WaterSensitiveCityPartnershipoftheUAEU20252028_11,
                popuplayertitle: '19) Water Sensitive City Partnership of the UAEU (2025-2028)',
                interactive: true,
    title: '19) Water Sensitive City Partnership of the UAEU (2025-2028)<br />\
    <img src="styles/legend/19WaterSensitiveCityPartnershipoftheUAEU20252028_11_0.png" /> Cities<br />\
    <img src="styles/legend/19WaterSensitiveCityPartnershipoftheUAEU20252028_11_1.png" /> European Institution<br />\
    <img src="styles/legend/19WaterSensitiveCityPartnershipoftheUAEU20252028_11_2.png" /> Coordinator<br />\
    <img src="styles/legend/19WaterSensitiveCityPartnershipoftheUAEU20252028_11_3.png" /> National Authority<br />\
    <img src="styles/legend/19WaterSensitiveCityPartnershipoftheUAEU20252028_11_4.png" /> Regional Authority<br />\
    <img src="styles/legend/19WaterSensitiveCityPartnershipoftheUAEU20252028_11_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/19WaterSensitiveCityPartnershipoftheUAEU20252028_11_6.png" /> Umbrella Organisations<br />'
        });
var format_18CitiesofEqualityPartnershipoftheUAEU20242027_12 = new ol.format.GeoJSON();
var features_18CitiesofEqualityPartnershipoftheUAEU20242027_12 = format_18CitiesofEqualityPartnershipoftheUAEU20242027_12.readFeatures(json_18CitiesofEqualityPartnershipoftheUAEU20242027_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18CitiesofEqualityPartnershipoftheUAEU20242027_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18CitiesofEqualityPartnershipoftheUAEU20242027_12.addFeatures(features_18CitiesofEqualityPartnershipoftheUAEU20242027_12);
var lyr_18CitiesofEqualityPartnershipoftheUAEU20242027_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18CitiesofEqualityPartnershipoftheUAEU20242027_12, 
                style: style_18CitiesofEqualityPartnershipoftheUAEU20242027_12,
                popuplayertitle: '18) Cities of Equality Partnership of the UAEU (2024-2027)',
                interactive: true,
    title: '18) Cities of Equality Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/18CitiesofEqualityPartnershipoftheUAEU20242027_12_0.png" /> Cities<br />\
    <img src="styles/legend/18CitiesofEqualityPartnershipoftheUAEU20242027_12_1.png" /> European Institution<br />\
    <img src="styles/legend/18CitiesofEqualityPartnershipoftheUAEU20242027_12_2.png" /> Coordinators<br />\
    <img src="styles/legend/18CitiesofEqualityPartnershipoftheUAEU20242027_12_3.png" /> National Authority<br />\
    <img src="styles/legend/18CitiesofEqualityPartnershipoftheUAEU20242027_12_4.png" /> Regional Authority<br />\
    <img src="styles/legend/18CitiesofEqualityPartnershipoftheUAEU20242027_12_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/18CitiesofEqualityPartnershipoftheUAEU20242027_12_6.png" /> Umbrella Organisations<br />'
        });
var format_17FoodPartnershipoftheUAEU20242027_13 = new ol.format.GeoJSON();
var features_17FoodPartnershipoftheUAEU20242027_13 = format_17FoodPartnershipoftheUAEU20242027_13.readFeatures(json_17FoodPartnershipoftheUAEU20242027_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17FoodPartnershipoftheUAEU20242027_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17FoodPartnershipoftheUAEU20242027_13.addFeatures(features_17FoodPartnershipoftheUAEU20242027_13);
var lyr_17FoodPartnershipoftheUAEU20242027_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17FoodPartnershipoftheUAEU20242027_13, 
                style: style_17FoodPartnershipoftheUAEU20242027_13,
                popuplayertitle: '17) Food Partnership of the UAEU (2024-2027)',
                interactive: true,
    title: '17) Food Partnership of the UAEU (2024-2027)<br />\
    <img src="styles/legend/17FoodPartnershipoftheUAEU20242027_13_0.png" /> Cities<br />\
    <img src="styles/legend/17FoodPartnershipoftheUAEU20242027_13_1.png" /> European Institutions<br />\
    <img src="styles/legend/17FoodPartnershipoftheUAEU20242027_13_2.png" /> Coordinators<br />\
    <img src="styles/legend/17FoodPartnershipoftheUAEU20242027_13_3.png" /> National Authorities<br />\
    <img src="styles/legend/17FoodPartnershipoftheUAEU20242027_13_4.png" /> Other Stakeholders<br />\
    <img src="styles/legend/17FoodPartnershipoftheUAEU20242027_13_5.png" /> Umbrella Organisations<br />'
        });
var format_16SustainableTourismPartnershipoftheUAEU20232026_14 = new ol.format.GeoJSON();
var features_16SustainableTourismPartnershipoftheUAEU20232026_14 = format_16SustainableTourismPartnershipoftheUAEU20232026_14.readFeatures(json_16SustainableTourismPartnershipoftheUAEU20232026_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16SustainableTourismPartnershipoftheUAEU20232026_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16SustainableTourismPartnershipoftheUAEU20232026_14.addFeatures(features_16SustainableTourismPartnershipoftheUAEU20232026_14);
var lyr_16SustainableTourismPartnershipoftheUAEU20232026_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16SustainableTourismPartnershipoftheUAEU20232026_14, 
                style: style_16SustainableTourismPartnershipoftheUAEU20232026_14,
                popuplayertitle: '16) Sustainable Tourism Partnership of the UAEU (2023-2026)',
                interactive: true,
    title: '16) Sustainable Tourism Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/16SustainableTourismPartnershipoftheUAEU20232026_14_0.png" /> Cities<br />\
    <img src="styles/legend/16SustainableTourismPartnershipoftheUAEU20232026_14_1.png" /> European Institution<br />\
    <img src="styles/legend/16SustainableTourismPartnershipoftheUAEU20232026_14_2.png" /> Coordinators <br />\
    <img src="styles/legend/16SustainableTourismPartnershipoftheUAEU20232026_14_3.png" /> National Authorities<br />\
    <img src="styles/legend/16SustainableTourismPartnershipoftheUAEU20232026_14_4.png" /> Regional Authority<br />\
    <img src="styles/legend/16SustainableTourismPartnershipoftheUAEU20232026_14_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/16SustainableTourismPartnershipoftheUAEU20232026_14_6.png" /> Umbrella Organisations<br />'
        });
var format_15GreeningCitiesPartnershipoftheUAEU20232026_15 = new ol.format.GeoJSON();
var features_15GreeningCitiesPartnershipoftheUAEU20232026_15 = format_15GreeningCitiesPartnershipoftheUAEU20232026_15.readFeatures(json_15GreeningCitiesPartnershipoftheUAEU20232026_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15GreeningCitiesPartnershipoftheUAEU20232026_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15GreeningCitiesPartnershipoftheUAEU20232026_15.addFeatures(features_15GreeningCitiesPartnershipoftheUAEU20232026_15);
var lyr_15GreeningCitiesPartnershipoftheUAEU20232026_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15GreeningCitiesPartnershipoftheUAEU20232026_15, 
                style: style_15GreeningCitiesPartnershipoftheUAEU20232026_15,
                popuplayertitle: '15) Greening Cities Partnership of the UAEU (2023-2026)',
                interactive: true,
    title: '15) Greening Cities Partnership of the UAEU (2023-2026)<br />\
    <img src="styles/legend/15GreeningCitiesPartnershipoftheUAEU20232026_15_0.png" /> Cities<br />\
    <img src="styles/legend/15GreeningCitiesPartnershipoftheUAEU20232026_15_1.png" /> Directorates-Generals of the European Commission<br />\
    <img src="styles/legend/15GreeningCitiesPartnershipoftheUAEU20232026_15_2.png" /> Coordinators<br />\
    <img src="styles/legend/15GreeningCitiesPartnershipoftheUAEU20232026_15_3.png" /> National Authorities<br />\
    <img src="styles/legend/15GreeningCitiesPartnershipoftheUAEU20232026_15_4.png" /> Regional Authority<br />\
    <img src="styles/legend/15GreeningCitiesPartnershipoftheUAEU20232026_15_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/15GreeningCitiesPartnershipoftheUAEU20232026_15_6.png" /> Umbrella Organisations<br />'
        });
var format_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16 = new ol.format.GeoJSON();
var features_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16 = format_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16.readFeatures(json_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16.addFeatures(features_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16);
var lyr_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16, 
                style: style_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16,
                popuplayertitle: '14) Culture and Cultural Heritage Thematic Partnership of the UAEU (2019-2024)',
                interactive: true,
    title: '14) Culture and Cultural Heritage Thematic Partnership of the UAEU (2019-2024)<br />\
    <img src="styles/legend/14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16_0.png" /> Cities<br />\
    <img src="styles/legend/14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16_1.png" /> European Institutions<br />\
    <img src="styles/legend/14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16_2.png" /> Coordinators<br />\
    <img src="styles/legend/14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16_3.png" /> National Authorities<br />\
    <img src="styles/legend/14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16_4.png" /> Regional Authority<br />\
    <img src="styles/legend/14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16_6.png" /> Umbrella Organisations<br />'
        });
var format_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17 = new ol.format.GeoJSON();
var features_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17 = format_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17.readFeatures(json_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17.addFeatures(features_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17);
var lyr_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17, 
                style: style_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17,
                popuplayertitle: '13) Security in Public Spaces Partnership of the UAEU (2019-2022)',
                interactive: true,
    title: '13) Security in Public Spaces Partnership of the UAEU (2019-2022)<br />\
    <img src="styles/legend/13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17_0.png" /> Cities<br />\
    <img src="styles/legend/13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17_1.png" /> European institutions<br />\
    <img src="styles/legend/13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17_2.png" /> Coordinators<br />\
    <img src="styles/legend/13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17_3.png" /> National Authorities<br />\
    <img src="styles/legend/13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17_4.png" /> Regional Authority<br />\
    <img src="styles/legend/13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17_6.png" /> Umbrella Organisations<br />'
        });
var format_12ClimateAdaptationPartnershipoftheUAEU20172020_18 = new ol.format.GeoJSON();
var features_12ClimateAdaptationPartnershipoftheUAEU20172020_18 = format_12ClimateAdaptationPartnershipoftheUAEU20172020_18.readFeatures(json_12ClimateAdaptationPartnershipoftheUAEU20172020_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12ClimateAdaptationPartnershipoftheUAEU20172020_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12ClimateAdaptationPartnershipoftheUAEU20172020_18.addFeatures(features_12ClimateAdaptationPartnershipoftheUAEU20172020_18);
var lyr_12ClimateAdaptationPartnershipoftheUAEU20172020_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12ClimateAdaptationPartnershipoftheUAEU20172020_18, 
                style: style_12ClimateAdaptationPartnershipoftheUAEU20172020_18,
                popuplayertitle: '12) Climate Adaptation Partnership of the UAEU (2017-2020)',
                interactive: true,
    title: '12) Climate Adaptation Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/12ClimateAdaptationPartnershipoftheUAEU20172020_18_0.png" /> Cities<br />\
    <img src="styles/legend/12ClimateAdaptationPartnershipoftheUAEU20172020_18_1.png" /> European Institutions<br />\
    <img src="styles/legend/12ClimateAdaptationPartnershipoftheUAEU20172020_18_2.png" /> Coordinators<br />\
    <img src="styles/legend/12ClimateAdaptationPartnershipoftheUAEU20172020_18_3.png" /> National Authorities<br />\
    <img src="styles/legend/12ClimateAdaptationPartnershipoftheUAEU20172020_18_4.png" /> Other Stakeholders<br />\
    <img src="styles/legend/12ClimateAdaptationPartnershipoftheUAEU20172020_18_5.png" /> Umbrella Organisations<br />'
        });
var format_11EnergyTransitionPartnershipoftheUAEU20172020_19 = new ol.format.GeoJSON();
var features_11EnergyTransitionPartnershipoftheUAEU20172020_19 = format_11EnergyTransitionPartnershipoftheUAEU20172020_19.readFeatures(json_11EnergyTransitionPartnershipoftheUAEU20172020_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11EnergyTransitionPartnershipoftheUAEU20172020_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11EnergyTransitionPartnershipoftheUAEU20172020_19.addFeatures(features_11EnergyTransitionPartnershipoftheUAEU20172020_19);
var lyr_11EnergyTransitionPartnershipoftheUAEU20172020_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11EnergyTransitionPartnershipoftheUAEU20172020_19, 
                style: style_11EnergyTransitionPartnershipoftheUAEU20172020_19,
                popuplayertitle: '11) Energy Transition Partnership of the UAEU (2017-2020)',
                interactive: true,
    title: '11) Energy Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/11EnergyTransitionPartnershipoftheUAEU20172020_19_0.png" /> Cities<br />\
    <img src="styles/legend/11EnergyTransitionPartnershipoftheUAEU20172020_19_1.png" /> European Institutions<br />\
    <img src="styles/legend/11EnergyTransitionPartnershipoftheUAEU20172020_19_2.png" /> Coordinators<br />\
    <img src="styles/legend/11EnergyTransitionPartnershipoftheUAEU20172020_19_3.png" /> National Authorities<br />\
    <img src="styles/legend/11EnergyTransitionPartnershipoftheUAEU20172020_19_4.png" /> Regional Authority<br />\
    <img src="styles/legend/11EnergyTransitionPartnershipoftheUAEU20172020_19_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/11EnergyTransitionPartnershipoftheUAEU20172020_19_6.png" /> Umbrella Organisations<br />'
        });
var format_10SustainableLandUsePartnershipoftheUAEU20172020_20 = new ol.format.GeoJSON();
var features_10SustainableLandUsePartnershipoftheUAEU20172020_20 = format_10SustainableLandUsePartnershipoftheUAEU20172020_20.readFeatures(json_10SustainableLandUsePartnershipoftheUAEU20172020_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10SustainableLandUsePartnershipoftheUAEU20172020_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10SustainableLandUsePartnershipoftheUAEU20172020_20.addFeatures(features_10SustainableLandUsePartnershipoftheUAEU20172020_20);
var lyr_10SustainableLandUsePartnershipoftheUAEU20172020_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10SustainableLandUsePartnershipoftheUAEU20172020_20, 
                style: style_10SustainableLandUsePartnershipoftheUAEU20172020_20,
                popuplayertitle: '10) Sustainable Land Use Partnership of the UAEU (2017-2020)',
                interactive: true,
    title: '10) Sustainable Land Use Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/10SustainableLandUsePartnershipoftheUAEU20172020_20_0.png" /> Cities<br />\
    <img src="styles/legend/10SustainableLandUsePartnershipoftheUAEU20172020_20_1.png" /> European Institutions<br />\
    <img src="styles/legend/10SustainableLandUsePartnershipoftheUAEU20172020_20_2.png" /> Coordinators<br />\
    <img src="styles/legend/10SustainableLandUsePartnershipoftheUAEU20172020_20_3.png" /> National Authorities<br />\
    <img src="styles/legend/10SustainableLandUsePartnershipoftheUAEU20172020_20_4.png" /> Other Stakeholders<br />\
    <img src="styles/legend/10SustainableLandUsePartnershipoftheUAEU20172020_20_5.png" /> Umbrella Organisations<br />'
        });
var format_9PublicProcurementPartnershipoftheUAEU20172024_21 = new ol.format.GeoJSON();
var features_9PublicProcurementPartnershipoftheUAEU20172024_21 = format_9PublicProcurementPartnershipoftheUAEU20172024_21.readFeatures(json_9PublicProcurementPartnershipoftheUAEU20172024_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9PublicProcurementPartnershipoftheUAEU20172024_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9PublicProcurementPartnershipoftheUAEU20172024_21.addFeatures(features_9PublicProcurementPartnershipoftheUAEU20172024_21);
var lyr_9PublicProcurementPartnershipoftheUAEU20172024_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9PublicProcurementPartnershipoftheUAEU20172024_21, 
                style: style_9PublicProcurementPartnershipoftheUAEU20172024_21,
                popuplayertitle: '9) Public Procurement Partnership of the UAEU (2017-2024)',
                interactive: true,
    title: '9) Public Procurement Partnership of the UAEU (2017-2024)<br />\
    <img src="styles/legend/9PublicProcurementPartnershipoftheUAEU20172024_21_0.png" /> Cities<br />\
    <img src="styles/legend/9PublicProcurementPartnershipoftheUAEU20172024_21_1.png" /> European Institutions<br />\
    <img src="styles/legend/9PublicProcurementPartnershipoftheUAEU20172024_21_2.png" /> Coordinators<br />\
    <img src="styles/legend/9PublicProcurementPartnershipoftheUAEU20172024_21_3.png" /> National Authorities<br />\
    <img src="styles/legend/9PublicProcurementPartnershipoftheUAEU20172024_21_4.png" /> Regional Authority<br />\
    <img src="styles/legend/9PublicProcurementPartnershipoftheUAEU20172024_21_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/9PublicProcurementPartnershipoftheUAEU20172024_21_6.png" /> Umbrella Organisations<br />'
        });
var format_8JobsandSkillsPartnershipsoftheUAEU20172020_22 = new ol.format.GeoJSON();
var features_8JobsandSkillsPartnershipsoftheUAEU20172020_22 = format_8JobsandSkillsPartnershipsoftheUAEU20172020_22.readFeatures(json_8JobsandSkillsPartnershipsoftheUAEU20172020_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8JobsandSkillsPartnershipsoftheUAEU20172020_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8JobsandSkillsPartnershipsoftheUAEU20172020_22.addFeatures(features_8JobsandSkillsPartnershipsoftheUAEU20172020_22);
var lyr_8JobsandSkillsPartnershipsoftheUAEU20172020_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8JobsandSkillsPartnershipsoftheUAEU20172020_22, 
                style: style_8JobsandSkillsPartnershipsoftheUAEU20172020_22,
                popuplayertitle: '8) Jobs and Skills Partnerships of the UAEU (2017-2020)',
                interactive: true,
    title: '8) Jobs and Skills Partnerships of the UAEU (2017-2020)<br />\
    <img src="styles/legend/8JobsandSkillsPartnershipsoftheUAEU20172020_22_0.png" /> City<br />\
    <img src="styles/legend/8JobsandSkillsPartnershipsoftheUAEU20172020_22_1.png" /> European Institution<br />\
    <img src="styles/legend/8JobsandSkillsPartnershipsoftheUAEU20172020_22_2.png" /> Coordinator<br />\
    <img src="styles/legend/8JobsandSkillsPartnershipsoftheUAEU20172020_22_3.png" /> National Authority<br />\
    <img src="styles/legend/8JobsandSkillsPartnershipsoftheUAEU20172020_22_4.png" /> Umbrella Organisation<br />'
        });
var format_7CircularEconomyPartnershipoftheUAEU20172020_23 = new ol.format.GeoJSON();
var features_7CircularEconomyPartnershipoftheUAEU20172020_23 = format_7CircularEconomyPartnershipoftheUAEU20172020_23.readFeatures(json_7CircularEconomyPartnershipoftheUAEU20172020_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7CircularEconomyPartnershipoftheUAEU20172020_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7CircularEconomyPartnershipoftheUAEU20172020_23.addFeatures(features_7CircularEconomyPartnershipoftheUAEU20172020_23);
var lyr_7CircularEconomyPartnershipoftheUAEU20172020_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7CircularEconomyPartnershipoftheUAEU20172020_23, 
                style: style_7CircularEconomyPartnershipoftheUAEU20172020_23,
                popuplayertitle: '7) Circular Economy Partnership of the UAEU (2017-2020)',
                interactive: true,
    title: '7) Circular Economy Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/7CircularEconomyPartnershipoftheUAEU20172020_23_0.png" /> Cities<br />\
    <img src="styles/legend/7CircularEconomyPartnershipoftheUAEU20172020_23_1.png" /> European Institutions<br />\
    <img src="styles/legend/7CircularEconomyPartnershipoftheUAEU20172020_23_2.png" /> Coordinators<br />\
    <img src="styles/legend/7CircularEconomyPartnershipoftheUAEU20172020_23_3.png" /> National Authorities<br />\
    <img src="styles/legend/7CircularEconomyPartnershipoftheUAEU20172020_23_4.png" /> Regional Authority<br />\
    <img src="styles/legend/7CircularEconomyPartnershipoftheUAEU20172020_23_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/7CircularEconomyPartnershipoftheUAEU20172020_23_6.png" /> Umbrella Organisations<br />'
        });
var format_6UrbanMobilityPartnershipfortheUAEU20172020_24 = new ol.format.GeoJSON();
var features_6UrbanMobilityPartnershipfortheUAEU20172020_24 = format_6UrbanMobilityPartnershipfortheUAEU20172020_24.readFeatures(json_6UrbanMobilityPartnershipfortheUAEU20172020_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6UrbanMobilityPartnershipfortheUAEU20172020_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6UrbanMobilityPartnershipfortheUAEU20172020_24.addFeatures(features_6UrbanMobilityPartnershipfortheUAEU20172020_24);
var lyr_6UrbanMobilityPartnershipfortheUAEU20172020_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6UrbanMobilityPartnershipfortheUAEU20172020_24, 
                style: style_6UrbanMobilityPartnershipfortheUAEU20172020_24,
                popuplayertitle: '6) Urban Mobility Partnership for the UAEU (2017-2020)',
                interactive: true,
    title: '6) Urban Mobility Partnership for the UAEU (2017-2020)<br />\
    <img src="styles/legend/6UrbanMobilityPartnershipfortheUAEU20172020_24_0.png" /> Cities<br />\
    <img src="styles/legend/6UrbanMobilityPartnershipfortheUAEU20172020_24_1.png" /> European Institutions<br />\
    <img src="styles/legend/6UrbanMobilityPartnershipfortheUAEU20172020_24_2.png" /> Coordinators <br />\
    <img src="styles/legend/6UrbanMobilityPartnershipfortheUAEU20172020_24_3.png" /> National Authorities<br />\
    <img src="styles/legend/6UrbanMobilityPartnershipfortheUAEU20172020_24_4.png" /> Regional Authorities <br />\
    <img src="styles/legend/6UrbanMobilityPartnershipfortheUAEU20172020_24_5.png" /> Other Stakeholder<br />\
    <img src="styles/legend/6UrbanMobilityPartnershipfortheUAEU20172020_24_6.png" /> Umbrella Organisations<br />'
        });
var format_5DigitalTransitionPartnershipoftheUAEU20172020_25 = new ol.format.GeoJSON();
var features_5DigitalTransitionPartnershipoftheUAEU20172020_25 = format_5DigitalTransitionPartnershipoftheUAEU20172020_25.readFeatures(json_5DigitalTransitionPartnershipoftheUAEU20172020_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5DigitalTransitionPartnershipoftheUAEU20172020_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5DigitalTransitionPartnershipoftheUAEU20172020_25.addFeatures(features_5DigitalTransitionPartnershipoftheUAEU20172020_25);
var lyr_5DigitalTransitionPartnershipoftheUAEU20172020_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5DigitalTransitionPartnershipoftheUAEU20172020_25, 
                style: style_5DigitalTransitionPartnershipoftheUAEU20172020_25,
                popuplayertitle: '5) Digital Transition Partnership of the UAEU (2017-2020)',
                interactive: true,
    title: '5) Digital Transition Partnership of the UAEU (2017-2020)<br />\
    <img src="styles/legend/5DigitalTransitionPartnershipoftheUAEU20172020_25_0.png" /> Cities<br />\
    <img src="styles/legend/5DigitalTransitionPartnershipoftheUAEU20172020_25_1.png" /> European Institutions<br />\
    <img src="styles/legend/5DigitalTransitionPartnershipoftheUAEU20172020_25_2.png" /> Coordinators<br />\
    <img src="styles/legend/5DigitalTransitionPartnershipoftheUAEU20172020_25_3.png" /> National Authority<br />\
    <img src="styles/legend/5DigitalTransitionPartnershipoftheUAEU20172020_25_4.png" /> Regional Authorities<br />\
    <img src="styles/legend/5DigitalTransitionPartnershipoftheUAEU20172020_25_5.png" /> Umbrella Organisations<br />'
        });
var format_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26 = new ol.format.GeoJSON();
var features_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26 = format_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26.readFeatures(json_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26.addFeatures(features_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26);
var lyr_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26, 
                style: style_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26,
                popuplayertitle: '4) Inclusion of Migrants and Refugees Partnership of the UAEU (2016-2024)',
                interactive: true,
    title: '4) Inclusion of Migrants and Refugees Partnership of the UAEU (2016-2024)<br />\
    <img src="styles/legend/4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26_0.png" /> Cities<br />\
    <img src="styles/legend/4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26_1.png" /> European Institutions<br />\
    <img src="styles/legend/4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26_2.png" /> Coordinators<br />\
    <img src="styles/legend/4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26_3.png" /> National Authorities<br />\
    <img src="styles/legend/4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26_4.png" /> Other Stakeholders<br />\
    <img src="styles/legend/4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26_5.png" /> Umbrella Organisations<br />'
        });
var format_3UrbanPovertyPartnershipoftheUAEU20162019_27 = new ol.format.GeoJSON();
var features_3UrbanPovertyPartnershipoftheUAEU20162019_27 = format_3UrbanPovertyPartnershipoftheUAEU20162019_27.readFeatures(json_3UrbanPovertyPartnershipoftheUAEU20162019_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3UrbanPovertyPartnershipoftheUAEU20162019_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3UrbanPovertyPartnershipoftheUAEU20162019_27.addFeatures(features_3UrbanPovertyPartnershipoftheUAEU20162019_27);
var lyr_3UrbanPovertyPartnershipoftheUAEU20162019_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3UrbanPovertyPartnershipoftheUAEU20162019_27, 
                style: style_3UrbanPovertyPartnershipoftheUAEU20162019_27,
                popuplayertitle: '3) Urban Poverty Partnership of the UAEU (2016-2019)',
                interactive: true,
    title: '3) Urban Poverty Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/3UrbanPovertyPartnershipoftheUAEU20162019_27_0.png" /> Cities<br />\
    <img src="styles/legend/3UrbanPovertyPartnershipoftheUAEU20162019_27_1.png" /> European Institutions<br />\
    <img src="styles/legend/3UrbanPovertyPartnershipoftheUAEU20162019_27_2.png" /> Coordinators <br />\
    <img src="styles/legend/3UrbanPovertyPartnershipoftheUAEU20162019_27_3.png" /> National Authority<br />\
    <img src="styles/legend/3UrbanPovertyPartnershipoftheUAEU20162019_27_4.png" /> Regional Authority<br />\
    <img src="styles/legend/3UrbanPovertyPartnershipoftheUAEU20162019_27_5.png" /> Other Stakeholders<br />\
    <img src="styles/legend/3UrbanPovertyPartnershipoftheUAEU20162019_27_6.png" /> Umbrella Organisations<br />'
        });
var format_2HousingPartnershipoftheUAEU20162019_28 = new ol.format.GeoJSON();
var features_2HousingPartnershipoftheUAEU20162019_28 = format_2HousingPartnershipoftheUAEU20162019_28.readFeatures(json_2HousingPartnershipoftheUAEU20162019_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2HousingPartnershipoftheUAEU20162019_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2HousingPartnershipoftheUAEU20162019_28.addFeatures(features_2HousingPartnershipoftheUAEU20162019_28);
var lyr_2HousingPartnershipoftheUAEU20162019_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2HousingPartnershipoftheUAEU20162019_28, 
                style: style_2HousingPartnershipoftheUAEU20162019_28,
                popuplayertitle: '2) Housing Partnership of the UAEU (2016-2019)',
                interactive: true,
    title: '2) Housing Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/2HousingPartnershipoftheUAEU20162019_28_0.png" /> Cities<br />\
    <img src="styles/legend/2HousingPartnershipoftheUAEU20162019_28_1.png" /> European Institutions<br />\
    <img src="styles/legend/2HousingPartnershipoftheUAEU20162019_28_2.png" /> Coordinators<br />\
    <img src="styles/legend/2HousingPartnershipoftheUAEU20162019_28_3.png" /> National Authorities<br />\
    <img src="styles/legend/2HousingPartnershipoftheUAEU20162019_28_4.png" /> Other Stakeholders<br />\
    <img src="styles/legend/2HousingPartnershipoftheUAEU20162019_28_5.png" /> Umbrella Organisations<br />'
        });
var format_1AirQualityPartnershipoftheUAEU20162019_29 = new ol.format.GeoJSON();
var features_1AirQualityPartnershipoftheUAEU20162019_29 = format_1AirQualityPartnershipoftheUAEU20162019_29.readFeatures(json_1AirQualityPartnershipoftheUAEU20162019_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1AirQualityPartnershipoftheUAEU20162019_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1AirQualityPartnershipoftheUAEU20162019_29.addFeatures(features_1AirQualityPartnershipoftheUAEU20162019_29);
var lyr_1AirQualityPartnershipoftheUAEU20162019_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1AirQualityPartnershipoftheUAEU20162019_29, 
                style: style_1AirQualityPartnershipoftheUAEU20162019_29,
                popuplayertitle: '1) Air Quality Partnership of the UAEU (2016-2019)',
                interactive: true,
    title: '1) Air Quality Partnership of the UAEU (2016-2019)<br />\
    <img src="styles/legend/1AirQualityPartnershipoftheUAEU20162019_29_0.png" /> Cities<br />\
    <img src="styles/legend/1AirQualityPartnershipoftheUAEU20162019_29_1.png" /> European Institutions<br />\
    <img src="styles/legend/1AirQualityPartnershipoftheUAEU20162019_29_2.png" /> Coordinators <br />\
    <img src="styles/legend/1AirQualityPartnershipoftheUAEU20162019_29_3.png" /> National Authorities<br />\
    <img src="styles/legend/1AirQualityPartnershipoftheUAEU20162019_29_4.png" /> Other Stakeholders<br />\
    <img src="styles/legend/1AirQualityPartnershipoftheUAEU20162019_29_5.png" /> Umbrella Organisations<br />'
        });
var group_UAEUPartnerships = new ol.layer.Group({
                                layers: [lyr_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10,lyr_19WaterSensitiveCityPartnershipoftheUAEU20252028_11,lyr_18CitiesofEqualityPartnershipoftheUAEU20242027_12,lyr_17FoodPartnershipoftheUAEU20242027_13,lyr_16SustainableTourismPartnershipoftheUAEU20232026_14,lyr_15GreeningCitiesPartnershipoftheUAEU20232026_15,lyr_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16,lyr_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17,lyr_12ClimateAdaptationPartnershipoftheUAEU20172020_18,lyr_11EnergyTransitionPartnershipoftheUAEU20172020_19,lyr_10SustainableLandUsePartnershipoftheUAEU20172020_20,lyr_9PublicProcurementPartnershipoftheUAEU20172024_21,lyr_8JobsandSkillsPartnershipsoftheUAEU20172020_22,lyr_7CircularEconomyPartnershipoftheUAEU20172020_23,lyr_6UrbanMobilityPartnershipfortheUAEU20172020_24,lyr_5DigitalTransitionPartnershipoftheUAEU20172020_25,lyr_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26,lyr_3UrbanPovertyPartnershipoftheUAEU20162019_27,lyr_2HousingPartnershipoftheUAEU20162019_28,lyr_1AirQualityPartnershipoftheUAEU20162019_29,],
                                fold: "open",
                                title: 'UAEU Partnerships'});
var group_Typologies = new ol.layer.Group({
                                layers: [lyr_UmbrellaOrganisations_4,lyr_OtherStakeholders_5,lyr_RegionalAuthorities_6,lyr_MemberStates_7,lyr_Coordinators_8,lyr_Cities_9,],
                                fold: "open",
                                title: 'Typologies'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_Satellite_0,lyr_GoogleMaps_1,lyr_Dark_2,lyr_Light_3,],
                                fold: "open",
                                title: 'Basemaps'});

lyr_Satellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Dark_2.setVisible(true);lyr_Light_3.setVisible(true);lyr_UmbrellaOrganisations_4.setVisible(true);lyr_OtherStakeholders_5.setVisible(true);lyr_RegionalAuthorities_6.setVisible(true);lyr_MemberStates_7.setVisible(true);lyr_Coordinators_8.setVisible(true);lyr_Cities_9.setVisible(true);lyr_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10.setVisible(true);lyr_19WaterSensitiveCityPartnershipoftheUAEU20252028_11.setVisible(true);lyr_18CitiesofEqualityPartnershipoftheUAEU20242027_12.setVisible(true);lyr_17FoodPartnershipoftheUAEU20242027_13.setVisible(true);lyr_16SustainableTourismPartnershipoftheUAEU20232026_14.setVisible(true);lyr_15GreeningCitiesPartnershipoftheUAEU20232026_15.setVisible(true);lyr_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16.setVisible(true);lyr_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17.setVisible(true);lyr_12ClimateAdaptationPartnershipoftheUAEU20172020_18.setVisible(true);lyr_11EnergyTransitionPartnershipoftheUAEU20172020_19.setVisible(true);lyr_10SustainableLandUsePartnershipoftheUAEU20172020_20.setVisible(true);lyr_9PublicProcurementPartnershipoftheUAEU20172024_21.setVisible(true);lyr_8JobsandSkillsPartnershipsoftheUAEU20172020_22.setVisible(true);lyr_7CircularEconomyPartnershipoftheUAEU20172020_23.setVisible(true);lyr_6UrbanMobilityPartnershipfortheUAEU20172020_24.setVisible(true);lyr_5DigitalTransitionPartnershipoftheUAEU20172020_25.setVisible(true);lyr_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26.setVisible(true);lyr_3UrbanPovertyPartnershipoftheUAEU20162019_27.setVisible(true);lyr_2HousingPartnershipoftheUAEU20162019_28.setVisible(true);lyr_1AirQualityPartnershipoftheUAEU20162019_29.setVisible(true);
var layersList = [group_Basemaps,group_Typologies,group_UAEUPartnerships];
lyr_UmbrellaOrganisations_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Organisation': 'Organisation', 'Layer': 'Layer', '1st Partnership ': '1st Partnership ', '2nd Partnership': '2nd Partnership', '3rd Partnership': '3rd Partnership', '4th Partnership': '4th Partnership', '5th Partnership': '5th Partnership', '6th Partnership': '6th Partnership', '7th Partnership': '7th Partnership', '8th Partnership': '8th Partnership', '9th Partnership': '9th Partnership', '10th Partnership': '10th Partnership', '11th Partnership': '11th Partnership', '12th Partnership': '12th Partnership', '13th Partnership': '13th Partnership', '14th Partnership': '14th Partnership', '15th Partnership': '15th Partnership', '16th Partnership': '16th Partnership', '17th Partnership': '17th Partnership', '18th Partnership': '18th Partnership', });
lyr_OtherStakeholders_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'layer': 'layer', 'path': 'path', '1st Partnership': '1st Partnership', '2nd Partnership': '2nd Partnership', });
lyr_RegionalAuthorities_6.set('fieldAliases', {'fid': 'fid', 'Regional Authority': 'Regional Authority', 'Department': 'Department', '1st Partnership ': '1st Partnership ', '2nd Partnership ': '2nd Partnership ', '3rd Partnership ': '3rd Partnership ', '4th Partnership ': '4th Partnership ', });
lyr_MemberStates_7.set('fieldAliases', {'fid': 'fid', 'National Authorities': 'National Authorities', 'layer': 'layer', 'path': 'path', 'Member State': 'Member State', 'Department': 'Department', '1st Partnership ': '1st Partnership ', '2nd Partnership ': '2nd Partnership ', '3rd Partnership ': '3rd Partnership ', });
lyr_Coordinators_8.set('fieldAliases', {'fid': 'fid', 'Coordinator': 'Coordinator', 'layer': 'layer', 'path': 'path', 'Department': 'Department', '1st Partnership': '1st Partnership', '2nd Partnership ': '2nd Partnership ', });
lyr_Cities_9.set('fieldAliases', {'fid': 'fid', 'City': 'City', 'description': 'description', 'layer': 'layer', 'path': 'path', '1st Partnership': '1st Partnership', '2nd Partnership': '2nd Partnership', '3rd Partnership': '3rd Partnership', '4th Partnership': '4th Partnership', });
lyr_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Layer': 'Layer', 'City': 'City', 'Coordinator': 'Coordinator', 'European Institution': 'European Institution', 'Regional Authority': 'Regional Authority', 'Other Stakeholder ': 'Other Stakeholder ', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_19WaterSensitiveCityPartnershipoftheUAEU20252028_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Regional Authority': 'Regional Authority', 'Coordinator': 'Coordinator', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation': 'Umbrella Organisation', 'European Institution': 'European Institution', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_18CitiesofEqualityPartnershipoftheUAEU20242027_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'Cities': 'Cities', 'Regional Authority': 'Regional Authority', 'Coordinator': 'Coordinator', 'European Institution ': 'European Institution ', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Other Stakeholder': 'Other Stakeholder', 'Member State': 'Member State', 'Department': 'Department', 'Status': 'Status', 'EU Presidency': 'EU Presidency', });
lyr_17FoodPartnershipoftheUAEU20242027_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator': 'Coordinator', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation': 'Umbrella Organisation', 'European Instituion ': 'European Instituion ', 'Member State': 'Member State', 'Department': 'Department', 'Status': 'Status', 'EU Presidency': 'EU Presidency', });
lyr_16SustainableTourismPartnershipoftheUAEU20232026_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator ': 'Coordinator ', 'European Institution': 'European Institution', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Regional Authority': 'Regional Authority', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_15GreeningCitiesPartnershipoftheUAEU20232026_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'Coordinator': 'Coordinator', 'City ': 'City ', 'European Institution ': 'European Institution ', 'Other Stakeholder ': 'Other Stakeholder ', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Regional Authority ': 'Regional Authority ', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator': 'Coordinator', 'European Institution': 'European Institution', 'National Authority': 'National Authority', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation': 'Umbrella Organisation', 'Regional Authority': 'Regional Authority', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator ': 'Coordinator ', 'European Institution': 'European Institution', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Regional Authority': 'Regional Authority', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_12ClimateAdaptationPartnershipoftheUAEU20172020_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator': 'Coordinator', 'European Institution': 'European Institution', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation': 'Umbrella Organisation', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_11EnergyTransitionPartnershipoftheUAEU20172020_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator': 'Coordinator', 'European Institution ': 'European Institution ', 'Other Stakeholder ': 'Other Stakeholder ', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Regional Authority ': 'Regional Authority ', 'Member State': 'Member State', 'Department ': 'Department ', 'EU Presidency ': 'EU Presidency ', 'Status ': 'Status ', });
lyr_10SustainableLandUsePartnershipoftheUAEU20172020_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator ': 'Coordinator ', 'European Institution ': 'European Institution ', 'Other Stakeholder ': 'Other Stakeholder ', 'Umbrella Organisation': 'Umbrella Organisation', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_9PublicProcurementPartnershipoftheUAEU20172024_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator': 'Coordinator', 'European Institution ': 'European Institution ', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Regional Authority': 'Regional Authority', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_8JobsandSkillsPartnershipsoftheUAEU20172020_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Layer': 'Layer', 'City': 'City', 'Coordinator': 'Coordinator', 'Umbrella Organisation ': 'Umbrella Organisation ', 'European Institution ': 'European Institution ', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_7CircularEconomyPartnershipoftheUAEU20172020_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Regional Authority ': 'Regional Authority ', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator': 'Coordinator', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation ': 'Umbrella Organisation ', 'European Institution': 'European Institution', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency ': 'EU Presidency ', 'Status ': 'Status ', });
lyr_6UrbanMobilityPartnershipfortheUAEU20172020_24.set('fieldAliases', {'fid': 'fid', 'City': 'City', 'Coordinator ': 'Coordinator ', 'European Institution ': 'European Institution ', 'Umbrella Organisation ': 'Umbrella Organisation ', 'layer': 'layer', 'path': 'path', 'Regional Authoritiy': 'Regional Authoritiy', 'Other Stakeholder': 'Other Stakeholder', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_5DigitalTransitionPartnershipoftheUAEU20172020_25.set('fieldAliases', {'fid': 'fid', 'City': 'City', 'Coordinator': 'Coordinator', 'European Institution': 'European Institution', 'Regional Authority ': 'Regional Authority ', 'Umbrella Organisation ': 'Umbrella Organisation ', 'layer': 'layer', 'path': 'path', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26.set('fieldAliases', {'fid': 'fid', 'Cities': 'Cities', 'Coordinators': 'Coordinators', 'European Institutions': 'European Institutions', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation': 'Umbrella Organisation', 'layer': 'layer', 'path': 'path', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_3UrbanPovertyPartnershipoftheUAEU20162019_27.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'City': 'City', 'Coordinator': 'Coordinator', 'Other Stakeholder': 'Other Stakeholder', 'European Institution': 'European Institution', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Regional Authority ': 'Regional Authority ', 'Member State': 'Member State', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_2HousingPartnershipoftheUAEU20162019_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'City': 'City', 'layer': 'layer', 'path': 'path', 'Coordinator': 'Coordinator', 'Other Stakeholder': 'Other Stakeholder', 'European Institution ': 'European Institution ', 'Umbrella Organisation ': 'Umbrella Organisation ', 'Member State': 'Member State', 'Department ': 'Department ', 'EU Presidency ': 'EU Presidency ', 'Status ': 'Status ', });
lyr_1AirQualityPartnershipoftheUAEU20162019_29.set('fieldAliases', {'fid': 'fid', 'City': 'City', 'Coordinator': 'Coordinator', 'European Institution': 'European Institution', 'Other Stakeholder': 'Other Stakeholder', 'Umbrella Organisation ': 'Umbrella Organisation ', 'layer': 'layer', 'path': 'path', 'Member State ': 'Member State ', 'Department': 'Department', 'EU Presidency': 'EU Presidency', 'Status': 'Status', });
lyr_UmbrellaOrganisations_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Organisation': 'TextEdit', 'Layer': 'TextEdit', '1st Partnership ': 'TextEdit', '2nd Partnership': 'TextEdit', '3rd Partnership': 'TextEdit', '4th Partnership': 'TextEdit', '5th Partnership': 'TextEdit', '6th Partnership': 'TextEdit', '7th Partnership': 'TextEdit', '8th Partnership': 'TextEdit', '9th Partnership': 'TextEdit', '10th Partnership': 'TextEdit', '11th Partnership': 'TextEdit', '12th Partnership': 'TextEdit', '13th Partnership': 'TextEdit', '14th Partnership': 'TextEdit', '15th Partnership': 'TextEdit', '16th Partnership': 'TextEdit', '17th Partnership': 'TextEdit', '18th Partnership': 'TextEdit', });
lyr_OtherStakeholders_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '1st Partnership': 'TextEdit', '2nd Partnership': 'TextEdit', });
lyr_RegionalAuthorities_6.set('fieldImages', {'fid': 'TextEdit', 'Regional Authority': 'TextEdit', 'Department': 'TextEdit', '1st Partnership ': 'TextEdit', '2nd Partnership ': 'TextEdit', '3rd Partnership ': 'TextEdit', '4th Partnership ': 'TextEdit', });
lyr_MemberStates_7.set('fieldImages', {'fid': 'TextEdit', 'National Authorities': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Member State': 'TextEdit', 'Department': 'TextEdit', '1st Partnership ': 'TextEdit', '2nd Partnership ': 'TextEdit', '3rd Partnership ': 'TextEdit', });
lyr_Coordinators_8.set('fieldImages', {'fid': 'TextEdit', 'Coordinator': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Department': 'TextEdit', '1st Partnership': 'TextEdit', '2nd Partnership ': 'TextEdit', });
lyr_Cities_9.set('fieldImages', {'fid': 'TextEdit', 'City': 'TextEdit', 'description': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '1st Partnership': 'TextEdit', '2nd Partnership': 'TextEdit', '3rd Partnership': 'TextEdit', '4th Partnership': 'TextEdit', });
lyr_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Layer': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution': 'TextEdit', 'Regional Authority': 'TextEdit', 'Other Stakeholder ': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Member State': 'TextEdit', 'Department': 'TextEdit', 'EU Presidency': 'TextEdit', 'Status': 'TextEdit', });
lyr_19WaterSensitiveCityPartnershipoftheUAEU20252028_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Regional Authority': 'TextEdit', 'Coordinator': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation': 'TextEdit', 'European Institution': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_18CitiesofEqualityPartnershipoftheUAEU20242027_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Cities': 'TextEdit', 'Regional Authority': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution ': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Member State': '', 'Department': '', 'Status': '', 'EU Presidency': '', });
lyr_17FoodPartnershipoftheUAEU20242027_13.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation': 'TextEdit', 'European Instituion ': 'TextEdit', 'Member State': '', 'Department': '', 'Status': '', 'EU Presidency': '', });
lyr_16SustainableTourismPartnershipoftheUAEU20232026_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator ': 'TextEdit', 'European Institution': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Regional Authority': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_15GreeningCitiesPartnershipoftheUAEU20232026_15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Coordinator': 'TextEdit', 'City ': 'TextEdit', 'European Institution ': 'TextEdit', 'Other Stakeholder ': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Regional Authority ': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution': 'TextEdit', 'National Authority': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation': 'TextEdit', 'Regional Authority': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator ': 'TextEdit', 'European Institution': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Regional Authority': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_12ClimateAdaptationPartnershipoftheUAEU20172020_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_11EnergyTransitionPartnershipoftheUAEU20172020_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution ': 'TextEdit', 'Other Stakeholder ': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Regional Authority ': 'TextEdit', 'Member State': '', 'Department ': '', 'EU Presidency ': '', 'Status ': '', });
lyr_10SustainableLandUsePartnershipoftheUAEU20172020_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator ': 'TextEdit', 'European Institution ': 'TextEdit', 'Other Stakeholder ': 'TextEdit', 'Umbrella Organisation': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_9PublicProcurementPartnershipoftheUAEU20172024_21.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution ': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Regional Authority': 'TextEdit', 'Member State': 'TextEdit', 'Department': 'TextEdit', 'EU Presidency': 'TextEdit', 'Status': 'TextEdit', });
lyr_8JobsandSkillsPartnershipsoftheUAEU20172020_22.set('fieldImages', {'fid': '', 'id': '', 'Layer': '', 'City': '', 'Coordinator': '', 'Umbrella Organisation ': '', 'European Institution ': '', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_7CircularEconomyPartnershipoftheUAEU20172020_23.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Regional Authority ': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'European Institution': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency ': '', 'Status ': '', });
lyr_6UrbanMobilityPartnershipfortheUAEU20172020_24.set('fieldImages', {'fid': 'TextEdit', 'City': 'TextEdit', 'Coordinator ': 'TextEdit', 'European Institution ': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Regional Authoritiy': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_5DigitalTransitionPartnershipoftheUAEU20172020_25.set('fieldImages', {'fid': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution': 'TextEdit', 'Regional Authority ': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26.set('fieldImages', {'fid': 'TextEdit', 'Cities': 'TextEdit', 'Coordinators': 'TextEdit', 'European Institutions': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_3UrbanPovertyPartnershipoftheUAEU20162019_27.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'European Institution': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Regional Authority ': 'TextEdit', 'Member State': '', 'Department': '', 'EU Presidency': '', 'Status': '', });
lyr_2HousingPartnershipoftheUAEU20162019_28.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'City': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Coordinator': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'European Institution ': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'Member State': '', 'Department ': '', 'EU Presidency ': '', 'Status ': '', });
lyr_1AirQualityPartnershipoftheUAEU20162019_29.set('fieldImages', {'fid': 'TextEdit', 'City': 'TextEdit', 'Coordinator': 'TextEdit', 'European Institution': 'TextEdit', 'Other Stakeholder': 'TextEdit', 'Umbrella Organisation ': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Member State ': 'TextEdit', 'Department': 'TextEdit', 'EU Presidency': '', 'Status': '', });
lyr_UmbrellaOrganisations_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Organisation': 'inline label - visible with data', 'Layer': 'hidden field', '1st Partnership ': 'inline label - visible with data', '2nd Partnership': 'inline label - visible with data', '3rd Partnership': 'inline label - visible with data', '4th Partnership': 'inline label - visible with data', '5th Partnership': 'inline label - visible with data', '6th Partnership': 'inline label - visible with data', '7th Partnership': 'inline label - visible with data', '8th Partnership': 'inline label - visible with data', '9th Partnership': 'inline label - visible with data', '10th Partnership': 'inline label - visible with data', '11th Partnership': 'inline label - visible with data', '12th Partnership': 'inline label - visible with data', '13th Partnership': 'inline label - visible with data', '14th Partnership': 'inline label - visible with data', '15th Partnership': 'inline label - visible with data', '16th Partnership': 'inline label - visible with data', '17th Partnership': 'inline label - visible with data', '18th Partnership': 'inline label - visible with data', });
lyr_OtherStakeholders_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '1st Partnership': 'inline label - visible with data', '2nd Partnership': 'inline label - visible with data', });
lyr_RegionalAuthorities_6.set('fieldLabels', {'fid': 'hidden field', 'Regional Authority': 'inline label - visible with data', 'Department': 'inline label - visible with data', '1st Partnership ': 'inline label - visible with data', '2nd Partnership ': 'inline label - visible with data', '3rd Partnership ': 'inline label - visible with data', '4th Partnership ': 'inline label - visible with data', });
lyr_MemberStates_7.set('fieldLabels', {'fid': 'hidden field', 'National Authorities': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', '1st Partnership ': 'inline label - visible with data', '2nd Partnership ': 'inline label - visible with data', '3rd Partnership ': 'inline label - visible with data', });
lyr_Coordinators_8.set('fieldLabels', {'fid': 'hidden field', 'Coordinator': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Department': 'inline label - visible with data', '1st Partnership': 'inline label - visible with data', '2nd Partnership ': 'inline label - visible with data', });
lyr_Cities_9.set('fieldLabels', {'fid': 'hidden field', 'City': 'inline label - visible with data', 'description': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '1st Partnership': 'inline label - visible with data', '2nd Partnership': 'inline label - visible with data', '3rd Partnership': 'inline label - visible with data', '4th Partnership': 'inline label - visible with data', });
lyr_20BuildingDecarbonisationPartnershipoftheUAEU20252028_10.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Layer': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Regional Authority': 'inline label - visible with data', 'Other Stakeholder ': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_19WaterSensitiveCityPartnershipoftheUAEU20252028_11.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Regional Authority': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_18CitiesofEqualityPartnershipoftheUAEU20242027_12.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Cities': 'inline label - visible with data', 'Regional Authority': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', });
lyr_17FoodPartnershipoftheUAEU20242027_13.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation': 'inline label - visible with data', 'European Instituion ': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', });
lyr_16SustainableTourismPartnershipoftheUAEU20232026_14.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator ': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Regional Authority': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_15GreeningCitiesPartnershipoftheUAEU20232026_15.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Coordinator': 'inline label - visible with data', 'City ': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Other Stakeholder ': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Regional Authority ': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_14CultureandCulturalHeritageThematicPartnershipoftheUAEU20192024_16.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'National Authority': 'hidden field', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation': 'inline label - visible with data', 'Regional Authority': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_13SecurityinPublicSpacesPartnershipoftheUAEU20192022_17.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator ': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Regional Authority': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_12ClimateAdaptationPartnershipoftheUAEU20172020_18.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_11EnergyTransitionPartnershipoftheUAEU20172020_19.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Other Stakeholder ': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Regional Authority ': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department ': 'inline label - visible with data', 'EU Presidency ': 'inline label - visible with data', 'Status ': 'inline label - visible with data', });
lyr_10SustainableLandUsePartnershipoftheUAEU20172020_20.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator ': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Other Stakeholder ': 'inline label - visible with data', 'Umbrella Organisation': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_9PublicProcurementPartnershipoftheUAEU20172024_21.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Regional Authority': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_8JobsandSkillsPartnershipsoftheUAEU20172020_22.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Layer': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_7CircularEconomyPartnershipoftheUAEU20172020_23.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Regional Authority ': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency ': 'inline label - visible with data', 'Status ': 'inline label - visible with data', });
lyr_6UrbanMobilityPartnershipfortheUAEU20172020_24.set('fieldLabels', {'fid': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator ': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Regional Authoritiy': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_5DigitalTransitionPartnershipoftheUAEU20172020_25.set('fieldLabels', {'fid': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Regional Authority ': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_4InclusionofMigrantsandRefugeesPartnershipoftheUAEU20162024_26.set('fieldLabels', {'fid': 'hidden field', 'Cities': 'inline label - visible with data', 'Coordinators': 'inline label - visible with data', 'European Institutions': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_3UrbanPovertyPartnershipoftheUAEU20162019_27.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Regional Authority ': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_2HousingPartnershipoftheUAEU20162019_28.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'City': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Coordinator': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'European Institution ': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'Member State': 'inline label - visible with data', 'Department ': 'inline label - visible with data', 'EU Presidency ': 'inline label - visible with data', 'Status ': 'inline label - visible with data', });
lyr_1AirQualityPartnershipoftheUAEU20162019_29.set('fieldLabels', {'fid': 'hidden field', 'City': 'inline label - visible with data', 'Coordinator': 'inline label - visible with data', 'European Institution': 'inline label - visible with data', 'Other Stakeholder': 'inline label - visible with data', 'Umbrella Organisation ': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'Member State ': 'inline label - visible with data', 'Department': 'inline label - visible with data', 'EU Presidency': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_1AirQualityPartnershipoftheUAEU20162019_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});