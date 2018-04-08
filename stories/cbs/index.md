---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/cbs/logo.png
output: leaflet
title: Kadaster Data Stories ― CBS
---

# BAG panden & CBS buurten

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
[_Laan van Westenenk_](http://bag.basisregistraties.overheid.nl/bag/id/openbare-ruimte/0200300022472362) te
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
werk gaan, maar er is een belangrijk verschil: een traditionele
database geeft _4334DP_ terug; platte tekst die een domein expert moet
interpreteren.  Linked Data geeft niet alleen alleen de tekst terug,
maar ook de link naar de onderliggende data en bijbehorende
definities.  Dit is het verschil tussen _4334DP_
en
[_4334DP_](http://bag.basisregistraties.overheid.nl/bag/id/nummeraanduiding/0200200000075716).

Ten slotte is het volgen van links niet beperkt tot één dataset.
Onderaan de popup in deze query staat bijvoorbeeld het registratief
gebied waartoe _Laan van Westenenk_ behoord.  Registratieve gebieden
staan in een andere dataset: de Basisregistratie Topografie (BRT).

<div data-query data-query-sparql="pand.rq"
     data-query-endpoint="https://data.pdok.nl/sparql">
</div>

Hierboven lieten we al zien dat Linked Data zich niet beperkt to één
dataset: BAG en BRT informatie is opvraagbaar vanuit dezelfde query.
Dat betekent dat we nu _vragen over datasets heen kunnen stellen_.

Als voorbeeld nemen we
de
[CBS Wijk- en Buurtstatistieken](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/wijk-en-buurtstatistieken).
Stel dat we geïnteresseerd zijn in de afstand van gebouwen tot cafés.
Informatie over cafés is niet per gebouw opgeslagen, maar wel per
buurt.  We kunnen met Linked Data niet alleen expliciete links volgen,
maar ook impliciete links.  Ons BAG gebouw en de CBS gegevens voor
buurten zijn impliciet gelinked middels hun geometrie: het BAG gebouw
ligt binnen de CBS buurt.  Deze ruimtelijke relatering is in
onderstaande query zichtbaar gemaakt.

_Laan van Westenenk 701_ blijkt in buurt _Wernem_ te liggen (CBS code
BU02000311), en in wijk _Apeldoorn Zuidwest (CBS code WK02003).

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="buurt.rq">
</div>

_Laan van Westenenk 701_ lijkt niet de beste plek te zijn voor iemand
die dicht bij een café in de buurt wil zijn: de afstand voor de buurt
(Wernem) is groter dan de afstand voor de wijk (Apeldoorn Zuidwest).
Welke buurten in Apeldoorn hebben de beste toegang tot cafés?  Die
vraag wordt beantwoord in onderstaande query.

Het centrum heeft, als vanzelfsprekend, kortere afstanden tot cafés.
Soms verschilt de afstand abrupt tussen twee buurten.  Een voorbeeld
hiervan zijn _Ugchelen_ met een afstand van 0.8 km, en _Ugchelen-Zuid_
met een afstand van 1.7 km.  Op de BAG achtergrondkaart is de oorzaak
van dit grote verschil direct inzichtelijk: beide buurten zijn van
elkaar gescheiden door een snelweg.

<div data-query data-query-sparql="buurten.rq">
</div>

De CBS data bevatten nog veel meer statistieken: de afstand tot
voorzieningen, bioscopen, en restaurants.  De samenstelling van de
bevolking in leeftijdscathegoriën.  Door meerdere statistieken te
combineren kan voor alle gebouwen in Nederland een indicator van de
buurt/omgeving gemaakt worden.

Hoe zit het met de afstand tot cafés door de tijd heen?  Neemt de
afstand toe of af?  De CBS data zijn beschikbaar voor de jaren
2010-2016.  Niet alle statistieken worden ieder jaar gemeten, maar
voor de jaren waarin de afstand tot cafés gemeten is, kunnen we deze
weergeven in onderstaande query.  We zien dat de afstand tot cafés in
de laatste jaren erg is toegenomen.

<div data-query
     data-query-sparql="tijd.rq">
</div>
