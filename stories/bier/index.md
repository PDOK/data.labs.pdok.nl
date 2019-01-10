---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/bier/logo.jpg
output: leaflet
published: true
title: 🍺 Bier Data Story 🍺
---

# 🍺 Bier Data Story 🍺

## De Brouwerij Tijdreis

Met brouwerijdata als Linked Data, kunnen we ook (in analogie van de
populaire topotijdreis.nl) de biertijdreis presenteren. Zie de
explosie van brouwerijen in de afgelopen paar jaar:

<a href="../../presentations/bier-tijdreis" target="_blank">
  <button>Brouwerij Tijdreis</button>
</a>

## Stakingen bij brouwers

Stakingen die in Nederland hebben plaatsgevonden worden als Linked
Data gepubliceerd door het Instituut voor Sociale Geschiedenis (IISG)
op [Druid](https://druid.datalegend.net/dataLegend/strikes).  We
kunnen de stakingen per beroep opvragen.  Hieronder de stakingen
geïnitieerd door brouwers:

<query data-endpoint="https://api.druid.datalegend.net/datasets/dataLegend/strikes/services/strikes/sparql"
       data-query-ref="stakingen-brouwers.rq">
</query>

### Stakingen bij Heineken

Maar niet alleen brouwers hebben gestaakt bij Heineken.  Hieronder de
stakingen van *alle* beroepsgroepen bij Heineken door door de jaren
heen:

<query data-endpoint="https://api.druid.datalegend.net/datasets/dataLegend/strikes/services/strikes/sparql"
       data-query-ref="stakingen-heineken.rq">
</query>

## De Heineken brouwerij (Kadaster BAG & RCE Monumenten Register)

Laten we eens kijken hoe oud het gebouw van de Heineken Experience /
de oude Heineken brouwerij is.  We zoeken dit op in zowel de Kadaster
BAG alsook het RCE Monumenten Register:

<query data-endpoint="https://data.pdok.nl/sparql"
       data-query-ref="monument-heineken.rq"
       data-output="geo">
</query>

En wat zegt [Wikipedia](https://nl.wikipedia.org/wiki/Heineken_Brouwerij_(Amsterdam)) ? 

## Linked Bier Browser

Gebruik Linked Data om te zoeken naar biertjes en brouwerijen:

<a href="../../presentations/bier-browser" target="_blank">
  <button>Linked Bier Browser</button>
</a>
