---
layout: default
title: Energielabels voorspellen
---
<link rel="stylesheet" href="/assets/js/openlayers/v4.6.5-dist/ol.css" />
<script src="/assets/js/openlayers/v4.6.5-dist/ol.js"></script>
<script src="decisionTree.js"></script>

# Energielabels voorspellen

## DISCLAIMER
De applicatie op deze pagina kan een ruwe benadering geven van het energielabel van een woonhuis. Aan de waarden gegeven in deze applicatie kunnen geen rechten worden ontleend. 

## Energielabels voor panden
Naast broodroosters en wasmachines kunnen nu ook panden over een energielabel beschikken. Velen hebben hier al kennis mee gemaakt: bij verkoop van een pand moet er een energielabel van dit pand bekend zijn. De labelindeling en het bijbehorende kleurenpalet is als volgt:

<img src="energy_performance_rating.svg" />

## Energielabels en Machine Learning
Het blijkt niet eenvoudig om een model voor energielabels van woningen handmatig te *tunen* zodanig dat er betrouwbare voorspellingen uit komen. Toch is het met behulp van automatisch lerende algoritmes te doen: met behulp van een eenvoudige [decision tree](https://en.wikipedia.org/wiki/Decision_tree) en slechts het bouwjaar en oppervlak van een woonhuis is met een nauwkeurigheid van 80% een energielabel te voorspellen dat maximaal één label naast het daadwerkelijke label zit. Een exacte match is lastiger: op basis van enkel bouwjaar en oppervlak is slechts een nauwkeurigheid van 45% te geven.

**Beweeg de kaart om de voorspellingen te genereren.**
<div id="map"></div>
<script src="energyLabelMap.js"></script>
