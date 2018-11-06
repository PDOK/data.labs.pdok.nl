
    $(document).ready(function() {
        $("#submitButton").click(function() {

            $("#map").empty();

            var userInput = $('#topoName').val().trim();

            console.log(userInput);

            var username = "elsld";
            var password = "Fee44Poz8";


            $.ajax({
                "url": "https://193.166.25.14/elsld/LDService?request=GetLinkedData&name=" + userInput,
                // "url": "http://127.0.0.1:5000/stories/OpenELS/data.json",
                "async": true,
                "crossDomain": true,
                //      "username": "elsld",
                //    "password": "Fee44Poz8",
                "headers": {
                    "Authorization": "Basic" + btoa(username + ":" + password)
                },

                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
                },

                "success": function(data) {
                     console.log(data);

                    var features = [];

                    //iterate through array...
                    for( var i = 0 ; i < data.length ; i++){
                        var item = data[i];                                     //get item
                        var type = item.type;                                   //get type
                        var name = item.name;
                        var longitude = item.lon;                         //coordinates
                        var latitude = item.lat;
                        /*....
                        * now get your specific icon...('..../ic_customMarker.png')
                        * by e.g. switch case...
                        */
                        // var iconPath = getIconPath(type);

                        //create Feature... with coordinates
                        var iconFeature = new ol.Feature({
                            geometry: new ol.geom.Point(ol.proj.transform([longitude, latitude], 'EPSG:4326',
                                'EPSG:3857'))
                        });

                        //create style for your feature...
                        var iconStyle = new ol.style.Style({
                            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                                anchor: [0.5, 46],
                                anchorXUnits: 'fraction',
                                anchorYUnits: 'pixels',
                                opacity: 0.75,
                                src: 'pic1.png',
                            }))
                        });

                        iconFeature.setStyle(iconStyle);
                        features.push(iconFeature);
                        //next item...
                    }
                    //    console.log("what is inside" + JSON.stringify(features));
                    console.log(data);

                    $('#table').DataTable( {
                        data: data,
                        order: [[ 1, "asc" ]],
                        destroy: true,
                        scrollY:        "400px",
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
                    } );

                    var container = document.getElementById('popup');
                    var content = document.getElementById('popup-content');
                    var closer = document.getElementById('popup-closer');


                    /**
                     * Create an overlay to anchor the popup to the map.
                     */
                    var overlay = new ol.Overlay({
                        element: container,
                        autoPan: true,
                        autoPanAnimation: {
                            duration: 250
                        }
                    });


                    /**
                     * Add a click handler to hide the popup.
                     * @return {boolean} Don't follow the href.
                     */
                    closer.onclick = function() {
                        overlay.setPosition(undefined);
                        closer.blur();
                        return false;
                    };


                    var vectorSource = new ol.source.Vector({
                        features: features      //add an array of features
                        //,style: iconStyle     //to set the style for all your features...
                    });

                    var vectorLayer = new ol.layer.Vector({
                        source: vectorSource
                    });


                    var clusterSource = new ol.source.Cluster({
                        distance: parseInt(10, 10),
                        source: vectorSource
                    });

                    var styleCache = {};
                    var clusters = new ol.layer.Vector({
                        source: clusterSource,
                        style: function(feature) {
                            var size = feature.get('features').length;
                            var style = styleCache[size];
                            if (!style) {
                                style = new ol.style.Style({
                                    image: new ol.style.Circle({
                                        radius: 10,
                                        stroke: new ol.style.Stroke({
                                            color: '#fff'
                                        }),
                                        fill: new ol.style.Fill({
                                            color: '#3399CC'
                                        })
                                    }),
                                    text: new ol.style.Text({
                                        text: size.toString(),
                                        fill: new ol.style.Fill({
                                            color: '#fff'
                                        })
                                    })
                                });
                                styleCache[size] = style;
                            }
                            return style;
                        }
                    });

                    //draw the map...

                    map = new ol.Map({
                        target: 'map',
                        height: '400px',
                        overlays: [overlay],
                        layers: [
                            new ol.layer.Tile({
                                source: new ol.source.OSM()
                            }),
                            // vectorLayer,
                            clusters
                            //clusterlayer
                        ],
                        view: new ol.View({
                            center: ol.proj.fromLonLat([37.41, 8.82]),
                            zoom: 4
                        })
                    });


                    // position the camera ...
                    var extent = vectorLayer.getSource().getExtent();
                    map.getView().fit(extent, map.getSize());

                    var select = null; // ref to currently selected interaction

                    // select interaction working on "singleclick"
                    var selectSingleClick = new ol.interaction.Select();
                    map.addInteraction(selectSingleClick);

                    map.on('singleclick', function(evt) {
                        var coordinate = evt.coordinate;
                        //   var hdms = toStringHDMS(toLonLat(coordinate));

                        content.innerHTML = '<p>' + evt.target + '</p>';
                        console.log(evt.selected);
                        overlay.setPosition(coordinate);
                    });


                    // map.addLayer(vectorLayer);



                }
            });

        });
    });
