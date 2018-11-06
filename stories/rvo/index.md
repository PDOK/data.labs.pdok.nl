---
endpoint: https://api.demo.triply.cc/datasets/rvo/landen/services/sparql/sparql
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

<query data-config="https://demo.triply.cc/rvo/landen/services/sparql#query=prefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20rvo%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect%20%3Fshape%20%3FshapeLabel%20%7B%0A%20%20%3Fland%20a%20rvo%3ALand%20%3B%0A%20%20%20%20rdfs%3Alabel%20%3Fnaam%20%3B%0A%20%20%20%20owl%3AsameAs%2Fgeo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%20%3B%0A%20%20%20%20rvo%3Avlag%20%3Furl%20.%0A%20%20bind(concat('%3Ca%20href%3D%22https%3A%2F%2Fdemo.triply.cc%2Frvo%2Flanden%2Fbrowser%3Fresource%3D'%2Cencode_for_uri(%3Fland)%2C'%22%20target%3D%22_blank%22%3E%3Ch2%3E'%2C%3Fnaam%2C'%3C%2Fh2%3E%3C%2Fa%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%3Cimg%20src%3D%22'%2C%3Furl%2C'%22%20width%3D%22300%22%3E')%20as%20%3FshapeLabel)%0A%7D%0A&endpoint=https%3A%2F%2Fapi.demo.triply.cc%2Fdatasets%2Frvo%2Flanden%2Fservices%2Fsparql%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&outputFormat=geo&outputSettings=%7B%22map%22%3A%22osm%22%2C%22grouped%22%3Afalse%7D" data-endpoint="https://api.demo.triply.cc/datasets/rvo/landen/services/sparql/sparql" data-query-ref="q1.rq" data-output="geo"> </query> <!-- //### CHANGE GROUPING FROM grouped = false => visualization = 'grouped' -->


## BBP

Laten we BBP voor landen met elkaar vergelijken:

<query data-config="https://demo.triply.cc/rvo/landen/services/sparql#query=prefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+rvo%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect%0A++%3Fnaam%0A++(xsd%3Ainteger(%3Fbbp)+as+%3Fbbp_usd)%0A++(xsd%3Ainteger(%3Fimport)+*+1.17+as+%3Fimport_usd)%0A++(xsd%3Ainteger(%3Fexport)+*+1.17+as+%3Fexport_usd)%0A%7B%0A++%3Fland%0A++++rvo%3Abbp+%3Fbbp+%3B%0A++++rvo%3Ainvoerwaarde+%3Fimport+%3B%0A++++rvo%3Auitvoerwaarde+%3Fexport+%3B%0A++++rdfs%3Alabel+%3Fnaam%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdemo.triply.cc%2F_api%2Fdatasets%2Frvo%2Flanden%2Fservices%2Fsparql%2Fsparql&requestMethod=POST&tabTitle=Invoer%2Fuitvoer&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22annotations%22%3A%7B%22domain%22%3A%7B%7D%7D%2C%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
data-endpoint="https://api.demo.triply.cc/datasets/rvo/landen/services/sparql/sparql" data-query-ref="q4a.rq" data-output="gchart"> </query>

## In- en uitvoer

Laten we de in- en uitvoerwaardes voor landen met elkaar vergelijken:

<query data-query-ref="q4b.rq" data-config="https://demo.triply.cc/rvo/landen/services/sparql#query=prefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+rvo%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect%0A++%3Fnaam%0A++(xsd%3Ainteger(%3Fimport)+*+1.17+as+%3Fimport_usd)%0A++(xsd%3Ainteger(%3Fexport)+*+1.17+as+%3Fexport_usd)%0A%7B%0A++%3Fland%0A++++rvo%3Abbp+%3Fbbp+%3B%0A++++rvo%3Ainvoerwaarde+%3Fimport+%3B%0A++++rvo%3Auitvoerwaarde+%3Fexport+%3B%0A++++rdfs%3Alabel+%3Fnaam%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdemo.triply.cc%2F_api%2Fdatasets%2Frvo%2Flanden%2Fservices%2Fsparql%2Fsparql&requestMethod=POST&tabTitle=Invoer%2Fuitvoer&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22annotations%22%3A%7B%22domain%22%3A%7B%7D%7D%2C%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://api.demo.triply.cc/datasets/rvo/landen/services/sparql/sparql"  data-output="gchart"></query>

## Talen

Waar worden bepaalde talen gesproken?

<query data-endpoint="https://api.demo.triply.cc/datasets/rvo/landen/services/sparql/sparql" data-query-ref="q5.rq" data-output="geo"> </query>
## Vergelijkingen met andere bronnen

### Oppervlakte

Laten we de oppervlaktes van landen uit verschillende bronnen met
elkaar vergelijken: RVO, CIA World Factbook, en CShapes.

<query data-config="https://demo.triply.cc/rvo/landen/services/sparql#query=prefix+iisg%3A+%3Chttps%3A%2F%2Fiisg.amsterdam%2Fvocab%2F%3E%0Aprefix+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+rvo%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect+%3Fnaam+(xsd%3Adouble(%3Frvo)+as+%3Frvo)+(1.0e3+*+%3Fcshapes+as+%3Fcshapes)+%7B%0A++%3Fland%0A++++owl%3AsameAs%2Fiisg%3Aarea+%3Fcshapes+%3B%0A++++rdfs%3Alabel+%3Fnaam+%3B%0A++++rvo%3Aoppervlakte+%3Frvo+.%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdemo.triply.cc%2F_api%2Fdatasets%2Frvo%2Flanden%2Fservices%2Fsparql%2Fsparql&requestMethod=POST&tabTitle=Oppervlakte&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22legacyScatterChartLabels%22%3Atrue%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22vAxes%22%3A%5B%7B%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%7B%22useFormatFromData%22%3Atrue%7D%5D%2C%22hAxis%22%3A%7B%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22BarChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-output="gchart"></query>

### Staatsvormen

Laten we de staatsvormen van landen uit verschillende bronnen met
elkaar vergelijken: RVO en CIA World Factbook.


<query data-endpoint="https://api.demo.triply.cc/datasets/rvo/landen/services/sparql/sparql" data-query-ref="q3.rq" data-output="geo"> </query>
