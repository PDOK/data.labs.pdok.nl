---
layout: default
title: TerugmeldData connector
---
<script src="https://connectors.tableau.com/libs/tableauwdc-2.3.latest.js" type="text/javascript"></script>

<div class="container container-table">
        <div class="row vertical-center-row">
            <div class="text-center col-md-4 col-md-offset-4">
                <button type="button" id="submitButton" class="btn btn-success" style="margin: 10px;">Get Terugmelddata!</button>
            </div>
        </div>
        
        
<script>  
        (function () {
        	//Create the connector
            var myConnector = tableau.makeConnector();
        
        	myConnector.getSchema = function (schemaCallback) {
        		var cols = [{
        			id: "basisregistratie",
        			dataType: tableau.dataTypeEnum.string
        		},  {
        			id: "bronhoudernaam",
        			alias: "bronhoudernaam",
        			dataType: tableau.dataTypeEnum.string
        		}, {
        			id: "status",
        			dataType: tableau.dataTypeEnum.string
        		}];
        
        		var tableSchema = {
        			id: "Terugmelddata",
        			alias: "Test",
        			columns: cols
        		};
        
        		schemaCallback([tableSchema]);
        	};
        
        
        	//download the data
        	myConnector.getData = function(table, doneCallback) {
          var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.acceptatie.kadaster.nl/tms/v1/terugmeldingen?apikey=l71c0911dd8fe14be1abba40a2f4ba3e69",
  "method": "GET"
}
        $.ajax(settings).done(function (resp) {
            var feat = resp._embedded.panden,
                tableData = [];
        
        			// Iterate over the JSON object
        			for (var i = 0, len = feat.length; i < len; i++) {
        				tableData.push({
        					"basisregistratie": feat[i].properties.basisregistratie,
        					"bronhoudernaam": feat[i].properties.bronhoudernaam,
        					"status": feat[i].properties.status
        
        				});
        			}
        
        			table.appendRows(tableData);
        			doneCallback();
        		});
        	};
        
            tableau.registerConnector(myConnector);
        })();
        
        $(document).ready(function () {
            $("#submitButton").click(function () {
                tableau.connectionName = "BAG Terugmelddata";
                tableau.submit();
            });
        });
</script>
