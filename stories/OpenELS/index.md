---
endpoint: https://data.labs.pdok.nl/openels/sparql
layout: story
logo: /stories/OpenELS/logo.png
output: leaflet
title:  .
---

## Geolocator
   Here will be the geolocator widget

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




## Administrative units

  Usually, the territory of a country is divided into a number of areas that are administrated by a local government. Such areas are
  called - administrative units. The systems of such administrative division are hierarchical with several layers or levels of administration. Municipalities, regions, provinces are examples of administrative units of different levels.
  However, often it is difficult to compare structures of administrative division between countries because they use language-specific
  names for levels of administrative division.  

### Sorry, how do you call it?
Lets see what names are used to refer to the corresponding administrative levels in The Netherlands, Norway, Spain and Finland.  

  <query data-config="http://127.0.0.1:5000/stories/OpenELS/#query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APrefix+au%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23%3E%0ASELECT+%3Fcountry+(group_concat(distinct+%3F1stName%3Bseparator%3D'%2C')+as+%3F1stLevel)+(group_concat(distinct+%3F2ndName%3Bseparator%3D'%2C')+as+%3F2ndLevel)++(group_concat(distinct+%3F3rdName%3Bseparator%3D'%2C')+as+%3F3rdLevel)%0AWHERE+%7B%0A%7B++Values+(%3Fg+%3Fcountry)+%7B(%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Fopenels%2Fau%3E+%22The+Netherlands%22)%7D%0A++graph+%3Fg+%7B%0A++++++%3Fau1st+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F1stOrder%3E%3B%0A+++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F1stName.%0A+++++++%3Fau2nd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F2ndOrder%3E%3B%0A+++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F2ndName.%0A+++++++%3Fau3rd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F3rdOrder%3E%3B%0A+++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F3rdName.%0A+++++%7D%0A%7D%0A++Union%0A++++%7B%0A++SERVICE+%3Chttp%3A%2F%2Frdf.kartverket.no%2F%2Fsparql%3E+%7B%0A++++++Values+(%3Fg+%3Fcountry)+%7B(%3Chttp%3A%2F%2Fopenels%2Fadministrativeunits%3E+%22Norway%22)%7D%0A++graph+%3Fg+%7B%0A++++%3Fau2nd+au%3AAdministrativeUnit.nationalLevel+%222ndOrder%22%3B%0A++++++++++++++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F2ndName.%0A++++%3Fau1st+au%3AAdministrativeUnit.nationalLevel+%221stOrder%22%3B%0A++++++++++++++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F1stName.%0A++++%3Fau3rd+au%3AAdministrativeUnit.nationalLevel+%223rdOrder%22%3B%0A++++++++++++++++++++++++%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23AdministrativeUnit.nationalLevelName%3E+%3F3rdName.%0A++%7D%0A++++%7D%0A++%7D%0A%7D%0AGroup+by+%3Fcountry%0A%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fopenels%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=table"
       data-endpoint="https://data.labs.pdok.nl/openels/sparql"
       data-query-ref="levels_names.rq"
       data-output="table">
 </query>

### Comparing structure of administrative division

  Linked Data brings semantic interoperability by the means of ontologies. Ontologies are collections of concepts and relations between them described in a formal way. WIth the help of ontologies it is possible for
  example to model systems of administration units and relate it to each other avoiding misinterpretation caused by language-specific notions.
  Therefore, lets compare structure of administrative systems in the Netherlands, Spain, Norway and Finland.   

  <query data-config="http://127.0.0.1:5000/stories/OpenELS/#query=PREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APrefix+au%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23%3E%0APrefix+nationallevel%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F%3E%0A%0Aselect+%0A%3Fcountry+(count(distinct+%3Fau1st)+as+%3F1stLevel)+(count(distinct+%3Fau2nd)+as+%3F2ndLevel)+(count(distinct+%3Fau3rd)+as+%3F3rdLevel)+(count(distinct+%3Fau4th)+as+%3F4thLevel)+%0A%7B%0A%7B+Values+(%3Fg+%3Fcountry)+%7B(%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Fopenels%2Fau%3E+%22Netherlands%22)%7D%0A++++graph+%3Fg+%7B+++%0A++++++%3Fau1st+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F1stOrder%3E.%0A++++++%3Fau2nd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F2ndOrder%3E.%0A++++++%3Fau3rd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F3rdOrder%3E.+++%0A+%7D+%0A%7D%0A+++++Union+%0A++%7B%0A++SERVICE+%3Chttp%3A%2F%2F193.167.189.160%2Fopenels%2Ffuseki%2Fds%2Fquery%3E%7B+%0A++++Values+(%3Fg+%3Fcountry)+%7B(%3Chttp%3A%2F%2Fpaikkatiedot.fi%2Fds%2Fopenels%2Fau%3E+%22Finland%22)%7D%0A++++++graph+%3Fg+%7B%0A++++++%3Fau1st+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F1stOrder%3E.%0A++++++%3Fau2nd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F2ndOrder%3E.%0AOptional+%7B%3Fau3rd+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F3rdOrder%3E.%7D%0A+++++++%3Fau4th+au%3AAdministrativeUnit.nationalLevel+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Fcodelist%2FAdministrativeHierarchyLevel%2F4thOrder%3E.%0A+++++%7D%0A++++%7D%0A++%7D%0A++++Union%0A++%7B%0A++SERVICE+%3Chttp%3A%2F%2Frdf.kartverket.no%2F%2Fsparql%3E+%7B+%0A++++++Values+(%3Fg+%3Fcountry)+%7B(%3Chttp%3A%2F%2Fopenels%2Fadministrativeunits%3E+%22Norway%22)%7D%0A++graph+%3Fg+%7B+%0A++++%3Fau2nd+au%3AAdministrativeUnit.nationalLevel+%222ndOrder%22.%0A++++%3Fau1st+au%3AAdministrativeUnit.nationalLevel+%221stOrder%22.%0A++++%3Fau3rd+au%3AAdministrativeUnit.nationalLevel+%223rdOrder%22.%0A++%7D%0A++++%7D%0A+++++%7D%0A%7D++Group+by+%3Fg+%3Fcountry&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fopenels%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22annotations%22%3A%7B%22domain%22%3A%7B%7D%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22legend%22%3A%22bottom%22%2C%22series%22%3A%7B%220%22%3A%7B%22color%22%3A%22%23980000%22%7D%2C%221%22%3A%7B%22color%22%3A%22%234a86e8%22%2C%22targetAxisIndex%22%3A0%7D%7D%2C%22isStacked%22%3Afalse%2C%22vAxes%22%3A%5B%7B%22title%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22useFormatFromData%22%3Atrue%2C%22logScale%22%3Afalse%7D%2C%7B%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22useFormatFromData%22%3Atrue%2C%22logScale%22%3Afalse%7D%5D%2C%22booleanRole%22%3A%22certainty%22%2C%22hAxis%22%3A%7B%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%2C%22useFormatFromData%22%3Atrue%2C%22title%22%3A%22Countries%22%7D%2C%22width%22%3A600%2C%22height%22%3A371%2C%22backgroundColor%22%3A%7B%22fill%22%3A%22%23f3f3f3%22%7D%2C%22domainAxis%22%3A%7B%22direction%22%3A1%7D%2C%22focusTarget%22%3A%22category%22%2C%22title%22%3A%22Number+of+administrative+units+per+administrative+level%22%2C%22fontName%22%3A%22sans-serif%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
       data-endpoint="https://data.labs.pdok.nl/openels/sparql"
       data-query-ref="compare_AUs.rq"
       data-output="gchart">
   </query>

### It is linked. Lets's pull some data
  In the example above, we used the power of linked data to map local administrative system to a generic system of levels. This was done on the level of concepts or ontological level (similar to T-box in descriptive logic).
  Linked Data allows even more - interrelating data on instance level between data sets. For example, if two data sets contain information about the similar objects (e.g information about the same municipality) we can link them and
  enrich one description of the municipality with attributes coming from the other data set.
  The example below uses links between administrative units and corresponding objects in the [DBpedia](https://wiki.dbpedia.org/) data base.
  In this case, DBpedia serves as a linking hub of the Web of Data providing access to other resources. Therefore, for example, we can traverse those links to
  retrieve the name of an administrative unit in another language. For example, lets find how to spell what the Dutch call "s-Gravenhage"   


  <query data-config="http://yasgui.org/#query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APrefix+au%3A+%3Chttp%3A%2F%2Finspire.ec.europa.eu%2Font%2Fau%23%3E%0Aselect+%3Fs+%3Fname+where+%7B%0A%0A%3Fs+a+au%3AAdministrativeUnit%3B%0A+++rdfs%3Alabel+%22's-Gravenhage%22%40nl%3B%0A++++++++++++++++++++++++++++rdfs%3AseeAlso+%3FinDb.%0A+++service+%3Chttp%3A%2F%2Ffactforge.net%2Frepositories%2Fff-news%3E+%7B%0A+++++++%3FinDb+%3Chttp%3A%2F%2Fwww.geonames.org%2Fontology%23alternateName%3E+%3Fname+.%0A++++FILTER+((+lang(%3Fname)+%3D+%22es%22+)+%7C%7C+(+lang(%3Fname)+%3D+%22fi%22+)+%7C%7C+(+lang(%3Fname)+%3D+%22no%22+))%0A++%7D%0A%0A+++%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fopenels%2Fsparql&requestMethod=POST&tabTitle=Query+27&headers=%7B%7D&outputFormat=table"
         data-endpoint="https://data.labs.pdok.nl/openels/sparql"
         data-query-ref="den_haag.rq"
         data--output="table">
   </query>
