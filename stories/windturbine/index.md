---
endpoint: http://triply.eculture.labs.vu.nl/sparql
layout: story
logo: /stories/windturbine/logo.gif
output: leaflet
title: Windturbines
---

Logo foto: Molgreen, Animation:Amada44 (File:20120527 xl wiki
3735.JPG) [<a href="https://creativecommons.org/licenses/by-sa/3.0">CC
BY-SA 3.0</a>], <a
href="https://commons.wikimedia.org/wiki/File%3AWind_turbine.gif">via
Wikimedia Commons</a>

In deze Data Story willen we aan de hand van windturbines laten zien hoe kwaliteitsverbetering mogelijk is door combinaties van datasets met informatie over windturbines. Windturbines komen voor in de BGT (overig bouwwerk, type windturbine), in de BRT (type windturbine), in Windstats, in Dbpedia (2013; gebaseerd op CBS), in Wikidata (te weinig), en Open Street Map (OSM).

6. 	OSM/wikidata: windmolens:  Wouter met bgt in contact brengen…eerst brt dan bgt

Voor elke query alleen Flevoland! 
Query 1: Verschillen in de windmodels tussen BGT en BRT 

Query 2: (indien Windstats data omgezet is): verschil tussen BGT en BRT en Windstats

Query 3: Verschil tussen BGT, BRT, Windstats, en OSM!

Query 4 (geo): Welke windmolens hebben een BAG pandid? (dat is onterecht)

Query 5: Geef mij de windturbines uit windstats, waar op 50m geen evenkie in de brt te vinden. 





## Windturbines in Flevoland

De windturbines in Flevoland volgens OpenStreetMap (OSM):

<div
  data-query
  data-query-sparql="00-flevoland.rq"></div>

## Wikidata

### Windturbines in Nederland

De windturbines in Nederland volgens Wikidata (klasse ‘<a
href="http://www.wikidata.org/entity/Q49833">Wind turbine</a>’):

<div
  data-query
  data-query-endpoint="https://query.wikidata.org/sparql"
  data-query-sparql="10-turbine.rq"></div>

### Windturbine parken in Nederland

De windturbine parken in Nederland volgens Wikidata (klasse ‘<a
href="http://www.wikidata.org/entity/Q194356">Wind farm</a>’).

<div data-query
     data-query-endpoint="https://query.wikidata.org/sparql"
     data-query data-query-sparql="20-farm.rq"></div>

## RVO windturbines zonder BRT equivalent

RVO heeft ongeveer 2300 windturbines. Minstens een BRT windturbine
heeft geen RVO variant binnen een straal van 30 meter:

<div
  data-query
  data-query-sparql="30-rvo-turbines-niet-in-brt.rq"
  data-query-endpoint="https://data.labs.pdok.nl/geosparql"></div>

<!--
<img src="https://wiki.openstreetmap.org/w/images/0/0c/Power-wind-16.svg">
-->
