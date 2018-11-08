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

<query data-endpoint="https://sparql.gwsw.nl/repositories/TestDatastory" data-query-ref="rioleringsgebied.rq" data-output="geo"></query>

## Zuiveringsinstallaties in de regio
De Basisregistratie Topografie [BRT](https://brt.basisregistraties.overheid.nl), die door het Kadaster ontsloten wordt, biedt informatie omtrent de RWZI's. Het rioleringsgebied Castricum kent zelf geen waterzuiveringsinstallaties, we kennen de geometrie van het zuiveringsgebied niet, maar we kunnen wel de dichtstbijzijnde opvragen.
Zo ook voor deze locatie, de directe omgeving van het zuiveringsgebied kent twee zuiveringsinstallaties in de BRT:

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="zuiveringsinstallaties-in-buurt-van-gebied.rq" data-output="geo"></query>

## Gemeentes rond het rioleringsgebied
We kunnen snel aan de slag om informatie uit andere bronnen te benutten. De waterschappen zijn niet gebonden aan gemeentegrenzen, dus in welke gemeente(s) ligt het rioleringsgebied Castricum eigenlijk?
Aangezien de toegang tot gemeentenamen worden geleverd via de Basisregistratie Topografie (BRT), vragen we de bijbehorende gemeentes op.
Als je goed inzoomt, blijkt dat er naast Castricum een kleine overlap is met de gemeentes Bergen, Heemskerk en Uitgeest:

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="gemeentes-bij-regio.rq" data-output="geo"></query>

## Afvalwater vanuit het rioleringsgebied
Voor het beheer en de capaciteit van rioolstelsels, rioolgemalen en RWZI is het van belang de stand van zaken en de ontwikkelingen van grondgebruik en inwoneraantallen te kennen.
Die combinatie van gegevens wordt in het vakgebied de "kengetallen" van het rioleringsgebied genoemd.
Voor het verzamelen van de kengetallen doen we een beroep op diverse gegevensbronnen (BAG, BGT, CBS, GWSW) die afzonderlijk (zonder duplicatie) worden bijgehouden.
Het gaat ons om de afvoer binnen de afvalwaterketen, de belasting van de RWZI. Die gegevens over bedrijven en inwoners vinden we onder andere bij het CBS.

**CBS Statistieken**  
De combinatie is met behulp van locatiegegevens gevonden: het zijn de buurten die binnen het rioleringsgebied vallen en die daarmee afwateren via rioolstelsels naar de RWZI.
Het CBS verzamelt per buurt vele statistieken, waaronder gegevens over het landgebruik en het aantal mensen dat er woont. We vragen bij het CBS de buurten op die het rioleringsgebied overlappen:

<query data-endpoint="https://betalinkeddata.cbs.nl/sparql" data-query-ref="buurten-in-rioleringsgebied.rq" data-output="geo"></query>

## Combineren van data naar kengetallen met het GWSW
Door genoemde data met elkaar te combineren kunnen we een rapport genereren met informatie uit verschillende bronnen.
Stichting RIONED onderhoudt en ontwikkelt GWSW Geo, dat zijn GIS-toepassingen op het GWSW. Daarmee worden de datasets van gemeentes volgens meerdere thema's (per doelgroep) geografisch gepresenteerd.
Deze data story vormt de inspiratiebron voor het GWSW Geo-thema "Kengetallen", waarin de federatieve query-vorm verdergaand is toegepast.

De GIS presentatie van de hier gebruikte GWSW-dataset staat op [https://qgiscloud.com/RIONED/Datastory](https://qgiscloud.com/RIONED/Datastory).
GIS gebruikers kunnen deze testcase conform WFS opvragen op: [https://geodata.gwsw.nl/TestDatastory/kengetallen](https://geodata.gwsw.nl/TestDatastory/kengetallen)

<!--<query data-endpoint="https://sparql.gwsw.nl/repositories/TestDatastory" data-query-ref="kengetallen.rq" data-output="geo"></query>-->

## Meer mogelijkheden met de BAG

Uit de Basisregistraties Adressen en Gebouwen (BAG) kunnen we nog veel meer relevante gegevens destilleren.

**Woonplaatsen rond het rioleringsgebied**  
Gewapend met de kennis over de gemeentes rond het rioleringsgebied kunnen we de bijbehorende plaatsnamen opvragen.
Dit doen we door een kleine buffer (in oranje) om de gemeente te leggen en alleen die woonplaatsgebieden te selecteren die hier volledig binnen vallen.
Het gaat om enkel Castricum, wat Bakkum (volgens de BAG) omvat:

<query
     data-endpoint="https://data.pdok.nl/sparql"
     data-query-ref="woonplaatsen-in-rioleringsgebied.rq">
</query>

De CBS Statistieken worden verzameld per buurt. Zoals de eerdere selectie laat zien is de overlap tussen de buurten en rioleringsgebied lang niet altijd volledig.
Binnen de BAG kan echter exact worden geselecteerd binnen de contouren van het rioleringsgebied:

**Panden in het rioleringsgebied**  
Vanuit BAG vragen we op hoeveel panden er binnen het rioleringsgebied vallen. We moeten de panden in de BAG eerst administratief beperken tot de woonplaatsen waarin deze liggen, vervolgens kunnen we geografisch filteren. Het blijkt te gaan om bijna 17000 panden:

<query
     data-endpoint="https://data.pdok.nl/sparql"
     data-query-ref="panden-in-rioleringsgebied.rq">
</query>
