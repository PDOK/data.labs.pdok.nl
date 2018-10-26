---
endpoint: https://data.pdok.nl/sparql
layout: story
title: De Huischeck
output: leaflet
---

<script type="text/javascript" src="/apps/huischeck/jquery.qrcode.min.js"></script>
<script type="text/javascript" src="/apps/huischeck/jquery.qrcode.js"></script>
<script type="text/javascript" src="/apps/huischeck/qrcode.js"></script>


## De Huischeck
Op deze pagina is het mogelijk om nadere informatie te krijgen over uw huis en buurt op basis van onder andere de PDOK Locatieserver. 
De informatie over uw huis wordt zowel als tekst weergegeven, maar ook door middel van een QR-code die eenvoudig gescand kan worden.

*Vul in onderstaande zoekbalk uw adres(straatnaam+huisnummer, woonplaats) in om uw huis te checken!*

<!--
PDOK Locatieserver suggest API heeft adres nodig en geeft onder andere de id als return(adr-....). Deze id kan dan als input voor 
de lookup API gebruikt worden om gedetailleerde info te krijgen over het adres. Nu zijn het nog 2 aparte forms, maar eigenlijk wil je
dat er 1 form is en dat achter de schermen het id van de suggest API direct wordt meegegeven aan de lookup API en het resultaat(de informatie
 over het adres) netjes wordt geprint op de pagina. Zie huischeck_fetch.js voor de pogingen met de Fetch API.
-->

  <div>
    <input name="q" id="adres" value=""> 
    <button id='huischeck_now'>Check uw huis</button>
    <script type="text/javascript" src="/apps/huischeck/huischeck_fetch.js"></script>
  </div>

## Informatie over uw huis
<!--
Hier moet het resultaat van de lookup API  in tekstvorm weergegeven worden op de webpagina, dus gewoon een lijstje met kenmerken
van het desbetreffende adres.
-->

Als u uw adres heeft ingevoerd, vindt u hieronder de informatie over uw huis:

<div>
<p id="AdressInfo"> 
</p>
</div>

## QR-code
<!--
Hier wordt de QR code met de URI gegenereerd. 1 van de velden van de lookup API is nummeraanduiding_id, en die ID 
zou dus automatisch achteraan de onderstaande URI moeten worden geplakt.
-->

De onderstaande QR-code bevat de link naar de URI(Uniform Resource Identifier) van uw huis. Wanneer u deze 
code scant komt u uit op een pagina met informatie over uw huis uit de basisregistraties van het Kadaster.

<div id="qrcodeCanvas">

</div>
<button id='printQRcode'>Print de QR-code</button>
 
## SPARQL Query
<!--
De SPARQL query is nu nog een rechtstreekse kopie van de vind-een-gebouw query, om te layout van de pagina te testen
-->

Een andere manier om informatie van uw huis op te vragen is via SPARQL-queries. Dit kan 
door door uw adres in te vullen bij de <code>values</code> operatoren in de onderstaande query.

<div data-query
     data-query-sparql="huischeck_sparql.rq">
</div>

## Uw huis in 3D
Het is ook mogelijk om om huis en straat in 3D te bekijken op basis van de BAG. [Klik hier](https://stories.triply.cc/kadaster/3d-bag/) 
om naar de 3D viewer te gaan.
De onderstaande video laat zien hoe u de query kan aanpassen.

<video width="1280" height="720" controls>
  <source src="3Dbag_voorbeeld.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
