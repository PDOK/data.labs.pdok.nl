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

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="museum_flehite.rq" data-output="geo"></query>

## Prinsegracht 5, Den Haag


<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="prinsegracht-5.rq" data-output="geo"></query>

## Monumenten in Amersfoort

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="almere_monuments.rq" data-output="geo"></query>