---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/delfzijl/logo.png
output: leaflet
title: Kadaster Data Stories ― Delfzijl
---

# Delfzijl ― Een krimpgemeente bekeken

Deze datastory is gemaakt op de eerste dag van de CBS/Kadaster
Datathon, en heeft als doel om te laten zien wat de rijkheid aan
mogelijkheden wordt als we de CBS Dataset Wijken en Buurten omzetten
naar Linked Data, en kunnen combineren met Linked Data vanuit het
Kadaster zoals de Basisregistratie Topografie (BRT) en
Basisregistraties Adressen en Gebouwen (BAG).

## Monumentale woning in de krimpgemeente Delfzijl

<query data-endpoint="https://data.labs.pdok.nl/sparql"
     data-query-ref="monumenten.rq"  data-output="geo">
</query>

Ik heb een monumentale woning gezien in Delfzijl, maar ja, het is een
krimpgebied.  Wil ik daar wel wonen? Als startpunt wil ik graag weten
wat de BAG en BRT weten over deze woning.  En, aangezien het een
monument betreft, is ook informatie (zoals een foto) vanuit het
Monumenten Register ook van harte welkom.

<query data-endpoint="https://data.pdok.nl/sparql"
     data-query-ref="pand.rq"  data-output="geo">
</query>

## Geo query van BAG pand naar BRT gebouw

Vervolgens kunnen we het bijbehorende BRT gebouw opzoeken:

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="brt.rq"  data-output="geo">
</query>

<!-- query data-query-ref="wijk.rq">
## Maar is de Wijk wel interessant? (Geo query van BAG pand naar CBS wijk)
Maar nu wil ik meer weten over de krimpwijk.  Dus gaan we de Wijken en Buurten informatie van CBS bevragen over deze wijk.  Klik maar op de blauwe pijl van de wijk....Uit de rijke set van gegevens van Wijken en Buurten hebben we een paar semi-willekeurige items gekozen zoals afstand tot attractieparken, belangrijk voor mijn kinderen.  Alle andere items zijn eenvoudig toe te voegen door de query aan te passen.
</query -->

## Afstand tot attracties

Zou er een plaats zijn waar ik beter kan gaan zoeken naar een woning,
en wel aardig om dat via een thematische kaart inzichtelijk te maken,
zodat ik door gebruik van kleurcodes snel inzichtelijk kan krijgen wat
meer en minder geschikt is.  Daarvoor moeten we eerst de
afstandswaardes gaan normalizeren om er kleurcodes aan te hangen.
Daarvoor bepalen we de maximale afstand tot een attractie:

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="attractie-max.rq" data-output="geo"></query>

Hiermee kunnen we een thematische kaart voor de afstand tot een
attractie maken (voor Groningen en Friesland, maar via de query
eenvoudig aan te passen voor andere provincies):

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="attractie.rq" data-output="geo"></query>

Met deze data story hebben we laten zien dat we een rijkheid aan
informatie bij elkaar kunnen tonen uit meerdere data bronnen zoals de
BAG, Wijken en Buurten, BRT, Monumenten.  En dat we data analyses
kunnen doen zonder domein-specifieke tooling.
