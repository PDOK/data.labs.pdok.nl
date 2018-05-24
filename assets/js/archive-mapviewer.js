const projection = ol.proj.get('EPSG:3857');
const parser = new ol.format.WMTSCapabilities();

const view = new ol.View({
  projection: projection,
  center: [507260,6847250],
  zoom: 19
});

fetch('https://geodata.nationaalgeoregister.nl/wmts?request=getcapabilities')
  .then(function(response) {
  return response.text();
}).then(function(text) {
  const result = parser.read(text);
  const options = ol.source.WMTS.optionsFromCapabilities(result, {
    layer: 'brtachtergrondkaartpastel',
    matrixSet: 'EPSG:3857'
  });

  const wmsSource = new ol.source.TileWMS({
    url: 'https://geodata.nationaalgeoregister.nl/kadastralekaartv3/wms',
    params: {
      layers: 'perceel',
      crs: 'EPSG:3857',
    }
  });

  const layers = [
    new ol.layer.Tile({ source: new ol.source.WMTS(options) }),
    new ol.layer.Tile({
      source: wmsSource
    })
  ];

  const map = new ol.Map({
    controls: ol.control.defaults().extend([
      new ol.control.FullScreen()
    ]),
    layers: layers,
    target: 'map',
    view: view
  });

  map.on('singleclick', function(evt) {
    // document.getElementById('info').innerHTML = '';
    const viewResolution = /** @type {number} */ (view.getResolution());
    let url = wmsSource.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      {'INFO_FORMAT': 'application/json'});
    if (url) {
      url += '&QUERY_LAYERS=perceel';
      fetch(url)
        .then(res => res.json())
        .then(featureInfo => {
          const parcelNumber = featureInfo.features[0].properties.perceelnummer;
          document.getElementById('overlay').innerHTML = `
<h1>Huidig perceel</h1><br>
${parcelNumber}
`;
        })
    }
  });
});
