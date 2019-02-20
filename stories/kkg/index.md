---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /assets/images/kadaster.jpg
title: PDOK Knowledge Graph (KKG)
---

# PDOK Knowledge Graph (KKG)

Persona: Projectontwikkelaar.

We willen dat er meer huizen worden verkocht.  Één manier om dat op te
lossen is door meer huizen te bouwen.  Buitenstedelijk bouwen is
echter lastig: dit tast groen aan en is mogelijk minder duurzaam.
Rand/binnenstedelijk bouwen is ook lastig, want waar heb je de beste
kans?  Daarom de case: met het combineren van data uit meerdere
bronnen, kun je WEL tot relevante informatie komen.

## Deel 1

CBS wijken met matige stedelijkheid.

<query data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-query-ref="q1a.rq"
       data-output="geo">
</query>

Laten we daar aan toevoegen: de wijk moet woningen bevatten die vóór
2000 zijn gebouwd, met een lage gemiddelde woningwaarde, en moeten een
relatief hoge woningvoorraad hebben.

<query data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-query-ref="q1b.rq"
       data-output="gallery">
</query>

Dan gecombineerd met BAG panden van voor 1970, WOZ waarde in de
laagste klasse, en energielabel D of hoger…

<query data-query-ref="q1c.rq"
       data-output="geo3d">
</query>

## Deel 2

Panden met een winkel/industriefunctie volgens de BAG, die dicht bij
het centrum liggen, oud zijn, en waar ruimtelijke plannen woningbouw
toestaat.

<!-- TODO: enkel bestemming -->
<query data-query-ref="q2.rq"
       data-output="geo">
</query>

## Deel 3

<!-- TODO: BAG onderwijsfunctie in het verleden -->

Oud gebouw wat vroeger een school was, maar inmiddels niet meer.  5
Jaar combineren met functie/status-verandering.
Te laat als status “is gesloopt”.

<!--
Scholen volgens de BRT die volgens DUO geen schoolfunctie (meer)
hebben.  BAG status in gebruik bv. of bag laatste datum wijziging:
want als binnen x(5) jaar aanpassingen in de BAG zijn geweest, dan
waarschijnlijk gebouw al aangepast) zijn potentieel interessant om te
verbouwen…., maar het mag geen rijksmonumenten (RCE) zijn.
-->

## Scholen volgens de BRT

<query data-config="http://localhost:5000/stories/kkg/#query=prefix%20brt%3A%20%3Chttp%3A%2F%2Fbrt.basisregistraties.overheid.nl%2Fdef%2Ftop10nl%23%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aselect%20*%20%7B%0A%20%20%3Fgebouw%0A%20%20%20%20a%20brt%3ASchool%3B%0A%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape.%0A%7D%0Alimit%20250%0A&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22visualization%22%3A%22heatmap%22%2C%22grouped%22%3Afalse%7D"
       data-query-ref="q3a.rq"
       data-output="geo">
</query>

## BAG panden met status veranderingen binnen de afgelopen 5 jaar

<query data-query-ref="q3b.rq"
       data-output="geo">
</query>

## BAG pand & BRT school

<query data-query-ref="q3c.rq"
       data-output="geo3d">
</query>

<!--
## Deel 4

Stroomvoorziening.

<query data-query-ref="q4.rq"
       data-output="geo">
</query>
-->

## Examples

### BAG functies

<ul>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="green" r="15"/></svg>
    Living space
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="red" r="15"/></svg>
    Shopping
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="blue" r="15"/></svg>
    Offices
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="yellow" r="15"/></svg>
    Education
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="orange" r="15"/></svg>
    Health
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="violet" r="15"/></svg>
    Sport
  </li>
</ul>

<query data-query-ref="functies.rq"
       data-output="geo3d">
</query>

### WOZ waardeklasse

<query data-query-ref="waardeklassen.rq"
       data-output="geo3d">
</query>
