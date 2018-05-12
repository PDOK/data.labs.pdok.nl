---
layout: default
title: Zoeken in metadata
---
# Zoek naar dataset op begrip
Geef een begrip op om een bijbehorende dataset te vinden

<input id="searchbox">*geef een term op om te zoeken*

### Vertrouwde data
<div id="trusted">
  <table id="trustedResults">
    <thead>
      <tr>
        <th>term</th>
        <th>dataset</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

### Overige data
<div id="misc">
  <table id="miscResults">
    <thead>
      <tr>
        <th>term</th>
        <th>dataset</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="/assets/js/jquery.ba-throttle-debounce.js"></script>
<script src="/assets/js/zoeken.js"></script>

## Waarom deze toepassing?
Een van de obstakels voor het (her)gebruik van data is dat data vaak moeilijk vindbaar is voor potentiële gebruikers, of zelfs helemaal niet vindbaar is. Veelal zijn er geen of beperkte mogelijkheden om makkelijk data te zoeken. Daarnaast zijn potentiële gebruikers die weinig kennis hebben over geodata vaak niet bekend met datasets als de BAG of BRT, terwijl deze juist wel bekend zijn binnen de geo-wereld. Potentiële gebruikers zoeken daarom niet naar data op dataset, maar op de informatie waar zij behoefte aan hebben. Iemand die informatie zoekt over adressen zal niet snel zoeken op de BAG-dataset, maar bijvoorbeeld op ‘adressen’ of ‘adresgegevens’. 

Dit obstakel geldt ook zeker voor linked data: als in de toekomst steeds meer datasets als linked data worden ontsloten, zal dit ertoe leiden dat gebruikers steeds vaker data moeten zoeken die verspreid staan over meerdere heterogene datasets. In de eerste plaats zal een gebruiker moeten weten van het bestaan van de verschillende datasets, alvorens deze te kunnen vinden. In de tweede plaats, om linked data vervolgens te kunnen bevragen, moeten gebruikers zich bewustzijn van de structuur van de dataset en de termen die gebruikt zijn in de vocabulaires. Dit kan problematisch zijn voor de implementatie van linked data op grote schaal; hoe meer datasets gelinkt zijn, des te meer kennis zal de gebruiker moeten hebben van al die verschillende datasets.  

Op den duur kan dit ervoor zorgen dat er een kloof ontstaat tussen gebruikers en datasets. Dit doet af aan de principes van linked data, omdat linked data juist bedoeld is om de bruikbaarheid en vindbaarheid van data te vergroten. Om deze kloof te kunnen overbruggen is een simpele en intuïtieve zoekmachine nodig. Deze zoekmachine moet door elke gebruiker, ongeacht zijn of haar kennis, gebruikt kunnen worden om linked data vocabulaires te kunnen bevragen. Daarnaast moet de gebruiker doormiddel van de zoekmachine in staat zijn linked datasets te vinden, zonder kennis te hebben over het bestaan van de dataset of de data die het bevat.  

Een prototype van een dergelijke zoekmachine is hieronder gemaakt. Met deze zoekmachine kan een gebruiker op begrip zoeken in de vocabulaires van kadaster datasets (Vertrouwde data) en externe datasets (Overige data).  

Stel dat iemand wilt weten waar hij data kan vinden over adressen, door ‘adres’ op te geven als zoekterm is te zien dat ‘adres’ terugkomt in drie klassen van de BAG. Zo kan de gebruiker zien dat de er data over adressen te vinden is in de BAG, zonder dat de gebruiker weet dat de BAG bestaat of hoe adressen in het datamodel van de BAG worden weergegeven. 

Een ander voorbeeld is dat iemand op zoek is naar data over spoorwegen. Door ‘spoor’ als zoekterm te gebruiken, is te zien dat zowel de BAG als de BRT data bevat over spoorwegen. De gebruiker heeft nu al twee datasets gevonden zonder te hoeven weten wat de BAG of BRT is, of welke data zij bevatten. 

Door te zoeken op ‘gemeente’ is te zien dat zowel de BRT als de BRK informatie bevat over gemeenten. Ook is te zien dat de BRT data bevat over gemeentehuizen, terwijl men zocht op enkel gemeente. Zo kan men ook aanvullende data vinden over het onderwerp dat men zoekt. 