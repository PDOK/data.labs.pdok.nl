---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/energiebesparing/logo.png
output: leaflet
title: Energiebesparing
published: false
---

# Energiebesparing

Deze Data Story gaat over de gemiddelde energiebesparingspotentie voor
koopwoningen in Nederland.  Het gemiddelde besparingspotentieel wordt
per gemeente gerekend door het CBS.

## Reële energiebesparing

De volgende kaart toont de totale besparing in energieverbruik
(uitgedrukt in euro per jaar) die in koopwoningen behaald kan worden
wanneer alle energiebesparende maatregelen die nog kunnen worden
toegepast in de woning worden gerealiseerd.  Besparingen liggen
landelijk tussen €0 (blauw/koud) en €2.280 (rood/warm).


<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="10-reeel.rq" data-output="geo"></query>

## Reële energiebesparing: Bouwfysische besparingen

De volgende kaart toont de besparing in energieverbruik (uitgedrukt in
euro per jaar) die in koopwoningen behaald kan worden wanneer alleen
bouwfysische maatregelen worden toegepast.  Bouwfysische besparingen
liggen landelijk tussen €0 (blauw/koud) en €1.500 (rood/warm).
Bouwfysische maatregelen bestaan uit:

- isolatie van vloeren
- isolatie van daken
- isolatie van gevels
- kierdichting en HR beglazing

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="bouwfysisch.rq" data-output="geo"></query>

## Reële energiebesparing: Installatietechnische besparingen

De volgende kaart toont de besparing in energieverbruik (uitgedrukt in
euro per jaar) die in koopwoningen behaald kan worden wanneer alleen
installatietechnische maatregelen worden toegepast.
Installatietechnische besparingen liggen landelijk tussen €0
(blauw/koud) en €850 (rood/warm).  Installatietechnische maatregelen
bestaan uit:

- HR combiketel
- zonneboiler
- zonnepanelen

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="installatietechnisch.rq" data-output="geo"></query>

## Theoretische energiebesparing

De volgende thematische kaart laat de theoretische energiebesparing
zien.  Landelijk ligt dit besparingspotentieel tussen €0 en €1.900 per
koopwoning per jaar.

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="theoretisch.rq" data-output="geo"></query>
