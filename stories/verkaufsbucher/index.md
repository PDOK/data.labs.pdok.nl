---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/verkaufsbucher/NAlogo.jpg
title: Verkaufsbücher - Nationaal Archief
logo: verkaufsbucher/logo.png
published: true
---

# Verkaufsbücher - Nationaal Archief

Tijdens de Tweede Wereldoorlog worden door de Duitsers panden verkocht waarvan de eigenaren veelal Joods zijn. De administratie hiervan staat in de zogeheten Verkaufsbücher die het Nationaal Archief bewaart.

De bijgehouden administratie in de Verkaufsbücher bevat de adressen en de namen van de oorspronkelijke eigenaren, de betrokken makelaars en de oorlogskopers, met daarbij de verkoopprijzen.

Proces
Papieren Verkoopboeken --> foto invoegen

Ruim 7100 records/regels in een Exceltabel als letterlijke interpretatie van de fysieke exemplaren

Linked data van gemaakt
Vraag: De Construct query gebruikt andere kolomnamen. Zijn de kolomnamen later aangepast?
Antw: Een header in het csv-bestand gooide roet in het eten

Vervolgens datakwaliteit verbeterd o.a. via OpenRefine de adressen opgepoetst 
Handmatig tijdens de High5 nog zo'n 160 plaatsnamen gekoppeld aan plaatsnamen in de BAG, aan Wikidata of aan de gemeentecode
Pano heeft in de linked data nog extra verbanden aangebracht om ...
Historische adressen (bijv. Sarphatistraat werd door de Duitsers Muiderschans genoemd)

Met de locatieserver heeft Nathan de adressen uit de Verkaufsbücher (zonder postcode en met afwijkende schrijfwijze!) kunnen achterhalen. Ook het percentage dat de mate van nauwkeurigheid aangeeft is meegenomen.


1. Op de kaart tonen van verkochte panden + informatie
        Adres
        Naam eigenaar/verkoper
        Datum
        Bedrag
        Naam koper

2a. Relatie tussen koper en verkoper visueel weergeven op de kaart
2b. Statistiek over aantal transacties (aantal panden per eigenaar) + top 10 kopers met de meeste transacties

3. Zoeken en vinden op naam, plaats, ...

4. Verkoopbedrag versus WOZ-waarde incl. omrekentabel van het IISG van waarde guldens in de jaren '40 naar nu

5. Link naar Joods Monument voor datum en plaats van overlijden van pand-eigenaren


<query  data-query-ref="test.rq"
        data-output="geo"/>
