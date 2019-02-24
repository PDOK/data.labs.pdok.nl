---
endpoint: https://data.acceptatie.pdok.nl/sparql/rvo-el
layout: story
logo: /stories/rvo-el/logo.jpg
output: leaflet
published: false
title: RVO Energielabels Story
---

# Energielabels voor kantoorgebouwen
Utiliteitsgebouwen met een kantoorfunctie (in de BAG) moeten verplicht energiezuiniger gemaakt worden. Vanaf 1 januari 2023 geldt energielabel-C als minimumeis. [Zie hier voor meer](http://www.energievastgoed.nl/dossiers/energielabel-c-kantoren/?doing_wp_cron=1548256930.0148301124572753906250).

Omdat het een uitdaging is om dit voor hele grote gebieden te bepalen zullen we inzoomen op een kleine gemeente: [Zeewolde](http://bag.basisregistraties.overheid.nl/bag/id/woonplaats/1075).

We beginnen met het verkrijgen van een overzicht van de verblijfsobjecten met een kantoorfunctie in de BAG.

<query data-config="https://data.labs.pdok.nl/stories/rvo-el/#query=PREFIX%20skos%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0APREFIX%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0APREFIX%20brt%3A%20%3Chttp%3A%2F%2Fbrt.basisregistraties.overheid.nl%2Fdef%2Ftop10nl%23%3E%0APREFIX%20dct%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20epbd%3A%20%3Chttp%3A%2F%2Fenergielabels.gebouwen.overheid.nl%2Fdef%2Fepbd%23%3E%0ASELECT%20%3Fenergielabel%20(count%20(%3Fvbo)%20as%20%3Faantal)%0AWHERE%20%7B%0A%20%20%7B%0A%20%20%20%20SELECT%20%3Fenergielabel%20%3Fvbo%0A%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20bind%20(%220050%22%20as%20%3Fgemeentecode)%20%23%20Zeewolde%0A%20%20%20%20%20%20service%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fsparql%3E%20%7B%0A%20%20%20%20%20%20%20%20graph%20%3Chttp%3A%2F%2Fbrt.basisregistraties.overheid.nl%2Fid%2Fdataset%2Ftop10nl%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fgem%20brt%3Anummer%20%3Fgemeentecode%20.%0A%20%20%20%20%20%20%20%20%20%20%3Fgem%20brt%3AnaamOfficieel%20%3Fgemeentenaam%20.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20service%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fsparql%3E%20%7B%0A%20%20%20%20%20%20%20%20graph%20%3Chttp%3A%2F%2Fdata.pdok.nl%2Flinksets%2Fwoonplaats2gemeente%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fwoonplaats%20dct%3AisPartOf%20%3Fgem%20.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20service%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fsparql%3E%20%7B%0A%23%20%20%20%20%20%20%20%20bind(%22Zeewolde%22%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20%20%20%3Fvbo%20bag%3Ahoofdadres%2Fbag%3AbijbehorendeOpenbareRuimte%2Fbag%3AbijbehorendeWoonplaats%20%3Fwoonplaats%20.%0A%20%20%20%20%20%20%20%20%3Fwoonplaats%20bag%3AnaamWoonplaats%20%3FwoonplaatsNaam%20.%0A%20%20%20%20%20%20%20%20graph%20%3Fvoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fvbo%20a%20bag%3AVerblijfsobjectKantoorfunctie%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rdfs%3AisDefinedBy%20%3Fvoorkomen%20.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3Fvoorkomen%20bag%3AbeginGeldigheid%20%3Fbegindatum%20.%0A%20%20%20%20%20%20%20%20filter%20(%3Fbegindatum%20%3C%3D%20now())%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fvoorkomen%20bag%3AeindGeldigheid%20%3Feinddatum%20.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20optional%7B%0A%20%20%20%20%20%20%20%20%3Fgebouw%20epbd%3AheeftAdresseerbaarObject%20%3Fvbo%20.%0A%20%20%20%20%20%20%20%20%3Fgebouw%20epbd%3Aenergieprestatie-indicator%2Fskos%3Anotation%20%3Fenergielabelletter%0A%20%20%20%20%20%20%7D%20.%0A%20%20%20%20%20%20bind%20(%20COALESCE(%20%3Fenergielabelletter%2C%20%22geen%22)%20As%20%3Fenergielabel)%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20%23%20Zonder%20deze%20union%20heb%20je%20eigenlijk%20niet%20het%20complete%20plaatje%2C%20omdat%20er%20adresseerbare%20objecten%20zijn%0A%20%20%23%20die%20niet%20met%20de%20BAG%20gekoppeld%20zijn.%20Dit%20zijn%20er%20echter%20vrij%20weinig%2C%20en%20het%20vertraagt%20de%20query%20enorm.%0A%20%20%0A%23%20%20UNION%0A%23%20%20%7B%0A%23%20%20%20%20SELECT%20%3Fenergielabel%20%3Fvbo%0A%23%20%20%20%20WHERE%20%7B%0A%23%20%20%20%20%20%20%3Fgebouw%20a%20epbd%3AUtiliteitsgebouw%20%3B%0A%23%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20epbd%3Aenergieprestatie-indicator%2Fskos%3Anotation%20%3Fenergielabel%20%3B%0A%23%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20epbd%3AheeftAdresseerbaarObject%20%3Fvbo%20.%0A%23%20%20%20%20%20%20filter%20not%20exists%20%7B%0A%23%20%20%20%20%20%20%20%20%3Fvbo%20a%20bag%3AVerblijfsobject%20.%0A%23%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%20%3Fvbo%20epbd%3Agebruiksfunctie%2Frdf%3Atype%20epbd%3AKantoorfunctie%20%3B%0A%23%20%20%20%20%20%20%20%20%20%20%20epbd%3Aadres%2Fepbd%3Apostcode%20%3Fpcode%20.%0A%23%20%20%20%20%20%20bind(xsd%3Ainteger(substr(%3Fpcode%2C%201%2C%204))%20as%20%3Fpcodenr)%0A%23%20%20%20%20%20%20filter%20(%3Fpcodenr%20%3E%3D%203890%20%26%26%20%3Fpcodenr%20%3C%3D%203899)%20%23%20Zeewolde%0A%23%20%20%20%20%7D%0A%23%20%20%7D%0A%7D%0Agroup%20by%20%3Fenergielabel%0AORDER%20BY%20%3Fenergielabel&endpoint=https%3A%2F%2Fdata.acceptatie.pdok.nl%2Fsparql%2Frvo-el&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22dataTable%22%3A%7B%22cols%22%3A%5B%7B%22id%22%3A%22%22%2C%22label%22%3A%22energielabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22aantal%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%5D%2C%22rows%22%3A%5B%7B%22c%22%3A%5B%7B%22v%22%3A%22A%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A27%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22A%2B%2B%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A1%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22B%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A73%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22C%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A15%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22D%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A7%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22E%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A2%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22F%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A1%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22G%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A3%2C%22p%22%3A%7B%7D%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%22geen%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22v%22%3A1137%2C%22p%22%3A%7B%7D%7D%5D%7D%5D%7D%2C%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22is3D%22%3Afalse%2C%22pieHole%22%3A0%2C%22booleanRole%22%3A%22certainty%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22PieChart%22%7D%7D"
       data-query-ref="q1.rq"
       data-output="gchart">
</query>

Er blijken nog veel verblijfsobjecten met kantoorfuncties te zijn zonder een geregistreerd energielabel.

Van de verblijfsobjecten die wel geregistreerd zijn kunnen we het volgende overzicht creeren.
<p>De kleuren duiden de verschillende energielabels aan: label A, A+ of A++
(
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="#22b14c" r="9"/>
</svg>
), label B (
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="#8ff334" r="9"/>
</svg>
), label C (
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="#bdfc2c" r="9"/>
</svg>
) label D (
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="#fff200" r="9"/>
</svg>
), label E (
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="#ff9a35" r="9"/>
</svg>
), label F (
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="#ff7f27" r="9"/>
</svg>
), label G (
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="#ed1c24" r="9"/>
</svg>
), of geen label (
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="9" fill="grey" r="9"/>
</svg>
).</p>

<query data-config=""
       data-query-ref="q2.rq"
       data-output="geo">
</query>

De nieuwe eis die in 2023 gaat gelden stelt dat kantoren waarvan de oppervlakte groter is dan 100 m2 en waar het totaal aan kantooroppervlak binnen het pand groter is dan 50% van het gebruiksoppervlak van het pand een energielabel C-verplichting hebben (monumenten uitgezonderd).

In het volgende overzicht zijn alle verblijfsobjecten die volgens de BAG hieraan voldoen gepresenteerd.

<query data-config=""
       data-query-ref="q3.rq"
       data-output="geo">
</query>
