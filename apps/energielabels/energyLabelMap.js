'use strict';

/* global ol */

const projection = ol.proj.get('EPSG:3857');
const projectionExtent = projection.getExtent();
const size = ol.extent.getWidth(projectionExtent) / 256;
const resolutions = new Array(14);
const matrixIds = new Array(14);
for (let z = 0; z < 20; ++z) {
  // generate resolutions and matrixIds arrays for this WMTS
  resolutions[z] = size / Math.pow(2, z);
  matrixIds[z] = z;
}

const bagSource = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
  url(extent) {
    return `
https://geodata.nationaalgeoregister.nl/bag/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=bag:pand&
outputFormat=application/json&srsname=EPSG:3857&bbox=${extent.join(',')},EPSG:3857`;
  },
  strategy: ol.loadingstrategy.bbox,
});


const standardStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'rgba(0, 0, 255, 1.0)',
    width: 2,
  }),
});

const newStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'rgba(0, 255, 255, 1.0)',
    width: 2,
  }),
});


const bagPandLayer = new ol.layer.Vector({
  source: bagSource,
  style: standardStyle,
});

const brtBasemap = new ol.layer.Tile({
  opacity: 0.7,
  source: new ol.source.WMTS({
    attributions: 'Kaartgegevens: &copy; <a href="https://www.kadaster.nl">Kadaster</a>',
    url: 'https://geodata.nationaalgeoregister.nl/tiles/service/wmts?',
    layer: 'brtachtergrondkaart',
    matrixSet: 'EPSG:3857',
    format: 'image/png',
    projection,
    tileGrid: new ol.tilegrid.WMTS({
      origin: ol.extent.getTopLeft(projectionExtent),
      resolutions,
      matrixIds,
    }),
    style: 'default',
    wrapX: false,
  }),
});

const map = new ol.Map({
  layers: [brtBasemap, bagPandLayer],
  target: document.getElementById('map'),
  view: new ol.View({
    center: [600461, 6827752],
    minZoom: 14,
    maxZoom: 19,
    zoom: 18,
  }),
});

map.on('moveend', (event) => {
  const eventMap = event.map;
  const extent = eventMap.getView().calculateExtent(eventMap.getSize());
  console.log(eventMap.getView());
  bagSource.forEachFeatureInExtent(extent, (f) => {
    let props = f.getProperties();
    if (!('energielabel' in props)) {
      const prediction = energyLabelDecisionTree(props.bouwjaar, props.oppervlak);
      const energyLabel = Object.keys(energyLabelMapping)
        .filter(key => energyLabelMapping[key].index === prediction.label)[0];

      f.setProperties({ energielabel: energyLabel });
      props = f.getProperties();

      const r = energyLabelMapping[energyLabel].color[0];
      const g = energyLabelMapping[energyLabel].color[1];
      const b = energyLabelMapping[energyLabel].color[2];

      const style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: `rgba(${r}, ${g}, ${b}, 1.0)`,
        }),
        // stroke: new ol.style.Stroke({
        //   color: `rgba(0, ${Math.random() * 255}, ${Math.random() * 255}, 1.0)`,
        //   width: 2,
        // }),
      });
      f.setStyle(style);
    }
  });
});
