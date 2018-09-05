---
layout: story
title: Gegevensbronnen combineren voor waterzuivering
published: true
endpoint: https://data.pdok.nl/sparql
output: leaflet
logo: /stories/rioleringsgebieden/logo.jpg
---

# Combineren van gegevensbronnen voor waterzuivering

Waterschappen en gemeenten maken gebruik van veel verschillende informatiebronnen bij de inzameling, het transport en de zuivering van afvalwater. Is het mogelijk om deze bronnen met behulp van Linked Data en SPARQL 'on the fly' bijeen te garen? Dat zou een flinke verbetering zijn ten opzichte van de huidige werkwijze, waarbij handmatig gegevensbronnen van verschillende partijen gecombineerd worden. Deze data story verkent de mogelijkheden om 'federatief' vanuit verschillende bronnen informatie te vergaren rondom het thema afvalwaterketen.

## Rioleringsgebied Heiloo Centrum 
De datasets gebaseerd op het Gegevenswoordenboek Stedelijk Water [GWSW](https://apps.gwsw.nl) bevatten informatie rondom het thema transport en zuivering. Een zuiveringsgebied omvat een rioolwaterzuiveringsinstallatie (RWZI) en een aantal rioleringsgebieden die afwateren naar die RWZI. Vaak zit hier een gemaal bij om het transport een handje te helpen. 

We bekijken hier het rioleringsgebied van Castricum. We vragen dit gebied op uit het toegangspunt van het GWSW. Hieronder wordt een selectie van de beschikbare gegevens getoond.

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="rioleringsgebied-castricum.rq">
</div>

## BRT zuiveringsinstallaties in gebied
De Basisregistratie Topografie [BRT](https://brt.basisregistraties.overheid.nl), die door het Kadaster ontsloten wordt, biedt informatie omtrent de RWZI's. Zo ook voor deze locatie, de regio kent twee zuiveringsinstallaties in de BRT:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="zuiveringsinstallaties-in-gebied.rq">
</div>

## Gemeentes rond het rioleringsgebied
We kunnen snel aan de slag om informatie uit andere bronnen te benutten. De waterschappen zijn niet gebonden aan gemeentegrenzen, dus in welke gemeente(s) ligt het rioleringsgebied Castricum eigenlijk? Aangezien de toegang tot gemeentenamen worden geleverd via de Basisregistratie Topografie (BRT), vragen we met een ruimtelijke query de bijbehorende gemeentes op:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="gemeentes-rg-castricum.rq">
</div>

## Woonplaatsen rond het rioleringsgebied
Gewapend met de kennis over de gemeentes rond het rioleringsgebied kunnen we nu de bijbehorende plaatsnamen opvragen. Het gaat om (aanvullen):

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="woonplaatsen-in-rioleringsgebied.rq">
</div>

## Panden in het rioleringsgebied
Vanuit de Basisregistraties Adressen en Gebouwen (BAG) zouden we nu kunnen opvragen hoeveel panden er binnen het rioleringsgebied vallen. We moeten de panden in de BAG eerst administratief beperken tot de woonplaatsen die er omheen liggen, vervolgens kunnen we geografisch filteren. Het blijkt te gaan om ruim 1600 panden (zie ook de tabelweergave door "Table" te selecteren):

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="panden-in-rioleringsgebied.rq">
</div>


## Statistieken voor buurten in het rioleringsgebied: 
Voor het beheer en de (capaciteits)ontwikkeling van de rioolstelsels, de rioolgemalen en de RWZI is het van belang te weten wat de wijzigingen zijn in grondgebruik en inwoneraantallen. Die gegevens vinden we bij het CBS. Het CBS verzamelt per buurt vele statistieken, waaronder gegevens over het landgebruik en het aantal mensen dat er woont.

<div data-query
     data-query-endpoint="https://betalinkeddata.cbs.nl/sparql"
     data-query-sparql="buurten-in-rioleringsgebied.rq">
</div>


## Combineren van data
Door genoemde data met elkaar te combineren kunnen we een rapport genereren met informatie uit verschillende bronnen. Elke gegevensbron kan afzonderlijk worden bijgehouden zonder duplicatie en op verzoek worden gecombineerd. De combinatie wordt met behulp van locatiegegevens gevonden: het zijn de buurten die binnen de rioleringsgebieden vallen en die daarmee afwateren via rioolstelsels naar de RWZI. Die combinatie van gegevens wordt in het vakgebied de "kengetallen" van het rioleringsgebied genoemd.

## Toepassen met het GWSW
Stichting RIONED ontwikkelt GWSW Geo, dat zijn GIS-toepassingen op het GWSW. Daarmee worden de datasets van gemeentes volgens meerdere thema's (per doelgroep) geografisch gepresenteerd. Deze datastory vormt de inspiratiebron voor het GWSW Geo-thema "Kengetallen", waarin de "federatieve" query-vorm verder wordt ontwikkeld. GIS gebruikers kunnen de GWSW vorm van deze testcase conform WFS opvragen op: https://geodata.gwsw.nl/TestDatastory/kengetallen

<div data-query
     data-query-endpoint="https://sparql.gwsw.nl/TestDatastory"
     data-query-sparql="kengetallen.rq">
</div>



