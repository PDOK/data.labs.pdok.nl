
$(document).ready(function() {

    $('form').on('submit', (event)=>{

        event.preventDefault();

    var userInput = $('#topoName').val().trim();
    console.log(userInput);

    var username = "elsld";
    var password = "Fee44Poz8";

    $.ajax({
        // "url": "https://193.166.25.14/elsld/LDService?request=GetLinkedData&name=" + userInput,
        "url": "https://data.labs.pdok.nl/openels/geolocator?request=GetLinkedData&name=" + userInput,
        "async": true,
        "crossDomain": true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
        },
        "success": function(data) {
            var toponyms = L.featureGroup();

            document.getElementById('geolocator').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";

            var map = new L.map('map');
            //iterate through array...
            for( var i = 0 ; i < data.length ; i++){
                var item = data[i];                                     //get item
                var type = item.type;                                   //get type
                var name = item.name;
                var longitude = item.lon;                         //coordinates
                var latitude = item.lat;
                var markerLocation = new L.LatLng(latitude, longitude);
                var marker = new L.Marker(markerLocation);
                marker.bindPopup(name);
                marker.addTo(toponyms);
            }

            console.log(data);

            $('#table').DataTable( {
                data: data,
                order: [[ 1, "asc" ]],
                destroy: true,
                scrollY:        "200px",
                // scrollCollapse: true,
                paging: false,
                searching: false,
                select: 'single',

                buttons: [
                    'copy',
                    'csv'
                ],
                columns: [
                    {
                        // data: "uri",
                        title: "Toponym",
                        render: function(data, type, full, meta) {
                            return '<a href="' + full.uri + '">' + full.name  + '</a>';
                        }
                    },
                    // { data: "lat" },
                    // { data: "lon" },
                    // { data: "srs" },
                    {
                        data: "type",
                        title: "Object type",
                    },
                    {
                        data: "country",
                        title: "Country"
                    }
                ]
            });


            //draw the map...
            //draw the map...
            var NLwmts = "https://geodata.nationaalgeoregister.nl/tiles/service/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=brtachtergrondkaart&STYLE=default&FORMAT=image/png&TILEMATRIXSET=EPSG:3857&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";
            var FNwmts = "https://avoin-karttakuva.maanmittauslaitos.fi/avoin/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=taustakartta&STYLE=default&FORMAT=image/png&TILEMATRIXSET=WGS84_Pseudo-Mercator&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";
            var NOwmts = "https://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=topo4&STYLE=default&FORMAT=image/png&TILEMATRIXSET=EPSG:3857&TILEMATRIX=EPSG:3857:{z}&TILEROW={y}&TILECOL={x}";
            var SPwmts = "http://www.ign.es/wmts/ign-base?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=IGNBase-gris&STYLE=default&FORMAT=image/jpeg&TILEMATRIXSET=GoogleMapsCompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";


            var layerNL  = L.tileLayer(NLwmts, {
                attribution: '<a href="http://www.verbeterdekaart.nl/">Kadaster</a>'
            });
            var layerFN  = L.tileLayer(FNwmts, {
                attribution: "<a href=http://www.maanmittauslaitos.fi >Maanmittauslaitos</a>"
            });
            var layerNO  = L.tileLayer(NOwmts, {
                attribution: "<a href=https://www.kartverket.no>Kartverket</a>"
            });
            var layerSP = L.tileLayer(SPwmts,{
                attribution: "<a href=http://www.ign.es>Instituto Geográfico Nacional</a>"
            });

            var baseLayers = {
                "Toponyms": toponyms
            };

            var overlays = {
                "NL": layerNL,
                "FN": layerFN,
                "NO": layerNO,
                "SP": layerSP,
            };
            toponyms.addTo(map);
            map.fitBounds(toponyms.getBounds());
            // layerNL.addTo(map);
            layerNO.addTo(map);
            layerFN.addTo(map);
            layerSP.addTo(map);
            L.control.layers(baseLayers, overlays).addTo(map);
            L.control.scale({imperial:false}).addTo(map);


        }
    });
});
});
