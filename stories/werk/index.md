---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/werk/logo.jpg
title: LISA werkgelegenheidsregister
published: false
---

# Werkgelegenheidsinformatie combineren uit verschillende bronnen

Het CBS verzamelt belangrijke informatie die ons een beeld geeft van de stand van zaken op het gebied van werkgelegenheid in Nederland. Naast het CBS verzamelt Stichting LISA ook gegevens over de werkgelegenheid in Nederland, uit enquêtes en schattingen. De stichting publiceert een gelijknamige dataset LISA die op verschillende bestuurlijke niveaus (gemeente, COROP, provincie, landelijk) gegevens over werk en werkgelegenheid aggregeert.

De gegevens zijn [hier](https://www.lisa.nl/data/gratis-data/overzicht-lisa-data-per-gemeente) te vinden - voor deze data story zijn alle gemeentelijke gegevens voor de jaren 2012 - 2016 gebruikt.

## LISA: Banen per vestiging
De gratis versie van de LISA dataset bevat het aantal banen en het aantal vestigingen per gemeente. Met behulp van een kaart kunnen we de verschillen in het aantal banen per vestiging visualiseren, met in donker lage dichtheid en in lichtgeel de hoge dichtheid. Duidelijk zichtbaar zijn de sterker verstedelijkte gebieden in hogere dichtheid en de periferie van Nederland in lagere dichtheid:

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="banen_per_vestiging.rq" data-output="geo"></query>

## CBS arbeidsparticipatie
We kunnen dit vergelijken met het beeld dat het CBS geeft voor de arbeidsparticipatie per gemeente:

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="arbeidsparticipatie_cbs.rq" data-output="geo"></query>
# Gecombineerde cijfers voor krimpgebieden
De cijfers achter deze kaartbeelden kunnen we ook voor specifieke gebieden visualiseren, zoals voor de krimpgebieden. We gaan hier bovendien cijfers uit LISA combineren met cijfers van het CBS, door voor 2016 het aantal LISA banen te delen door het landoppervlak dat we uit de wijken en buurten dataset verkrijgen. We kijken hier naar de regio Oost-Groningen, maar de query is eenvoudig aan te passen om in te zoomen op een andere regio:

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="krimp.rq" data-output="geo"></query>
