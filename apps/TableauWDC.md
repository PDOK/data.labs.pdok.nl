---
layout: default
title: PDOK data connector
---


<script src="https://connectors.tableau.com/libs/tableauwdc-2.3.latest.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/wicket/1.3.2/wicket.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js" type="text/javascript"></script>

<div class="container container-table">
        <div class="row vertical-center-row">
            <div class="text-center col-md-4 col-md-offset-4">
                <h2>Get Building Footprints for a Neighbourhood</h2>
                <p> 
This is a Web Data Connector that helps to consume BAG data from within Tableau Desktop. 
In order ot access the data in Tableau Desktop:
<ol type="1">
  <li>Navigate to <em>Data>New Data Source>WebDataConnector</em> or just press <em>Ctr+D</em>.</li>
  <li>In the Web Data Connector window enter the URL of current page (https://data.labs.pdok.nl/apps/TableauWDC.html) and press <em>Enter</em></li>
  <li>Scroll dawn the page to see the form and the <em>Get The Buildings!</em> button</li>
  <li>Type name of a neighbourhood you are interested in, e.g <em>Twekkelerveld</em> and click the button</li>
</ol>
</p>
                <form>
                    <div class="form-inline">
                        <label for="buurtNaam" class="text-center">Type the name of a neighbourhood</label>

				    <div class="form-inline">
				        <input type="text" class="form-control" id="buurtNaam" value="Twekkelerveld">
				    </div>

                <button type = "button" id = "submitButton" class = "btn btn-success" style = "margin: 10px;">Get The Buildings!</button>
                <div id="errorMsg"></div>
            </div>

     <script>
                        (function() {
                            // Create the connector object
                            var myConnector = tableau.makeConnector();

                            myConnector.getSchema = function(schemaCallback) {

                                var cols = [{
                                    id: "pand",
                                    alias: "Pand URI",
                                    dataType: tableau.dataTypeEnum.string
                                }, {
                                    id: "pandID",
                                    alias: "pand ID",
                                    dataType: tableau.dataTypeEnum.string
                                }, {
                                    id: "year",
                                    alias: "year of construction",
                                    dataType: tableau.dataTypeEnum.int
                                }, {
                                    id: "voorkomenPand",
                                    alias: "voorkomen",
                                    dataType: tableau.dataTypeEnum.string
                                }, {
                                    id: "beginPand",
                                    alias: "date of registration",
                                    dataType: tableau.dataTypeEnum.datetime
                                }, {
                                    id: "endPand",
                                    alias: "date of expiration",
                                    dataType: tableau.dataTypeEnum.datetime
                                }, {
                                    id: "location",
                                    alias: "geographical location",
                                    dataType: tableau.dataTypeEnum.geometry
                                }, {
                                    id: "buurtNaam",
                                    alias: "Name of neighbourhood",
                                    dataType: tableau.dataTypeEnum.string
                                }
                                ];


                                var tableSchema = {
                                    id: "BagvoorBuurt",
                                    alias: "Registration and expiration dates of panden",
                                    columns: cols
                                };

                                tableau.log(cols);
                                schemaCallback([tableSchema]);
                            };

                            myConnector.getData = function(table, doneCallback) {
                                var userInput = JSON.parse(tableau.connectionData),
                                    apiCall = "https://data.labs.pdok.nl/api/StanRonzhin/tableauIntegration/PandenVoorBuurt?buurtNaam=" + userInput.input,
                                api_call_sparql = "https://data.pdok.nl/sparql?query=Prefix%20bag%3A%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%20%0D%0APrefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%20%0D%0APrefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%20%0D%0APrefix%20cbs_vocab%3A%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fcbs%2Fvocab%2F%3E%0D%0APrefix%20cbs_def%3A%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fcbs%2Fdef%2F%3E%0D%0A%20%0D%0Aselect%20distinct%20%20%3Fpand%20%3FpandID%20%3Fyear%20%3FvoorkomenPand%20%3FbeginPand%20%3FendPand%20%20%3Fwkt%0D%0A%7B%0D%0A%20%20%20%20Service%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fsparql%3E%20%7B%20%0D%0A%09Graph%20%3Chttp%3A%2F%2Fdata.pdok.nl%2Flinksets%2FVerblijfsobjecten2Buurten2016%3E%7B%0D%0A%20%20%20%20%20%20%3Fs%20%3Fp%20%3Fo%7D%0D%0A%20%20%20%20%20%20%3Fbuurt%20cbs_def%3ABU_CODE%20%3FbuurtCode%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20cbs_def%3ABU_NAAM%20%22" + userInput.input + "%22%20.%20%0D%0A%20%20%20%20%20%20%3Fo%20cbs_vocab%3Aregioaanduiding_Codering_code%20%3FbuurtCode.%0D%0A%20%20%7D%20%20%0D%0A%20%20%20%20%3Fs%20rdfs%3AisDefinedBy%20%3Fvoorkomen.%0D%0A%20%20%3Fvoorkomen%20bag%3AbeginGeldigheid%20%3Fbegin.%20%0D%0A%20%20%3Fs%20bag%3Apandrelatering%20%3Fpand.%20%0D%0A%20%20%3Fpand%20bag%3Aidentificatiecode%20%3FpandID%3B%0D%0A%09%09geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fwkt%3B%0D%0A%20%20%20%20%20%20%20%20bag%3AoorspronkelijkBouwjaar%20%3Fyear%3B%0D%0A%09%09rdfs%3AisDefinedBy%20%3FvoorkomenPand%20.%20%0D%0A%3FvoorkomenPand%20bag%3AbeginGeldigheid%20%3FbeginPand.%20%0D%0A%20Optional%20%7B%3FvoorkomenPand%20bag%3AeindGeldigheid%20%3FendPand%7D%20%0D%0A%7D%20";

                                var settings = {
                                    "async": true,
                                    "crossDomain": true,
                                    "url": api_call_sparql,
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
                                        var dateFormat = "Y-MM-DD HH:mm:ss";
                                        var beginPand = moment(feat[i].beginPand.value).format(dateFormat);

                                        tableData.push({
                                            "buurtNaam": userInput.input,
                                            "pand": feat[i].pand.value,
                                            "pandID": feat[i].pandID.value,
                                            "year": feat[i].year.value,
                                            "voorkomenPand": feat[i].voorkomenPand.value,
                                            "beginPand": beginPand,
                                            "endPand" : (function() {
                                                if (typeof feat[i].endPand == 'undefined') {
                                                    return moment().format(dateFormat);
                                                } else { return moment(feat[i].endPand.value).format(dateFormat);                                                     }})(),
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
                                    var userInput = {
                                        input: $('#buurtNaam').val().trim()
                                    };
                                    tableau.connectionData = JSON.stringify(userInput); // Use this variable to pass data to your getSchema and getData functions
                                    tableau.log(userInput);

                                    tableau.connectionName = "Panden voor Buurt"; // This will be the data source name in Tableau
                                    tableau.submit(); // This sends the connector object to Tableau
                                });
                            });
                        })();


                    </script>
