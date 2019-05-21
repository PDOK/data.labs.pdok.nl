Dit is een Data Story in ontwikkeling. In de PLDN werkgroep Erfgoed hebben we een idee voor een data story beschreven. Deze willen we de komende weken stap voor stap gaan vullen.


Buitenplaatsen in Lisse - bv. Keukenhof: 

1. Joop (15 april). Query we plotten de rijksmonumenten van Lisse op een kaart (schatting is 34)
(steden landhuizen en parken, in de beschrijving staat buitenplaats). We tonen gallery view van de monumenten met beschrijving.
Daarna gaan we focussen op Keukenhof (https://cultureelerfgoed.nl/monumenten/511406)

de query:
PREFIX ceo: <https://linkeddata.cultureelerfgoed.nl/def/ceo#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX geosparql: <http://www.opengis.net/ont/geosparql#>

SELECT DISTINCT ?CHOi ?rijksmonumentnummer ?type ?functie ?gemeente ?naam ?geometrie (?CHOi as ?geometrieLabel)
WHERE {
    ?CHOi ceo:rijksmonumentnummer ?rijksmonumentnummer .
    ?CHOi ceo:heeftHoofdadres/ceo:heeftLocatieAdres/ceo:heeftGemeente ?gemeente .
    OPTIONAL {?CHOi ceo:heeftGeometrie/geosparql:asWKT ?geometrie .}
    OPTIONAL {?CHOi ceo:heeftNaam/ceo:naam ?naam .}
    OPTIONAL {?CHOi ceo:heeftOorspronkelijkeFunctie/ceo:heeftFunctieNaam/skos:prefLabel  ?functie .}
    OPTIONAL {?CHOi ceo:heeftType/ceo:heeftTypeNaam/skos:prefLabel ?type .}
  FILTER (CONTAINS(str(?gemeente), "Lisse"))
}
ORDER By ?rijksmonumentnummer


https://linkeddata.accept.cultureelerfgoed.nl/sparql

(wouter even vragen hoe de plaatjes erbij in de gallery view)

2. Henk/Hans (1 mei) query oud lisse, minutenplannen, eigenaren.  (lisse endpoint) 
Voor alle...bv. Eigenaren van de 20 monumenten
Inzoomen op keukenhof

Hans levert voorlopige query aan Erwin. 

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT distinct * WHERE {
   
  
  Graph <http://www.oudlisse.nl/test/2019>
  {
    ?uri a <http://data.oudlisse.nl/dev#Perceel>.
               ?uri <http://www.opengis.net/ont/geosparql#asWKT> ?geometry.
   ?eigendom a <http://data.oudlisse.nl/dev#Eigendom>.
   ?eigendom <http://data.oudlisse.nl/dev#vanPerceel> ?uri.
    ?eigendom <http://data.oudlisse.nl/dev#achternaam> ?achternaam
  }   
 

}


data/endpoint komt binnen een paar weken.

Plot rijksmonumenten op een minuutplan. 
Ellen stuurt WMTS van de minuutplan aan Hans. 
Hans kijkt of we dit er even via leaflet en dan in data story (zonder yasgui)
Wouter/Hans hoe resultaat in de data story te hangen.


3. Rein (15 april)  Query veldwerken erbij (pdok labs endpoint)
Welke percelen zijn al die tijd hetzelfde gebleven?
Voor keukenhof

Wouter vragen om dit eevn over te nemen.


4. Ellen/Henk/Richard (1 mei) Beeldbanken (rce en lisse/leiden)
https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=keukenhof&mode=gallery&view=horizontal
https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=511406&mode=gallery&view=horizontal&page=1&reverse=0
Op een kaart met popups… 
Of een gallery…
(mocht er een audio/video fragment erbij zijn...het kan)


https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=keukenhof&mode=gallery&view=horizontal
https://beeldbank.cultureelerfgoed.nl/alle-afbeeldingen/?q=511406&mode=gallery&view=horizontal&page=1&reverse=0
Lisse/ELO:
http://webservices.picturae.pro/mediabank/media?apiKey=c8bf841e-24cc-11e7-a2f6-4394354bd8f8&fq[]=search_t_collection:%22Vereniging%20Oud%20Lisse%22&q=Keukenhof&CC-O

Deze urls komen bij in de data van lisse (Hans), en kunnen dan wel in de visualisatie meegenomen worden.
(handwerk; filter de foto's; een stuk of 10 uitkiezen en URL opnemen)


5. Richard (15 april) Iets met Beroepen. De Beroepen van Lisse op de kaart. 
	- Beroepen structuur Lisse (organo-gram)
	- (Binnen Lisse kijken naar de variatie.  (alleen de sjieke beroepen?) Wat is de meest welgestelde straat/wijk van Lisse? Een plaat met kleur codering. (evt. Een vergelijking met amsterdam))

Richard levert ld bestandje aan Hans/Henk met query: Dinsdag
Hans/Henk: publiceren data: paar weekjes.


6. Richard (15 april)  kijkt erna...Historische krant artikelen? (is dat linked data?)
https://www.delpher.nl/nl/platform/results?query=keukenhof&coll=platform
https://kbresearch.nl/xportal/
Richard kijkt. Deadline: paar weekjes.


7. Wouter (1 mei) - Huidige data? (BAG?) (betrouwbaarheid door lisse)
http://nl.dbpedia.org/page/Keukenhof 
BAG
BRT 
Wikidata (via opnemen van BAG ids van Lisse in wikidata set)
Huidige CBS wijk en buurt gegevens laten zien…
(brouwerij/bier nog even naar kijken; klein duimpje)

Kom ik nog op terug.

8. Henk/Hans (1 mei) (met hulp van Wouter/Richard voor het tweede deel) Focus op persoon: starten bij een persoon (die meerdere percelen/buitenhuizen bezit in lisse)
(met een mooi fotootje uit de beeldbank van lisse)

Wie zijn de beroemde lissenaren?  Hebben die een portret in musea (collectie in amsterdamse musea; en dan gestandaardiseerd op personen, zodat je verder kan zoeken in bv. dbpedia)

Digitale Collectie Nederland. Europeana. Bijvoorbeeld: https://www.europeana.eu/portal/en/record/2021663/memorix_3f05695a_c460_9349_71d3_a5532ff69894.html?q=lisse#dcId=1553596917257&p=1
https://data.collectienederland.nl/search/?q=keukenhof
SPARQL endpoint op: https://data.collectienederland.nl/sparql en grafische schil op https://data.collectienederland.nl/snorql/ 
(Richard / Wouter gaan Ivo Zandhuis nog even navragen)

Richard gaat hier volgende week naar kijken.

Rijksmuseum data...

DBpedia query op beroemde personen...

9. Erwin-Wouter (15 mei)  Iets met namen en bloemennamen….(keukenhof is in de jaren 60 ontstaan)
Ludiek ideetje:
Voornamen met bloemen (fleur, bloem, madelief, …, misschien via voornamenbank)
Tulpen die benoemd zijn naar beroemdheden: is er een beroemde lissenaar met een buitenplaats waarna een tulp is genoemd, en dan doorlinken naar dbpedia europeana, etc...

Serpens (marieke) https://www.clariah.nl/projecten/research-pilots/serpens/serpens#abstract
Naturalis (leiden): https://www.nederlandsesoorten.nl/ 
https://www.wikidata.org/wiki/Property:P3405 


------------
Erwin vraagt Ed: welk NA setje mag hier niet ontbreken
In de dataset: gemeentegeschiedenis gebruiken
Rein/Erwin/Wouter: maken data story aan, kopieren tekst 

