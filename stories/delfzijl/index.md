---
layout: story
title: Kadaster Data Stories ― Delfzijl
logo: /stories/cbs/logo.png
endpoint: https://api.krr.triply.cc/datasets/Kadaster/geosoup/containers/endpoint/sparql
output: leaflet
---

# Delfzijl

## Monumentale panden in Delfzijl

<div data-query data-query-sparql="monumenten.rq">
</div>

## Het eerste monumentale pand in de BAG

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="pand.rq">
</div>

## Geo query van BAG pand naar BRT gebouw

<div data-query data-query-sparql="brt.rq">
</div>

## Geo query van BAG pand naar CBS wijk

<div data-query data-query-sparql="wijk.rq">
</div>

## Afstand tot attracties

We gebruiken de maximale afstand tot een attractie als normalizatie
voor de kleurenkaart:

<div data-query data-query-sparql="attractie-max.rq">
</div>

Met deze normalizatie waarde kussen we de gemiddelde afstand tot een
attractie (voor Groningen en Friesland) als ‘heatmap’ weergeven:

<div data-query data-query-sparql="attractie.rq">
</div>
