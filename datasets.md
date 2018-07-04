---
layout: default
title: Datasets
---

# Data
Op de labs-omgeving host het PDOK dataplatform een aantal datasets in Linked Data die nog niet productierijp zijn, maar wel interessant om de waarde ervan te beproeven. Het gaat vrijwel altijd om snapshots, dus de data is niet actueel.

## Datadumps
Op [https://data.labs.pdok.nl/dumps/](https://data.labs.pdok.nl/dumps/) kan je alle data downloaden die in de rdf store op de labs omgeving staan.

## Datasets

<div class="showcase" style="background-image: url('/stories/monument/logo.jpg'); background-repeat: no-repeat; background-position: bottom;">
  <h2>
    <div class="showcase-title">Nederlandse monumenten</div>
  </h2>
  <p style="background-color: rgba(255, 255, 255, 0.6);">Dataset met alle rijksmonumenten van Nederland.</p>
  <br>
  <a href="/stories/monument/" class="btn showcase-btn">Bekijk de datastory!</a>
  <a href="/dumps/monumenten/" class="btn showcase-btn">Download de dump</a>
</div>

<div class="showcase" style="background-image: url('/stories/cbs/logo.png'); background-repeat: no-repeat; background-position: bottom;">
  <h2>
    <div class="showcase-title">CBS Wijken en Buurten</div>
  </h2>
  <p style="background-color: rgba(255, 255, 255, 0.6);">CBS dataset met gegevens en contouren van alle wijken en buurten van Nederland.</p>
  <br>
  <a href="/stories/cbs/" class="btn showcase-btn">Bekijk de datastory!</a>
  <a href="/dumps/cbs-wijken-en-buurten/" class="btn showcase-btn">Download de dump</a>
</div>

<div class="showcase" style="background-image: url('/stories/bag-brk/logo.jpg'); background-repeat: no-repeat; background-position: bottom;">
  <h2>
    <div class="showcase-title">Linkset BAG-BRK</div>
  </h2>
  <p style="background-color: rgba(255, 255, 255, 0.6);">Linkset BAG-BRK met koppelingen van BAG-nummeraanduidingen naar BRK-perceel</p>
  <br>
  <a href="/stories/bag-brk/" class="btn showcase-btn">Bekijk de datastory!</a>
  <a href="/dumps/linkset-bag-brk/" class="btn showcase-btn">Download de dump</a>
</div>

<!-- div class="showcase" style="background-image: url('/stories/transacties/logo.jpg'); background-repeat: no-repeat; background-position: bottom;">
  <h2>
    <div class="showcase-title">Woningtransacties per buurt 2016</div>
  </h2>
  <p style="background-color: rgba(255, 255, 255, 0.6);">Hoeveel woningen verwisselden van eigenaar in 2016? Bekijk het voor jouw buurt.</p>
  <br>
  <a href="/stories/transacties/" class="btn showcase-btn">Bekijk de datastory!</a>
  <a href="/dumps/woning_transacties_2016/" class="btn showcase-btn">Download de dump</a>
</div -->

Graph | Endpoint | Maker | Omschrijving | Data story
---|---|---|---
Default graph | [labs main](https://data.labs.pdok.nl/sparql) | * | | ✗?
http://data.pdok.nl/linksets/AdresHub | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets/bag2wikidata | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets-catalog | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets/bag2geonames | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets/gemeente2provincie | [labs main](https://data.labs.pdok.nl/sparql) | Stan | | ✗?
http://data.pdok.nl/linksets/adresHub2vergunningen | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets/adresHub2bag | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets/gemeente2dbpedia | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets/woonplaats2gemeente | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.pdok.nl/linksets/vergunningen2bag | [labs main](https://data.labs.pdok.nl/sparql) | Stan| | ✗?
http://data.labs.pdok.nl/linksets/id/linksets/bag_brk_kennemerland | [labs main](https://data.labs.pdok.nl/sparql) | Rein| | ✗?
https://data.pdok.nl/cbs/2015/buurt/    | [labs main](https://data.labs.pdok.nl/sparql) | Wouter?| | [informatie-kwaliteit](https://data.labs.pdok.nl/stories/informatie-kwaliteit/)
https://data.pdok.nl/cbs/2015/gemeente/ | [labs main](https://data.labs.pdok.nl/sparql) | Wouter?| | ✗?
https://data.pdok.nl/cbs/2015/wijk/     | [labs main](https://data.labs.pdok.nl/sparql) | Wouter?| | ✗?
https://data.pdok.nl/cbs/2015/vocab/    | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.pdok.nl/cbs/buurt/2016     | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.pdok.nl/cbs/gemeente/2016  | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.pdok.nl/cbs/wijk/2016      | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.pdok.nl/cbs/2012           | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.pdok.nl/cbs/transacties | [labs main](https://data.labs.pdok.nl/sparql) | Rein| | ✗?
https://data.pdok.nl/cbs/wijken_buurten_2016 | [labs main](https://data.labs.pdok.nl/sparql) | Pano?| | [LISA](https://data.labs.pdok.nl/stories/werk/), [krimp](https://data.labs.pdok.nl/stories/krimp/), [delfzijl](https://data.labs.pdok.nl/stories/delfzijl/)
https://data.pdok.nl/cbs/graph/2016 | [labs main](https://data.labs.pdok.nl/sparql) | Pano?| | [krimp](https://data.labs.pdok.nl/stories/krimp/)
https://data.pdok.nl/cbs/krimpgebieden_2016 | [labs main](https://data.labs.pdok.nl/sparql) | Pano?| | [krimp](https://data.labs.pdok.nl/stories/krimp/)
https://data.pdok.nl/cbs/gemeente_gegeneraliseerd_2016 | [labs main](https://data.labs.pdok.nl/sparql) | Rein| | [LISA](https://data.labs.pdok.nl/stories/werk/), [krimp](https://data.labs.pdok.nl/stories/krimp/), [delfzijl](https://data.labs.pdok.nl/stories/delfzijl/)
https://data.pdok.nl/cbs/afstand_tot_banen | [labs main](https://data.labs.pdok.nl/sparql) | ?| | ✗?
https://data.pdok.nl/cbs/arbeidsmarktparticipatie_gemeente | [labs main](https://data.labs.pdok.nl/sparql) | ?| | [LISA](https://data.labs.pdok.nl/stories/werk/), [krimp](https://data.labs.pdok.nl/stories/krimp/)
https://data.pdok.nl/cbs/energiebesparingspotentie_gemeente | [labs main](https://data.labs.pdok.nl/sparql) | ?| | [energiebesparing](https://data.labs.pdok.nl/stories/energiebesparing/)?
https://data.pdok.nl/cbs/energiebesparingspotentie_reel | [labs main](https://data.labs.pdok.nl/sparql) |  Wouter| | [energiebesparing](https://data.labs.pdok.nl/stories/energiebesparing/)?
http://www.gemeentegeschiedenis.nl/data/ | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.pdok.nl/monumenten | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | [monumenten](https://data.labs.pdok.nl/stories/monument/)
https://data.pdok.nl/beeldbank | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | [monumenten](https://data.labs.pdok.nl/stories/monument/)
https://cshapes.org/data/ | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://cshapes.org/vocab/ | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://iisg.amsterdam/graph/cshapes/meta/ | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://iisg.amsterdam/graph/cshapes/data/ | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://iisg.amsterdam/graph/cshapes/vocab/ | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
http://data.labs.pdok.nl/quality | [labs main](https://data.labs.pdok.nl/sparql) | Jesse| | [informatie-kwaliteit](https://data.labs.pdok.nl/stories/informatie-kwaliteit/)
http://data.labs.pdok.nl/linksets/id/bag_brk | [labs main](https://data.labs.pdok.nl/sparql) | Rein| | [bag-brk](https://data.labs.pdok.nl/stories/bag-brk/)
http://data.labs.pdok.nl/linksets/def/bag_brk/ | [labs main](https://data.labs.pdok.nl/sparql) | Rein| | [bag-brk](https://data.labs.pdok.nl/stories/bag-brk/)
http://data.labs.pdok.nl/dataset/cbs/bevolking/meta | [labs main](https://data.labs.pdok.nl/sparql) | Pano?| | ✗?
http://data.labs.pdok.nl/dataset/cbs/bevolking | [labs main](https://data.labs.pdok.nl/sparql) | Pano?| | ✗?
https://data.labs.pdok.nl/graph/cbs-2015 | [labs main](https://data.labs.pdok.nl/sparql) | Pano?| | ✗?
https://data.labs.pdok.nl/graph/cbs-vocab | [labs main](https://data.labs.pdok.nl/sparql) | Pano?| | ✗?
https://krr.triply.cc/Kadaster/graph/links | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
http://data.labs.pdok.nl/dataset/energie/ams_energie_labels_verbuik | [labs main](https://data.labs.pdok.nl/sparql) | Evgeny| | [energie](https://data.labs.pdok.nl/stories/energie/)
http://data.labs.pdok.nl/dataset/energie/ams_energie_labels | [labs main](https://data.labs.pdok.nl/sparql) | Evgeny| | ✗?
http://data.labs.pdok.nl/dataset/bedrijf/sbi | [labs main](https://data.labs.pdok.nl/sparql) | Evgeny| | ✗?
http://data.labs.pdok.nl/dataset/energie/windmolens | [labs main](https://data.labs.pdok.nl/sparql) | Evgeny| | [energie](https://data.labs.pdok.nl/stories/energie/)
https://example.org/SP2B/50K | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
http://data.labs.pdok.nl/dataset/energie/rvo_energy_labels | [labs main](https://data.labs.pdok.nl/sparql) | Evgeny| | [energie](https://data.labs.pdok.nl/stories/energie/)
http://data.pdok.nl/linksets/Verblijfsobjecten2Buurten2016 | [labs main](https://data.labs.pdok.nl/sparql) | Stan?| | ✗?
http://data.labs.pdok.nl/id/dataset/bbi | [labs main](https://data.labs.pdok.nl/sparql) | Pano| | ✗?
http://data.labs.pdok.nl/id/dataset/brk | [labs main](https://data.labs.pdok.nl/sparql) | Pano | | ✗?
http://data.labs.pdok.nl/linksets/bbi_cbsgem2016 | [labs main](https://data.labs.pdok.nl/sparql) | Pano| | ✗?
http://data.labs.pdok.nl/linksets/bbi_owms | [labs main](https://data.labs.pdok.nl/sparql) | Pano| | ✗?
https://data.pdok.nl/energie/graph/2015 | [labs main](https://data.labs.pdok.nl/sparql) | ?| | ✗?
http://data.labs.pdok.nl/dataset/lisa | [labs main](https://data.labs.pdok.nl/sparql) | Rein| | [LISA](https://data.labs.pdok.nl/stories/werk/)
http://data.labs.pdok.nl/dataset/parkeren | [labs main](https://data.labs.pdok.nl/sparql) | Rein| | [parkeren](https://data.labs.pdok.nl/stories/parkeren/)
http://data.labs.pdok.nl/dataset/bedrijf/kvk | [labs main](https://data.labs.pdok.nl/sparql) | Evgeny?| | ✗?
http://data.labs.pdok.nl/dataset/energielabel | [labs main](https://data.labs.pdok.nl/sparql) | Evgeny?| | ✗?
https://data.pdok.nl/beer-styles | [labs main](https://data.labs.pdok.nl/sparql) | ?| | [hackalod 2018](https://data.labs.pdok.nl/stories/Hack-a-LOD/)
https://data.pdok.nl/brouwerij | [labs main](https://data.labs.pdok.nl/sparql) | ?| | [hackalod 2018](https://data.labs.pdok.nl/stories/Hack-a-LOD/)
https://data.pdok.nl/bier | [labs main](https://data.labs.pdok.nl/sparql) | ?| | [hackalod 2018](https://data.labs.pdok.nl/stories/Hack-a-LOD/)
https://data.labs.pdok.nl/energiepotentie-buurt | [labs main](https://data.labs.pdok.nl/sparql) | ?| | ✗?
https://data.labs.pdok.nl/stakingen | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | [hackalod 2018](https://data.labs.pdok.nl/stories/Hack-a-LOD/)
https://cultureelerfgoed.nl/graph/monumenten/vocab | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://cultureelerfgoed.nl/graph/monumenten/data | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.labs.pdok.nl/graph/beeldbank | [labs main](https://data.labs.pdok.nl/sparql) | Wouter| | ✗?
https://data.labs.pdok.nl/graph/3d-test | [labs main](https://data.labs.pdok.nl/sparql) | ?| | ✗?
https://data.labs.pdok.nl/graph/3d-terrein | [labs main](https://data.labs.pdok.nl/sparql) | ?| | ✗?
https://data.labs.pdok.nl/graph/3d-building | [labs main](https://data.labs.pdok.nl/sparql) | ?| | ✗?
http://data.labs.pdok.nl/dataset/windstats | [labs geosparql](https://data.labs.pdok.nl/geosparql) | Rein| | ✗?
http://data.pdok.nl/mossel-en-oesterhabitats | [labs geosparql](https://data.labs.pdok.nl/geosparql) | Rein| | [mossel- en oesterhabitats](https://data.labs.pdok.nl/stories/mossel-en-oesterhabitats/)
http://bgt.basisregistraties.overheid.nl/bgt/{*} | [labs geosparql](https://data.labs.pdok.nl/geosparql) | Pano| | ✗?
http://bgt.basisregistraties.overheid.nl/bgt/{*} | [labs bgt](https://data.labs.pdok.nl/gsparql) | Pano| | [BGT ID](https://data.labs.pdok.nl/stories/KwaliteitBGTBAG/), [BGT status](https://data.labs.pdok.nl/stories/Kwaliteit%20BGTBAG2/)
http://bgt.basisregistraties.overheid.nl/bgt/{*} | [triply e-culture](https://triply.eculture.labs.vu.nl/sparql) | Pano| | [BGT ID](https://data.labs.pdok.nl/stories/KwaliteitBGTBAG/)
http://data.labs.pdok.nl/dataset/energie/rvo_energy_labels | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [energie](https://data.labs.pdok.nl/stories/energie/)
https://krr.triply.cc/Kadaster/graph/cbs-2015 | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [energie](https://data.labs.pdok.nl/stories/energie/)
https://krr.triply.cc/Kadaster/graph/cbs-energie-2015 | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [energie](https://data.labs.pdok.nl/stories/energie/)
https://data.pdok.nl/windturbine/osm-flevoland | [triply windturbines](https://api.krr.triply.cc/datasets/Kadaster/windturbines/services/windturbines/sparql) | Wouter | | [windturbines](https://data.labs.pdok.nl/stories/windturbine/)
http://krr.triply.cc/Kadaster/graph/kvk       | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [kvk](https://data.labs.pdok.nl/stories/kvk/)
https://krr.triply.cc/Kadaster/graph/gemeente-provincie | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-2010| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-2011| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-2012| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-2013 | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-2014 | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-2015| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-2016 | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [kvk](https://data.labs.pdok.nl/stories/kvk/)
https://krr.triply.cc/Kadaster/graph/cbs-meta | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-vocab| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/cbs-energie-2015| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://iisg.amsterdam/graph/cshapes/data    | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://iisg.amsterdam/graph/cshapes/meta    | [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/krimpgebied| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
http://www.gemeentegeschiedenis.nl/graph/data| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
http://www.gemeentegeschiedenis.nl/graph/meta| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://cultureelerfgoed.nl/graph/monumenten/data| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [kvk](https://data.labs.pdok.nl/stories/kvk/)
https://cultureelerfgoed.nl/graph/monumenten/vocab| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
http://data.labs.pdok.nl/dataset/energie/rvo_energy_labels| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [kvk](https://data.labs.pdok.nl/stories/kvk/)
https://iisg.amsterdam/graph/strikes/data| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
http://krr.triply.cc/Kadaster/graph/kvk| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [kvk](https://data.labs.pdok.nl/stories/kvk/)
https://krr.triply.cc/Kadaster/graph/brt-vocab| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://cultureelerfgoed.nl/graph/beeldbank/data| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | [delfzijl](https://data.labs.pdok.nl/stories/delfzijl/)
https://cultureelerfgoed.nl/graph/beeldbank/meta| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://krr.triply.cc/Kadaster/graph/brt| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://iisg.amsterdam/graph/cshapes/vocab| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://cultureelerfgoed.nl/graph/beeldbank/vocab| [triply geosoup2](https://api.krr.triply.cc/datasets/Kadaster/geosoup2/services/geosoup/sparql) | Wouter | | ✗?
https://data.pdok.nl/windturbine/osm-flevoland | [triply e-culture](https://triply.eculture.labs.vu.nl/sparql) | Wouter | | [BGT status](https://data.labs.pdok.nl/stories/Kwaliteit%20BGTBAG2/) 

