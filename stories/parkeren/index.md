---
layout: story
title: Parkeren in Nederland
---

<!-- regex voor het vervangen van de blank nodes:
find: _:(.+[0-9])\s<
replace with: <http://data.labs.pdok.nl/dataset/rdw-parkeren/id/\1> <

Toegevoegd aan dataset:
```sparql
prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
prefix geo: <http://www.opengis.net/ont/geosparql#>
insert {
    graph <http://data.labs.pdok.nl/dataset/rdw-parkeren> {
		    ?s a <http://linkedgeodata.org/ontology/Parking> ;
    	      geo:asWKT ?wktPoint .
	}
}

where { 
    graph <http://data.labs.pdok.nl/dataset/rdw-parkeren> {
		    ?s a <http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing> ;
       	  	wgs84:long ?long ;
     		    wgs84:lat ?lat .
        bind(strdt(concat("POINT(", ?long, " ", ?lat, ")"), geo:asWKT) as ?wktPoint)
    }
}
```
-->

Er wordt heel wat geparkeerd in Nederland, met wisselend succes. Waar ligt de dichtstbijzijnde paarkeergelegenheid en hoe kom ik daar? Veel mensen vertrouwen op hun autonavigatie of de grote zoekmachines om deze vraag te beantwoorden, maar we vergeten wel eens dat er ook officiële registraties zijn van de parkings in Nederland: bijvoorbeeld die van de Basisregistratie Topografie (BRT) en de Rijksdienst voor het Wegverkeer (RDW).

We kunnen al snel concluderen dat er verschillen in data zitten tussen BRT en RDW, allereerst op aantallen:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="parking_aantal.rq">
</div>

En ten tweede is het evident dat er verschillen zijn als we de parkings (BRT in blauw, RDW in groen) op een kaartje tonen:

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="parkeren.rq"
     data-query-output="leaflet">
</div>

Maar welke parkeergelegenheden in de data van het RDW zitten niet in de BRT? Een eenvoudige proef is te kijken welke RDW geometrieën binnen de BRT vallen als het gaat om de parkeergelegenheden. Opvallend is dat deze overlap maar 26 gevallen kent (zoom in om details ter plaatse te bekijken):

NB de query kan even tijd nodig hebben om te voltooien.
<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="rdw_parkings_binnen_brt.rq"
     data-query-output="leaflet">
</div>

Maar: deze bevraging is wat te naïef. We kunnen beter controleren welke RDW parkings binnen een straal van 50 meter van een BRT parking liggen, dit zijn er 177 (zie ook de tabelweergave):

NB de query kan even tijd nodig hebben om te voltooien.
<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="rdw_parkings_binnen_straal_brt.rq"
     data-query-output="leaflet">
</div>

Dus tenslotte de records uit de RDW die geen evenknie uit de BRT binnen 50 meter kennen:

NB de query kan even tijd nodig hebben om te voltooien.
<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="parking_rdw_niet_in_brt.rq"
     data-query-output="leaflet">
</div>

We lichten één geval eruit:
De twee RDW parkeergarages bij het gecombineerde winkelcentrum, huizenblok en parkeergarage "Triade" in Assen (de twee bovenin de kaart):

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="parking_rdw_niet_in_brt_triade.rq"
     data-query-output="leaflet">
</div>

Uit [Google street view op beide parkeergarages](https://www.google.nl/maps/@52.9980688,6.5592577,3a,50.4y,129.37h,87.78t/data=!3m9!1e1!3m7!1sV9qjDtswsB2u2w7rmlU2dQ!2e0!7i13312!8i6656!9m2!1b1!2i37) blijken de verschillende functies die de gebouwen in zich verenigen.