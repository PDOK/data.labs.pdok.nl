---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/rvo/logo.jpg
output: leaflet
published: true
title: RVO Landen Story
---

# Internationaal ondernemen

## Landen

We hebben voor een aantal landen data uit een spreadsheet omgezet naar
Linked Data.

<query data-config="http://127.0.0.1:5000/stories/rvo/#query=prefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20rvo%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect%20%3Fshape%20%3FshapeLabel%0AFROM%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Frvo%3E%0A%7B%0A%20%20%3Fland%20a%20rvo%3ALand%20%3B%0A%20%20%20%20rdfs%3Alabel%20%3Fnaam%20%3B%0A%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%20%3B%0A%20%20%20%20rvo%3Avlag%20%3Furl%20.%0A%20%20bind(concat('%3Ch2%3E'%2Cstr(%3Fnaam)%2C'%3C%2Fh2%3E%3C%2Fa%3E'%2C%0A%20%20%20%20%20%20'%3Cimg%20src%3D%22'%2Cstr(%3Furl)%2C'%22%20width%3D%22300%22%3E')%20as%20%3FshapeLabel)%0A%20%20FILTER%20langMatches(%20lang(%3Fnaam)%2C%20%22NL%22%20)%0A%7D%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&outputFormat=geo&outputSettings=%7B%22map%22%3A%22osm%22%2C%22grouped%22%3Afalse%7D  " data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="q1.rq" data-output="geo"> </query> <!-- //### CHANGE GROUPING FROM grouped = false => visualization = 'grouped' -->


## BBP

Laten we BBP voor landen met elkaar vergelijken:

<query data-config="http://127.0.0.1:5000/stories/rvo/#query=prefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20rvo%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aprefix%20xsd%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0Aselect%20%3Fnaam%20%3Fbbp_usd%0AFROM%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Frvo%3E%0A%7B%0A%20%20%3Fland%20a%20rvo%3ALand%20%3B%0A%20%20%20%20rvo%3Abbp%20%3Fbbp%20%3B%0A%20%20%20%20rdfs%3Alabel%20%3Fnaam%20.%0A%20%20%20%20%20%20FILTER%20langMatches(%20lang(%3Fnaam)%2C%20%22NL%22%20)%0A%20%20%20%20BIND(STRDT(STR(%3Fbbp)%2C%20xsd%3Ainteger)%20AS%20%3Fbbp_usd)%0A%7D%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Invoer%2Fuitvoer&headers=%7B%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22annotations%22%3A%7B%22domain%22%3A%7B%7D%7D%2C%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="q4a.rq" data-output="gchart"> </query>

## In- en uitvoer

Laten we de in- en uitvoerwaardes voor landen met elkaar vergelijken:

<query data-query-ref="q4b.rq" data-config="http://127.0.0.1:5000/stories/rvo/#query=prefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20rvo%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aprefix%20xsd%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0Aselect%0A%20%20%3Fnaam%0A%20%20(%3Fimport_val%20*%201.17%20as%20%3Fimport_usd)%0A%20%20(%3Fexport_val%20*%201.17%20as%20%3Fexport_usd)%0AFROM%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Frvo%3E%0A%7B%0A%20%20%3Fland%20a%20rvo%3ALand%20%3B%0A%20%20%20%20rvo%3Ainvoerwaarde%20%3Fimport%20%3B%0A%20%20%20%20rvo%3Auitvoerwaarde%20%3Fexport%20%3B%0A%20%20%20%20rdfs%3Alabel%20%3Fnaam%0A%20%20%20%20%20%20FILTER%20langMatches(%20lang(%3Fnaam)%2C%20%22NL%22%20)%0A%20%20%20%20BIND(STRDT(STR(%3Fimport)%2C%20xsd%3Ainteger)%20AS%20%3Fimport_val)%0A%20%20%20%20BIND(STRDT(STR(%3Fexport)%2C%20xsd%3Ainteger)%20AS%20%3Fexport_val)%0A%7D%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Invoer%2Fuitvoer&headers=%7B%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22annotations%22%3A%7B%22domain%22%3A%7B%7D%7D%2C%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://data.labs.pdok.nl/sparql"  data-output="gchart"></query>

## Talen

Waar worden bepaalde talen gesproken?

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="q5.rq" data-output="geo"> </query>
<!-- Disabled because of missing data
## Vergelijkingen met andere bronnen


### Oppervlakte

Laten we de oppervlaktes van landen uit verschillende bronnen met
elkaar vergelijken: RVO, CIA World Factbook, en CShapes.

<query data-config="http://127.0.0.1:5000/stories/rvo/#query=prefix%20cia%3A%20%3Chttp%3A%2F%2Fwww.daml.org%2F2001%2F12%2Ffactbook%2Ffactbook-ont%23%3E%0Aprefix%20iisg%3A%20%3Chttps%3A%2F%2Fiisg.amsterdam%2Fvocab%2F%3E%0Aprefix%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20rvo%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect%0A%20%20%3Fnaam%0A(SAMPLE(%3Frvo_val)%20as%20%3Frvo)%0A((SAMPLE(%3Fcia_val)%20*%201.0e3)%20as%20%3Fcia)%0A(SAMPLE(%3Fcshapes_not)%20*%201.0e3%20as%20%3Fcshapes)%0A%7B%0A%20%20%3Fland%20a%20rvo%3ALand%20%3B%0A%20%20%20%20owl%3AsameAs%2Fcia%3AlandArea%20%3Fcia_not%20%3B%0A%20%20%20%20owl%3AsameAs%2Fiisg%3Aarea%20%3Fcshapes_not%20%3B%0A%20%20%20%20rdfs%3Alabel%20%3Fnaam%20%3B%0A%20%20%20%20rvo%3Aoppervlakte%20%3Frvo_not%20.%0A%20%20%20%20%20%20FILTER%20langMatches(%20lang(%3Fnaam)%2C%20%22NL%22%20)%0A%20%20%20%20%20%20BIND(STRDT(STR(%3Frvo_not)%2C%20xsd%3Adouble)%20AS%20%3Frvo_val)%0A%20%20%20%20%20%20BIND(STRDT(STR(%3Fcia_not)%2C%20xsd%3Adouble)%20AS%20%3Fcia_val)%0A%7D%0AGROUP%20BY%20%3Fnaam%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Oppervlakte&headers=%7B%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22legacyScatterChartLabels%22%3Atrue%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22vAxes%22%3A%5B%7B%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%7B%22useFormatFromData%22%3Atrue%7D%5D%2C%22hAxis%22%3A%7B%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%22legend%22%3A%22right%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22BarChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="q2.rq" data-output="gchart"></query>

### Staatsvormen

Laten we de staatsvormen van landen uit verschillende bronnen met
elkaar vergelijken: RVO en CIA World Factbook.


<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="q3.rq" data-output="geo"> </query> -->
