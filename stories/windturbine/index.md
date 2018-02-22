---
endpoint: https://triply.eculture.labs.vu.nl/sparql
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

Deze story beschrijft de volgende zoekopdrachten:
- Welke windturbines staan er in de [OpenStreetMap](http://sophox.org/sophox/) en [WikiData](https://query.wikidata.org/) SPARQL endpoints?
- Waarin zitten de verschillen tussen de BGT, BRT, OpenStreetMap en Windstats als het gaat om windturbines in Flevoland?

# Wikidata windturbines in Nederland
De windturbines in Nederland volgens Wikidata (klasse ‘<a
href="http://www.wikidata.org/entity/Q49833">Wind turbine</a>’):

<div
  data-query
  data-query-endpoint="https://query.wikidata.org/sparql"
  data-query-sparql="10-turbine.rq"></div>

# Windturbineparken in Nederland
De windturbine parken in Nederland volgens Wikidata (klasse ‘<a
href="http://www.wikidata.org/entity/Q194356">Wind farm</a>’).

<div data-query
     data-query-endpoint="https://query.wikidata.org/sparql"
     data-query-sparql="20-farm.rq"></div>

## Alle windturbines in Flevoland (BGT,BRT,OSM,WindStats)

De kaart hieronder biedt een overzicht van alle beschikbare data over windturbines voor Zuidwest-Flevoland. Het kaartbeeld is gelaagd opgebouwd; eerst worden de turbines uit Windstats geplot, hieroverheen de windturbines uit OpenStreetMap, hierover weer de turbines uit de BRT, en als laatste de turbines uit de BGT.

Alle markers waar geen blauwe marker uit de BGT overheen geplaatst is, kan mogelijk aangevuld worden in de BGT. Het kaarbeeld laat zien dat vooral de BRT, OpenStreetMap maar in beperktere mate ook Windstats mogelijk nog aanvulling kunnen betekenen voor de BGT.

Alle windturbines in Zuidwest-Flevoland volgens BGT
( <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="10" fill="blue" r="10"/></svg> ),
BRT
( <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="10" fill="yellow" r="10"/></svg> ),
OSM
( <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="10" fill="green" r="10"/></svg> ),
en WindStats
( <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="10" fill="red" r="10"/></svg> ).

<div data-query
     data-query-endpoint="https://data.labs.pdok.nl/geosparql"
     data-query-sparql="40-windturbine.rq"></div>

# Windturbines ontbrekend (?) in de BRT
Wijzigen we de volgorde van de kaartopbouw, dan zien we welke turbines niet in de BRT voorkomen. Alle markers in een andere kleur dan geel is mogelijk een ontbrekend element.

<div data-query 
  data-query-sparql="30-turbines-niet-in-brt.rq" 
  data-query-endpoint="https://data.labs.pdok.nl/geosparql"></div>
