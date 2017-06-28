---
layout: story
title: Minimum afstand coffeeshop en school
logo: coffeeshop/seedling-1062908_640.jpg
output: leaflet
published: false
---

# Coffeeshops en scholen

Veel gemeentes handhaven een minimum afstand tussen een coffeeshop en een dichtstbijzijnde school. Zo ook de gemeente Amersfoort: hier was enige tijd geleden [discussie in de krant](http://www.ad.nl/amersfoort/coffeeshop-is-252-85-meter-lopen-van-school~a689cd22/) over de afstand tussen een geplande locatie aan de Snouckaertlaan 30 en de school in de buurt op de Zonnehof 9. De gemeente heeft een [projectpagina](https://www.amersfoort.nl/project/vergunning-voor-coffeeshop-snouckaertlaan-1.htm) ingericht over de voortgang van de vergunningverlening van deze coffeeshop. Ook heeft het de [regelgeving gepubliceerd](https://zoek.officielebekendmakingen.nl/gmb-2016-11966.html). Hier staat onder de locatie-eisen onder meer dat 
- "Tussen coffeeshops en scholen voor basisonderwijs geldt een afstandscriterium van 100 meter." en
- "Tussen coffeeshops en scholen voor voortgezet onderwijs en middelbaar beroepsonderwijs geldt een afstandscriterium van 250 meter."


Maar wat is een minimum afstand eigenlijk? Is dat hemelsbreed, of over de weg? De regelgeving geeft daar geen uitsluitsel over. Het spreekt over een "afstandscriterium van 250 meter". Is de eis nu dat er exact 250 meter tussen moet zitten? De discussie in de krant ging, vrij vertaald, voornamelijk over de vraag of de afstand tussen de school op de Zonnehof en de geplande coffeeshoplocatie wel minimaal 250 meter bedraagt. Na nameten met een meetwiel, kwam het AD tot de conclusie dat dit wel het geval is.

Maar al is het meetwiel gecalibreerd, er zal toch nooit tweemaal dezelfde afstand uitkomen door kleine wijzigingen in de gelopen route. Zou het niet handiger zijn de afstand tussen de locaties te kunnen meten als stabiel reproduceerbare en berekende afstand? Een transparante methode waarmee de doorslag gegeven kan worden voor alle aanvragen?

We definiëren daarom nog wat extra spelregels:

- De afstandscriteria betreffen minimum afstanden
- De afstandscriteria betreffen looproutes over de weg, niet hemelsbreed van de school naar de coffeeshop (al is het wellicht wel mogelijk om terug te vliegen)
- De afstand van de school en de coffeeshop tot de openbare weg dient meegenomen te worden in de berekening. Hier wordt de kortste, lijnrechte route genomen van het [BAG adresseerbare object](https://bag.basisregistraties.overheid.nl/doc/begrip/AdresseerbaarObject) naar de openbare weg in het [Nationaal Wegenbestand](https://www.rijkswaterstaat.nl/zakelijk/zakendoen-met-rijkswaterstaat/werkwijzen/werkwijze-in-gww/data-eisen-rijkswaterstaatcontracten/nationaal-wegenbestand.aspx)
- De kortste route over het Nationaal Wegenbestand wordt genomen. Dit wegenbestand betreft allemaal lijnstukken, waarmee discussie wordt weggenomen over de zijde van de weg waarlangs wordt gelopen, of er stukken worden afgesneden, etcetera.

Verder hebben we een shape-file dump van het Nationaal Wegenbestand gebruikt, met een tweetal kleine wijzigingen:

- De geometrieën zijn getransformeerd van Nederlands RD naar WGS84. Dit is de standaardprojectie voor GeoSPARQL
- De geometrische lengte van de wegvakken is toegevoegd als extra kolom in de GeoCSV export van de shapefile. Deze is lastig te berekenen: GeoSPARQL heeft geen functies om de lengte van een lijngeometrie te berekenen en met SPARQL sec is dit een lastige uitdaging.

Met deze extra spelregels is er weinig ruimte meer voor ambiguïteiten én de afstand kan worden berekend uit de data die we over de openbare ruimte hebben. Door het optellen van de lijnstukken uit de kortste route uit het NWB wegen en de afstand van het BAG verblijfsobject naar deze route, kunnen we de afstand transparant en reproduceerbaar ophalen:

