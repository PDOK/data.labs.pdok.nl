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
        data-output="geo" />
        
In de hieronder staande kaart wordt weergegeven welke objecten (woningen, bouwland etc.) onteigend zijn. Ook wordt hier informatie per pand getoond:

* Adres
* Bouwjaar
* Oppervlakte
* Naam eigenaar/verkoper
* Datum
* Bedrag
* Naam koper

## Stap 2. Relatie tussen koper en verkoper visueel weergeven op de kaart

## Stap 3. Statistieken

## 3a. Aantal transacties per plaats</h2>

## 3b. Top 10 kopers met de meeste transacties</h2>

## 3c. Verkoopbedrag versus WOZ-waarde incl. omrekentabel van het IISG van waarde guldens in de jaren '40 naar nu</h2>

<query  data-query-ref="stats.rq"
        data-output="table"/>

<h1 class="text">Stap 4. Stolpersteine</h1>

<h1 class="text">Stap 5. Link naar Joods Monument voor biografische informatie van pand-eigenaren</h1>


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

