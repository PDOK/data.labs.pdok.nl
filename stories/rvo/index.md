---
endpoint: https://api.demo.triply.cc/datasets/rvo/landen/services/sparql/sparql
layout: story
logo: /stories/rvo/logo.jpg
output: leaflet
published: true
title: 🍺 Bier Data Story 🍺
---

# Internationaal ondernemen

## Landen

We hebben voor een aantal landen data uit een spreadsheet omgezet naar
Linked Data.  

<div data-query
     data-query-sparql="q1.rq"
     data-query-output="leaflet"></div>

## In- en uitvoer

Laten we de in- en uitvoerwaardes voor landen met elkaar vergelijken:

<!--
https://api.demo.triply.cc/s/HJZ1Hh4zX
-->
<div data-query="https://demo.triply.cc/rvo/landen/services/sparql#query=prefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+rvo%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect%0A++%3Fnaam%0A++(xsd%3Ainteger(%3Fbbp)+as+%3Fbbp_usd)%0A++(xsd%3Ainteger(%3Fimport)+*+1.17+as+%3Fimport_usd)%0A++(xsd%3Ainteger(%3Fexport)+*+1.17+as+%3Fexport_usd)%0A%7B%0A++%3Fland%0A++++rvo%3Abbp+%3Fbbp+%3B%0A++++rvo%3Ainvoerwaarde+%3Fimport+%3B%0A++++rvo%3Auitvoerwaarde+%3Fexport+%3B%0A++++rdfs%3Alabel+%3Fnaam%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdemo.triply.cc%2F_api%2Fdatasets%2Frvo%2Flanden%2Fservices%2Fsparql%2Fsparql&requestMethod=POST&tabTitle=Invoer%2Fuitvoer&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22annotations%22%3A%7B%22domain%22%3A%7B%7D%7D%2C%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
     data-query-output="gchart"
     data-query-sparql="q4.rq"></div>

## Talen

Waar worden bepaalde talen gesproken?

<div data-query-sparql="q5.rq"></div>

## Vergelijkingen met andere bronnen

### Oppervlakte

Laten we de oppervlaktes van landen uit verschillende bronnen met
elkaar vergelijken: RVO, CIA World Factbook, en CShapes.

<div data-query="https://demo.triply.cc/rvo/landen/services/sparql#query=prefix+iisg%3A+%3Chttps%3A%2F%2Fiisg.amsterdam%2Fvocab%2F%3E%0Aprefix+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+rvo%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Frvo%2Fdef%2F%3E%0Aselect+%3Fnaam+(xsd%3Adouble(%3Frvo)+as+%3Frvo)+(1.0e3+*+%3Fcshapes+as+%3Fcshapes)+%7B%0A++%3Fland%0A++++owl%3AsameAs%2Fiisg%3Aarea+%3Fcshapes+%3B%0A++++rdfs%3Alabel+%3Fnaam+%3B%0A++++rvo%3Aoppervlakte+%3Frvo+.%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdemo.triply.cc%2F_api%2Fdatasets%2Frvo%2Flanden%2Fservices%2Fsparql%2Fsparql&requestMethod=POST&tabTitle=Oppervlakte&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22legacyScatterChartLabels%22%3Atrue%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22vAxes%22%3A%5B%7B%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%7B%22useFormatFromData%22%3Atrue%7D%5D%2C%22hAxis%22%3A%7B%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22BarChart%22%7D%2C%22motionChartState%22%3Anull%7D"
     data-query-output="gchart"
     data-query-sparql="q2.rq"></div>

### Staatsvormen

Laten we de staatsvormen van landen uit verschillende bronnen met
elkaar vergelijken: RVO en CIA World Factbook.

<div data-query
     data-query-sparql="q3.rq"></div>
