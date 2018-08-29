---
layout: story
title: Gegevensbronnen combineren voor waterzuivering
published: true
endpoint: https://data.pdok.nl/sparql
output: leaflet
logo: /stories/rioleringsgebieden/logo.jpg
---

# Combineren van gegevensbronnen voor waterzuivering

Waterschappen maken gebruik van veel verschillende informatiebronnen bij het beheer van grijs water, oppervlakte water en drinkwater. Is het mogelijk om deze bronnen met behulp van Linked Data en SPARQL 'on the fly' bijeen te verzamelen? Deze data story verkent de mogelijkheden om 'federatief' vanuit verschillende bronnen informatie te vergaren rondom het thema waterzuivering.

## Rioleringsgebied Pancras 
De data bij het GWSW beschikt over informatie rondom het thema waterzuivering. Zo heeft een rioolwaterzuiveringsinstallatie (RWZI) een aantal rioolgebieden die afwateren naar de RWZI. Vaak zit hier een gemaal bij om het transport een handje te helpen. 

We bekijken hier het rioleringsgebied van Pancras, bij Alkmaar. We vragen dit gebied op uit het toegangspunt van het Gegevenswoordenboek Stedelijk Water (GWSW).
TODO: wgs84-geometrie in WKT beschikbaar stellen en in geo representatie plotten

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="rioleringsgebied-pancras.rq">
</div>

## BRT zuiveringsinstallaties in gebied
De Basisregistratie Topografie (BRT) biedt informatie omtrent de rioolwaterzuiveringsinstallaties (RWZI's). Zo ook voor deze locatie, de regio kent twee zuiveringsinstallaties in de BRT:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="zuiveringsinstallaties-in-gebied.rq">
</div>

## Gemeentes rond het rioleringsgebied
We kunnen snel aan de slag om informatie uit andere bronnen te benutten. De waterschappen zijn niet gebonden aan gemeentegrenzen, dus in welke gemeentes ligt het rioolwatergebied Pancras eigenlijk? Aangezien de toegang tot gemeentenamen worden geleverd via de Basisregistratie Topografie (BRT), vragen we met een ruimtelijke query de bijbehorende gemeentes op:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="gemeentes-rg-pancras.rq">
</div>

## Woonplaatsen rond het rioleringsgebied
Gewapend met de kennis over de gemeentes rond het rioleringsgebied kunnen we nu de bijbehorende plaatsen opvragen. Het gaat om Alkmaar, Sint Pancras en Broek op Langedijk:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="woonplaatsen-in-rioleringsgebied.rq">
</div>

## Panden in het rioleringsgebied
Vanuit de BAG zouden we nu kunnen opvragen hoeveel panden er binnen het rioleringsgebied vallen. We moeten de panden in de bag eerst administratief beperken tot de woonplaatsen die er omheen liggen, vervolgens kunnen we geografisch filteren. Het gaat om ruim 1600 panden (zie ook de tabelweergave door "Table" te selecteren):

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="panden-in-rioleringsgebied.rq">
</div>


## Statistieken voor buurten in het rioleringsgebied: 
Voor het onderhoud en de ontwikkeling van de RWZI is het van belang te weten wat de wijzigingen zijn in grondgebruik en inwoneraantallen. Die gegevens vinden we bij het CBS. Het CBS verzamelt per buurt vele statistieken, waaronder gegevens over het landgebruik en het aantal mensen dat er woont.

<div data-query
     data-query-endpoint="https://betalinkeddata.cbs.nl/sparql"
     data-query-sparql="buurten-in-rioleringsgebied.rq">
</div>


## Combineren van data
Door deze data met elkaar te combineren, kunnen we een rapport genereren met informatie uit verschillende bronnen. Elke gegevensbron kan afzonderlijk worden bijgehouden zonder duplicatie, en op verzoek worden gecombineerd. De combinatie wordt met behulp van locatiegegevens gevonden: het zijn de buurten die binnen de rioleringsgebieden vallen en die daarmee afwateren naar de RWZI.

