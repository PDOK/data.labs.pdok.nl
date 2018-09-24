---
endpoint: https://data.labs.pdok.nl/geosparql
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

In deze Data Story willen we aan de hand van windturbines laten zien
hoe kwaliteitsverbetering mogelijk is door combinaties van datasets
met informatie over windturbines.  Windturbines komen voor in de BGT
(overig bouwwerk, type windturbine), in de BRT (type windturbine), in
Windstats, in Dbpedia (2013; gebaseerd op CBS), in Wikidata (te
weinig), en Open Street Map (OSM).

Deze story beschrijft de volgende zoekopdrachten:
  - Welke windturbines staan er in de
    [OpenStreetMap](http://sophox.org/sophox/) en
    [WikiData](https://query.wikidata.org/) SPARQL endpoints?
  - Waarin zitten de verschillen tussen de BGT, BRT, OpenStreetMap en
    Windstats als het gaat om windturbines in Flevoland?

# Windturbineparken in Nederland

De windturbine parken in Nederland volgens Wikidata (klasse ‘<a
href="http://www.wikidata.org/entity/Q194356">Wind farm</a>’).

<query data-endpoint="https://query.wikidata.org/sparql" data-query-ref="10-farm.rq" data-output="geo"></query>

<!-- <div data-query
     data-query-endpoint="https://query.wikidata.org/sparql"
     data-query-sparql="10-farm.rq">
</div> -->

## Alle windturbines in Flevoland (BGT,BRT,OSM,WindStats)

De kaart hieronder biedt een overzicht van alle beschikbare data over
windturbines voor Zuidwest-Flevoland.  Het kaartbeeld is gelaagd
opgebouwd; eerst worden de turbines uit Windstats geplot, hieroverheen
de windturbines uit OpenStreetMap, hierover weer de turbines uit de
BRT, en als laatste de turbines uit de BGT.

Alle markers waar geen blauwe marker uit de BGT overheen geplaatst is,
kan mogelijk aangevuld worden in de BGT.  Het kaarbeeld laat zien dat
vooral de BRT, OpenStreetMap maar in beperktere mate ook Windstats
mogelijk nog aanvulling kunnen betekenen voor de BGT.

<p>Alle windturbines in Zuidwest-Flevoland volgens BGT (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="blue" r="10"/>
</svg>
), BRT (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="yellow" r="10"/>
</svg>
), en OSM (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="green" r="10"/>
</svg>
). </p>

<query data-config="https://data.labs.pdok.nl/geosparql/#query=prefix%20bgt%3A%20%3Chttp%3A%2F%2Fbgt.basisregistraties.overheid.nl%2Fdef%2Fbgt%23%3E%0Aprefix%20brt%3A%20%3Chttp%3A%2F%2Fbrt.basisregistraties.overheid.nl%2Fdef%2Ftop10nl%23%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20wd%3A%20%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0Aselect%20%3Fshape%20%3FshapeColor%20%7B%0A%20%20%7B%0A%20%20%20%20graph%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fwindturbine%2Fosm-flevoland%3E%20%7B%0A%20%20%20%20%20%20%3Fwindturbine%20a%20wd%3AQ49833%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%20.%0A%20%20%20%20%7D%0A%20%20%20%20bind('green'%20as%20%3FshapeColor)%0A%20%20%7D%20union%20%7B%0A%20%20%20%20service%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fsparql%3E%20%7B%0A%20%20%20%20%20%20%3Fwindturbine%20a%20brt%3AWindturbine%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%20.%0A%20%20%20%20%20%20bind('yellow'%20as%20%3FshapeColor)%0A%20%20%20%20%7D%0A%20%20%7D%20union%20%7B%0A%20%20%20%20%3Fwindturbine%20a%20bgt%3AWindturbine%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3FshapePolygon%20.%0A%20%20%20%20bind(strdt(concat('Point%20('%2Csubstr(str(%3FshapePolygon)%2C11%2C34)%2C')')%2Cgeo%3AwktLiteral)%20as%20%3Fshape)%0A%20%20%20%20bind('blue'%20as%20%3FshapeColor)%0A%20%20%7D%0A%7D%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fgeosparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22grouped%22%3Atrue%7D" data-endpoint="https://data.labs.pdok.nl/geosparql" data-query-ref="20-windturbine.rq" data-output="geo"></query> <!-- //### CHANGE GROUPING FROM grouped = false => visualization = 'grouped' -->


<!-- <div data-query data-query-sparql="20-windturbine.rq"></div> -->

# Windturbines ontbrekend (?) in de BRT

Wijzigen we de volgorde van de kaartopbouw, dan zien we welke turbines
niet in de BRT voorkomen.  Alle markers in een andere kleur dan geel
is mogelijk een ontbrekend element.

<query data-config="https://data.labs.pdok.nl/geosparql/#query=prefix%20brt%3A%20%3Chttp%3A%2F%2Fbrt.basisregistraties.overheid.nl%2Fdef%2Ftop10nl%23%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20bgt%3A%20%3Chttp%3A%2F%2Fbgt.basisregistraties.overheid.nl%2Fdef%2Fbgt%23%3E%0Aselect%20%3Fshape%20%3FshapeColor%20%7B%0A%20%20%7B%0A%20%20%20%20graph%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fwindturbine%2Fosm-flevoland%3E%20%7B%0A%20%20%20%20%20%20%3Fwindturbine%20a%20%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2FQ49833%3E%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%20.%0A%20%20%20%20%7D%0A%20%20%20%20bind('green'%20as%20%3FshapeColor)%0A%20%20%7D%20union%20%7B%0A%20%20%20%20%3Fwindturbine%20a%20bgt%3AWindturbine%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3FshapePolygon%20.%0A%20%20%20%20bind(strdt(concat('Point%20('%2Csubstr(str(%3FshapePolygon)%2C11%2C34)%2C')')%2Cgeo%3AwktLiteral)%20as%20%3Fshape)%0A%20%20%20%20bind('blue'%20as%20%3FshapeColor)%0A%20%20%7D%20union%20%7B%0A%20%20%20%20%3Fwindturbine%20a%20brt%3AWindturbine%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%20.%0A%20%20%20%20bind('yellow'%20as%20%3FshapeColor)%0A%20%20%7D%0A%7D%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fgeosparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22grouped%22%3Atrue%7D" data-endpoint="https://data.labs.pdok.nl/geosparql" data-query-ref="30-turbines-niet-in-brt.rq" data-output="geo"></query> <!-- //### CHANGE GROUPING FROM grouped = false => visualization = 'grouped' -->

<!-- <div data-query data-query-sparql="30-turbines-niet-in-brt.rq"></div> -->
