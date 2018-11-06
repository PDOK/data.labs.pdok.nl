---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/hackathon/logo.jpg
output: table
title: Hackathon
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


<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="oppervlakte-groot.rq" data-output="geo"></query>

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