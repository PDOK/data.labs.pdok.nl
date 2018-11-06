---
endpoint: https://data.labs.pdok.nl/sparql
layout: story
logo: /stories/nationaal-archief/NAlogo.jpg
title: Nationaal Archief
logo: nationaal-archief/logo.png
---

# Nationaal Archief

Deze Data Story gaat over de Beeldbank van het Nationaal Archief,
in combinatie met het Basisregister Gebouwen (BAG).

## Locaties

Hieronder tonen we de meest voorkomende locaties die in de Beeldbank
zijn vastgelegd.

<query data-config="http://127.0.0.1:4000/stories/nationaal-archief/#query=prefix+dce%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0Aselect+%3Flocation+(count(%3Fimage)+as+%3Fn)+%7B%0A++%3Fimage+a+schema%3APhotograph.%0A++%7B%0A++++%3Fimage+schema%3AcontentLocation%2Frdfs%3Alabel+%3Flocation.%0A++%7D+union+%7B%0A++++%3Fimage+schema%3AcontentLocation+%3Flocation.%0A++++filter(isLiteral(%3Flocation))%0A++%7D%0A%7D%0Agroup+by+%3Flocation%0Aorder+by+desc(%3Fn)%0Alimit+20%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.labs.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22legend%22%3A%22right%22%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D" data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="locaties.rq" data-output="gchart"></query>

<!--## Gemeentes

 Op basis van de locatie kunnen we de beelden uit de Beeldbank op de
kaart zetten.  Hieronder tonen we de gemeentes met ten minste één
beeld in de Beeldbank.

<query data-endpoint="https://data.labs.pdok.nl/sparql" data-query-ref="gemeentes.rq" data-output="geo"></query> --> <!-- Deze query is uitgezet in verband met performance op de server-->  

## Kerken: Beeldbank (Nationaal Archief) & BAG (Kadaster)

We willen de meerwaarde tonen van het leggen van links tussen
Kadastrale data en data van het Nationaal Archief.  Hieronder
combineren we de kadastrale registratie van de Sint Bavokerk aan
afbeeldingen van die kerk uit de Beeldbank.

### Sint Bavokerk

<query data-query-ref="sint-bavokerk-graphdb.rq" data-output="geo3d"></query>

<!-- <query data-config="https://nightly.yasgui.triply.cc/#query=prefix%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0Aprefix%20dce%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20pand%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fbag%2Fid%2Fpand%2F%3E%0Aprefix%20owl%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0Aprefix%20xsd%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0Aselect%20%3Fshape%20%3FshapeHeight%20%3FshapeLabel%20%3FshapeName%20%7B%0A%20%20bind(40%20as%20%3FshapeHeight)%0A%20%20%7B%0A%20%20%20%20select%0A%20%20%20%20%20%20(sample(%3Ftitle)%20as%20%3Ftitle)%0A%20%20%20%20%20%20(group_concat(%3Fwidget%3Bseparator%3D'%3Chr%3E')%20as%20%3Fwidgets)%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20select%0A%20%20%20%20%20%20%20%20%20%20%3Fimage%0A%20%20%20%20%20%20%20%20%20%20(strdt(%3FdateStr%2Cxsd%3Adate)%20as%20%3Fdate)%0A%20%20%20%20%20%20%20%20%20%20%3Fdescription%0A%20%20%20%20%20%20%20%20%20%20(group_concat(distinct%20%3Fformat%3Bseparator%3D'%2C%20')%20as%20%3Fformat)%0A%20%20%20%20%20%20%20%20%20%20%3Fpand%0A%20%20%20%20%20%20%20%20%20%20(group_concat(distinct%20%3Fsubject%3Bseparator%3D'%2C%20')%20as%20%3Fsubject)%0A%20%20%20%20%20%20%20%20%20%20%3Ftitle%0A%20%20%20%20%20%20%20%20%20%20(sample(%3Furl)%20as%20%3Furl)%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20bind(pand%3A0392100000065734%20as%20%3Fpand)%0A%20%20%20%20%20%20%20%20%20%20%3Fimage%20dce%3Adate%20%3FdateStr%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dce%3Adescription%20%3Fdescription%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dce%3Aformat%20%3Fformat%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dce%3Asubject%20%3Fsubject%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dce%3Atitle%20%3Ftitle%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20owl%3AsameAs%20%3Fpand%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20schema%3AcontentLocation%20%3Flocation%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20schema%3Athumbnail%20%3Furl.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20group%20by%20%3Fimage%20%3FdateStr%20%3Fdescription%20%3Fpand%20%3Ftitle%0A%20%20%20%20%20%20%20%20order%20by%20desc(%3Fdate)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20bind(concat(%0A%20%20%20%20%20%20%20%20'%3Ch5%3E'%2Cstr(%3Fdescription)%2C'%3C%2Fh5%3E'%2C%0A%20%20%20%20%20%20%20%20'%3Cfigure%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20'%3Ca%20href%3D%22'%2Cstr(%3Furl)%2C'%22%20target%3D%22_blank%22%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3Cimg%20src%3D%22'%2Cstr(%3Furl)%2C'%22%20width%3D%22250px%22%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20'%3C%2Fa%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20'%3Cfigcaption%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3Cdl%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%3Cdt%3EDatum%3C%2Fdt%3E%3Cdd%3E'%2Cyear(%3Fdate)%2C'-'%2Cmonth(%3Fdate)%2C'-'%2Cday(%3Fdate)%2C'%3C%2Fdd%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(%3Fformat%3D''%2C''%2Cconcat('%3Cdt%3EFormaten%3C%2Fdt%3E%3Cdd%3E'%2Cstr(%3Fformat)%2C'%3C%2Fdd%3E'))%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(%3Fsubject%3D''%2C''%2Cconcat('%3Cdt%3EOnderwerpen%3C%2Fdt%3E%3Cdd%3E'%2Cstr(%3Fsubject)%2C'%3C%2Fdd%3E'))%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'%3C%2Fdl%3E'%2C%0A%20%20%20%20%20%20%20%20%20%20'%3C%2Ffigcaption%3E'%2C%0A%20%20%20%20%20%20%20%20'%3C%2Ffigure%3E')%20as%20%3Fwidget)%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fpand%0A%20%20%7D%0A%20%20bind(pand%3A0392100000065734%20as%20%3Fpand)%0A%20%20service%20%3Chttps%3A%2F%2Fdata.pdok.nl%2Fsparql%3E%20%7B%0A%20%20%20%20%3Fpand%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%3B%0A%20%20%20%20%20%20%20%20%20%20bag%3Aidentificatiecode%20%3FpandId.%0A%20%20%20%20%3Fverblijfsobject%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20bag%3Apandrelatering%20%3Fpand.%0A%20%20%20%20%3FopenbareRuimte%20bag%3AnaamOpenbareRuimte%20%3FopenbareRuimteNaam%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20bag%3AbijbehorendeWoonplaats%20%3Fwoonplaats.%0A%20%20%20%20%3Fwoonplaats%20rdfs%3Alabel%20%3FwoonplaatsNaam.%0A%20%20%20%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20bag%3Apostcode%20%3Fzipcode.%0A%20%20%7D%0A%20%20bind(concat('%E2%9B%AA%20'%2Cstr(%3FopenbareRuimteNaam)%2C'%20'%2Cstr(%3Fhuisnummer)%2C'%2C%20'%2Cstr(%3FwoonplaatsNaam))%20as%20%3FshapeName)%0A%20%20bind(concat(%0A%20%20%20%20'%3Ccenter%3E%3Ch1%3E%E2%9B%AA%20%3Ca%20href%3D%22'%2Cstr(%3Fpand)%2C'%22%3E'%2Cstr(%3FopenbareRuimteNaam)%2C'%20'%2Cstr(%3Fhuisnummer)%2C'%2C%20'%2Cstr(%3FwoonplaatsNaam)%2C'%3C%2Fa%3E%3C%2Fh1%3E%3C%2Fcenter%3E'%2C%0A%20%20%20%20'%3Ch2%3ELinks%20uit%20PDOK%20hub%3C%2Fh2%3E'%2C%0A%20%20%20%20'%3Cul%3E'%2C%0A%20%20%20%20%20%20'%3Cli%3E%3Cb%3EBAG%3C%2Fb%3E%3A%20%3Ca%20href%3D%22'%2Cstr(%3Fpand)%2C'%22%3E'%2Cstr(%3FpandId)%2C'%3C%2Fa%3E%3C%2Fli%3E'%2C%0A%20%20%20%20%20%20'%3Cli%3E%3Cb%3ERCE%3C%2Fb%3E%3A%20%3Ca%20href%3D%22https%3A%2F%2Fcultureelerfgoed.nl%2Fmonumenten%2F19264%22%3E19264%3C%2Fa%3E%3C%2Fli%3E'%2C%0A%20%20%20%20%20%20'%3Cli%3E%3Cb%3EWikidata%3C%2Fb%3E%3A%20%3Ca%20href%3D%22http%3A%2F%2Fwww.wikidata.org%2Fentity%2FQ1545193%22%3EQ1545193%3C%2Fa%3E%3C%2Fli%3E'%2C%0A%20%20%20%20'%3C%2Ful%3E'%2C%0A%20%20%20%20'%3Ch2%3EAfbeeldingen%20van%20Nationaal%20Archief%3C%2Fh2%3E'%2C%0A%20%20%20%20%3Fwidgets%0A%20%20)%20as%20%3FshapeLabel)%0A%7D%0Alimit%201%0A&endpoint=https%3A%2F%2Fapi.demo.triply.cc%2Fdatasets%2Fnationaal-archief%2Fbeeldbank%2Fservices%2Fsparql%2Fsparql&requestMethod=POST&tabTitle=Query%208&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo3d"
     data-query-ref="sint-bavokerk-3d.rq"
     data-output="geo3d">
</query> -->


## Galerij

De Beeldbank van het Nationaal Archief leent zich goed voor het tonen
van een galerij  De volgende query toont de onderwerpen met de
meeste afbeeldingen, samen met het aantal afbeeldingen met dat
onderwerp.

<query data-query-ref="gallery.rq" data-output=""></query>

## Linked Data Browser

We hebben ook de Linked Data Browser (<em>FacetCheck</em>) over de
Nationaal Archief Beeldbank geconfigureerd:

<a href="https://data.labs.pdok.nl/presentations/nationaal-archief/" target="_blank">
  <button>Open browser</button>
</a>

<!-- <query data-config="https://api.demo.triply.cc/s/T9g5GrVT9" data-endpoint="https://api.demo.triply.cc/datasets/nationaal-archief/beeldbank/services/sparql/sparql" data-query-ref="gallery.rq" data-output="gallery"></query>
<a href="https://api.demo.triply.cc/s/9vHwRHw9X" target="_blank">
  <button>Voer query uit</button>
</a> -->
