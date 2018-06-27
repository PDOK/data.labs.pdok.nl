---
endpoint: https://data.labs.pdok.nl/geosparql
layout: story
logo: /stories/OpenELS/logo.png
output: leaflet
title:  .
---

#  OpenELS

[The Open European Location Services (OpenELS)](http://openels.eu/about/) project is developing pan-European data services using authoritative geospatial information and an associated business model. Here we present the LinkedData version of two main INSPIRE theme, namely Administrative Units(AU) and Geographicl Names (GN)

## Administrative Units

Each national territory is divided into administrative units. In the Netherlands there are three levels of administrative units:
* Country (1)
* Provinces (12)
* Municipalities (388)

These are municipalities:
<div data-query
     data-query-endpoint="https://data.labs.pdok.nl/sparql"
     data-query-sparql="au_3rd.rq">
</div>

## Geographical Names

### Living on the "brink"

Brink is a very common toponym for Low German, Dutch, Danish and Swedish languahes. The Dutch and Low German meaning is "village green". In Danish and Swedish, the name is thought to be a borrowing of Middle Dutch *brinc*, meaning "grassy edge". 
You can also try other popular Dutch toponym roots:
* terp
* dijk
* polder

<div data-query
     data-query-endpoint="https://data.labs.pdok.nl/geosparql"
     data-query-sparql="brink.rq">
</div>
