---
layout: story
title: Kadaster Data Stories ― Nederlandse gemeentes
logo: /stories/gemeente/logo.png
endpoint: https://data.pdok.nl/sparql
output: leaflet
---

# Nederlandse gemeentes

Deze data story geen een overzicht van de grootste Nederlandse
gemeentes (op basis van oppervlakte), en de meest dichtbevolkte
Nederlandse gemeentes.

## De grootste Nederlandse gemeente

We kunnen de gemeentes sorteren op basis van hun oppervlakte.
Hieronder volgt een overzicht van de 25 grootste gemeentes.  Omdat
water wordt meegerekend is Zeewolde groter dan Amsterdam!

<div data-query
     data-query-sparql="grootste-gemeente.rq"
     data-query-output="gchart">
</div>

Hetzelfde resultaat kan ook op een kaart getoond worden.  Merk op dat
de grootste gemeentes inderdaad vaak een groot wateroppervlak
bezitten.

<div data-query
     data-query-sparql="grootste-gemeente-geo.rq">
</div>

## Meest dicht-bevolkte Nederlandse gemeentes

Door gebruik te maken van SPARQL federatie kunnen we dynamisch
informatie over gemeentes opvragen uit andere datasets.  Bijvoorbeeld,
hieronder tonen we de 25 meest dichtbevolkte gemeentes.  Het aantal
inwoners per gemeente en het wapen, als deze beschikbaar is, worden
uit Wikidata gehaald.  Door op de markeringen op de kaart te klikken
wordt de bijbehorende informatie getoond.

<div data-query
     data-query-sparql="meest-dichtbevolkte-gemeente.rq">
</div>
