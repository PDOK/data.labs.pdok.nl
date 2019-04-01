---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/krimp/logo.jpg
output: leaflet
title: Krimpgebieden
published: false
---

# Wat weten we over Krimp?

Krimpregio's en Verstedelijking zijn onderwerpen die maatschappelijk
vol in de schijnwerpers staan.  Het is een complex vraagstuk.  Begin
november 2017 vond de CBS/Kadaster Datathon plaats waarin een team van
data specialisten van Kadaster en CBS aan de slag zijn gegaan met
Linked Data.  Samen met datajournalisten Frédérik Ruys en Stephan
Okhuijsen is het thema Krimp gekozen voor deze data story.

## Wat zijn de Krimpregio's?

De krimpregio's die we in Nederland kennen zijn:

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="10-krimpregionamen.rq" data-output="geo"></query>


## Waar zijn de Krimpregio's?

Allereerst zijn we benieuwd welke krimpregio's we eigenlijk hebben in
Nederland, en hoe zijn die over Nederland verdeelt?  Het resultaat
laat zien dat er 9 krimpgebieden zijn vooral aan de landsgrenzen.

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="20-krimpregios.rq" data-output="geo"></query>

## Bevolkingsopbouw

Krimpregio's zijn gebieden waar het aantal inwoners lager wordt.  Maar
hoe ziet de bevolkingsopbouw eruit?  Ook vergrijsd?  En weinig jeugd
is de verwachting?

<query data-config="http://localhost:4000/stories/krimp/#query=prefix+cbs%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fcbs%2Fdef%2F%3E%0Aprefix+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix+graph%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fgraph%2F%3E%0Aprefix+krimpgebied%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fcbs%2Fid%2Fkrimpgebied%2F%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aselect%0A++%3Flabel%0A++(avg(xsd%3Adecimal(%3Finwoners1_))+as+%3Finwoners0_14)%0A++(avg(xsd%3Adecimal(%3Finwoners2_))+as+%3Finwoners15_24)%0A++(avg(xsd%3Adecimal(%3Finwoners3_))+as+%3Finwoners25_44)%0A++(avg(xsd%3Adecimal(%3Finwoners4_))+as+%3Finwoners45_64)%0A++(avg(xsd%3Adecimal(%3Finwoners5_))+as+%3Finwoners65plus)%0A%7B%0A++graph+graph%3Akrimpgebied+%7B%0A++++%3Fgemeente+geo%3AsfWithin%2Frdfs%3Alabel+%3Flabel+.%0A++%7D%0A++graph+graph%3Awijkbuurt-2016+%7B%0A++++%3Fgemeente+cbs%3Ainwoners+%3Finwoners_+%3B%0A++++++++++++++cbs%3Ainwoners0-14+%3Finwoners1_+%3B%0A++++++++++++++cbs%3Ainwoners15-24+%3Finwoners2_+%3B%0A++++++++++++++cbs%3Ainwoners25-44+%3Finwoners3_+%3B%0A++++++++++++++cbs%3Ainwoners45-64+%3Finwoners4_+%3B%0A++++++++++++++cbs%3Ainwoners65%5C%2B+%3Finwoners5_+.%0A++%7D%0A%7D%0Agroup+by+%3Flabel%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="30-leeftijdscategorien.rq" data-output="gchart"></query>

## Bevolkingsopbouw in vergelijking

Hoe is de verhouding over de verschillende leeftijdsgroepen in
krimpgebieden versus heel Nederland?  We bekijken het aan de hand van
één krimpregio.  Deze krimpregio kan in de query eenvoudig aangepast
worden.

<query data-config="https://yasgui.org/#query=prefix+cbs%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fcbs%2Fdef%2F%3E%0Aprefix+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix+graph%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fgraph%2F%3E%0Aprefix+krimpgebied%3A+%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fcbs%2Fid%2Fkrimpgebied%2F%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aselect%0A++%3Flabel%0A++(avg(xsd%3Afloat(%3Fx1))+as+%3Finwoners0_14)%0A++(avg(xsd%3Afloat(%3Fx2))+as+%3Finwoners15_24)%0A++(avg(xsd%3Afloat(%3Fx3))+as+%3Finwoners25_44)%0A++(avg(xsd%3Afloat(%3Fx4))+as+%3Finwoners45_64)%0A++(avg(xsd%3Afloat(%3Fx5))+as+%3Finwoners65plus)%0A%7B%0A++%7B%0A++++graph+graph%3Akrimpgebied+%7B%0A++++++%3Fgemeente+geo%3AsfWithin%2Frdfs%3Alabel+%3Flabel+.%0A++++%7D%0A++%7D+union+%7B%0A++++bind+('Nederland'+as+%3Flabel)%0A++%7D%0A++graph+graph%3Awijkbuurt-2016+%7B%0A++++%3Fgemeente+cbs%3Ainwoners0-14+%3Fx1+%3B%0A++++++++++++++cbs%3Ainwoners15-24+%3Fx2+%3B%0A++++++++++++++cbs%3Ainwoners25-44+%3Fx3+%3B%0A++++++++++++++cbs%3Ainwoners45-64+%3Fx4+%3B%0A++++++++++++++cbs%3Ainwoners65%5C%2B+%3Fx5+.%0A++%7D%0A%7D%0Agroup+by+%3Flabel%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22legacyScatterChartLabels%22%3Atrue%2C%22legend%22%3A%22right%22%2C%22isStacked%22%3Afalse%2C%22vAxes%22%3A%5B%7B%22title%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22useFormatFromData%22%3Atrue%7D%2C%7B%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%5D%2C%22booleanRole%22%3A%22certainty%22%2C%22hAxis%22%3A%7B%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%2C%22useFormatFromData%22%3Atrue%7D%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="40-leeftijdscategorien-NL.rq" data-output="gchart"></query>


## Mobiliteit in krimpregio's

Hoe is de mobiliteit in een krimpregio? We zijn geïnteresseerd in de
afstanden tot bijvoorbeeld de afstand tot de oprit van een hoofdweg,
treinstations, kinderdagverblijf, supermarkt en hoeveelheid auto's per
huishouden.  Eerst nemen we voor alle gemeenten de gemiddelde
afstanden tot enkele voorzieningen:

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="50-mobiliteit1.rq" data-output="geo"></query>

Daarna vergelijken we de gemiddelde afstand tot voorzieningen per
krimpgemeente tot het landelijk gemiddelde (over alle gemeentes): ‘🠋’
betekent dat de afstand korter is dan gemiddeld; ‘🠉’ betekent dat de
afstand larger is dan gemiddeld.

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="mobiliteit2.rq" data-output="geo"></query>

## Werk
Dat brengt ons eigenlijk automatisch bij het thema werk.  Welk deel van de beroepsbevolking heeft een baan?

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="arbeidsparticipatieKrimp.rq" data-output="geo"></query>

Wat is over heel Nederland het minimale en maximale arbeidsparticipatiepercentage?

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="rangeArbeidsparticipatie.rq" data-output="table"></query>

Hoe komen de krimpregio's uit de bus, vergeleken met het Nederlands gemiddelde?

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="thematischeKrimp.rq" data-output="geo"></query>

Wat is het beeld over heel Nederland van de arbeidsparticipatie?

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="thematischeArbeidspNl.rq" data-output="geo"></query>


## Energiepotentieel

De wijken waar de grootste mogelijkheden liggen op het verbeteren van
het verlies van energie in de woning, liggen die in een krimpgebied of
niet; relevante informatie voor het beleid op subsidies, of voor het
slopen van woningen in krimpgebieden.

Het gemiddelde theoretische besparingspotentieel wordt per gemeente
gerekend.   Dit besparingspotentieel ligt tussen €25 en €1.900 per
jaar.   Hieronder vragen we de thematische kaart op, waar blauw/koud
een laag, en rood/warm een hoog besparingspotentieel aanduidt.   (In de
query zit een comment ‘<code>#</code>’ die, wanneer verwijdert, het
precieze bedrag voor iedere gemeente laat zien.)

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="energiepotentieel1.rq" data-output="geo"></query>

Als we het besparingspotentieel alleen voor de krimpregio's laten
zien, krijgen we de volgende kaart:

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="energiepotentieel2.rq" data-output="geo"></query>
