---
layout: story
title: Informatie Kwaliteit
logo: /stories/informatie-kwaliteit/logo.jpg
endpoint: https://data.labs.pdok.nl/sparql
output: leaflet
---

# Informatie Kwaliteit


De kracht van Linked Data wordt vaak aangetoond door middel van het bevragen van meerdere datasets, tegelijkertijd. 
Hier wordt gebruik gemaakt van 'interlinking' van datasets. Hierbij is het niet alleen mogelijk om dataset uit de PDOK te interlinken,
maar met alle linked data wat achter een SPARQL-endpoint gepubliceerd is, is dit mogelijk. 
De Kwaliteit van datasets die op PDOK ontsloten worden is van het grootste belang voor het Kadaster. 
Veel mensen worden ingezet om juist die kwaliteit te waarborgen. Echter, is weinig inzicht in de curatie van data van derden. 
In dat opzicht, is interliken met linked data van derden risico-vol.


Veelal moet men roeien met de riemen die zij hebben. Gelukkig bied Linked Data erg sterke riemen. Door middel van specifieke SPARQL-queries te gebruiken,
kunnen we alle nodige informatie opvragen om kwaliteits indicatoren te meten. Als voorbeeld nemen we een CBS dataset, uit 2015, over alle buurten in Nederland. 
Voor iedere buurt in Nederland wordt ook de bijbehoordende geometrie getoond door middel van de attribuut: [hasGeometry](http://www.opengis.net/ont/geosparql#hasGeometry).
Deze geometry kan je vervolgens op verschillende manieren noteren, zowel als [WKT](http://www.opengis.net/ont/geosparql#wktLiteral), als [GML](http://www.opengis.net/ont/geosparql#gmlLiteral). 
Als kwaliteits indicatie kunnen we zeggen dat dit op een uniforme manier gedaan moet worden. 
Kijk bijvoorbeeld naar de volgende query. Hier worden alle geometrieën opgevraagd en gekeken welke notatie ze gebruiken.


<div data-query data-query-sparql="spatialuniformity.rq">
</div>


De informatie die deze query ons geeft is dat het aantal geometrieën in wkt notatie, gelijk is aan het totale aantal geometrien in de dataset. 
In andere woorden, de ruimtelijke representatie van de buurten is uniform in de dataset. Door middel van een substantieel aantal van zulke kwaliteitsindicatoren 
te meten, kunnen we toch inzicht krijgen in de kwaliteit van de dataset. Met deze inzicht kunnen we vervolgens verantwoord interlinken met derden.


Maar er is meer mogelijk met het gebruik van SPARQL. Als er tussen de resultaten van de vorige query wel een geometry zat in de gml notatie, konden we de respectievelijke buurt er gelijk uit prikken. 
We kunnen niet alleen een waarde knopen aan de kwaliteits indicatoren, maar ook aan de instances (of in dit geval buurten) die een negatieve invloed op die waarde hebben, naar boven halen. Om deze instances te kunnen onthouden, gebruiken we de property [flags](http://data.labs.pdok.nl/quality/def#flags). 
Laten we een andere kwaliteits indicator als voorbeeld nemen. De kwaliteits metriek [surfacearea](https://data.labs.pdok.nl/quality/id/surfacearea) verteld ons dat we verwachten dat elke buurt in de cbs dataset, ook gebruik maakt van de property [oppervlakte](https://data.pdok.nl/cbs/2015/vocab/oppervlakte).
Als we de SPARQL-endpoint vragen om de metriek te bescrijven krijgen we het volgende terug. 


<div data-query="" data-query-sparql="surfaceareadescribe.rq">
</div>


We zien nu dat deze metriek een vlag plaatst bij een aantal buurten. 
Ieder van deze heeft de property [oppervlakte](https://data.pdok.nl/cbs/2015/vocab/oppervlakte) niet. 
Als er nu een applicatie zou zijn die gebruik maakt van deze property, is het handig om te weten bij welke instanties dit niet zal werken. 
We kunnen nu dus makkelijk achterhalen tot in hoeverre de data compleet is, en welke instanties minder bruikbaar zijn.


Om de informatie, die de kwaliteitsmetingen geven, ook bruikbaar te maken voor de gebruikers van PDOK, is het allemaal in een graaf gestopt en gepubliceerd. 
Voor het voorbeeld met de CBS data, is de graaf [https://data.labs.pdok.nl/quality](https://data.labs.pdok.nl/quality) aangemaakt. 
Hierin staat de dataset met alle metingen, definities en vlaggen. Zie hieronder een visuele representatie van de dataset. 


![alt text][logo]


Gebruikers kunnen dus niet alleen de waardes van de metingen bekijken, maar ook wat ze betekenen.


[logo]: graph-model.png "Quality Measurement Graph"
