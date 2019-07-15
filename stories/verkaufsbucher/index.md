---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/verkaufsbucher/NAlogo.jpg
title: Verkaufsbücher - Nationaal Archief
logo: verkaufsbucher/logo.png
published: true
---

# Verkaufsbücher - Nationaal Archief

<p class="text">Tijdens de Tweede Wereldoorlog worden door de Duitsers panden verkocht waarvan de eigenaren veelal Joods zijn. De administratie hiervan staat in de zogeheten Verkaufsbücher die het Nationaal Archief bewaart. De bijgehouden administratie in de Verkaufsbücher bevat de adressen en de namen van de oorspronkelijke eigenaren, de betrokken makelaars en de oorlogskopers. Met daarbij de verkoopprijzen. </p>

<p class="text">Deze set is interessant vanwege het historisch belang maar ook om de inhoud die juist de wie, wat, waar en wanneer in zich heeft. De wie, wat, waar en wanneer zijn de basisgegevens van een informatieobject en daarmee de eerste en belangrijkste gegevens om Linked Open Data van te maken. Daarnaast kunnen op basis van deze wie, wat waar en wanneer links gelegd worden met andere datasets zoals die van het Kadaster.</p>

<p class="text">Het resultaat wat u hier ziet is ontstaan uit een samenwerking tussen het Nationaal Archief en het Kadaster. In september 2018 is het idee geopperd om een experiment te doen door Linked Open Data van het Kadaster te koppelen met data van het Nationaal Archief. Het Nationaal wilde graag de Verkaufsbucher koppelen aan data van het Kadaster. De Verkaufsbücher is een openbare dataset. De inhoud is beschikbaar gesteld als open data met een CC0 waiver.</p>

<query  data-query-ref="test.rq"
        data-output="geo"/>
              

<h1 class="text">Stap 1. Op de kaart tonen van onteigende panden</h1>
        
<p class="text">In de hieronder staande kaart wordt weergegeven welke objecten (woningen, bouwland etc.) onteigend zijn. Ook wordt hier informatie per pand getoond:</p>
<ul class="txt">
<li>Adres</li>
<li>Bouwjaar</li>
<li>Oppervlakte</li>
<li>Naam eigenaar/verkoper</li> 
<li>Datum</li>
<li>Bedrag</li>
<li>Naam koper</li>
</ul>

<h1 class="text">Stap 2. Relatie tussen koper en verkoper visueel weergeven op de kaart</h1>

<h1 class="text">Stap 3. Statistieken</h1>

<h2 class="text">3a. Aantal transacties per plaats</h2>

<h2 class="text">3b. Top 10 kopers met de meeste transacties</h2>

<h2 class="text">3c. Verkoopbedrag versus WOZ-waarde incl. omrekentabel van het IISG van waarde guldens in de jaren '40 naar nu</h2>

<query  data-query-ref="stats.rq"
        data-output="table"/>

<h1 class="text">Stap 4. Stolpersteine</h1>

<h1 class="text">Stap 5. Link naar Joods Monument voor biografische informatie van pand-eigenaren</h1>


<div class="alert alert-info txt" role="alert">
<h1 class="text">Proces: Van Verkaufsbuch tot visualisatie op de kaart</h1>
<p class="text">Papieren Verkoopboeken --> foto invoegen</p>

<p class="text">Ruim 7100 records/regels in een Exceltabel als letterlijke interpretatie van de fysieke exemplaren.</p>

<p class="text">Linked data van gemaakt
Vraag: De Construct query gebruikt andere kolomnamen. Zijn de kolomnamen later aangepast?
Antw: Een header in het csv-bestand gooide roet in het eten.</p>

<p class="text">Vervolgens datakwaliteit verbeterd o.a. via OpenRefine de adressen opgepoetst 
Handmatig tijdens de High5 nog zo'n 160 plaatsnamen gekoppeld aan plaatsnamen in de BAG, aan Wikidata of aan de gemeentecode
Pano heeft in de linked data nog extra verbanden aangebracht om ...
Historische adressen (bijv. Sarphatistraat werd door de Duitsers Muiderschans genoemd)</p>

<p class="text">Met de locatieserver heeft Nathan de adressen uit de Verkaufsbücher (zonder postcode en met afwijkende schrijfwijze!) kunnen achterhalen. Ook het percentage dat de mate van nauwkeurigheid aangeeft is meegenomen.</p>
</div>        
