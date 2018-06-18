---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/bier/logo.jpg
output: leaflet
published: true
title: 🍺 Bier Data Story 🍺
---

# 🍺 Bier Data Story 🍺

## Linked Bier Browser

<a href="../../presentations/bier-browser" target="_blank">
  <button>Linked Bier Browser</button>
</a>

## Stakingen bij brouwers

Maar als we die glazenwassers nou buiten beschouwing laten, en alleen de stakingen van brouwers bekijken, wat leert ons dat?
Er zou wel een zekere afhankelijkheid in zitten met de kwaliteit van het brouwsel….

<div data-query
     data-query-endpoint="https://api.druid.datalegend.net/datasets/dataLegend/strikes/services/strikes/sparql"
     data-query-sparql="stakingen-brouwers.rq">
</div>

## Stakingen bij Heineken

We zitten in Amsterdam, en dus bij Heineken, is daar wel eens
gestaakt? en door wie?  Opmerkelijk die glazenwassers…

<div data-query
     data-query-endpoint="https://api.druid.datalegend.net/datasets/dataLegend/strikes/services/strikes/sparql"
     data-query-sparql="stakingen-heineken.rq">
</div>

## De Heineken brouwerij (Kadaster BAG & RCE Monumenten Register)

Laten we eens kijken hoe oud het gebouw van de Heineken Experience is…
hier ligt toch een groot deel van de historie van Heineken.

<div data-query
     data-query-sparql="monument-heineken.rq">
</div>

# Tot slot: De Brouwerij Tijdreis

Met brouwerijdata als Linked Data, kunnen we ook (in analogie van de
populaire topotijdreis.nl) de biertijdreis presenteren. Zie de
explosie van brouwerijen in de afgelopen paar jaar:

<a href="../../presentations/bier-tijdreis" target="_blank">
  <button>Brouwerij Tijdreis</button>
</a>
