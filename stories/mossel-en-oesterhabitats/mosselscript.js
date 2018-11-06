/* global YASGUI */
document.addEventListener("DOMContentLoaded", function(event) {

const query = `
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
PREFIX uom: <http://www.opengis.net/def/uom/OGC/1.0/>

select * where {
  graph <http://data.pdok.nl/mossel-en-oesterhabitats> {
    ?s geo:hasGeometry/geo:asWKT ?wkt .
    bind(geof:distance(
      ?wkt, "POINT(5 52)"^^geo:wktLiteral, uom:metre) as ?dist_metres
    )
    bind(
      concat("Op slechts ", str(round(?dist_metres / 1000)), " km. (water)fietsen!" )
      as ?wktLabel)
  }
}
order by ?dist_metres
limit 10`;

Yasgui.Yasqe.Instance.defaults.value = query;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(location => {
    Yasgui.Yasqe.Instance.defaults.value = query.replace(
      'POINT(5 52)', `POINT(${location.coords.longitude} ${location.coords.latitude})`
    );
    Yasgui.stories();
  });
}
});
