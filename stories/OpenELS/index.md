---
endpoint: https://data.labs.pdok.nl/openels/sparql
layout: story
logo: /stories/OpenELS/logo.png
output: leaflet
title:  .
---

## Geolocator
   
  
  <link rel="stylesheet" type="text/css" href="/assets/css/ol.css"/>
  <link rel="stylesheet" type="text/css" href="/assets/css/datatables.min.css"/>
  <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
 
  <style>
      .map {
        height: 100%;
      }
  </style>
    
  <script type="text/javascript" src="/assets/js/ol.js"></script>
  <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/assets/js/datatables.min.js"></script>
 
  <nav class="navbar navbar-light bg-light">
      <form class="form-inline">  
          <label for="topoName" class="font-weight-normal">Here you can search for toponyms:  </label>
          <input type="search" class="form-control" id="topoName" placeholder="e.g. Amsterdam"/>
          <button type="button" id="submitButton" class="btn btn-info">Search</button>
      </form>
  </nav>
  
  <div class="container">
      <div class="row">
          <div class="col-sm-6">  
              <div id="popup" class="ol-popup">
                  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                  <div id="popup-content"></div>
              </div>
              <div id="map"></div>
          </div>
          <div class="col-sm-5">
          <table id="table" class="table"></table>
          </div>
      </div>
  </div>+
  
  
  <script type="text/javascript" src="geolocator.js"></script>
  
  
  
  
## Administrative units

  Each national territory is divided into administrative units. In the Netherlands there are three levels of administrative units:
  * Country (1)
  * Provinces (12)
  * Municipalities (388)
  
  <div data-query="http://127.0.0.1:5000/stories/OpenELS/#query=PREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APrefix+au%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23%3E%0APrefix+nationallevel%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F%3E%0A%0Aselect+distinct+%0A%23%3Fau+%3FauLevel%0A%23%3FauFinLabel+%3FauFinLevel+%3Fd%0A%3Fg+%3Forder+(count(%3Fau)+as+%3Fcount)%0A+%7B+%0A++%0A+%7Bgraph+%3Fg+%7B+%3Fau+a++au%3AAdministrativeUnit%3B%0A++++rdfs%3Alabel+%3FauLabel%3B%0A+++++au%3AAdministrativeUnit.nationalLevel+%3FauLevel.%0A++++++Bind+(Strafter(str(%3FauLevel)%2C%22http%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F%22)+as+%3Forder+)%0A++++%7D%7D%0A++++Union+%0A++%7B%0A++SERVICE+%3Chttp%3A%2F%2F193.167.189.160%2Fopenels%2Ffuseki%2Fds%2Fquery%3E%7B+%0A++++++graph+%3Fg+%7B+%3Fau+a++au%3AAdministrativeUnit%3B%0A++++rdfs%3Alabel+%3FauLabel%3B%0A+++++au%3AAdministrativeUnit.nationalLevel+%3FauLevel.%0A++++++++++++Bind+(Strafter(str(%3FauLevel)%2C%22http%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F%22)+as+%3Forder+)%0A%23+++++au%3AAdministrativeUnit.nationalLevelName+%3Fd.%0A+++++%7D%0A++++%7D%0A++%7D%0A++Union%0A++%7B%0A++SERVICE+%3Chttp%3A%2F%2Frdf.kartverket.no%2F%2Fsparql%3E+%7B+%0A++++++Values+%3Fg+%7B%3Chttp%3A%2F%2Fopenels%2Fadministrativeunits%3E%7D%0A++++++graph+%3Fg+%7B+%3Fau+a++au%3AAdministrativeUnit%3B%0A%23++++rdfs%3Alabel+%3FauLabel%3B%0A+++++au%3AAdministrativeBoundary.nationalLevel+%3Forder1.%0A++++++++Bind+(replace((%3Forder1)%2C+%22'%22%2C+%22%22)+as+%3Forder)%0A%23+++++au%3AAdministrativeUnit.nationalLevelName+%3Fd.%0A+++++%7D%0A++++%7D%0A+++++%7D%0A+%7D+%23limit+10%0AGroup+by+%3Fg+%3Forder%0A%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fopenels%2Fsparql&requestMethod=POST&tabTitle=Query+16&headers=%7B%7D&outputFormat=pivot&outputSettings=%7B%22pivotTable%22%3A%7B%22cols%22%3A%5B%22order%22%5D%2C%22rows%22%3A%5B%22g%22%5D%2C%22rendererName%22%3A%22Bar+Chart%22%2C%22aggregatorName%22%3A%22Sum%22%2C%22vals%22%3A%5B%22count%22%5D%7D%7D"
       data-query-endpoint="https://data.labs.pdok.nl/openels/sparql"
       data-query-sparql="compare_AUs.rq"
       data-query-output="pivot">
 </div>
 
  
## Data Quality  
  

## Geographical Names

    

  