---
endpoint: https://data.labs.pdok.nl/sparql
output: leaflet
layout: story
logo: /stories/monument/logo.jpg
published: false
title: Kadaster Data Stories ― Nederlandse monumenten
---

# Nederlandse monumenten

Deze query laat zien hoe we, gebruik makend van Linked Data, vragen
over datasets heen kunnen stellen.

We vragen een monument op uit de RCE monumenten datasets (dataset 1).
Voor dat monument vragen we een afbeelding op uit de RCE beeldbank
(dataset 2), inclusief de naam van de fotograaf en de datum waarom de
foto genomen is.  Vervolgens vragen we aan de Kadaster Basis
Administratie Gebouwen (BAG) welk verblijfsobject en welk pand bij het
monument horen (dataset 3).  In de BAG vinden we ook het bouwjaar en
de gebruiksstatus van dit verblijfsobject en pand.

<div data-query
     data-query-sparql="museum_flehite.rq">
</div>

## Prinsegracht 5, Den Haag

<div data-query
     data-query-sparql="prinsegracht-5.rq">
</div>

## Monumenten in Amersfoort

<div data-query
     data-query-sparql="almere_monuments.rq">
</div>
