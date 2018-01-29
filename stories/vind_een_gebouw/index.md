---
layout: story
title: Kadaster Data Stories ― Vind een gebouw
logo: /stories/vind_een_gebouw/logo.png
endpoint: https://data.pdok.nl/sparql
output: leaflet
---

# Vind een gebouw

De volgende vraag kan gebruikt worden om een specifieke gebouwen
(inclusief woonhuizen) te vinden.  De informatie voor een specifiek
gebouw kan worden opgevraagd door de query editor te openen en de
<code>bind</code> operatoren aan het begin van de query aan te passen.

<div data-query
     data-query-sparql="mijn-woning.rq">
</div>

Voor sommige gebouwen zijn meerdere registraties door de tijd heen
gemaakt.  Omdat deze history ook als Linked Data is opgeslagen moeten
er dan extra stappen ondernomen worden om alleen de actuele informatie
te tonen.

In onderstaande query wordt de actuele informatie voor <a
href="http://heerlijklokaal.nl/"><i>Heerlijk Lokaal</i>,
Molenstraat-Centrum 1, Apeldoorn</a> getoond.

<div data-query
     data-query-sparql="heerlijk_lokaal.rq">
</div>
