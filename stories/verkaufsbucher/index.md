---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/verkaufsbucher/NAlogo.jpg
title: Verkaufsbücher - Nationaal Archief
logo: verkaufsbucher/logo.png
published: true
---

# Verkaufsbücher - Nationaal Archief

Tijdens de Tweede Wereldoorlog worden door de Duitsers panden verkocht waarvan de eigenaren veelal Joods zijn. De administratie hiervan staat in de zogeheten Verkaufsbücher die het Nationaal Archief bewaart. De bijgehouden administratie in de Verkaufsbücher bevat de adressen en de namen van de oorspronkelijke eigenaren, de betrokken makelaars en de oorlogskopers. Met daarbij de verkoopprijzen.

Deze set is interessant vanwege het historisch belang maar ook om de inhoud die juist de wie, wat, waar en wanneer in zich heeft. De wie, wat, waar en wanneer zijn de basisgegevens van een informatieobject en daarmee de eerste en belangrijkste gegevens om Linked Open Data van te maken. Daarnaast kunnen op basis van deze wie, wat waar en wanneer links gelegd worden met andere datasets zoals die van het Kadaster.

Het resultaat wat u hier ziet is ontstaan uit een samenwerking tussen het Nationaal Archief en het Kadaster. In september 2018 is het idee geopperd om een experiment te doen door Linked Open Data van het Kadaster te koppelen met data van het Nationaal Archief. Het Nationaal wilde graag de Verkaufsbucher koppelen aan data van het Kadaster. De Verkaufsbücher is een openbare dataset. De inhoud is beschikbaar gesteld als open data met een CC0 waiver.

## Stap 1. Op de kaart tonen van onteigende panden

Een overzicht van de verhandelde objecten waarvan het adres gevonden is in de Basisregistraties Adressen en Gebouwen (BAG).

<query  data-config="https://data.labs.pdok.nl/stories/verkaufsbucher/#query=PREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20gsp%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0APREFIX%20vcard%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23%3E%0APREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20hg%3A%20%3Chttp%3A%2F%2Frdf.histograph.io%2F%3E%0Aprefix%20bbi%3A%20%3Chttp%3A%2F%2Fdata.pdok.nl%2Fdef%2Fbbi%23%3E%0APREFIX%20naa%3A%20%3Chttp%3A%2F%2Farchief.nl%2Fdef%2F%3E%20%0ASELECT%20%0A*%0AFROM%20%3Chttp%3A%2F%2Farchief.nl%2FNL-HaNA%2Fdoc%2FGraph%3AVerkaufsbucher%3E%0AFROM%20%3Chttp%3A%2F%2Farchief.nl%2Fverkaufsbucher%2Fid%2Fdataset%2Ftransactions%3E%0AFROM%20%3Chttp%3A%2F%2Fdata.pdok.nl%2Fbbi%2Fid%2Fdataset%2Fgemeente-woonplaats-relatie%3E%0AFROM%20%3Chttp%3A%2F%2Farchief.nl%2Fverkaufbuchen%2Fid%2Fdataset%2Flinkset-wpl-bagwpl-exact%3E%0AFROM%20%3Chttp%3A%2F%2Farchief.nl%2Fverkaufsbucher%2Fid%2Fdataset%2Flinkset-wpl-bagwpl-handmatig%3E%0AFROM%20%3Chttp%3A%2F%2Fdata.pdok.nl%2Fid%2Fdataset%2Fbbi%3E%0AFROM%20%3Chttp%3A%2F%2Fbrk.basisregistraties.overheid.nl%2Fid%2Fdataset%2Fbrk%2Fbestuurlijke-grenzen%2F2016%3E%0AFROM%20%3Chttp%3A%2F%2Farchief.nl%2Fverkaufsbucher%2Fid%2Fdataset%2Flinkset-adres-bag-nummeraanduiding%3E%0AFROM%20%3Chttp%3A%2F%2Farchief.nl%2Fverkaufsbucher%2Fid%2Fdataset%2Fverkaufsbucher-verkopersadressen%3E%0A%7B%0A%20%20%3Ftransactie%20%0A%20%20%20%20a%20schema%3ATradeAction%20%3B%0A%20%20%20%20schema%3Aobject%2Fvcard%3AhasAddress%20%3Fadres%20.%0A%20%20%3Fadres%0A%20%20%20%20naa%3AhasParcelCentroid%2Fgsp%3AasWKT%20%3Fshape%20.%0A%7D%0A&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22visualization%22%3A%22grouped%22%2C%22grouped%22%3Afalse%7D"
        data-query-ref="bag-matched-object-overview.rq"
        data-output="geo">
</query>
        
In de hieronder staande kaart wordt voor een specifieke woonplaats weergegeven welke objecten (woningen, bouwland etc.) onteigend zijn. Ook wordt hier informatie per pand getoond:

* Adres
* Bouwjaar
* Oppervlakte
* Naam eigenaar/verkoper
* Datum
* Bedrag
* Naam koper

We zoomen nu in op Utrecht, maar de query kan aangepast worden naar een willekeurige woonplaats. 

<query  data-query-ref="regio-transactie-overzicht.rq"
        data-output="geo"> 
</query>

## Stap 2. Relatie tussen koper en verkoper visueel weergeven op de kaart

In de Verkaufsbücher is per pand bijgehouden wie de eigenaar was en zijn woonadres. Ook de adresgegevens en de naam van de koper van het object zijn genoteerd. Door deze gegevens op de kaart te visualiseren wordt de relatie tussen kopers en verkopers zichtbaar. Woonden kopers en verkopers bijvoorbeeld in elkaars nabijheid? Oftewel, kochten kopers de huizen van hun buurtgenoten? 

Als je op de kaart een eigenaar bekijkt (<circle cx="9" cy="9" fill="#008000" r="9"/>), dan kun je de lijntjes volgen naar de panden (<circle cx="9" cy="9" fill="#808080" r="9"/>) en door naar de adressen van de kopers (<circle cx="9" cy="9" fill="#800080" r="9"/>)) en vice versa.

<query  data-query-ref="koper-verkoper-per-wpl.rq"
        data-output="geo"> 
</query>

## Stap 3. Statistieken

## 3a. Aantal transacties per plaats

Het aantal transacties per plaats kon al worden opgemaakt uit de papieren Verkaufsbücher. Door de koppeling aan de gegevens over adressen en gebouwen in de BAG, is nu ook het totaal aantal verhandelde vierkante meters per plaats te berekenen.

### Relevantie
De gemeente Den Haag heeft 2,6 miljoen euro gereserveerd voor schadevergoedingen aan Joodse slachtoffers die na de oorlog een aanslag kregen om alsnog hun erfpacht te betalen.
https://www.volkskrant.nl/a-b7e75c47

Ook andere gemeenten zoals Rotterdam en Utrecht werken aan een schaderegeling. Stel dat bij het vaststellen van de hoogte van de vergoeding wordt gekeken naar de oppervlakte van panden. Met een link tussen de adressen en eigenaren van geroofde panden uit de Verkaufsbücher en de oppervlakte uit de BAG is een inschatting te maken van het totaal uit te keren (en reserveren) bedrag.

Voorbeeld: In de gemeente Rotterdam zijn X panden met in totaal een oppervlakte van X m2 verkocht. Bij 100 euro per m2 is dat xxx euro, te verdelen over x aantal eigenaren of hun nabestaanden.

## 3b. Top 10 kopers met de meeste panden

Onderstaande tabel toont de top 10 van kopers die gedurende de oorlog de meeste panden hebben aangekocht. 

## 3c. Verkoopbedrag versus WOZ-waarde

De indruk bestaat dat de panden uit de Verkaufsbücher voor een schijntje zijn verkocht. Is dat ook zo?

Met de omrekentabel van IISG is het bedrag uit het Verkaufsbüch omgerekend rekening houdend met inflatie en deflatie en kan worden vergeleken met de (gemiddelde) WOZ-waarde van januari 2018.
(Bron CBS: https://www.cbs.nl/nl-nl/nieuws/2018/34/woningwaarde-in-2018-gemiddeld-6-5-procent-omhoog)

## Stap 4. Stolpersteine

Stolpersteine of struikelstenen zijn een project van de Duitse kunstenaar Gunter Demnig. Voor de huizen waar Joden ooit door de nazi's werden afgevoerd, plaatst hij stenen met een messingplaatje van tien bij tien centimeter. Daarin zijn handmatig de naam, geboorte- en sterfdatum van het slachtoffer geponst, evenals de naam van het kamp waar hij of zij is vermoord.

Het is niet duidelijk hoeveel Stolpersteine er in totaal in Nederland zijn geplaatst. In het Joods Monument zijn in juli 2019 ruim 6100 locaties van Stolpersteine geregistreerd.

Voor welke Joodse eigenaren uit de Verkaufsbücher is een/geen Stolperstein geplaatst?

## Stap 5. Link naar Joods Monument voor biografische gegevens

Het Joods Monument is een online monument voor de meer dan 104.000 personen die in Nederland als joden werden vervolgd en de Holocaust niet overleefden.

De zogenaamde gemeentelijsten vormen de basisbron van het Monument. Dit zijn lijsten van joodse inwoners per gemeente, die de Nederlandse gemeenten in 1941 op last van de Duitse bezetter moesten aanleggen.

Hoeveel eigenaren uit de Verkaufsbücher zijn te koppelen aan namen in het Joods Monument? Hoeveel procent daarvan is volgens de gegevens in het Joods Monument omgekomen en dus niet teruggekeerd?

## Proces: Van Verkaufsbuch tot visualisatie op de kaart

Papieren Verkoopboeken --> foto invoegen

Ruim 7100 records/regels in een Exceltabel als letterlijke interpretatie van de fysieke exemplaren.

Linked data van gemaakt
Vraag: De Construct query gebruikt andere kolomnamen. Zijn de kolomnamen later aangepast?
Antw: Een header in het csv-bestand gooide roet in het eten.

Vervolgens datakwaliteit verbeterd o.a. via OpenRefine de adressen opgepoetst 
Handmatig tijdens de High5 nog zo'n 160 plaatsnamen gekoppeld aan plaatsnamen in de BAG, aan Wikidata of aan de gemeentecode
Pano heeft in de linked data nog extra verbanden aangebracht om ...
Historische adressen (bijv. Sarphatistraat werd door de Duitsers Muiderschans genoemd)

Met de locatieserver heeft Nathan de adressen uit de Verkaufsbücher (zonder postcode en met afwijkende schrijfwijze!) kunnen achterhalen. Ook het percentage dat de mate van nauwkeurigheid aangeeft is meegenomen.
