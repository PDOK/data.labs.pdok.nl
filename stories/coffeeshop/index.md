---
layout: story
logo: coffeeshop/seedling-1062908_640.jpg
output: leaflet
published: false
title: Minimum afstand coffeeshop en school
---

# Coffeeshops en scholen

Veel gemeentes handhaven een minimum afstand tussen een coffeeshop en
een dichtstbijzijnde school.  Zo ook de gemeente Amersfoort: hier was
enige tijd geleden [discussie in de
krant](http://www.ad.nl/amersfoort/coffeeshop-is-252-85-meter-lopen-van-school~a689cd22/)
over de afstand tussen een geplande locatie aan de Snouckaertlaan 30
en de school in de buurt op de Zonnehof 9.  De gemeente heeft een
[projectpagina](https://www.amersfoort.nl/project/vergunning-voor-coffeeshop-snouckaertlaan-1.htm)
ingericht over de voortgang van de vergunningverlening van deze
coffeeshop.  Ook heeft het de [regelgeving
gepubliceerd](https://zoek.officielebekendmakingen.nl/gmb-2016-11966.html).  Hier
staat onder de locatie-eisen onder meer dat
- “Tussen coffeeshops en scholen voor basisonderwijs geldt een
  afstandscriterium van 100 meter.” en
- “Tussen coffeeshops en scholen voor voortgezet onderwijs en
  middelbaar beroepsonderwijs geldt een afstandscriterium van 250
  meter.”

# Hemelsbreed 

Maar wat is een minimum afstand eigenlijk? Is dat hemelsbreed, of over
de weg? De regelgeving geeft daar geen uitsluitsel over.  Het spreekt
over een “afstandscriterium van 250 meter”.  Is de eis nu dat er exact
250 meter tussen moet zitten?

Hemelsbreed liggen de panden niet ver uit elkaar:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="afstand-coffeeshop-school.rq"
     data-showQuery>
</div>

Of 198,0 meter, op decimeters afgerond.  Dan is er weinig bochtenwerk
vereist om dit over de weg te vergroten naar 250 meter.  De discussie
in de krant ging, vrij vertaald, voornamelijk over de vraag of de
afstand tussen de school op de Zonnehof en de geplande
coffeeshoplocatie wel minimaal 250 meter bedraagt.  Na nameten met een
meetwiel, kwam het AD tot de conclusie dat dit wel het geval is, maar
met een marge van slechts een meter of drie.

# Transparante meting

Maar al is het meetwiel gecalibreerd, er zal toch nooit tweemaal
dezelfde afstand uitkomen door kleine wijzigingen in de gelopen route.
Met een marge van amper drie meter zou dit kunnen inhouden dat de ene
keer het afstandscriterium wel zou worden gehaald, en de andere niet.
Zou het niet handiger zijn de afstand tussen de locaties te kunnen
meten als stabiel reproduceerbare en berekende afstand? Een
transparante methode waarmee de doorslag gegeven kan worden voor alle
aanvragen?

We zouden een meting via Google maps kunnen toepassen, maar deze is
niet erg exact:

<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2448.013941780643!2d5.380969315553578!3d52.15225617116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47c6441fae2405b1%3A0xa8db07b3f810be09!2sZonnehof+9%2C+3811+ND+Amersfoort!3m2!1d52.1515597!2d5.3836031!4m5!1s0x47c6441e29332369%3A0x71602216b6a8d3fe!2sSnouckaertlaan+30%2C+3811+MB+Amersfoort!3m2!1d52.1532847!2d5.3828344999999995!5e0!3m2!1snl!2snl!4v1498721362842" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
</iframe>

Volgens de meting van Google maps zit hier een verschil van ongeveer
100 meter (verder), waarmee de vraag alleen maar groter wordt.  Zit er
een meetfout in de meting van het AD?  Of rondt Google maps de afstand
zoveel verder af?

Beter zou het zijn hier betrouwbare, officiële overheidsbronnen te
gebruiken.  We definiëren daarom nog wat extra spelregels:

- De afstandscriteria betreffen minimum afstanden, gerekend vanaf de
  puntlocatie van het BAG verblijfsobject
- De afstandscriteria betreffen (loop)routes over de weg, niet
  hemelsbreed van de school naar de coffeeshop (al is het wellicht wel
  mogelijk om terug te vliegen)
- De afstand van de school en de coffeeshop tot de openbare weg dient
  meegenomen te worden in de berekening.  Hier wordt de kortste,
  lijnrechte route genomen van het [BAG adresseerbare
  object](https://bag.basisregistraties.overheid.nl/doc/begrip/AdresseerbaarObject)
  naar de openbare weg in het [Nationaal
  Wegenbestand](https://www.rijkswaterstaat.nl/zakelijk/zakendoen-met-rijkswaterstaat/werkwijzen/werkwijze-in-gww/data-eisen-rijkswaterstaatcontracten/nationaal-wegenbestand.aspx)
- De kortste route over het Nationaal Wegenbestand wordt genomen.  Dit
  wegenbestand betreft allemaal lijnstukken, waarmee discussie wordt
  weggenomen over de zijde van de weg waarlangs wordt gelopen, of er
  stukken worden afgesneden, etcetera.

Verder hebben we een shape-file dump van het Nationaal Wegenbestand
gebruikt, met een tweetal wijzigingen:

- De geometrieën zijn getransformeerd van Nederlands RD naar WGS84.
  Dit is de standaardprojectie voor GeoSPARQL
- De geometrische lengte van de wegvakken is toegevoegd als extra
  kolom in de GeoCSV export van de shapefile.  Deze is lastig te
  berekenen: GeoSPARQL heeft geen functies om de lengte van een
  lijngeometrie te berekenen en met SPARQL sec is dit een lastige
  uitdaging.
- Er is een filter toegepast om enkel de wegvakken in Amersfoort te
  benutten.  De [complete
  set](https://data.labs.pdok.nl/dumps/nwb/nwb-wegen-wegvakken.zip)
  aan Linked Data voor de wegvakken bevat 24.546.827 feiten (triples),
  hiermee te groot voor een labs-omgeving voor dit moment.  De subset
  van de plaats Amersfoort is slechts 177.306 triples (0,72%)

Met deze extra spelregels is er weinig ruimte meer voor ambiguïteiten
én de afstand kan worden berekend uit de gegevens die we over de
openbare ruimte hebben.  Door het optellen van de lijnstukken uit de
kortste route uit het NWB wegen en de afstand van het BAG
verblijfsobject naar deze route, kunnen we de afstand transparant en
reproduceerbaar ophalen.

<div data-query
     data-query-endpoint="https://data.labs.pdok.nl/geosparql"
     data-query-sparql="route-coffeeshop-school.rq"
     data-showQuery>
</div>
