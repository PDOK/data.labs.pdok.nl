---
layout: story
title: Kadaster Data Stories ― CBS
logo: /stories/monument/logo.png
endpoint: https://data.pdok.nl/sparql
output: leaflet
---
# Statistieken over mijn wijk/buurt/gemeente

Alle gebouwen in Nederland zijn vindbaar in de Basisregistratie
Adressen en Gebouwen (BAG).  Voor gebouwen wordt o.a. de volgende
informatie opgeslagen:

  * bouwjaar
  * geldigheids-datum
  * geometrie
  * oppervlakte
  * postcode
  * status (wel/niet in gebruik)
  * type (wooning, kantoor, etc.)
  
In de volgende query worden deze gegevens opgevraagd voor _Laan van
Westenenk 701_ te _Apeldoorn_.  Op de BAG achtergrondkaart wordt de
geometrie van het aan het bijbehorende verblijfsobject getoond.  Door
op de pin middenin de gemetrie te klikken worden de beschikbare
gegevens voor dit gebouw getoond.

Merk op dat deze popup niet alleen de informatie als platte waardes
bevat (getallen en tekst), maar ook als Linked Data identificatoren.
Door op de links te klikken kan men door het Kadaster Semantisch Web
wandelen.  Bijvoorbeeld: door op de
link
[_Laan van Westenenk_]() te
klikken navigeert men naar de registratie van de bijbehorende openbare
ruimte.  Hier is meer informatie over deze openbare ruimte
beschikbaar.  Andere links op de popup in deze query verwijzen naar
de:

  * [nummeraanduiding](http://bag.basisregistraties.overheid.nl/bag/id/nummeraanduiding/0200200000075716)
  * [openbare ruimte](http://bag.basisregistraties.overheid.nl/bag/id/openbare-ruimte/0200300022472362)
  * [pand](http://bag.basisregistraties.overheid.nl/bag/id/pand/0200100000085932)
  * [verblijfsobject](http://bag.basisregistraties.overheid.nl/bag/id/verblijfsobject/0200010000130331)
  * [woonplaats](http://bag.basisregistraties.overheid.nl/bag/id/woonplaats/3560)

Niet alleen de verschillende registratie objecten, maar ook de bij wet
vastgelegde terminologie is semantic gedocumenteerd en middels directe
links opvraagbaar:

  * [openbare ruimte](http://bag.basisregistraties.overheid.nl/id/begrip/NaamgevingUitgegeven)
  * [status van het pand](http://bag.basisregistraties.overheid.nl/id/begrip/PandInGebruik)
  * [status van het verblijfsobject](http://bag.basisregistraties.overheid.nl/id/begrip/VerblijfsobjectInGebruik)
  * [type verblijfsobject](http://bag.basisregistraties.overheid.nl/bag/id/verblijfsobject/0200010000130331)

Deze semantisch interpreteerbare links kunnen zo gevolgd worden door
een mens die door de data browsed, maar ze kunnen ook genavigeerd
worden door een stukje software: de queries op deze pagina zijn
voorbeelden van zulke stukjes software.  Zo is het mogelijk om
specifieke gegevens op te halen en om overzichten van de data te
genereren.  Dit lijkt op de manier waarop traditionele databases te
werk gaan, met het verschil dat _4334DP_ niet alleen als tekst wordt
teruggegeven, maar altijd de link met de onderliggende data blijft
gehouden:
[_4334DP_](http://bag.basisregistraties.overheid.nl/bag/id/nummeraanduiding/0200200000075716).

Ten slotte is het volgen van links niet beperkt tot één dataset.
Onderaan de popup in deze query staat bijvoorbeeld het registratief
gebied waartoe _Laan van Westenenk_ behoord.  Registratieve gebieden
staan in een andere dataset: de Basisregistratie Topografie (BRT).

<div data-query data-query-sparql="pand.rq"></div>

<div data-query data-query-sparql="wijk.rq"></div>

TODO

<div data-query data-query-sparql="buurten.rq"></div>
