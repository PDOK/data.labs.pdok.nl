---
layout: story
title: BGT ID
logo: /stories/KwaliteitBGTBAG/BGT.jpg
endpoint: https://triply.eculture.labs.vu.nl/sparql
output: leaflet
---

Deze datastory laat zien...

## Identifiers...
Opmerking: Altijd de actuele voorkomens; in de BGT: Die hebben een lege ‘registratieDatumVervallen’.

Query 1: Welke BAG pand IDs met als status “Pand in Gebruik” en “Pand in Gebruik – Niet ingemeten” komen we niet tegen in de BGT PandID met status “Bestaand”

<div data-query
     data-query-endpoint="https://data.pdok.nl/sparql"
     data-query-sparql="BAG-BGT.rq"></div>

Query 2: En omgekeerd: Welke BGT PandIDs met status “Bestaand” komen we niet tegen in de BAG (met beide statusen), met daarbij een onderscheid tussen herkenbare dummy waardes (vier willekeurige en dan 12 nullen: ????000000000000), en niet dummy waardes.


Query 3: Geef me de BAG pandIDs die meer dan 1 keer voorkomen in de BGT. (dat mag namelijk niet) 
Query 4. Geef mij de BGT panden waar bij het bagpandid op positie 5 en 6 geen 10 staat. 

Query 5. De bronhoudercode geeft de gemeente weer; het id van het pand (eerste vier cijfers) moet beginnen met deze bronhouder code: Geef mij alle BGT panden waarbij de identifier niet overeenkomt met de verwachte bronhoudercode.



Query 6: 
Op basis van de resultaten van bij 1: er is een mismatch; kunnen we dan een suggestie doen van het bijbehorende BAG pand of BGT pand.

6A. Situatie een BGT pand zonder (goed) BAG pand ID. Daarvoor een vervolg query: geef mij dichtstbijzijnde BAG PandID die niet voorkomt in de BGT.
	(uitkomst bij use case 1: is een lijst met BAG Panden ID, en daar doen we dan een qeoquery op)

6B. Situatie: een BAG pand id zonder (goed) BGT pand id….twee subsituaties; onbekend BGT pand ID, of Dummy waarde. 







# Statistieken Linked Data BGT

Statistieken over het de naar Linked Data omgezette deel van de BGT.

## Aantal grafen

Het aantal grafen in de volledige dataset.

<div data-query data-query-sparql="stat-graphs.rq"></div>

## Aantal triples

Het aantal uitspraken (triples) in de volledige dataset.

<div data-query data-query-sparql="stat-triples.rq"></div>

## Concepten

Een overzicht van de concepten/klassen, met het aantal instanties per
concept.

<div data-query data-query-sparql="stat-concepten.rq"></div>

## Eigenschappen

Een overzicht van de eigenschappen, met het aantal uitspraken per
eigenschap.

<div data-query data-query-sparql="stat-eigenschappen.rq"></div>
