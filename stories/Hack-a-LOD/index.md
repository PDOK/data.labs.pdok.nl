---
layout: story
title: Krimpgebieden
logo: /stories/Hack-a-LOD/logo.jpg
endpoint: https://data.pdok.nl/sparql
output: leaflet
---

Misschien beginnen met een query over hoe de brouwerijen over nederland verdeelt zijn? Google chart?
En dan een query met de grootste brouwers (hectoliters) van Nederland....en dan door met Heineken...

# Stakingen bij Heineken

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/stakingen/services/endpoint/sparql"
     data-query-sparql="stakingen-heineken.rq">
</div>

# Stakingen door brouwers

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/stakingen/services/endpoint/sparql"
     data-query-sparql="stakingen-brouwers.rq">
</div>

# Boeken over heineken

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="boeken-heineken.rq">
</div>

# Boeken over bier

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="boeken-bier.rq">
</div>

# Heineken monument (BAG & RCE)

<div data-query
     data-query-sparql="monument-heineken.rq">
     data-query-sparql="boeken-bier.rq">
</div>

<!--
https://cultureelerfgoed.nl/id/image/20557351
-->

# Ojee, een verschil....
De BAG en de RCE geven verschillende resultaten, maar Linked Data is fantastisch we kunnen er een derde bron bij halen om te kijken of de BAG of RCE het fout heeft....

query op dbpedia....

# Heinekenpad (Nationaal Wegenbestand)

<a href="http://data.pdok.nl/nationaal-wegenbestand-wegen/id/wegvakken/wegvakken.833446">http://data.pdok.nl/nationaal-wegenbestand-wegen/id/wegvakken/wegvakken.833446</a>

# Bladmuziek
