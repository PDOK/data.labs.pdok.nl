---
layout: story
title: Linkset BAG-BRK
---
# De 'linkset' BAG-BRK

## INSPIRE AR3NA
Het Kadaster participeert in een initiatief om INSPIRE data beschikbaar te krijgen als Linked Data, en de meerwaarde van deze data aan te tonen. De lead van dit project ligt bij het bedrijf [Netage](http://netage.nl/), dat een demonstrator zal gaan realiseren om het nut van Linked Data voor hulpdiensten aan te tonen.

Een kernelement in deze demonstrator is het gebruik van de koppeling tussen panden en percelen. Voor de brandweer is het van belang te weten welke nabijgelegen panden zich bij een brand bevinden, op welke percelen deze liggen, wie de eigenaar hiervan is en welke belendende percelen naast de brandhaard liggen. Het Kadaster heeft hiertoe een koppeltabel gepubliceerd die aldaar intern bekend staat onder LKO: Locatie Kadastraal Object. Het vormt de koppeling tussen [BAG nummeraanduidingen](https://bag.basisregistraties.overheid.nl/query/model#Nummeraanduiding) en BRK perceels- en appartementsrechtsregistraties.  

## Linkset
De LKO koppeltabel van BAG-nummeraanduidingen naar BRK percelen is vertaald naar een koppeling tussen URI's uit de Linked Data publicatie van de basisregistraties BAG en BRK, zoals die zijn gepubliceerd op [https://bag.basisregstraties.overheid.nl](https://bag.basisregstraties.overheid.nl) en [https://brk.basisregistraties.overheid.nl](https://brk.basisregistraties.overheid.nl). Door de identificatiecodes uit de LKO koppeltabel te vertalen naar URI's, kunnen deze vanuit iedere plek op aarde worden geraadpleegd. De resulterende linkset BAG-BRK is gepubliceerd door het research-team van het PDOK dataplatform, op [https://data.labs.pdok.nl](https://data.labs.pdok.nl).

## SPARQL
De BAG-BRK linkset is gepubliceerd in een andere RDF store dan die waarmee de BAG en BRK zelf zijn gepubliceerd. Normaliter is dit direct een data-integratievraagstuk, maar dit is niet het geval met Linked Data. Door het SPARQL-mechanisme is data op te vragen uit willekeurige andere SPARQL-endpoints, via het zogenaamde 'federated query'-principe.

## Voorbeeld
Onderstaand een overzicht van een serie nummeraanduidingen en gerelateerde percelen aan de Oranjekade te Haarlem. De meest noordelijke marker betreft een 'outlier': hier zit mogelijk iets fout in de linkset.

<div data-query data-query-endpoint="https://data.pdok.nl/sparql" data-query-sparql="percelen-en-nummeraanduidingen.rq" data-query-output="leaflet" data-showQuery></div>
