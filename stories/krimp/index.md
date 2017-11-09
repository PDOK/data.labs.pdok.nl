---
layout: story
title: Krimpgebieden
logo: /stories/krimp/logo.jpg
endpoint: https://data.labs.pdok.nl/sparql
output: leaflet
---
weg te halen:
WOUTER/Rein: Misschien ook wel erg leuk om niet alleen queries te doen met resultaten op een kaartje....maar ook een paar met een mooie grafiek....(zolang het maar geen piecharts zijn...)
Ook bij een paar queries goed om aan te geven hoe een paar queries zijn aan te passen met andere waardes

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
Vraag Wouter/Rein kunnen we dit vergelijken met de provincie (achterhoek vergelijken met gelderland), en dat bv. in een tabel eruit gooien?  (Kunnen we het ook afzetten tegen het gemiddelde van Nederland?)

We focussen ons op het thema mobiliteit en werk.

## Mobiliteit een krimpregio...
Een thema waar we in willen duiken is mobiliteit; zijn voorzieningen in krimpregio's op (grotere) afstand, zijn er meer auto's per huishouden, en zijn de auto's in krimpregio's oud? En zit in een trein station op grotere afstand?

query 1: Hoe moeten we dit doen? kunnen we dit per krimpgebied doen? En dus 9 pijltjes op de kaart?
Kunnen we een tabel doen waarin we de 9 krimpregio's met elkaar vergelijken?

query 2:Vergelijken met de rest van NL. Kan dat? In tabel?

Is de reisafstand naar het werk voor de mensen in krimpgebieden groter?

query 3.Reisafstand naar werk van de 9 krimpgebieden, en anderen... (DIT UIT DE AFSTANDBANEN DATASET) (2013 data)

## Werk
Dat brengt ons eigenlijk automatisch bij het thema werk. Welk deel van de bevolking is deel van de beroepsbevolking en heeft een baan? (Arbeidsdeelname dataset: )



## Inzoomen in de wijken...
Maar hoe zit het met de verschillen binnen een krimpregio? Zijn er grote verschillen binnen een gebied, waarmee bijvoorbeeld het beleid rekening mee moet houden? Laten we kijken naar het krimpgebied Achterhoek, en daar voor een

## Energiepotentieel
De wijken waar de grootste mogelijkheden liggen op het verbeteren van het verlies van energie in de woning, liggen die in een krimpgebied of niet; relevante informatie voor het beleid op subsidies. (ook voor het slopen relevant)




## Tot slot
De data is rijk...in de datathon zijn meerdere datasets omgezet naar Linked Data, maar een parel is toch wel de Wijken en Buurten dataset. Op https://facetcheck.triply.cc/ hebben we een eerste versie van de Wijken en Buurten Browser gezet...



<div data-query data-query-sparql="buurten.rq">
</div>
