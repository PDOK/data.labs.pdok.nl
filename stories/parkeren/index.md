---
layout: story
title: Parkeren in Nederland
logo: /stories/parkeren/logo.jpg
published: false
---

Er wordt heel wat geparkeerd in Nederland, met wisselend succes.  Waar
ligt de dichtstbijzijnde paarkeergelegenheid en hoe kom ik daar?  Veel
mensen vertrouwen op hun autonavigatie of de grote zoekmachines om
deze vraag te beantwoorden, maar we vergeten wel eens dat er ook
officiële registraties zijn van de parkings in Nederland: bijvoorbeeld
die van de Basisregistratie Topografie (BRT) en de Rijksdienst voor
het Wegverkeer (RDW).

We kunnen al snel concluderen dat er verschillen in data zitten tussen
BRT en RDW, allereerst op aantallen:

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="parking_aantal.rq" data-output="geo"></query>

En ten tweede is het evident dat er verschillen zijn als we de
parkings (BRT in blauw, RDW in groen) op een kaartje tonen:

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="parkeren.rq" data-output="geo"></query>

Maar welke parkeergelegenheden in de data van het RDW zitten niet in
de BRT?  Een eenvoudige proef is te kijken welke RDW geometrieën
binnen de BRT vallen als het gaat om de parkeergelegenheden.
Opvallend is dat deze overlap maar 26 gevallen kent (zoom in om
details ter plaatse te bekijken):

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="rdw_parkings_binnen_brt.rq" data-output="geo"></query>

Maar: deze bevraging is wat te naïef.  We kunnen beter controleren
welke RDW parkings binnen een straal van 50 meter van een BRT parking
liggen, dit zijn er 177 (zie ook de tabelweergave):

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="rdw_parkings_binnen_straal_brt.rq" data-output="geo"></query>

Dus tenslotte de records uit de RDW die geen evenknie uit de BRT
binnen 50 meter kennen:

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="parking_rdw_niet_in_brt.rq" data-output="geo"></query>

We lichten één geval uit: De twee RDW parkeergarages bij het
gecombineerde winkelcentrum, huizenblok en parkeergarage “Triade” in
Assen (de twee bovenin de kaart):

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="parking_rdw_niet_in_brt_triade.rq" data-output="geo"></query>

Uit [Google street view op beide
parkeergarages](https://www.google.nl/maps/@52.9980688,6.5592577,3a,50.4y,129.37h,87.78t/data=!3m9!1e1!3m7!1sV9qjDtswsB2u2w7rmlU2dQ!2e0!7i13312!8i6656!9m2!1b1!2i37)
blijken de verschillende functies die de gebouwen in zich verenigen.
