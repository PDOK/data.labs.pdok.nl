---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /apps/huischeck/logo.png
title: De Huischeck
output: leaflet
---

<script type="text/javascript" src="/assets/js/qrious.min.js"></script>
<script src="/assets/js/qr-code-with-logo.browser.min.js"></script>

## De Huischeck
Op deze pagina is het mogelijk om nadere informatie te krijgen over uw huis en buurt op basis van onder andere de PDOK Locatieserver.
De informatie over uw huis wordt zowel als tekst weergegeven, maar ook door middel van een QR-code die eenvoudig gescand kan worden.

*Vul in onderstaande zoekbalk uw adres(straatnaam+huisnummer, woonplaats) in om uw huis te checken!*

  <div>
    <input name="q" id="adres" value="">
    <button id='huischeck_now'>Check uw huis</button>
    <script type="text/javascript" src="/apps/huischeck/huischeck_fetch.js"></script>
  </div>

## Informatie over uw huis
Als u uw adres heeft ingevoerd, vindt u hieronder de informatie over uw huis:

<div><p id="AdressInfo"></p></div>

## QR-code
De onderstaande QR-code bevat de link naar de URI(Uniform Resource Identifier) van uw huis. Wanneer u deze code scant komt u uit op een pagina met informatie over uw huis uit de basisregistraties van het Kadaster.

<div id="qrcode"><canvas id="qrcodeCanvas"/></div>
<button id="printQRcode">Print de QR-code</button>

## SPARQL Query
Een andere manier om informatie van uw huis op te vragen is via SPARQL-queries. Dit kan
door uw adres in te vullen bij de <code>values</code> operatoren in de onderstaande query.

<query data-endpoint="https://data.pdok.nl/sparql"
       data-query-ref="huischeck_sparql.rq"
       data-output="geo">
</query>

## Uw huis in 3D
Het is ook mogelijk om uw huis en straat in 3D te bekijken op basis van de BAG. <a href="https://stories.triply.cc/kadaster/3d-bag/">[Klik hier]</a>
om naar de 3D viewer te gaan.
De onderstaande video laat zien hoe u de query kan aanpassen. Een aantal voorbeeld adressen staan [hier](https://data.labs.pdok.nl/apps/huischeck/queryResults100best.xlsx) en [hier](https://data.labs.pdok.nl/apps/huischeck/queryResults100bestUnique.xlsx).

<video width="1280" height="720" controls>
  <source src="3Dbag_voorbeeld.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
