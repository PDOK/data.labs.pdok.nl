---
endpoint: https://data.labs.pdok.nl/openels/sparql
layout: story
logo: /stories/OpenELS/logo.png
output: leaflet
title:  .
---

  <link rel="stylesheet" type="text/css" href="leaflet/leaflet.css"/>
  <link rel="stylesheet" type="text/css" href="/assets/css/datatables.min.css"/>
  <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
  <script type="text/javascript" src="leaflet/leaflet.js"></script>
  <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/assets/js/datatables.min.js"></script>
  <script type="text/javascript" src="geolocator.js"></script>  

<img src="en_horizontal_cef_logo_2.png" alt="EU logo">
    
## Administrative units

  Usually, the territory of a country is divided into a number of areas that are administered by local government. Such areas are
  called administrative units. The systems of such administrative division are hierarchical with several levels of progressively smaller units. Municipalities, regions and provinces are examples of administrative units at different levels.
  However, often it is difficult to compare structures of administrative division between countries because they use language-specific
  names for levels of administrative division.  

### Sorry, what do you call that?
Lets see what names are used to refer to the corresponding administrative levels in the Netherlands, Norway, Spain and Finland.  

<div class="alert alert-info txt" role="alert">
  <h2>Try it out</h2>
  <p>You can see the exact query used to retrieve the data by clicking the blue arrow button below this box.
  The query is running over the 4 national sparql endpoints of the project and retrieving the different names used for the varying administrative levels. You can view the returned data in different presentation formats by clicking on the options at the bottom of the query. The data can also be downloaded in csv format.</p>
</div>

  <query data-config="http://127.0.0.1:5000/stories/OpenELS/#query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APrefix+au%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23%3E%0ASELECT+%3Fcountry+(group_concat(distinct+%3F1stName%3Bseparator%3D'%2C')+as+%3F1stLevel)+(group_concat(distinct+%3F2ndName%3Bseparator%3D'%2C')+as+%3F2ndLevel)++(group_concat(distinct+%3F3rdName%3Bseparator%3D'%2C')+as+%3F3rdLevel)%0AWHERE+%7B%0A%7B++Values+(%3Fg+%3Fcountry)+%7B(%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Fopenels%2Fau%3E+%22The+Netherlands%22)%7D%0A++graph+%3Fg+%7B%0A++++++%3Fau1st+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F1stOrder%3E%3B%0A+++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F1stName.%0A+++++++%3Fau2nd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F2ndOrder%3E%3B%0A+++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F2ndName.%0A+++++++%3Fau3rd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F3rdOrder%3E%3B%0A+++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F3rdName.%0A+++++%7D%0A%7D%0A++Union%0A++++%7B%0A++SERVICE+%3Chttp%3A%2F%2Frdf.kartverket.no%2F%2Fsparql%3E+%7B%0A++++++Values+(%3Fg+%3Fcountry)+%7B(%3Chttp%3A%2F%2Fopenels%2Fadministrativeunits%3E+%22Norway%22)%7D%0A++graph+%3Fg+%7B%0A++++%3Fau2nd+au%3AAdministrativeUnit.nationalLevel+%222ndOrder%22%3B%0A++++++++++++++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F2ndName.%0A++++%3Fau1st+au%3AAdministrativeUnit.nationalLevel+%221stOrder%22%3B%0A++++++++++++++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F1stName.%0A++++%3Fau3rd+au%3AAdministrativeUnit.nationalLevel+%223rdOrder%22%3B%0A++++++++++++++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F3rdName.%0A++%7D%0A++++%7D%0A++%7D%0A%7D%0AGroup+by+%3Fcountry%0A%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fopenels%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=table"
       data-endpoint="https://data.labs.pdok.nl/openels/sparql"
       data-query-ref="levels_names.rq"
       data-output="table">
 </query>

### Comparing the structures of administrative division

  Linked Data brings semantic interoperability by means of ontologies. Ontologies are collections of concepts, and the relations between them, described in a formal way. With the help of a common ontology (in the case of this project, the INSPIRE ontologies), it's possible to model national systems of administrative units and draw comparisons between them, avoiding misinterpretation caused by language specific notions. 
  In this example, we'll compare the structure of administrative systems in the Netherlands, Spain, Norway and Finland. 
  
<div class="alert alert-info txt" role="alert">
  <h2>Tips</h2>
  <p>Because the data being returning here is numerical, the 'Google Chart' option is used by default. The chart can be customised by clicking on the 'config chart' button on the right.</p>
</div>

  <query data-config="https://data.labs.pdok.nl/stories/OpenELS/#query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20au%3A%20%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23%3E%0APREFIX%20nationallevel%3A%20%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F%3E%0APREFIX%20inspire%3A%20%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F%3E%0A%0ASELECT%20%0A%3FAdministrativeLevel%0A(count(%3FinSpain)%20as%20%3FSpain)%0A(count(%3FinNetherlands)%20as%20%3FNetherlands)%0A(count(%3FinNorway)%20as%20%3FNorway)%0A(count(%3FinFinland)%20as%20%3FFinland)%0AWHERE%20%7B%0A%20%20%7B%0A%20%20%20%20GRAPH%20%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Fopenels%2Fau%3E%20%7B%0A%20%20%20%20%20%20%3FinNetherlands%20au%3AAdministrativeUnit.nationalLevel%20%3Flevel.%20%7D%0A%20%20%7D%0A%20%20%20%20Union%0A%20%20%7B%0A%20%20%20%20SERVICE%20%3Chttp%3A%2F%2Fcontenido.ign.es%2Fparliament%2Fsparql%3E%20%7B%0A%20%20%20%20%20%20GRAPH%20%3Chttp%3A%2F%2Fcontenido.ign.es%2Fopenels%2Fau%3E%20%7B%0A%20%20%20%20%20%20%3FinSpain%20au%3AAdministrativeUnit.nationalLevel%20%3Flevel.%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20UNION%20%0A%20%20%7B%0A%20%20%20%20SERVICE%20%3Chttp%3A%2F%2Frdf.kartverket.no%2Fsparql%3E%20%7B%0A%20%20GRAPH%20%3Chttp%3A%2F%2Fopenels%2Fadministrativeunits%3E%20%7B%0A%20%20%20%20%20%20%3FinNorway%20au%3AAdministrativeUnit.nationalLevel%20%3Flevel.%0A%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20%20%20%20%0A%7D%0A%20%20%20UNION%20%7B%0A%20%20%20%20SERVICE%20%3Chttp%3A%2F%2F193.167.189.160%2Fopenels%2Ffuseki%2Fds%2Fquery%3E%20%7B%0A%20%20%20%20%20%20GRAPH%20%3Chttp%3A%2F%2Fpaikkatiedot.fi%2Fds%2Fopenels%2Fau%3E%20%7B%0A%20%20%20%20%20%20%3FinFinland%20au%3AAdministrativeUnit.nationalLevel%20%3Flevel.%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20BIND%20(STRAFTER(str(%3Flevel)%2C%20%22http%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F%22)%20as%20%3FAdministrativeLevel%20)%0A%7D%20%0AGroup%20by%20%3FAdministrativeLevel%0AORDER%20BY%20%3FAdministrativeLevel&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fopenels%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22annotations%22%3A%7B%22domain%22%3A%7B%7D%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22legend%22%3A%22bottom%22%2C%22series%22%3A%7B%220%22%3A%7B%22color%22%3A%22%23980000%22%7D%2C%221%22%3A%7B%22color%22%3A%22%234a86e8%22%2C%22targetAxisIndex%22%3A0%7D%7D%2C%22isStacked%22%3Afalse%2C%22vAxes%22%3A%5B%7B%22title%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22useFormatFromData%22%3Atrue%2C%22logScale%22%3Afalse%7D%2C%7B%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22useFormatFromData%22%3Atrue%2C%22logScale%22%3Afalse%7D%5D%2C%22booleanRole%22%3A%22certainty%22%2C%22hAxis%22%3A%7B%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%2C%22useFormatFromData%22%3Atrue%2C%22title%22%3A%22Countries%22%7D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22backgroundColor%22%3A%7B%22fill%22%3A%22%23f3f3f3%22%7D%2C%22domainAxis%22%3A%7B%22direction%22%3A1%7D%2C%22focusTarget%22%3A%22category%22%2C%22title%22%3A%22Number%20of%20administrative%20units%20per%20administrative%20level%22%2C%22fontName%22%3A%22sans-serif%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
       data-endpoint="https://data.labs.pdok.nl/openels/sparql"
       data-query-ref="compare_AUs_transposed.rq"
       data-output="gchart">
   </query>

### It's linked. Lets's grab some data
  In the example above, we used the power of linked data to map national administrative systems to generic levels. This was done at the level of concepts or ontological level (similar to T-box in descriptive logic).
  Linked Data allows for even more - interrelating data at the instance level between data sets. For example, if two different data sets contain information about the same object (e.g information about the same municipality) we can link them and
  enrich one description of the municipality with attributes coming from the other data set.
  The example below uses links between administrative units and corresponding objects in the [DBpedia](https://wiki.dbpedia.org/) data base.
  In this case DBpedia serves as a 'linking node', providing access to other resources and information. Therefore we can, for example, traverse those links to
  retrieve the name of an administrative unit in another language. Lets find out how to spell what the Dutch call "s-Gravenhage", in the other languages of the project. 
  
<div class="alert alert-info txt" role="alert">
  <h2>Try it out</h2>
  <p>This query can be changed to obtain the alternative languages for other placenames. Simply substitute <<'s-Gravenhage>> for another placename, for example Amsterdam, and click on the 'play arrow' on the right of the query box. *(if the placename is in a different country, and the Dutch language should be requested, that can be added or replace an existing language, in the 'Bind' string)</p>
</div>

  <query data-config="http://yasgui.org/#query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APrefix+au%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23%3E%0Aselect+distinct+%3Flanguage+%3Fname+%23%3FdutchName+%3FnorwegianName+%3FfinishName+%3FSpanishName%0AWhere+%7B%0A++++%3Fs+rdfs%3Alabel+%22's-Gravenhage%22%40nl%3B%0A+++++++rdfs%3Alabel+%3FdutchName%3B%0A+++++++rdfs%3AseeAlso+%3FinDb.++++%0A+++service+%3Chttp%3A%2F%2Ffactforge.net%2Frepositories%2Fff-news%3E+%7B%0A+++++++%3FinDb+%3Chttp%3A%2F%2Fwww.geonames.org%2Fontology%23alternateName%3E+%3Fname+.%0A+++++FILTER+((+lang(%3Fname)+%3D+%22es%22+)+%7C%7C+(+lang(%3Fname)+%3D+%22fi%22+)+%7C%7C+(+lang(%3Fname)+%3D+%22no%22+))%0A++++BInd+(if+(lang(%3Fname)+%3D+%22es%22%2C+%22Spanish%22%2C+if+(lang(%3Fname)+%3D+%22no%22%2C+%22Norwegian%22%2C+if+(lang(%3Fname)+%3D+%22fi%22%2C+%22Finnish%22%2C+%22%22)))+as+%3Flanguage)%0A%0A%7D+%0A%7D+Order+by+%3Flanguage%0A+LImit+10&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=http%3A%2F%2Fdata.labs.pdok.nl%2Fopenels%2Fsparql&requestMethod=POST&tabTitle=Query+6&headers=%7B%7D&outputFormat=table"
       data-endpoint="https://data.labs.pdok.nl/openels/sparql"
       data-query-ref="den_haag.rq"
       data-output="table">
 </query>

### Holy Geographical Names Batman

People are used to refer to geographical features using names. 
Mountains, rivers, lakes, towns, villages and even single trees can have their own names. 
The OpenElS project has published more than 20 million place names (toponyms) and locations as Linked Data. 
Standardised concepts for describing the meaning of place names enables semantic interoperability between national data sets. 
Seamless access to such rich data allows for conducting interesting research. For example, 
linguists could potentially use this data to analyse the spatial distribution of common toponym roots. 
The following example shows locations of places that have "holy" as part of the name. 
Obviously, the root "holy" is spelled differently in different languages. 
The Linked Data technology makes it possible to formulate a single query that can interogate the national endpoints in their native 
languages. 
In the example below, the following spellings are used:

|Language|Spelling|
|--------|--------|
|English| holy|
|Dutch|heilige|
|Norwegian|hellig|
|Finnish|pyhä|
|Spanish|sagrado|

<div class="alert alert-info txt" role="alert">
  <h2>Try it out</h2>
  <p>Since this query returns geometries (they can be viewed in plain text by selecting the 'Table' option), a map visualisation has been chosen. To see the background map for a specific country (Netherlands is the default), click on the blue arrow beneath and then choose the national background map from the dropdown box. Heatmaps and grouped point representations are also available. Again, the query is editable if you wish to search for another name part.</p>
</div>

  <query 
       data-endpoint="https://data.labs.pdok.nl/openels/sparql"
       data-query-ref="holy_names.rq"
       data-output="geo">
 </query>
 
 
 
## Geolocator: a URI gazetteer

 The SPARQL query language is a very powerful and flexible way to retrieve data based on graph patterns. 
 However, SPARQL lacks functionality for a fuzzy search of literal values. In other words, 
 if there is a need to find the location of Amsterdam, SPARQL requires proper spelling of this name. It is not possible 
 to retrieve the location of Amsterdam if there is a typo (e.g "Asterdam") in the spelling of the name. in addition, for lay users
 it is very difficult to master SPARQL. 
 For these reasons, we have created a gazetteer service that returns enriched data with Linked Data URIs for toponyms. 

<div class="alert alert-info txt" role="alert">
   <h2>Tips</h2>
  <p>The background maps can be turned on and off by clicking on the 'layers' button in the top right corner of the map. Clicking on the name in the accompanying table will retrieve additional data from the relevant national service if the uri is dereferenceable.</p>
</div>
 
 
  <nav class="navbar navbar-light bg-light">
       <form class="form-inline">
           <label for="topoName" class="font-weight-normal">Here you can search for toponyms:  </label>
           <input type="text" class="form-control" id="topoName" placeholder="e.g. Amsterdam"/>
           <button type="submit" id="submitButton" class="btn btn-info">Search</button>
       </form>
   </nav>
   
   <div class="container">
       <div class="row">
           <div class="col-sm-6">
               <div id="geolocator" style="width: 570px; height: 280px;"></div>
           </div>
           <div class="col-sm-5">
               <table id="table" class="table"></table>
           </div>
       </div>
   </div>
