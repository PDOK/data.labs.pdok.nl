/* Gebruik in een story:
in yaml front matter in de data story markdown: voeg toe:
basemap: rwsGeluid

Voeg toe bovenin de body van data story:
<script src="/assets/js/yasr-geluidskaart-basemap.js"></script>
 */


YASGUI.YASR.plugins.leaflet.defaults.maps.rwsGeluid = function (yasr, L) {
  return {
    layers: [
      new L.tileLayer.wms('https://geodata.nationaalgeoregister.nl/rwsgeluidskaarten/wms', {
        layers: 'rwsgeluidskaarten:Lden_2011',
        crs: L.CRS.EPSG3857,
        attribution: '<a href="http://nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/4b6752ae-65d6-44b5-98ef-1fc30f4fd92d?tab=general" target="_blank">Rijkswaterstaat Geluidskaarten Rijkswegen</a>',
      }),
    ],
  };
};

