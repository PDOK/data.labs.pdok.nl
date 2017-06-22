---
layout: story
title: Hoogteklassen voor de BRT
logo: brt-hoogteklasse/332px-Onze_Lieve_Vrouwetoren.jpg
endpoint: https://data.pdok.nl/sparql
---

# Het probleem met de BRT hoogteklassen

De BRT of [Basisregistratie Topografie](https://brt.basisregistraties.overheid.nl) is een belangrijke dataset. Het is de meest gebruikte dataset om achtergrondkaarten te genereren die betrouwbare (want overheids-gegenereerde) informatie bevatten. 

Helaas weten we ook dat er nog enkele zaken niet volledig correct in de basisregistratie zijn opgenomen. Zo lijkt er tegenstrijdige informatie over de hoogte van gebouwen in te staan. Gebouwen hoger dan 35 meter zouden moeten worden aangemerkt als '[hoogbouw](https://brt.basisregistraties.overheid.nl/top10nl/doc/collectie/Hoogteklasse_gebouw)', maar het aantal hiervan in de BRT is opvallend laag:

<div data-query data-query-sparql="hoogbouw.rq"></div>

# 'Anders' geklassificeerde hoogbouw
Is er echt niet meer hoogbouw in Nederland? Toch wel: er zijn tamelijk veel gebouwen met een hoogte groter dan 35 meter, die niet zijn aangemerkt als hoogbouw: 
<div data-query data-query-sparql="laagbouw-maar-hoogbouw.rq" data-query-output="leaflet"></div>

Slechts twee! Waar is dan de overige hoogbouw?

Het blijkt dat we over veel gebouwen in Nederland helaas nog niet over hoogte-informatie beschikken, bijvoorbeeld de Onze-Lieve-Vrouwetoren in Amersfoort. Uit [Wikipedia](https://nl.wikipedia.org/wiki/Onze_Lieve_Vrouwetoren_(Amersfoort)) weten we dat deze 98,33 meter hoog is, maar omdat in de BRT de hoogte ontbreekt, wordt deze gedocumenteerd als laagbouw:

<div data-query data-query-sparql="onze-lieve-vrouwetoren.rq" data-query-output="leaflet"></div>
