---
layout: story
title: Kadaster Knowledge Graph
logo: /stories/Gemeentes/gemeenten.png
endpoint: https://query.wikidata.org/sparql
output: leaflet
---

Het werk rondom de Kadaster Knowledge Graph in momenteel in
uitvoering.

![KKG-model](https://github.com/PDOK/data.labs.pdok.nl/raw/master/stories/Gemeentes/gemeenten.png)

De laatste versie van het KKG figuur: 
![KKG-model](https://github.com/PDOK/data.labs.pdok.nl/raw/master/stories/Gemeentes/kkg-publiek.png)

[Demo link](http://linkeddata.ordina.nl/demo-oid/query/local/graph?subject=http%3A%2F%2Fbgtld-test.geostandaarden.nl%2Fwoz%2Fid%2Fobject%2F054619157857)


Persona: projectontwikkelaar

We willen dat er meer huizen worden verkocht
Er moeten meer huizen worden gebouwd
Buitenstedelijk bouwen is lastig, want tast groen aan, is niet duurzaam
Rand/binnenstedelijk bouwen is ook lastig, want waar heb je de beste kans?
Daarom de case: met het combineren van data uit meerdere bronnen, kun je WEL tot relevante informatie komen.

Hieronder wat ideeen voor queries in de data data story:

query; CBS wijk (woningen voor 2000, gemiddelde lage woningwaarde, en hoge woningvoorraad) en dan gecombineerd met BAG panden van voor 1970, en energielabel D en hoger...

query; panden die geen woningfunctie (BAG) die dicht bij centrum liggen, oud zijn, en waar ruimtelijke plannen woningbouw toe staat?

query: Hoogspanningslijnen en Transformatiehuisjes (BRT) die dicht bij een woonwijk (bestaande bebouwing, BAG; of hoeveelheid inwoners Wijken en Buurten CBS) liggen. (deze lijnen moeten vanwege kabinetsbeleid onder de grond, en dat biedt mogelijkheden voor gebiedsinrichting. 

query: Scholen (BRT) die geen schoolfunctie (DUO) meer hebben, zijn potentieel interessant om te verbouwen...., maar het mag geen rijksmonumenten (RCE) zijn


Browsing: beginnen met nummer aanduiding, dan verblijfsobject, pand, gebouw in BRT, energielabel, monumenten, school: die staan allemaal in een wijk (wijk gegevens), buurt, plaats (allemaal cbs), en die plaats kan naar naar wikipedia...

