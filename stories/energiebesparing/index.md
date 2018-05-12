---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/energiebesparing/logo.png
output: leaflet
title: Energiebesparing
---

# Energiebesparing

Deze Data Story gaat over de gemiddelde energiebesparingspotentie voor
koopwoningen in Nederland.  Het gemiddelde besparingspotentieel wordt
per gemeente gerekend door het CBS.

## Reëele energiebesparing

De volgende kaart toont de totale besparing in energieverbruik
(uitgedrukt in euro per jaar) die in koopwoningen behaald kan worden
wanneer alle energiebesparende maatregelen die nog kunnen worden
toegepast in de woning worden gerealiseerd.  Besparingen liggen
landelijk tussen €0 (blauw/koud) en €2.280 (rood/warm).

<div data-query
     data-query-sparql="10-reëel.rq">
</div>

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

<div data-query data-query-sparql="bouwfysisch.rq">
</div>

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

<div data-query data-query-sparql="installatietechnisch.rq">
</div>

## Theoretische energiebesparing

De volgende thematische kaart laat de theoretische energiebesparing
zien.  Landelijk ligt dit besparingspotentieel tussen €0 en €1.900 per
koopwoning per jaar.

<div data-query data-query-sparql="theoretisch.rq"> </div>
