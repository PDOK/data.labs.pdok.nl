---
title: Kadaster Data Stories ― Nederlandse verkiezingen
layout: story
logo: /stories/election/logo.jpg
endpoint: https://virtuoso.lod.labs.vu.nl/sparql
output: gchart
---
# Dutch Elections

We hebben de uitslagen van de Tweede Kamerverkiezingen 2017
gepubliceerd als Linked Data.  Vreemd genoeg was het best nog
lastig om deze belangrijke gegevens te verkrijgen: ze staan
niet op <a href="http://data.overheid.nl">data.overheid.nl</a>
en ook niet in
de [Databank
Verkiezingsuitslagen](http://www.verkiezingsuitslagen.nl/) van de Kiesraad.

<div data-query
     data-query-sparql="tweede_kamer_verkiezingen_2017.rq">
</div>
<!--
<p>We linken de verkiezingsuitslagen op gemeente niveau aan
gemeentes in de BAG.  Wikidata en DBpedia bevatten mappings van
BAG naar CBS gemeentes. CBS bevat verschillende statistieken op
gemeente niveau. Hieronder laten we de gemeentes zien waar de
ratio van PVV stemmers in verhouding met het percentage
niet-westerse allochtonen het grootst is.</p>
<div data-query="http://static.triply.cc/sparql/elections.html#query=prefix+cbs%3A+%3Chttps%3A%2F%2Fcbs.nl%2Fdef%2F%3E%0Aprefix+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aprefix+tdp%3A+%3Chttps%3A%2F%2Ftriply.cc%2Fpoliticalparties%2F%3E%0Aprefix+tsp%3A+%3Chttps%3A%2F%2Ftriply.cc%2Fproperties%2F%3E%0Aprefix+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0Aselect+distinct+%3Fname+%3FwktLabel+%3Fwkt+%7B%0A++%3Fcbs+cbs%3AgemeenteCode+%3FcbsCode+%3B+cbs%3AgemeenteNaam+%3Fname%0A++filter+(contains(str(%3Fcbs)%2C+%22id%2Fgemeente%2F%22))%0A++%3Fcbs+cbs%3AnietWesterseAllochtoon+%3FpercAllochtoon%0A++bind+(iri(concat(%22https%3A%2F%2Ftriply.cc%2Felections%2Ftk2017data%22%2C+substr(%3FcbsCode%2C+2)))+AS+%3FelectionResult)%0A++%3FelectionResult+tsp%3ApartyResult+%5B+tsp%3AresultOf+tdp%3APVV+%3B+tsp%3Apercentage+%3FpercVotes+%5D%0A++bind+(xsd%3Adouble(%3FpercVotes)+%2F+%3FpercAllochtoon+as+%3Fratio)%0A++%7Bselect+%3Fcbs+(sample(%3Fwkt)+as+%3Fwkt)+%7B+%3Fcbs+%5Eowl%3AsameAs%2Fgeo%3AhasGeometry%2Fgeo%3AasWKT+%3Fwkt+%7D+group+by+%3Fcbs+%7D%0A++bind+(concat('%3Ch1%3E'%2Cstr(%3Fname)%2C'%3C%2Fh1%3E%3Cp%3EPVV+votes%3A+'%2Cstr(%3FpercVotes)%2C'%3C%2Fp%3E%3Cp%3EAllochtoon%3A+'%2Cstr(%3FpercAllochtoon)%2C'%3C%2Fp%3E%3Cp%3ERatio%3A+'%2Cstr(%3Fratio)%2C'%3C%2Fp%3E')+as+%3FwktLabel)%0A%7D%0Aorder+by+desc+(%3Fratio)%0Alimit+25%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fvirtuoso.lod.labs.vu.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=leaflet">
  </div>
  -->
