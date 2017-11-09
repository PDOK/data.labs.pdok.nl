---
layout: story
title: Krimpgebieden
logo: /stories/krimp/logo.jpg
endpoint: https://data.labs.pdok.nl/sparql
output: leaflet
---


# Wat weten we over Krimp?
Krimpregio's en Verstedelijking zijn onderwerpen die maatschappelijk vol in de schijnwerpers staan. Het is een complex vraagstuk. Begin november 2017 vond de CBS/Kadaster Datathon plaats waarin een team van data specialisten van Kadaster en CBS aan de slag zijn gegaan met Linked Data. Samen met datajournalisten Frédérik Ruys en Stephan Okhuijsen is het thema Krimp gekozen voor deze data story.

## Waar zijn de Krimpregio's?

Allereerst zijn we benieuwd welke krimpregio's we eigenlijk hebben in Nederland, en hoe zijn die over Nederland verdeelt? Het resultaat laat zien dat er 9 krimpgebieden zijn vooral aan de landsgrenzen.

<div data-query
  data-query-sparql="krimpregios.rq">
</div>

## Bevolkingsopbouw

Krimpregio's zijn gebieden waar het aantal inwoners lager wordt. Maar hoe ziet de bevolkingsopbouw eruit? Ook vergrijsd? En weinig jeugd is de verwachting?

<div data-query
  data-query-output="gchart"
  data-query-sparql="leeftijdscategorien.rq">
</div>

<div data-query
  data-query-sparql="leeftijdscatWijk.rq">
</div>

## Bevolkingsopbouw in vergelijking
Hoe is de verhouding over de verschillende leeftijdsgroepen in krimpgebieden versus heel Nederland?
We bekijken het aan de hand van één krimpregio.

<div data-query
  data-query-output="gchart"
  data-query-sparql="leeftijdscatKrimpVsNL.rq">
</div>

We focussen ons op het thema mobiliteit en werk.

## Mobiliteit een krimpregio…

We zijn geïnteresseerd in de afstanden tot voorzieningen.  Eerst nemen
we voor allegemeenten de gemiddelde afstanden tot enkele
voorzieningen:

<div data-query data-query-sparql="mobiliteit1.rq"></div>

Daarna vergelijken we de gmiddelde afstand tot voorzieningen per
krimpgemeente tot het landelijk gemiddelde (over alle gemeentes): ‘🠋’
betekent dat de afstand korter is dan gemiddeld; ‘🠉’ betekent dat de
afstand larger is dan gemiddeld.

<div data-query data-query-sparql="mobiliteit2.rq"></div>

Een thema waar we in willen duiken is mobiliteit; zijn voorzieningen
in krimpregio's op (grotere) afstand, zijn er meer auto's per
huishouden, en zijn de auto's in krimpregio's oud? En zit in een trein
station op grotere afstand?

query 1: Hoe moeten we dit doen? kunnen we dit per krimpgebied doen?
En dus 9 pijltjes op de kaart?  Kunnen we een tabel doen waarin we de
9 krimpregio's met elkaar vergelijken?

query 2:Vergelijken met de rest van NL. Kan dat? In tabel?

Is de reisafstand naar het werk voor de mensen in krimpgebieden groter?

query 3.Reisafstand naar werk van de 9 krimpgebieden, en anderen... (DIT UIT DE AFSTANDBANEN DATASET) (2013 data)

## Werk
Dat brengt ons eigenlijk automatisch bij het thema werk. Welk deel van de bevolking is deel van de beroepsbevolking en heeft een baan? (Arbeidsdeelname dataset: )

<div data-query
  data-query-sparql="arbeidsparticipatieKrimp.rq">
</div>

## Inzoomen in de wijken...
Maar hoe zit het met de verschillen binnen een krimpregio? Zijn er grote verschillen binnen een gebied, waarmee bijvoorbeeld het beleid rekening mee moet houden? Laten we kijken naar het krimpgebied Achterhoek, en daar voor een

## Energiepotentieel

De wijken waar de grootste mogelijkheden liggen op het verbeteren van
het verlies van energie in de woning, liggen die in een krimpgebied of
niet; relevante informatie voor het beleid op subsidies. (ook voor het
slopen relevant)

Het gemiddelde theoretische besparingspotentieel wordt per gemeente
gerekend.  Dit besparingspotentieel ligt tussen €25 en €1.900 per
jaar.  Hieronder vragen we de thematische kaart op, waar blauw/koud
een laag, en rood/warm een hoog besparingspotentieel aanduidt.  (In de
query zit een comment ‘<code>#</code>’ die, wanneer verwijdert, ht
precieze bedrag voor iedere gemeente laat zien.)

<div data-query data-query-sparql="energiepotentieel1.rq">
</div>

Als we het besparingspotentieel alleen voor de krimpregio's laten
zien, krijgen we de volgende kaart:

<div data-query data-query-sparql="energiepotentieel2.rq">
</div>

## Tot slot
De data is rijk...in de datathon zijn meerdere datasets omgezet naar Linked Data, maar een parel is toch wel de Wijken en Buurten dataset. Op https://facetcheck.triply.cc/ is een eerste versie van de BuurtBrowser beschikbaar...


