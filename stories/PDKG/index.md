---
layout: story
title: PDOK Knowledge Graph
logo: /stories/PDKG/kkg-publiek.png
endpoint: https://query.wikidata.org/sparql
output: leaflet
---

Het werk rondom de Kadaster Knowledge Graph in momenteel in
uitvoering.


De laatste versie van het KKG figuur:
![KKG-model](https://github.com/PDOK/data.labs.pdok.nl/raw/master/stories/PDKG/kkg-publiek.png)

[Demo link](http://linkeddata.ordina.nl/demo-oid/query/local/graph?subject=http%3A%2F%2Fbgtld-test.geostandaarden.nl%2Fwoz%2Fid%2Fobject%2F054619157857)


Persona: projectontwikkelaar

We willen dat er meer huizen worden verkocht
Er moeten meer huizen worden gebouwd
Buitenstedelijk bouwen is lastig, want tast groen aan, is niet duurzaam
Rand/binnenstedelijk bouwen is ook lastig, want waar heb je de beste kans?
Daarom de case: met het combineren van data uit meerdere bronnen, kun je WEL tot relevante informatie komen.

De uitwerking van de data story (besproken tussen Wouter, Roel, Erwin)
Deel 1:
Query 1. CBS wijken met matige stedelijkheid.
Query 2. CBS wijk (woningen voor 2000, gemiddelde lage woningwaarde, en hoge woningvoorraad)
Query 3. dan gecombineerd met BAG panden van voor 1970, woz waarde in de laagste klasse, en energielabel D en hoger…
(heatmap voor de sloophamer.)

Deel 2:
Query 4; panden die een winkel/industriefunctie (BAG) die dicht bij centrum liggen (Roel checkt Marco/Postcode), oud zijn, en waar ruimtelijke plannen woningbouw toe staat? (Pano; is ie bevraagbaar) (Marco)

Deel 3:
Query 5: Scholen (BRT) die geen schoolfunctie (DUO) meer hebben, (BAG status in gebruik bv. of bag laatste datum wijziging: want als binnen x(5) jaar aanpassingen in de BAG zijn geweest, dan waarschijnlijk gebouw al aangepast) zijn potentieel interessant om te verbouwen…., maar het mag geen rijksmonumenten (RCE) zijn
