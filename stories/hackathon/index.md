---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/sp2b/logo.png
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

## Oppervlakte

Verblijfsobjecten met een oppervlakte van 99,999m².  Alle
verblijfsobjecten met deze oppervlakte worden getoond.

<div data-query data-query-sparql="oppervlakte-groot.rq"></div>

Verblijfsobjecten met een oppervlakte van 1m².  Het aantal
verblijfsobjecten per BAG status is getoond.

<div data-query data-query-sparql="oppervlakte-klein.rq"></div>

## Bouwjaar

Panden met bouwjaar 9999.  Het aantal panden per BAG status is
getoond.

<div data-query data-query-sparql="bouwjaar.rq"></div>

## Huisnummer

Nummeraanduidingen met huisnummer 9999.  Het aantal nummeraanduidingen
per BAG status is getoond.

<div data-query data-query-sparql="huisnummer.rq"></div>

## Huisnummer toevoeging

Nummeraanduidingen met huisnummer toevoeging ‘kwek’.  Het aantal
nummeraanduidingen per BAG status is getoond.

<div data-query data-query-sparql="huisnummer-toevoeging.rq"></div>
