var size = 0;
var placement = 'point';
function categories_MemberStates_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case '1) Air Quality Partnership of the UAEU (2016-2019)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '2) Housing Partnership of the UAEU (2016-2019)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_1.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '3) Urban Poverty Partnership of the UAEU (2016-2019)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_2.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '4) Inclusion of Migrants and Refugees Partnership of the UAEU (2016-2024)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_3.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '5) Digital Transition Partnership of the UAEU (2017-2020)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_4.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '6) Urban Mobility Partnership for the UAEU (2017-2020)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_5.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '7) Circular Economy Partnership of the UAEU (2017-2020)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_6.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '8) Jobs and Skills Partnerships of the UAEU (2017-2020)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_7.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '9) Public Procurement Partnership of the UAEU (2017-2024)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_8.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '10) Sustainable Land Use Partnership of the UAEU (2017-2020)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_9.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '11) Energy Transition Partnership of the UAEU (2017-2020)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_10.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '12) Climate Adaptation Partnership of the UAEU (2017-2020)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_11.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '13) Security in Public Spaces Partnership of the UAEU (2019-2022)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_12.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '14) Culture and Cultural Heritage Partnership of the UAEU (2019-2024)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_13.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '15) Greening Cities Partnership of the UAEU (2023-2026)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_14.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '16) Sustainable Tourism Partnership of the UAEU (2023-2026)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_15.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '17) Food Partnership of the UAEU (2024-2027)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_16.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '18) Cities of Equality Partnership of the UAEU (2024-2027)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_17.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '19) Water Sensitive City Partnership of the UAEU (2025-2028)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_18.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
        case '20) Building Decarbonisation Partnership of the UAEU (2025-2028)':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [100, 100],
                    scale: 0.26,
                    anchor: [60, 60], // updated anchor values
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/National Authorities_19.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
            break;
    }
};

var style_MemberStates_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "center";
    var offsetX = 15;
    var offsetY = 10;
    var feature
    var value
    var clusteredFeatures = feature.get("features");
    size = clusteredFeatures.length;
    if (size == 1) { // If cluster has one feature
        var feature = clusteredFeatures[0];
        value = clusteredFeatures[0].get("1st Partnership ");
        if ("" !== null) {
            labelText = String("");
        }
    } else { // If cluster has more than one feature
        labelText = size.toString();
        var radius = 6 + Math.log(size) * 3;
        var maxClusterSize = 80;
        var relativeSize = Math.min(size / maxClusterSize, 1);
        var redComponent, greenComponent, blueComponent = 0;
        if (relativeSize < 0.5) {
            redComponent = Math.floor(210 * (relativeSize / 0.5));
            greenComponent = 210;
        } else {
            redComponent = 210;
            greenComponent = Math.floor(210 * (1 - (relativeSize - 0.5) / 0.5));
        }
        var color = `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.75)`;
        return [
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: radius + 4,
                    fill: new ol.style.Fill({
                        color: `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.3)`
                    })
                })
            }),
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: radius,
                    fill: new ol.style.Fill({
                        color: color
                    })
                }),
                text: new ol.style.Text({
                    font: labelFont,
                    text: labelText,
                    fill: new ol.style.Fill({
                        color: labelFill
                    }),
                    placement: placement
                })
            })
        ];
    } 
    var style = categories_MemberStates_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

