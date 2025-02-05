var size = 0;
var placement = 'point';
function categories_5DigitalTransitionPartnershipoftheUAEU20172020_25(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {
                    case 'Cities':
                        return [ new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [800, 800],
                                scale: 0.0425,
                                anchor: [400, 800],  // Changed anchor
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                rotation: 0.0,
                                src: "styles/Placemarker_Grey_1.svg"
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                        break;
                    case 'European Institutions':
                        return [ new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [800, 800],
                                scale: 0.0425,
                                anchor: [400, 800],  // Changed anchor
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                rotation: 0.0,
                                src: "styles/European Institutions ICON_15.svg"
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                        break;
                    case 'Coordinators':
                        return [ new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [800, 800],
                                scale: 0.0325,
                                anchor: [600, 600],  // Changed anchor
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                rotation: 0.0,
                                src: "styles/Coordinator_33.svg"
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                        break;
                    case 'National Authority':
                        return [ new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [100, 100],
                                scale: 0.26,
                                anchor: [60, 60],  // Changed anchor
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                rotation: 0.0,
                                src: "styles/National Authorities_35.svg"
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                        break;
                    case 'Regional Authorities':
                        return [ new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [1000, 1000],
                                scale: 0.026,
                                anchor: [600, 600],  // Changed anchor
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                rotation: 0.0,
                                src: "styles/Regional Authorities_21.svg"
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                        break;
                    case 'Umbrella Organisations':
                        return [ new ol.style.Style({
                            image: new ol.style.Icon({
                                imgSize: [1000, 1000],
                                scale: 0.026,
                                anchor: [600, 600],  // Changed anchor
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                rotation: 0.0,
                                src: "styles/Umbrella Organisation_24.svg"
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })];
                        break;
                }
};

var style_5DigitalTransitionPartnershipoftheUAEU20172020_25 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("layer");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_5DigitalTransitionPartnershipoftheUAEU20172020_25(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
