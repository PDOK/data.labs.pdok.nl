---
layout: story
title: Energy labels, Energy consumption and Wind turbines
logo: /stories/energie/logo.png
endpoint: https://data.labs.pdok.nl/sparql
output: leaflet
---
# Energy labels, Energy consumption and Wind turbines

This data story touches upon the energy-related aspects of the housing, includes energy labels, energy consumption tying it all together with the Kadaster data providing a new meaning to the data.
The following data sources have been used in this data story;
  * Energy related datasets from [data.amsterdam.nl](data.amsterdam.nl)
  * RVO energy labels dataset [RVO EP-online](https://www.rvo.nl/onderwerpen/duurzaam-ondernemen/gebouwen/hulpmiddelen-tools-en-inspiratie-gebouwen/ep-online)

All of the data sources were not RDF friendly and have been transformed into RDF to follow the Linked Data principles and make it available for wider consumption as well as linked with the rest of the Kadaster data.

1) This one lists the buildings in Amsterdam that use the most electricity (amongst the registered buildings). This query should give a very simple insight on the energy consumption data as well as the associated energy label which in this case is expected "E".

<div data-query
     data-query-sparql="story_01_ams_most.rq">
</div>

2) Let's have a look into one of the buildings in Amsterdam that uses way above average electricity. In order to get some more background information for the address in Amsterdam that uses almost 22K kWh and link it with the BAG information (VO and Pand) to get the primary information on that house: its surface, build year and the status. It is no surprise, the building is over a thousand years old and has a surface of 1888 square meters. (Click on a pin on the map to see more details about the building).

<div data-query
     data-query-sparql="story_02_ams_keisergracht.rq">
</div>

3) Interesting visualization comes out of the wind turbines (Mindmolens) dataset, representing the turbine's basic energy-related properties including energy production (in MWh) and its power (in kW) as well as its dimensions, the WindTurbine park and the company operating it. The dataset contains the wind turbines in the Amsterdam region.

<div data-query
     data-query-sparql="story_03_ams_wind.rq">
</div>


4) This example provides a small selection of BAG 'panden' linked to the RVO energy labels dataset that enables whole new view of looking at the housing data. We can show all the houses in the Netherlands that have a registered energy label. This potentially can be interesting for both house owners and businesses that are trying to improve their environmental impact or perform all sorts of analysis of environmental impact.

<div data-query
     data-query-sparql="story_04_ams_rvo.rq">
</div>

5) And with a very simple touch we can easily identify an old-build houses (let say pre 1950) whose owners did not just keep the buildings but also maintained the great energy/environmental state and earned 'A' energy label for their houses.

<div data-query
     data-query-sparql="story_04_ams_rvo2.rq">
</div>

(To be continued ... with more RVO energy label queries and interesting stories to be told ...)
