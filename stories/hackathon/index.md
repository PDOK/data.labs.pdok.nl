---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/hackathon/logo.jpg
output: table
title: Hackathon
published: false
---

# Universiteit Twente/Kadaster Hackathon; Resultaten Team: Kwaliteit BAG

De story bevat de uitkomsten van de Universiteit Twente/Kadaster Linked Data Hackathon van
het productieve team bestaande uit Bas Hendrikse, Christiaan Visscher,
en Dylan Ye.  Dit team heeft heel goede SPARQL queries gemaakt
met als doel het vinden van kwaliteitsproblemen in de BAG.  Hun queries zijn
aangepast om alleen actuele BAG records te tonen.  (Het is namelijk
triviaal om ‘kwaliteitsproblemen’ in oude records te vinden: deze zijn
heel vaak opgelost in een later record.) Het laat zien dat SPARQL goed gebruikt kan worden om kwaliteitsproblemen in data te vinden.
Een sfeerimpressie van de hackathon kan hier worden bekeken: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/yak9OTOrxNU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Oppervlakte

Verblijfsobjecten met een oppervlakte van 99,999m².  Alle
verblijfsobjecten met deze oppervlakte worden getoond.


<query data-config="http://127.0.0.1:5000/stories/hackathon/#query=prefix%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0Aprefix%20begrip%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fid%2Fbegrip%2F%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aselect%20%3Fverblijfsobject%20%3Fwkt%20%7B%0A%20%20graph%20%3Fg%20%7B%0A%20%20%20%20%3Fverblijfsobject%20bag%3Aoppervlakte%20%3Foppervlakte%20.%0A%20%20%20%20filter(%3Foppervlakte%20%3D%2099999)%0A%20%20%20%20filter%20not%20exists%20%7B%0A%20%20%20%20%20%20%3Fverblijfsobject%20bag%3Astatus%20begrip%3AVerblijfsobjectIngetrokken%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20filter%20not%20exists%20%7B%0A%20%20%20%20%3Fg%20bag%3AeindGeldigheid%20%3Feind%20.%0A%20%20%7D%0A%20%20%3Fverblijfsobject%20bag%3Apandrelatering%2Fbag%3AgeometriePand%2Fgeo%3AasWKT%20%3Fwkt%20%3B%0A%7D%0Alimit%205%0A&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22visualization%22%3A%22grouped%22%2C%22grouped%22%3Afalse%7D"
       data-endpoint="https://data.pdok.nl/sparql"
       data-query-ref="oppervlakte-groot.rq"
       data-output="geo">
</query>

Verblijfsobjecten met een oppervlakte van 1m².  Het aantal
verblijfsobjecten per BAG status is getoond.


<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="oppervlakte-klein.rq"></query>

## Huisnummer

Nummeraanduidingen met huisnummer 9999.  Het aantal nummeraanduidingen
per BAG status is getoond.


<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="huisnummer.rq"></query>

## Huisnummer toevoeging

Nummeraanduidingen met huisnummer toevoeging ‘kwek’.  Het aantal
nummeraanduidingen per BAG status is getoond.

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="huisnummer-toevoeging.rq"></query>

## Bouwjaar

Panden met bouwjaar 9999.  Het aantal panden per BAG status is
getoond.


<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="bouwjaar.rq"></query>
