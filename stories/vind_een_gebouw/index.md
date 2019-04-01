---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/vind_een_gebouw/logo.png
output: leaflet
title: Kadaster Data Stories ― Vind een gebouw
---

# Vind een gebouw

De volgende vraag kan gebruikt worden om een specifieke gebouwen
(inclusief woonhuizen) te vinden.  De informatie voor een specifiek
gebouw kan worden opgevraagd door de query editor te openen en de
<code>bind</code> operatoren aan het begin van de query aan te passen.

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="vind-een-huis.rq" data-output="geo3d"></query>

Daarnaast is het ook mogelijk om de gehele straat op te vragen. De informatie voor
een specifieke straat kan worden opgevraagd door de query editor te openen en de
<code>bind</code> operatoren aan het begin van de query aan te passen.

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="vind-een-straat.rq" data-output="geo3d"></query>

Voor sommige gebouwen zijn meerdere registraties door de tijd heen
gemaakt.  Omdat deze history ook als Linked Data is opgeslagen moeten
er dan extra stappen ondernomen worden om alleen de actuele informatie
te tonen.

In onderstaande query wordt de actuele informatie voor <a
href="http://heerlijklokaal.nl/"><i>Heerlijk Lokaal</i>,
Molenstraat-Centrum 1, Apeldoorn</a> getoond.

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="heerlijk_lokaal.rq" data-output="geo"></query>
