---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
title: Nationaal Archief
---

# Nationaal Archief

Deze Data Story gaat over de Beeldbank van het Nationaal Archief.

## Klassen

Overzicht van de klassen die in de Beeldbank gebruikt worden:

<div data-query="https://nightly.yasgui.triply.cc/#query=prefix%20graph%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fgraph%2F%3E%0Aselect%20%3Fc%20(count(%3Fi)%20as%20%3Fn)%20%7B%0A%20%20graph%20graph%3Anationaal-archief-beeldbank%20%7B%0A%20%20%20%20%3Fi%20a%20%3Fc%0A%20%20%7D%0A%7D%0Agroup%20by%20%3Fc%0Aorder%20by%20desc(%3Fn)%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query%203&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22dataTable%22%3A%7B%22cols%22%3A%5B%7B%22id%22%3A%22%22%2C%22label%22%3A%22c%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22n%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%5D%2C%22rows%22%3A%5B%7B%22c%22%3A%5B%7B%22v%22%3A%22http%3A%2F%2Fschema.org%2FPhotograph%22%7D%2C%7B%22v%22%3A73521%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22http%3A%2F%2Fschema.org%2FPlace%22%7D%2C%7B%22v%22%3A2088%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23Resource%22%7D%2C%7B%22v%22%3A21%7D%5D%7D%5D%7D%2C%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22is3D%22%3Afalse%2C%22pieHole%22%3A0%2C%22booleanRole%22%3A%22certainty%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22PieChart%22%7D%7D"
     data-query-sparql="klassen.rq"
     data-query-output="gchart">
</div>

## Eingenschappen

Overzicht van de eigenschappen die in de Beeldbank gebruikt worden:

<div data-query="https://nightly.yasgui.triply.cc/#query=prefix%20graph%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fgraph%2F%3E%0Aselect%20%3Fp%20(count(%3Fs)%20as%20%3Fn)%20%7B%0A%20%20graph%20graph%3Anationaal-archief-beeldbank%20%7B%0A%20%20%20%20%3Fs%20%3Fp%20%3Fo%0A%20%20%7D%0A%7D%0Agroup%20by%20%3Fp%0Aorder%20by%20desc(%3Fn)%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query%203&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22dataTable%22%3A%7B%22cols%22%3A%5B%7B%22id%22%3A%22%22%2C%22label%22%3A%22c%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22n%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%5D%2C%22rows%22%3A%5B%7B%22c%22%3A%5B%7B%22v%22%3A%22http%3A%2F%2Fschema.org%2FPhotograph%22%7D%2C%7B%22v%22%3A73521%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22http%3A%2F%2Fschema.org%2FPlace%22%7D%2C%7B%22v%22%3A2088%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23Resource%22%7D%2C%7B%22v%22%3A21%7D%5D%7D%5D%7D%2C%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22is3D%22%3Afalse%2C%22pieHole%22%3A0%2C%22booleanRole%22%3A%22certainty%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22PieChart%22%7D%7D"
     data-query-sparql="eigenschappen.rq"
     data-query-output="gchart">
</div>

## Onderwerpen

De meest voorkomende onderwerpen in de Beeldbank:

<div data-query
     data-query-sparql="subjects.rq"
     data-query-output="gchart">
</div>

## Gemeentes

Het is eenvoudig om beelden uit de Beeldbank te koppelen aan
gemeentes:

<div data-query
     data-query-endpoint="https://api.demo.triply.cc/datasets/kadaster/brt/services/sparql/sparql"
     data-query-sparql="gemeentes.rq"
     data-query-output="leaflet">
</div>

## Links met andere datasets

Het is veel moeilijker om beelden uit de Beeldbank te koppelen aan
andere datasets.  Hier proberen we de afgebeelde zwembaden in de BRT
te vinden, maar dat lukt niet helemaal:

<div data-query
     data-query-endpoint="https://api.demo.triply.cc/datasets/kadaster/brt/services/sparql/sparql"
     data-query-sparql="brt.rq"
     data-query-output="leaflet">
</div>

## SPARQL Gallery (in ontwikkeling)

De Beeldbank van het Nationaal Archief leent zich goed voor SPARQL
Galleries, waarin een SPARQL query direct kan worden omgezet naar een
verzamling HTML widgets: <a
href="https://api.nightly.triply.cc/s/HynlegNXX"
target="_blank">demo</a>.
