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
heeft.

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="10-woning.rq">
</div>

## Straat

<p>Hoe zit het eigenlijk met de energielabels in mijn straat?  De panden
in mijn straat hebben energielabel D (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#fff200" r="10"/>
</svg>
), label E (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ff9a35" r="10"/>
</svg>
), of geen label (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="grey" r="10"/>
</svg>
).</p>

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="20-straat.rq">
</div>

## Buurt & mogelijke besparingen

Mijn buurt heet ‘Dorp Warnsveld’, waar volgende de CBS dataset het
gemiddlede aardgasverbruik 1,940m³ per jaar is, en het gemiddeldw
elektriciteitsgebruik 3,320 kWh per jaar.

Dat is mooi, maar is er in mijn buurt misschien ook energie te
besparingen?  Het CBS heeft hier gegevens over.  Voor buurt ‘Dorp
Warnsveld’ zijn de mogelijke besparingen €25 per jaar.  Daarvoor zijn
éénmalige investeringen van €400 nodig.  Dat betekent dat er pad na 16
jaar een positief rendement optreed…

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="40-buurt-besparingen.rq">
</div>

## Besparingspotentie voor een gemeente

In andere gemeentes kan de besparinspotentie aanzienlijker zijn,
bijvoorbeeld in Amsterdam.  We tonen hier de buurten waar besparingen
weinig opbrengen (blauw) en de buurten waar besparingen veel opgrengen
(rood).

We zien dat in een nieuwbouwbuurt als ‘IJburg West’ (rechts in de
kaart gelegen) bijna geen energiebesparingen mogelijk zijn.  Maar in
de oude buurten in de binnenstad zijn aanzienlijke energiesparingen
van duizenden euros per jaar mogelijk.

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
     data-query-sparql="story_02_ams_keisergracht2.rq">
</div>

3) Interesting visualization comes out of the wind turbines
(Mindmolens) dataset, representing the turbine's basic energy-related
properties including energy production (in mWh) and its power (in kW)
as well as its dimensions, the WindTurbine park and the company
operating it.  The dataset contains the wind turbines in the Amsterdam
region.

<p>De kleuren duiden de verschillende energielabels aan: label A of A+
(
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#22b14c" r="10"/>
</svg>
), label B (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#8ff334" r="10"/>
</svg>
), label C (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#bdfc2c" r="10"/>
</svg>
label D (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#fff200" r="10"/>
</svg>
), label E (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ff9a35" r="10"/>
</svg>
), label F (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ff7f27" r="10"/>
</svg>
), label G (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ed1c24" r="10"/>
</svg>
), of geen label (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="grey" r="10"/>
</svg>
).</p>

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

# Overzicht energielabels per postcode

We kunnen een overzicht opvragen van de energielabels die gebruikt
worden binnen een bepaalde postcode.  Bijvoorbeeld, hieronder volgt
een overzicht van de energielabels die in postcodes
<code>1094**</code> voorkomen.  Merk op dat label C binnen deze
postcode het meeste voorkomt.  Deze resultaten kunnen ook in een <a
href="https://yasgui.org/#query=prefix+cbs%3A+%3Chttps%3A%2F%2Fkrr.triply.cc%2FKadaster%2Fcbs%2Fdef%2F%3E%0Aprefix+gemeente%3A+%3Chttps%3A%2F%2Fkrr.triply.cc%2FKadaster%2Fcbs%2Fid%2Fgemeente%2F%3E%0Aprefix+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix+energie%3A+%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Fenergie%23%3E%0Aselect+%3Fenergielabel+(count(%3Fx)+as+%3Fn)+%7B%0A++bind+(%221094%22+as+%3Fprefix)%0A++%3Fx+energie%3Apand_postcode++%3Fpostcode+%3B%0A+++++energie%3Ae_label+%3Fenergielabel+.%0A++filter+(strstarts(%3Fpostcode%2C+%3Fprefix))%0A%7D%0Agroup+by+%3Fenergielabel%0Aorder+by+desc(%3Fn)%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2FKadaster%2Fgeosoup2%2Fservices%2Fgeosoup%2Fsparql&requestMethod=POST&tabTitle=Query+1&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D">histogram</a>
getoond worden.

<div data-query
     data-query-endpoint="https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql"
     data-query-sparql="100-labels-voor-postcode-prefix.rq">
</div>
