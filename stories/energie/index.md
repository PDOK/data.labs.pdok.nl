---
layout: story
title: Energy labels, Energy consumption and Wind turbines
logo: /stories/energie/logo.png
endpoint: https://data.labs.pdok.nl/sparql
output: leaflet
---
# Energy labels, energiebesparing, en windturbines

Deze data story laat zien welke mogelijkheden er ontstaan als de
Energielabel Dataset beschikbaar gesteld wordt als Linked Data.
Daarbij wordt vooral gefocust op de toegevoegde waarde door
combinaties te leggen met andere datasets, zoals de BAG (Kadaster),
Energieverbruik (Gemeente Amsterdam), en Energiebesparingspotentieel
(CBS).  Data interoperabiliteit in de praktijk.

## Woning

Ik ben eigenaar van een woning, en wil weten welk label mijn woning
heeft.  QUERY E, maar dan ook met het label toegevoegd. (graag laten
staan op mijn adres)

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="10-woning.rq">
</div>

## Straat

Hoe doe ik het eigenlijk tov de rest van de straat?

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="20-straat.rq">
</div>

## Buurt & mogelijke besparingen

Dat is mooi, maar is er in mijn buurt eigenlijk wel veel te behalen
qua energie besparingen?  Het CBS heeft hier gegevens over.  Daarvoor
gaan we een link leggen tussen mijn woning in de BAG en de buurt in
de CBS wijken-en buurtenkaart.

Laten we voor deze buurt eens kijken wat de mogelijke besparingen op
het gebied van energieverbruik zijn, en of het de moeite loont om in
energiebesparing te investeren:

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="40-buurt-besparingen.rq">
</div>

## Besparingspotentie voor een gemeente

In andere gemeentes kan de besparinspotentie aanzienlijker zijn,
bijvoorbeeld in Amsterdam.

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="50-gemeente-besparingen.rq">
</div>

## rest

This data story touches upon the energy-related aspects of the
housing, includes energy labels, energy consumption tying it all
together with the Kadaster data providing a new meaning to the data.

The following data sources have been used in this data story;

  * Energy related datasets from [data.amsterdam.nl](data.amsterdam.nl)
  
  * RVO energy labels dataset [RVO
    EP-online](https://www.rvo.nl/onderwerpen/duurzaam-ondernemen/gebouwen/hulpmiddelen-tools-en-inspiratie-gebouwen/ep-online)

All of the data sources were not RDF friendly and have been
transformed into RDF to follow the Linked Data principles and make it
available for wider consumption as well as linked with the rest of the
Kadaster data.

1) This one lists the buildings in Amsterdam that use the most
electricity (amongst the registered buildings).  This query should
give a very simple insight on the energy consumption data as well as
the associated energy label which in this case is expected ‘E’.

<div data-query
     data-query-sparql="story_01_ams_most.rq">
</div>

2) Let's have a look into one of the buildings in Amsterdam that uses
way above average electricity.  In order to get some more background
information for the address in Amsterdam that uses almost 22K kWh and
link it with the BAG information (VO and Pand) to get the primary
information on that house: its surface and the status. It is no surprise, 
the building has a surface of 1888 square meters and it is also one of the 
older buildings in Amsterdam.
(Click on a pin on the map to see more details about the building, its energy 
footprint and the energy certificate information).

<div data-query
     data-query-sparql="story_02_ams_keisergracht.rq">
</div>

3) Interesting visualization comes out of the wind turbines
(Mindmolens) dataset, representing the turbine's basic energy-related
properties including energy production (in mWh) and its power (in kW)
as well as its dimensions, the WindTurbine park and the company
operating it.  The dataset contains the wind turbines in the Amsterdam
region.

<div data-query
     data-query-sparql="story_03_ams_wind.rq">
</div>


4) This example provides a small selection of BAG ‘panden’ linked to
the RVO energy labels dataset that enables whole new view of looking
at the housing data.  We can show all the houses in the Netherlands
that have a registered energy label.  This potentially can be
interesting for both house owners and businesses that are trying to
improve their environmental impact or perform all sorts of analysis of
environmental impact.

<div data-query
     data-query-sparql="story_04_ams_rvo.rq">
</div>

5) And with a very simple touch we can easily identify an old-build
houses (let say pre 1950) whose owners did not just keep the buildings
but also maintained the great energy/environmental state and earned
‘A’ energy label for their houses.

<div data-query
     data-query-sparql="story_04_ams_rvo2.rq">
</div>

(To be continued… with more RVO energy label queries and interesting
stories to be told…)
