---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
title: Nationaal Archief
---

# Nationaal Archief

Deze Data Story gaat over de Beeldbank van het Nationaal Archief.

## Locaties

Hieronder tonen we de meest voorkomende locaties die in de Beeldbank
zijn vastgelegd.

<div data-query="http://127.0.0.1:4000/stories/nationaal-archief/#query=prefix+dce%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0Aselect+%3Flocation+(count(%3Fimage)+as+%3Fn)+%7B%0A++%3Fimage+a+schema%3APhotograph.%0A++%7B%0A++++%3Fimage+schema%3AcontentLocation%2Frdfs%3Alabel+%3Flocation.%0A++%7D+union+%7B%0A++++%3Fimage+schema%3AcontentLocation+%3Flocation.%0A++++filter(isLiteral(%3Flocation))%0A++%7D%0A%7D%0Agroup+by+%3Flocation%0Aorder+by+desc(%3Fn)%0Alimit+20%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22legend%22%3A%22right%22%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
     data-query-sparql="locaties.rq"
     data-query-output="gchart">
</div>

## Gemeentes

Op basis van de locatie kunnen we de beelden uit de Beeldbank op de
kaart zetten.  Hieronder tonen we de gemeentes met ten minste één
beeld in de Beeldbank.

<div data-query
     data-query-endpoint="https://api.demo.triply.cc/datasets/kadaster/brt/services/sparql/sparql"
     data-query-sparql="gemeentes.rq"
     data-query-output="leaflet">
</div>

## Kerken: Beeldbank (Nationaal Archief) & BAG (Kadaster)

We willen de meerwaarde tonen van het leggen van links tussen
Kadastrale data en data van het Nationaal Archief.  Hieronder
combineren we de kadastrale registratie van de Sint Bavokerk aan
afbeeldingen van die kerk uit de Beeldbank.

### Sint Bavokerk

<div data-query
     data-query-endpoint="https://api.demo.triply.cc/datasets/nationaal-archief/beeldbank/services/sparql/sparql"
     data-query-sparql="sint-bavokerk.rq"
     data-query-output="leaflet">
</div>

<!--
## Links met andere datasets

Het is veel moeilijker om beelden uit de Beeldbank te koppelen aan
andere datasets.  Hier proberen we de afgebeelde zwembaden in de BRT
te vinden, maar dat lukt niet helemaal:

<div data-query
     data-query-endpoint="https://api.demo.triply.cc/datasets/kadaster/brt/services/sparql/sparql"
     data-query-sparql="brt.rq"
     data-query-output="leaflet">
</div>
-->

## Gallerij

De Beeldbank van het Nationaal Archief leent zich goed voor het tonen
van een gallerij.  De volgende query toont de onderwerpen met de
meeste afbeeldingen, samen met het aantal afbeeldingen met dat
onderwerp.

<a href="https://api.demo.triply.cc/s/9vHwRHw9X" target="_blank">
  <button>Voer query uit</button>
</a>
