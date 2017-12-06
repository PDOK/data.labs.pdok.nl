---
layout: default
title: PDOK data connector
---
<script src="https://connectors.tableau.com/libs/tableauwdc-2.3.latest.js" type="text/javascript"></script>
<script src="../js/wicket.js" type="text/javascript"></script>

<script>
    (function() {
        // Create the connector object
        var myConnector = tableau.makeConnector();

        myConnector.getSchema = function(schemaCallback) {

            var cols = [{
                    id: "nname",
                    dataType: tableau.dataTypeEnum.string
                }, {
                    id: "prox_cafe",
                    alias: "distance to a cafe",
                    dataType: tableau.dataTypeEnum.float
                }, {
                    id: "location",
                    dataType: tableau.dataTypeEnum.geometry
                   }];


                var tableSchema = {
                    id: "CBS",
                    alias: "Cafe proximity",
                    columns: cols
                };

            tableau.log(cols);
            schemaCallback([tableSchema]);
        };

        // Download the data
        myConnector.getData = function(table, doneCallback) {


            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://grlc.io/api/StanRonzhin/garlic/commit/e6f6cd864cf0a5efbec93e30f37759e4f7ac81fb/buurten?woonplaatsNaam=Apeldoorn",
                "method": "GET",
                "headers": {
                    "accept": "application/json"
                }
            };

            $.ajax(settings).done(function (resp) {
                var feat = resp.results.bindings,
                    tableData = [];

                // Iterate over the JSON object
                for (var i = 0, len = feat.length; i < len; i++) {
                    var wkt_data = new Wkt.Wkt();

                    wkt_data.read(feat[i].wkt.value);
                 //   tableau.log(wkt_data.toJson());
                 //   tableau.log(JSON.stringify(wkt_data.toJson()));

                    tableData.push({
                        "nname": feat[i].buurtNaam.value,
                        "prox_cafe": feat[i].cafeBuurt.value,
                        "location": wkt_data.toJson()
                    });
                }
                tableau.log(tableData);
                table.appendRows(tableData);
                doneCallback();
            });

        };

        tableau.registerConnector(myConnector);

        // Create event listeners for when the user submits the form
        $(document).ready(function() {
            $("#submitButton").click(function() {
                tableau.connectionName = "CBS data on cafees"; // This will be the data source name in Tableau
                tableau.submit(); // This sends the connector object to Tableau
            });
        });
    })();


</script>

<div class="container container-table">
    <div class="row vertical-center-row">
        <div class="text-center col-md-4 col-md-offset-4">
            Self-service data connector for Tableau
        </div>
    </div>
    <div class="container container-table">
        <div class="row vertical-center-row">
            <div class="text-center col-md-4 col-md-offset-4">
                <form>
                    Woonplaats Naam:<br>
                    <input type="text" name="firstname"><br>
                    CBS field name:<br>
                    <input type="text" name="lastname">
                </form>
            </div>
        </div>
        <div class="container container-table">
    <div class="row vertical-center-row">
        <div class="text-center col-md-4 col-md-offset-4">
            <button type="button" id="submitButton" class="btn btn-success" style="margin: 10px;">Get the Data!</button>
        </div>
    </div>
</div>
