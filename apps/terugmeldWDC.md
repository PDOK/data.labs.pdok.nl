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
        		$.getJSON("https://github.com/leonhertgers/Live-Data-in-een-dashboard/data.json", function(resp) {
        			var feat = resp.features,
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