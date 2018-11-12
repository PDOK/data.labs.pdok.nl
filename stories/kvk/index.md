---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/energie/logo.png
output: leaflet
title: KvK, Energie labels, BAG
---

## Bedrijvigheid in Zwolle (CBS)

Waar zitten de meeste bedrijven in Zwolle?  De CBS Wijken- en
Buurtenkaart houdt een groot aantal statistische gegevens voor buurten
bij.  Bijvoorbeeld het aantal bedrijven per buurt.  Op onderstaande
kaart wordt per buurt weergegeven of we weinig (blauw) of veel (rood)
bedrijven gevestigd zijn.

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="10-buurt-cbs.rq" data-output="geo"></query>

<!--
## Kvk registraties voor ‘Binnenstad-Zuid’

Uit de vorige vraag werd duidelijk dat de meeste bedrijven (605) in
Zwolle in de buurt ‘Binnenstad-Zuid’ liggen.  Laten we voor deze buurt
de KvK registraties tonen:

<query
     data-query-ref="20-buurt-kvk.rq">
</query>
-->

## Grootste werkgevers in Zwolle

De grootste werkgever in Zwolle is de ABN Bank:


<query data-config="http://127.0.0.1:5000/stories/kvk/#query=prefix+kvk%3A+%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fkvk%2Fdef%2F%3E%0Aprefix+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0Aprefix+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0Aselect+%3Fnaam+(sum(%3Fwerknemers)+as+%3Fwerknemers)+%7B%0A++graph+%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fgraph%2Fkvk%3E+%7B%0A++++%3Forganizatie%0A++++++kvk%3Aplaats+%22Zwolle%22%5E%5Exsd%3Astring%3B%0A++++++schema%3AlegalName+%3Fnaam%3B%0A++++++schema%3AnumberOfEmployees+%3Fwerknemers.%0A++%7D%0A%7D%0Agroup+by+%3Fnaam%0Aorder+by+desc(%3Fwerknemers)%0Alimit+25%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22legacyScatterChartLabels%22%3Atrue%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22vAxes%22%3A%5B%7B%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%7B%22useFormatFromData%22%3Atrue%7D%5D%2C%22hAxis%22%3A%7B%22viewWindow%22%3A%7B%22max%22%3A3000%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3A3000%2C%22useFormatFromData%22%3Atrue%2C%22viewWindowMode%22%3A%22explicit%22%7D%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%2C%22series%22%3A%7B%220%22%3A%7B%7D%7D%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22BarChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="40-kvk-werknemers.rq" data-output="gchart"></query>


## Grootste industriën in Zwolle

Op basis van de SBI code kunnen we de grootste industriën in Zwolle
opvragen:

<query data-config="http://localhost:5000/stories/kvk/#query=prefix%20kvk%3A%20%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fkvk%2Fdef%2F%3E%0Aprefix%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0Aprefix%20xsd%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0Aselect%20%3Fsbi%20(sum(%3Fwerknemers)%20as%20%3Fn)%20%7B%0A%20%20graph%20%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fgraph%2Fkvk%3E%20%7B%0A%20%20%20%20%3Forganizatie%20kvk%3Aplaats%20%22Zwolle%22%5E%5Exsd%3Astring%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20kvk%3AsbiOmschrijving%20%3Fsbi%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20schema%3AnumberOfEmployees%20%3Fwerknemers%20.%0A%20%20%7D%0A%7D%0Agroup%20by%20%3Fsbi%0Aorder%20by%20desc(%3Fn)%0Alimit%2010%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query%203&headers=%7B%7D&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22is3D%22%3Atrue%2C%22pieHole%22%3A0%2C%22booleanRole%22%3A%22certainty%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22PieChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="50-kvk-sbi.rq" data-output="gchart"></query>


## RCE monumenten

In deze buurt liggen ook de meeste RCE monumenten:

<query
    data-endpoint = "https://data.labs.pdok.nl/sparql"
     data-query-ref="70-buurt-rce.rq"
     data-output="geo">
</query>


## Energielabels (RVO)

We kunnen ook de energielabels voor Zwolle opvragen, bijvoorbeeld voor
de BAG panden aan de ‘Diezerstraat’, samen met de kadastrale gegevens.
<p>De kleuren duiden de verschillende energielabels aan: label A of A+
(
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#22b14c" r="10"/>
</svg>
), label B (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#8ff334" r="10"/>
</svg>
), label C (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#bdfc2c" r="10"/>
</svg>
) label D (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#fff200" r="10"/>
</svg>
), label E (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ff9a35" r="10"/>
</svg>
), label F (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ff7f27" r="10"/>
</svg>
), label G (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ed1c24" r="10"/>
</svg>
), of geen label (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="grey" r="10"/>
</svg>
).</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="60-energielabel.rq" data-output="geo"></query>
