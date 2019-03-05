---
layout: story
title: 3D-High5 presentatie
---

# 3D-High5 presentatie

De SPARQL queries op deze pagina geven een overzicht van de resultaten
die tijdens de 3D-High5 behaald zijn.  Voor het gebruik van 3D
informatie vanuit Linked Data zijn de volgende innovaties tot stand
gebracht:
  - 3D gegevens worden **opgeslagen** in RDF, gebruik makend van de
    OGC GeoSPARQL standaard.
  - 3D gegevens worden **gecombineerd** met andere gegevens door
    gebruik te maken van Linked Data.  De andere gegevens zijn
    afkomstig uit verschillende datasets van Kadaster, CBS, KvK, RCE,
    en RVO.
  - 3D gegevens worden **opgevraagd** met SPARQL queries.
  - 3D gegevens worden **getoond** binnen een 3D viewer.



## Energielabels

Bevraagde datasets:
  - BAG
  - RVO energielabels

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="3D-High5/q1.rq" data-output="geo3d"></query>

## ⛪ Monumenten

Bevraagde datasets:
  - BAG
  - RCE beeldbank
  - RCE monumenten

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="3D-High5/q2.rq" data-output="geo3d"></query>

## 🏪 KvK

Bevraagde datasets:
  - BAG
  - Kamer van Koophandel bedrijven

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="3D-High5/q3.rq" data-output="geo3d"></query>

## 🏬 Bedrijfsvestigingen

Bevraagde datasets:
  - BAG
  - CBS wijken en buurten

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="3D-High5/q4.rq" data-output="geo3d"></query>

## De BAG in context

Neem een aantal BAG pand, en verrijk het resultaat op basis van
informatie uit andere bronnen.

Bevraagde datasets:
  - BAG
  - Kamer van Koophandel bedrijven
  - RCE beeldbank
  - RCE monumenten
  - RVO energielabels

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="3D-High5/q5.rq" data-output="geo3d"></query>

## LOD2 (Level of Detail)

Test om te kijken of het ook mogelijk is om daken met een spits (Level
of Detail 2) weer te geven in de 3D omgeving.

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="3D-High5/q6.rq" data-output="geo3d"></query>

## Meerdere verblijfsobjecten in één pand

Test om te kijken of het ook mogelijk is om meerdere verblijfsobjecten
binnen één pand weer te geven.

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="3D-High5/q7.rq" data-output="geo3d"></query>

## Toekomstige uitdagingen

Niet uitgevoerd binnen de High5, maar mogelijk interessant om in de
toekomst aan te werken:
  - Het toevoegen van texturen op de BAG panden
  - Het toevoegen van 3D modellen, bijvoorbeeld voor bomen
  - Meer geavanceerde 3D objecten, bijvoorbeeld detail onder de grond,
    niet-verticale muren, etc.
