---
endpoint: https://data.labs.pdok.nl/sparql
output: leaflet
layout: story
logo: /stories/transacties/logo.jpg
published: false
title: Hipheidsindex
---

# Woningtransacties en de onofficiële hipheidsindex

[disclaimer: deze datastory maakt gebruik van transactiegegevens
vanuit het Kadaster (april 2017).  Deze is geaggregeerd en tijdelijk
beschikbaar gesteld zonder enige vorm van garantie op de kwaliteit van
de data]

Er valt veel af te lezen aan de hoeveelheid transacties in een bepaald
gebied.  In gebieden met veel vraag naar woningen, worden veel panden
met woningfunctie verhandeld.  Ter illustratie hier twee voorbeelden:
het aantal transacties per buurt voor de gemeente Amsterdam en de
gemeente Delfzijl in 2016.  Delfzijl is één van de gemeentes in een
krimpgebied.

De data is samengesteld uit een combinatie van
woningtransactiegegevens van het Kadaster en de buurtenindeling van
het CBS.  De thematische kaart geeft een gradueel beeld met uitersten
van diep rood (0 transacties) tot felgroen (100 transacties)

# Gemeente Amsterdam

<div data-query
     data-query-sparql="amsterdam-hipheid.rq">
</div>

# Gemeente Delfzijl

Hieronder is het aantal woningtransacties afgezet tegen dezelfde maat
als die voor Amsterdam is toegepast (een bereik tussen 0 en 100
transacties per buurt).  Wat duidelijk hieruit blijkt, is dat er
weinig woningverkopen zijn geweest in vergelijking met een grote stad.

<div data-query
     data-query-sparql="delfzijl-hipheid.rq">
</div>

# Andere gemeentecode?

Je kan deze vraag natuurlijk ook stellen voor een andere gemeente.  Je
kan de bijbehorende gemeentecode opzoeken in de onderstaande query:

<div data-query
     data-query-output="table"
     data-query-sparql="gemeente-lookup.rq">
</div>
