---
layout: default
title: Demonstrators (apps)
---
<script src="https://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>

# Applicaties
Hier worden applicaties gedemonstreerd die in de Labs-omgeving worden ontwikkeld of getest.

## De BuurtBrowser (met FacetCheck)

In de CBS/Kadaster Datathon is de Wijken en Buurten 2016 omgezet naar Linked Data. Om de rijkheid van de Wijken en Buurten data te tonen hebben we FacetCheck ingezet. FacetCheck (ontwikkeld door Triply in samenwerking met het Kadaster) is een generieke tool voor het bekijken van Linked Data sets. Grasduinen in de data is mogelijk door het instellen van filters. Deze filters zijn eigenschappen in de dataset. 

[https://facetcheck.triply.cc](https://facetcheck.triply.cc)

We hebben voor Wijken en Buurten niet alle eigenschappen aangezet, maar het is relatief eenvoudig om eigenschappen aan en uit te zetten. Onderstaand een overzicht van de filters die aan staan, en die potentieel ook aangezet kunnen worden.

<script>
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false 
  });
} );
</script>

<div id="accordion">
  <h3><button>Klik om opties te tonen...</button></h3>
  <div>
    <p>
      <table>
        <thead>
          <tr>
            <th>Eigenschap</th>
            <th>Aan/uit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>provincie</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>stedelijkheid</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>afstandCafé</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>antillianen</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage antillianen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>attractieAfstand</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingen</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingenA</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage bedrijfsvestigingenA</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingenBF</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage bedrijfsvestigingenBF</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingenGI</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage bedrijfsvestigingenGI</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingenHJ</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage bedrijfsvestigingenHJ</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingenKL</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage bedrijfsvestigingenKL</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingenMN</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage bedrijfsvestigingenMN</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bedrijfsvestigingenRU</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage bedrijfsvestigingenRU</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bedrijfsmotorvoertuigen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bevolkingsdichtheid</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>bibliotheek</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bioscoopAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>bouwklasse-1999</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>bouwklasse2000+</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>brandweer</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>buitenpolikliniekAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>buitenschoolseopvangAfstand</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>cafetariumAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>ééngezinswoningen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>éénpersoonsHuishoudens</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>geboorte</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>geboortePercentage</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>gehuwd</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage gehuwd</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>gescheiden</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage gescheiden</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>hotelAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>huishoudenGrootte</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>huishoudens</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>huishoudensMetKinderen</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>huishoudensZonderKinderen</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>ijsbaan</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>inwoners</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>inwoners0-14</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage inwoners0-14</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>inwoners15-24</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage inwoners15-24</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>inwoners25-44</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage inwoners25-44</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>inwoners45-64</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage inwoners45-64</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>inwoners65+</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage inwoners65+</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>kinderdagverblijfAfstand</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>mannen</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>marokkanen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage marokkanen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>meergezinswoningen</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>motortweewielers</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>nietwesterseAllochtonen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage nietwesterseAllochtonen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>omgevingsadressendichtheid</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>ongehuwd</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>percentage ongehuwd</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>oppervlakte</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>oppervlakteLand</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>oppervlakteWater</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>oprit</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>overigeNietwesterseAllochtonen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage overigeNietwesterseAllochtonen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>overigeWinkelsAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>overstapstation</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>personenautos</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>personenautos0-5</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>personenautos6+</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>personenautosBenzine</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>personenautosBrandstofOverig</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>personenautosNaarOppervlakte</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>personenautosPerHuishouden</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>restaurantAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>sauna</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>sterftePercentage</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>supermarktAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>surinamers</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage surinamers</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>treinstation</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>turken</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage turken</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>verweduwd</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage verweduwd</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>vrouwen</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>warenhuisAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>water</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>westerseAllochtonen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>percentage westerseAllochtonen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>woningen</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>woz</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>ziekenhuisAfstand</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>zonnebank</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>zwembad</td>
            <td>❌</td>
          </tr>
        </tbody>
      </table>
    </p>
  </div>
</div>

## Demonstrator Energielabels
De volgende demonstrator is in het kader van de DSO Hackathon (25/26 okt. 2017) van de gemeente Amsterdam ontwikkeld. Met deze applicatie worden de energielabels per Bag object getoond. Naast deze open energielabel data set van Amsterdam wordt de BAG informatie en ook de ruimtelijke plannnen informatie op de kaart getoond.

[http://kadaster.semaku.com/energielabels/#/map](http://kadaster.semaku.com/energielabels/#/map)

## Common Sense demo
TNO heeft een faceted browser ontwikkeld waarmee een demo-applicatie is opgezet voor het Kadaster. Met deze webapplicatie wordt een kaartgebaseerde visualisatie van de vergunningenafhandeling in Eindhoven gedemonstreerd.

- Het resultaat van de demo is hier te zien: [http://tnopresenter.nl/Vergunningen](http://tnopresenter.nl/Vergunningen)
- TNO biedt in een presentatie een overzicht van de doelen en functionaliteit, op [http://www.tnopresenter.nl/cs](http://www.tnopresenter.nl/cs)
- Op YouTube is een demonstratie te zien:
<iframe width="560" height="315" src="https://www.youtube.com/embed/EGTMvd5jYd4" frameborder="0" allowfullscreen></iframe> 

## Proeftuin Omgevingswet Kadaster
**Voor vragen en/of opmerkingen met betrekking tot één van onderstaande demo-omgevingen, kunt u een e-mail sturen naar <omgevingswet@kadaster.nl>**

### Pilot Soest 2.0
*In samenwerking met de gemeenten Emmen, Nijmegen en Soest en informatiehuizen Geluid, Afval, Bouw en Ruimte – oktober 2017 t/m (eindatum nog onbekend)*

Dit is een preview van een demo-omgeving welke wij nu nog volop aan het ontwikkelen zijn. Al lerende richten wij ons hiermee op de volgende doelen:
* Het vooraf toetsen van een vergunning aanvraag aan bestaande regelgeving voor het plaatsen van een bijgebouw
* Het bieden van ondersteuning bij het maken van een keuze voor een geschikte vestigingslocatie

[http://omgevingsplanner.kadaster.semaku.com/](http://omgevingsplanner.kadaster.semaku.com/) 

### Pilot Starten Bierbrouwerij

*In samenwerking met de gemeenten Emmen en Nijmegen – april t/m september 2017*
 
Gemeenten hebben veel vragen over de toekomstige informatievoorziening in het kader van de Omgevingswet. Welke informatie vind je dan waar? Wat zijn de grote verschillen ten opzichte van de situatie nu? Het is lastig om zonder concreet of illustratief voorbeeld antwoord te geven op bovenstaande vragen. Naar aanleiding van eerder onderzoek van de gemeente Emmen naar de informatiebehoefte in vergunningen processen (aan de hand van ‘bouw’ gerelateerde cases), is in deze pilot een simulatie gemaakt hoe in een gerelateerde case relevante informatie bij elkaar kan worden gebracht en op eenvoudige wijze kan worden gepresenteerd. 
 
De pilot heeft een demonstrator opgeleverd van relevante informatie voor de use case ‘starten van een bierbrouwerij’. De gebouwde demonstrator ‘Zoek bedrijfslocatie’ is zodanig ontwikkeld dat ook voor andere soorten bedrijven de geschiktheid van een potentiële bedrijfslocatie kan worden onderzocht. De demonstrator is nog in ontwikkeling. Heeft u interesse om bij te dragen? We horen graag van u via bovengenoemd e-mail adres. 

Klik op onderstaande link om meer over deze pilot te lezen en de demo-omgeving te verkennen. 

[http://kadaster.semaku.com/ProeftuinOK/ZoekBedrijfslocatie/?](http://kadaster.semaku.com/ProeftuinOK/ZoekBedrijfslocatie/?)

### Beeldende pilot
*In samenwerking met de Rijksdienst voor het Cultureel Erfgoed (RCE) en het Interprovinciaal Overleg (IPO) – april t/m september 2016*

De Omgevingswet vraagt om beschikbaarheid van informatie uit diverse informatiedomeinen. Informatie die in de vorm van Informatieproducten wordt geleverd door Informatiehuizen. Vijf Informatiehuizen hebben in deze pilot met elkaar samengewerkt om gemeenschappelijke uitdagingen te leren kennen. Een van de resultaten is een demonstrator die een indicatie geeft hoe een integraal beeld kan ontstaan op basis van informatie uit diverse informatiehuizen. In deze pilot werkten het Informatiehuis Cultureel Erfgoed (RCE), de Informatiehuizen Natuur en Externe Veiligheid (IPO) en de Informatiehuizen Ruimte en Bouw (Kadaster) samen.  

In de demonstrator is het mogelijk om een vraag te beantwoorden met gebruikmaking van informatie uit meer domeinen tegelijkertijd. De use case wil ingaan op veelverwachte vragen van initiatiefnemers over een bepaald pand: “Wat is dat” en “Mag dat”. Dus onder meer antwoord geven op de vraag welke bestemming een pand heeft en wat er in dat pand is toegelaten. Dit heeft geresulteerd in de demo-omgeving met als titel: “Wasda Magda”.  

Klik op onderstaande link om de demo-omgeving te verkennen. 

[https://kadaster.appnetwork.nl/](https://kadaster.appnetwork.nl/)
