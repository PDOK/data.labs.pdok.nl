'use strict';

let fieldworkFiles;
let parcelsToFieldwork;

const projection = ol.proj.get('EPSG:3857');
const parser = new ol.format.WMTSCapabilities();

const view = new ol.View({
  projection,
  center: [507260, 6847250],
  zoom: 19,
});

fetch('veldwerk-voor-1919.json')
  .then(res => res.json())
  .then(fieldwork => fieldworkFiles = fieldwork.map(entry => {
    const elements = entry.file.split('_');
    return {
      gemeente: elements[1],
      sectie: elements[2],
      veldwerk: parseInt(elements[3], 10),
      file: entry.file,
    };
  }));

fetch('parcels-to-fieldwork.json')
  .then(res => res.json())
  .then(lookupTable => parcelsToFieldwork = lookupTable);

fetch('https://geodata.nationaalgeoregister.nl/wmts?request=getcapabilities')
  .then(response => response.text()).then((text) => {
    const result = parser.read(text);
    const options = ol.source.WMTS.optionsFromCapabilities(result, {
      layer: 'brtachtergrondkaartpastel',
      matrixSet: 'EPSG:3857',
    });

    const wmsSource = new ol.source.TileWMS({
      url: 'https://geodata.nationaalgeoregister.nl/kadastralekaartv3/wms',
      params: {
        layers: 'perceel',
        crs: 'EPSG:3857',
      },
    });

    const layers = [
      new ol.layer.Tile({ source: new ol.source.WMTS(options) }),
      new ol.layer.Tile({
        source: wmsSource,
      }),
    ];

    const map = new ol.Map({
      controls: ol.control.defaults().extend([
        new ol.control.FullScreen(),
      ]),
      layers,
      target: 'map',
      view,
    });

    map.on('singleclick', (evt) => {
    // document.getElementById('info').innerHTML = '';
      const viewResolution = /** @type {number} */ (view.getResolution());
      let url = wmsSource.getGetFeatureInfoUrl(
        evt.coordinate, viewResolution, 'EPSG:3857',
        { INFO_FORMAT: 'application/json' },
      );
      if (url) {
        url += '&QUERY_LAYERS=perceel';
        fetch(url)
          .then(res => res.json())
          .then((featureInfo) => {
            const parcelNumber = featureInfo.features[0].properties.perceelnummer;
            let innerHTML = `
<h1>Huidig perceel</h1><br>
${parcelNumber}
<h1>Historisch veldwerk</h1>
`;
            const foundFieldwork = parcelsToFieldwork
              .filter(entry => entry.Perceel.toString() === parcelNumber)
              .filter(entry => fieldworkFiles
                .filter(f => f.veldwerk === entry.Veldwerk).length > 0);

            const foundFiles = foundFieldwork.map(entry => fieldworkFiles
              .filter(f => f.veldwerk === entry.Veldwerk));

            if (foundFieldwork.length > 0) {
              foundFieldwork.forEach((found, index) => {
                innerHTML += `Veldwerk ${found.Veldwerk.toString()}<br>`;
                foundFiles[index]
                  .forEach((file) => {
                    const imgUri = `https://data.labs.pdok.nl/dumps/perceel/veldwerk/${file.file}`;
                    innerHTML += `<a href="${imgUri}" target="_blank"><img src="${imgUri}" /></a>`;
                  });
              });
            } else {
              innerHTML += 'Geen historisch veldwerk voor 1919 gevonden\n';
            }
            document.getElementById('overlay').innerHTML = innerHTML;
          });
      }
    });
  });

function setMapToFullScreen(){
  const elem = document.getElementById('map');
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
}

document.getElementById('fullscreen').addEventListener('click', setMapToFullScreen);
