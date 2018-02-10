---
layout: story
title: Digitaal Brouwgoed
logo: /stories/Hack-a-LOD/logo.jpg
endpoint: https://data.pdok.nl/sparql
output: leaflet
---

# Digitaal Brouwgoed - Bier, Bier, Bier

# 1. Faceted Browsing door Bierdata: Vind jouw bier!

<a href="http://hackalod.triply.cc"><button>Linked Bier Browser</button></a>

# 2. Wat weten we van Bier en Erfgoed?
In dit verhaal gaan we wat achtergronden en aanvullende informatie opduiken rond Bier en Erfgoed.

## Stakingen bij Heineken (Dataset Stakingen, IISG)
We zitten in Amsterdam, en dus bij Heineken, is daar wel eens gestaakt? en door wie?
Opmerkelijk die glazenwassers...

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/stakingen/services/endpoint/sparql"
     data-query-sparql="stakingen-heineken.rq">
</div>

## Stakingen door brouwers (Dataset Stakingen, IISG)
Maar als we die glazenwassers nou buiten beschouwing laten, en alleen de stakingen van brouwers bekijken, wat leert ons dat?
Er zou wel een zekere afhankelijkheid in zitten met de kwaliteit van het brouwsel....

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/stakingen/services/endpoint/sparql"
     data-query-sparql="stakingen-brouwers.rq">
</div>

## Boeken over Heineken (Dataset Boektitels, Koninklijke Bibliotheek)
Dus er is veel gestaakt bij Heineken, zijn er ook boeken over geschreven?
Jazeker...

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="boeken-heineken.rq">
</div>

## Boeken over bier (Dataset Boektitels, Koninklijke Bibliotheek)
Dan zijn er vast nog veel meer boeken over bier geschreven, misschien ook met een hogere kwaliteit. Zie bijvoorbeeld resultaat 50.

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="boeken-bier.rq">
</div>

## Heineken bladmuziek (Dataset Bladmuziek, Stichting Omroep Muziek)
En de vraag, die iedereen wilt weten: is er ook bladmuziek over Heineken?

<div data-query
     data-query-endpoint="http://metamatter.io/sparql"
     data-query-sparql="muziek-heineken.rq">
</div>

## Biermuziek (Dataset Bladmuziek, Stichting Omroep Muziek)
En nog meer bierliederen, met vermakelijke titels....bier, bier, bier.

<div data-query
     data-query-endpoint="http://metamatter.io/sparql"
     data-query-sparql="muziek-bier.rq">
</div>

## Nog meer, jazeker...het Heinekenpad (Nationaal Wegenbestand)
En ja, als we even een query uitvoeren op het Nationaal Wegenbestand, vinden we ook het Heinekenpad.

<a href="http://data.pdok.nl/nationaal-wegenbestand-wegen/id/wegvakken/wegvakken.833446">http://data.pdok.nl/nationaal-wegenbestand-wegen/id/wegvakken/wegvakken.833446</a>

## Het Heineken monument (Datasets Basisregistratie Adressen en Gebouwen (Kadaster) en Monumenten Register (Rijksdienst Cultureel Erfgoed)
Laten we eens kijken hoe oud het gebouw van de Heineken Experience is...hier ligt toch een groot deel van de historie van Heineken

## Ojee, een verschil.... (Datasets DBpedia.org)
De BAG en de RCE geven verschillende resultaten, maar Linked Data is fantastisch we kunnen er een derde bron bij halen om te kijken of de BAG of RCE het fout heeft....DBpedia!!!

<div data-query
     data-query-sparql="monument-heineken.rq">
</div>

## Zijstapje: waar kan ik zelf brouwen? (Ruimtelijke Plannen.nl, Kadaster)
We kunnen ook gaan kijken waar we zelf een brouwerij mogen beginnen (op basis van linked data van brouwerijen en ruimtelijke plannen:
<a href="http://kadaster.semaku.com/ProeftuinOK/ZoekBedrijfslocatie/?#/map"><button>Mag ik een brouwerij bouwen?</button></a>

# Tot slot: De Brouwerij Tijdreis
Met brouwerijdata als linked data, kunnen we ook (in analogie van de populaire topotijdreis.nl) de biertijdreis presenteren. Zie de explosie van brouwerijen in de afgelopen paar jaar:

<a href="http://gerwinbosch.nl/Hackalod-2018/"><button>Brouwerij Tijdreis</button></a>
