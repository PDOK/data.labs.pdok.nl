---
layout: story
title: Combineren van gegevensbronnen in de afvalwaterketen
published: true
endpoint: https://data.pdok.nl/sparql
output: leaflet
logo: /stories/rioleringsgebieden/logo.jpg
---

# Combineren van gegevensbronnen in de afvalwaterketen

Gemeenten en waterschappen maken gebruik van veel verschillende informatiebronnen bij de inzameling, het transport en de zuivering van afvalwater. Is het mogelijk om deze bronnen met behulp van Linked Data en SPARQL 'on the fly' bijeen te garen? Dat zou een flinke verbetering zijn ten opzichte van de huidige werkwijze, waarbij handmatig gegevens van verschillende partijen verzameld en gecombineerd worden. 
Deze data story verkent de mogelijkheden om 'federatief' vanuit verschillende bronnen informatie te vergaren rondom het thema afvalwaterketen.

## Rioleringsgebied Castricum 
Een zuiveringsgebied omvat een rioolwaterzuiveringsinstallatie (RWZI) en een aantal rioleringsgebieden die afwateren naar die RWZI. Vaak zitten hier gemalen bij om het transport een handje te helpen. 

De datasets gebaseerd op het Gegevenswoordenboek Stedelijk Water [GWSW](https://data.gwsw.nl) bevatten informatie rondom het thema inzameling en transport.
We bekijken hier het rioleringsgebied van Castricum en vragen dit gebied op met de bijbehorende uitlaten en pompen uit het toegangspunt van het GWSW. 
Hieronder wordt een selectie van de beschikbare gegevens getoond. Onder de groene, rode en blauwe markers staat informatie over respectievelijk het rioleringsgebied, het rioolgemaal en de overstorten.

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="rioleringsgebied.rq">
</div>

## Zuiveringsinstallaties in de regio
De Basisregistratie Topografie [BRT](https://brt.basisregistraties.overheid.nl), die door het Kadaster ontsloten wordt, biedt informatie omtrent de RWZI's. Het rioleringsgebied Castricum kent zelf geen waterzuiveringsinstallaties, we kennen de geometrie van het zuiveringsgebied niet, maar we kunnen wel de dichtstbijzijnde opvragen. 
Zo ook voor deze locatie, de directe omgeving van het zuiveringsgebied kent twee zuiveringsinstallaties in de BRT:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="zuiveringsinstallaties-in-buurt-van-gebied.rq">
</div>

## Gemeentes rond het rioleringsgebied
We kunnen snel aan de slag om informatie uit andere bronnen te benutten. De waterschappen zijn niet gebonden aan gemeentegrenzen, dus in welke gemeente(s) ligt het rioleringsgebied Castricum eigenlijk? 
Aangezien de toegang tot gemeentenamen worden geleverd via de Basisregistratie Topografie (BRT), vragen we met een ruimtelijke query de bijbehorende gemeentes op. 
Als je goed inzoomt, blijkt dat er naast Castricum een kleine overlap is met de gemeentes Bergen, Heemskerk en Uitgeest:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="gemeentes-bij-regio.rq">
</div>

## Inzameling binnen het rioleringsgebied 
Voor het beheer en de (capaciteits)ontwikkeling van de rioolstelsels, de rioolgemalen en de RWZI is het van belang te weten wat de wijzigingen zijn in grondgebruik en inwoneraantallen.
Elke gegevensbron (BAG, BGT, GWSW) kan afzonderlijk worden bijgehouden zonder duplicatie en op verzoek worden gecombineerd. Die combinatie van gegevens wordt in het vakgebied de "kengetallen" van het rioleringsgebied genoemd. 
Met de Basisregistraties Adressen en Gebouwen (BAG) kunnen we de panden binnen het rioleringsgebied opvragen. Het gaat ons echter om de afvoer binnen de afvalwaterketen, de belasting van de RWZI. Die gegevens over bedrijven en inwoners vinden we bij het CBS.

**CBS Statistieken**  
De combinatie is met behulp van locatiegegevens gevonden: het zijn de buurten die binnen het rioleringsgebied vallen en die daarmee afwateren via rioolstelsels naar de RWZI. 
Het CBS verzamelt per buurt vele statistieken, waaronder gegevens over het landgebruik en het aantal mensen dat er woont. We vragen bij het CBS de buurten op die het rioleringsgebied overlappen:

<div data-query
     data-query-endpoint="https://betalinkeddata.cbs.nl/sparql"
     data-query-sparql="buurten-in-rioleringsgebied.rq">
</div>


## Combineren van data naar kengetallen met het GWSW
Door genoemde data met elkaar te combineren kunnen we een rapport genereren met informatie uit verschillende bronnen. 
Stichting RIONED onderhoudt en ontwikkelt GWSW Geo, dat zijn GIS-toepassingen op het GWSW. Daarmee worden de datasets van gemeentes volgens meerdere thema's (per doelgroep) geografisch gepresenteerd. 
Deze data story vormt de inspiratiebron voor het GWSW Geo-thema "Kengetallen", waarin de federatieve query-vorm verdergaand is toegepast.

De GIS presentatie van de hier gebruikte GWSW-dataset staat op [https://qgiscloud.com/RIONED/Datastory](https://qgiscloud.com/RIONED/Datastory).
GIS gebruikers kunnen deze testcase conform WFS opvragen op: [https://geodata.gwsw.nl/TestDatastory/kengetallen](https://geodata.gwsw.nl/TestDatastory/kengetallen)

<!-- div data-query
     data-query-endpoint="https://sparql.gwsw.nl/repositories/TestDatastory"
     data-query-sparql="kengetallen.rq">
</div -->


### Woonplaatsen rond het rioleringsgebied
Gewapend met de kennis over de gemeentes rond het rioleringsgebied kunnen we nu de bijbehorende plaatsnamen opvragen. Dit doen we door een kleine buffer (in oranje) om de gemeente te leggen en alleen die woonplaatsgebieden te selecteren die hier volledig binnen vallen. Het gaat om enkel Castricum, wat Bakkum (volgens de BAG) omvat:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="woonplaatsen-in-rioleringsgebied.rq">
</div>

### Panden in het rioleringsgebied
Vanuit de Basisregistraties Adressen en Gebouwen (BAG) kunnen we nu opvragen hoeveel panden er binnen het rioleringsgebied vallen. We moeten de panden in de BAG eerst administratief beperken tot de woonplaatsen waarin deze liggen, vervolgens kunnen we geografisch filteren. Het blijkt te gaan om bijna 17000 panden:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="panden-in-rioleringsgebied.rq">
</div>
