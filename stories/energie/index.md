---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/energie/logo.png
output: leaflet
title: Energy labels, Energy consumption and Wind turbines
---

# Energy labels, energiebesparing, en windturbines

Deze data story laat zien welke mogelijkheden er ontstaan als de
Energielabel Dataset (RVO) beschikbaar gesteld wordt als Linked Data.
Daarbij wordt vooral gefocust op de toegevoegde waarde door
combinaties te leggen met andere datasets, zoals de BAG (Kadaster),
Energieverbruik (Gemeente Amsterdam), en Energiebesparingspotentieel
(CBS).  Data interoperabiliteit in de praktijk.

## Woning

Ik ben eigenaar van een woning, en wil informatie over mijn woning.

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="q1.rq">
</div>

## Straat

<p>Hoe zit het eigenlijk met de energielabels in mijn straat?  De panden
in mijn straat hebben energielabel label A (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#22b14c" r="10">
</svg>
), label B (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#8ff334" r="10">
</svg>
), of geen label (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="grey" r="10">
</svg>
).</p>

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="q2.rq">
</div>

## Hoe zit het dan in zo'n wijk qua energie verbruik?

Gasverbrijk is gemeten in kubieke meters (m³).  Elektriciteitsverbruik
is gemeten in kilowattuur (kWh).

<div data-query="http://localhost:4000/stories/energie/#query=prefix+buurt%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fregios%2F2016%2Fid%2Fbuurt%2F%3E%0Aprefix+def%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2F83487NED%23%3E%0Aprefix+dimension%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fdimension%23%3E%0Aselect+%3Fwoningtype+%3Fgas_m3+%3Felektra_kWh+%7B%0A++bind(buurt%3ABU03010500+as+%3Fbuurt)%0A++%7B%0A++++_%3A1a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Appartement+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A1b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Appartement+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22appartement%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A2a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Hoekwoning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A2b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Hoekwoning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22hoekwoning%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A3a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Tussenwoning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A3b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Tussenwoning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22tussenwoning%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A4a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_Twee-onder-een-kap-woning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A4b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Twee-onder-een-kap-woning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22twee+onder+%C3%A9%C3%A9n+kap%22+as+%3Fwoningtype)%0A++%7D+union+%7B%0A++++_%3A5a+def%3Aenergie_GemiddeldAardgasverbruik_NaarWoningtype_VrijstaandeWoning+%3Fgas_m3+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++_%3A5b+def%3Aenergie_GemiddeldElektriciteitsverbruik_NaarWoningtype_VrijstaandeWoning+%3Felektra_kWh+%3B%0A+++++++++dimension%3Aregio+%3Fbuurt+.%0A++++bind(%22vrijstaande+woning%22+as+%3Fwoningtype)%0A++%7D%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fbetalinkeddata.cbs.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
     data-query-endpoint="https://betalinkeddata.cbs.nl/sparql"
     data-query-sparql="q3.rq"
     data-query-output="gchart">
</div>

## Buurt & mogelijke besparingen

Mijn buurt heet ‘Dorp Warnsveld’, waar volgende de CBS Wijk en
Buurtkaar het gemiddelde aardgasverbruik 1,940 m³/jaar is, en het
gemiddelde elektriciteitsgebruik 3,320 kWh/jaar.

Dat is mooi, maar is er in mijn buurt misschien ook energie te
besparingen?  Het CBS heeft hier gegevens over.  Voor buurt ‘Dorp
Warnsveld’ zijn de mogelijke besparingen €25,- per jaar.  Daarvoor
zijn éénmalige investeringen van €400,- nodig.  Dat betekent dat er
pas na 16 jaar een positief rendement optreed…

<div data-query data-query-sparql="q4.rq"></div>

## Besparingspotentie voor een gemeente

In andere gemeentes kan de besparinspotentie aanzienlijker zijn,
bijvoorbeeld in Amsterdam.  We tonen hier de buurten waar besparingen
weinig opbrengen (blauw) en de buurten waar besparingen veel opgrengen
(rood).

We zien dat in een nieuwbouwbuurt als ‘IJburg West’ (rechts in de
kaart gelegen) bijna geen energiebesparingen mogelijk zijn. Maar in
de oude buurten in de binnenstad zijn aanzienlijke energiesparingen
van duizenden euros per jaar mogelijk.

<div data-query data-query-sparql="q5.rq"></div>

## Reële energiebesparing

De volgende kaart toont de totale besparing in energieverbruik
(uitgedrukt in euro per jaar) die in koopwoningen behaald kan worden
wanneer alle energiebesparende maatregelen die nog kunnen worden
toegepast in de woning worden gerealiseerd.  Besparingen liggen
landelijk tussen €0 (blauw/koud) en €2.280 (rood/warm).

<div data-query data-query-sparql="q6.rq"></div>

## Theoretische energiebesparing

De volgende thematische kaart laat de theoretische energiebesparing
zien.  Landelijk ligt dit besparingspotentieel tussen €0 en €1.900 per
koopwoning per jaar.

<div data-query data-query-sparql="q7.rq"> </div>

## Hoog Energieverbruik?

We zijn wel benieuwd welke gebouwen in Amsterdam veel energie
verbruiken, en welk energielabel daar dan bij hoort.

<div data-query data-query-sparql="q8.rq"></div>

## Goede voorbeelden

Zo kunnen we ook oude huizen vinden (van voor 1950) waarbij de
eigenaars energie besparende maatregelen hebben genomen en beloond
zijn met een A label: Een voorbeeld voor hun omgeving.  Overigens
kunnen we ook zien dat dit soort queries ook gemaakt kunnen worden om
kwaliteitsproblemen op te sporen, zoals pand oppervlaktes van 1m².

<div data-query data-query-sparql="q9.rq"></div>

<!-- not needed anymore
## Een pand nader bekeken

Laten we eens een pand nader bekijken.  Kunnen we bijvoorbeeld het
hoge energieverbruik verklaren aan de hand van een grote oppervlakte
van het pand (uit de BAG).  We zien dat dit pand bijna 22.000 kWh
verbruikt, maar ook een grote oppervlakte van 1.888 m² heeft (op het
pinnetje klikken voor informatie).

<div data-query
     data-query-sparql="60-Keizersgracht.rq">
</div>
-->
<!-- queries were unscoped, and now there is much more data: scope the queries
## Panden met geregistreerde labels

Het volgende voorbeeld laat een aantal BAG panden zien met een
geregistreerd energielabel.  We kunnen nu alle geregistreerde
energielabels bevragen, en de resultaten <em>on the fly</em> verrijken
met andere data.

<p>De kleuren duiden de verschillende energielabels aan: label A of A+
(
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#22b14c" r="10">
</svg>
), label B (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#8ff334" r="10">
</svg>
), label C (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#bdfc2c" r="10">
</svg>
) label D (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#fff200" r="10">
</svg>
), label E (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ff9a35" r="10">
</svg>
), label F (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ff7f27" r="10">
</svg>
), label G (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="#ed1c24" r="10">
</svg>
), of geen label (
<svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" fill="grey" r="10">
</svg>
).</p>

<div data-query
     data-query-sparql="story_04_ams_rvo.rq">
</div>

# Overzicht energielabels per postcode

We kunnen een overzicht opvragen van de energielabels die gebruikt
worden binnen een bepaalde postcode.  Bijvoorbeeld, hieronder volgt
een overzicht van de energielabels die in postcodes
<code>1094**</code> voorkomen.  Merk op dat label C binnen deze
postcode het meeste voorkomt.

Deze query staat tijdelijk uit vanwege performance problemen.
<div
  data-query="http://localhost:4000/stories/energie/#query=prefix+cbs%3A+%3Chttps%3A%2F%2Fkrr.triply.cc%2FKadaster%2Fcbs%2Fdef%2F%3E%0Aprefix+gemeente%3A+%3Chttps%3A%2F%2Fkrr.triply.cc%2FKadaster%2Fcbs%2Fid%2Fgemeente%2F%3E%0Aprefix+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix+energie%3A+%3Chttp%3A%2F%2Fdata.labs.pdok.nl%2Fdataset%2Fenergie%23%3E%0Aselect+%3Fenergielabel+(count(%3Fx)+as+%3Fn)+%7B%0A++bind+(%221094%22+as+%3Fprefix)%0A++%3Fx+energie%3Apand_postcode++%3Fpostcode+%3B%0A+++++energie%3Ae_label+%3Fenergielabel+.%0A++filter+(strstarts(%3Fpostcode%2C+%3Fprefix))%0A%7D%0Agroup+by+%3Fenergielabel%0Aorder+by+desc(%3Fn)%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2FKadaster%2Fgeosoup2%2Fservices%2Fgeosoup%2Fsparql&requestMethod=POST&tabTitle=Query+1&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
  data-query-output="gchart"
  data-query-sparql="100-labels-voor-postcode-prefix.rq"></div>
-->

# FacetCheck

Naast bovenstaande queries is het ook mogelijk om buurten te filteren
op basis van energie-gerelateerde eigenschappen.  In <a
target="_blank" href="https://facetcheck.triply.cc">Kadaster
FacetCheck</a> is het mogelijk om op de volgende eigenschappen te
selecteren:

  - aardgasverbruik
  - elektriciteitsverbruik
  - percentage huurwoningen
  - percentage koopwoningen
  - besparingspotentieel in euros per jaar

# Dan toch de windmolens

Ook benieuwd waar de windmoles in de Amsterdamse regio staan, en hoeveel energie ze produceren, de omvang, en de eigenaren?
Dat laten we zien in de volgende query.

<div data-query
     data-query-sparql="story_03_ams_wind.rq">
</div>
