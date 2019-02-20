---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /assets/images/icons/512x512.png
title: PDOK Knowledge Graph
---
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>
.container { min-width: 100%; }
.txt { margin-left: 25%; margin-right: 25%; }
</style>

<h1 class="txt">PDOK Knowledge Graph</h1>

<p class="txt">We willen dat er meer huizen worden verkocht.  Één manier om dat voor
elkaar te krijgen is door meer huizen te bouwen.  Buitenstedelijk
bouwen is echter lastig: dit tast groen aan en is mogelijk minder
duurzaam.  Randstedelijk en binnenstedelijk bouwen is ook lastig, want
vaak moeten bestaande woningen eerst worden afgebroken alvorens
verbeterde nieuwbouw kan worden gepleegd.  Daarom deze Data Story: we
combineren data uit verschillende PDOK bronnen en gebruiken de PDOK
Knowledge Graph om te zoeken naar die plekken in Nederland waar de
meeste potentie voor projectontwikkeling is.</p>

<h2 class="txt">Stap 1: Vind een geschikte wijk</h2>

<p class="txt">We beginnen te zoeken naar wijken in Nederland waar de
omstandigheden gunstig zijn voor verbeterde nieuwbouw.  Het CBS houdt
gedetailleerde statistieken bij van alle Nederlandse wijken.  We
beginnen met het in beeld brengen van alle wijken waar matige
stedelijkheid is: daarmee sluiten we groengebieden waar niet gebouwd
mag worden en sterk stedelijke gebieden waar niet gebouwd kan worden
uit.</p>

<div class="alert alert-info txt" role="alert">
  <h2>Probeer uit</h2>
  <p>Op deze kaart zijn de kandidaat wijken gegroepeerd weergegeven.  Door op de met getallen aangeduide groepen te klikken worden de wijken binnen die groepering zichtbaar gemaakt.  Op het laagste niveau worden de individuele wijken zichtbaar.  Door op deze wijken te klikken kan de naam van de wijken getoond worden.</p>
</div>

<query data-config="http://localhost:5000/stories/pdok-kg/#query=%23%20CBS%20wijken%20met%20matige%20stedelijkheid%0A%23%20(o.b.v.%20omgevingsadressendichtheid).%0Aprefix%20cbs%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fcbs%23%3E%0Aprefix%20code%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2F83487NED%2Fid%2Fcode%2F%3E%0Aprefix%20def%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2F83487NED%23%3E%0Aprefix%20dimension%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fdimension%23%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aselect%20*%20%7B%0A%20%20%3Fgemeente%0A%20%20%20%20a%20cbs%3AGemeente_Geografisch%3B%0A%20%20%20%20rdfs%3Alabel%20%3FgemeenteNaam.%0A%20%20%3Fwijk%0A%20%20%20%20a%20cbs%3AWijk%3B%0A%20%20%20%20%3Fgeo_sfWithin1%20%3Fgemeente%3B%20%23%20HACK%3A%20Required%20in%20GraphDB%0A%20%20%20%20rdfs%3Alabel%20%3FwijkNaam.%0A%20%20%3Fbuurt%0A%20%20%20%20a%20cbs%3ABuurt%3B%0A%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape%3B%0A%20%20%20%20%3Fgeo_sfWithin2%20%3Fwijk%3B%20%23%20HACK%3A%20Required%20in%20GraphDB%0A%20%20%20%20rdfs%3Alabel%20%3FbuurtNaam.%0A%20%20%5B%20def%3Astedelijkheid_MateVanStedelijkheid%20code%3AStedelijkheid_MateVanStedelijkheid_MatigStedelijk%3B%0A%20%20%20%20dimension%3Aregio%20%3Fbuurt%20%5D.%0A%20%20bind('red'%20as%20%3FshapeColor)%0A%20%20bind('''%3Ch3%3EBuurt%20%7B%7BbuurtNaam%7D%7D%20te%20%7B%7BgemeenteNaam%7D%7D%3C%2Fh3%3E'''%5E%5Erdf%3AHTML%20as%20%3FshapeLabel)%0A%7D%0Alimit%2010000%0A&endpoint=https%3A%2F%2Fbetalinkeddata.cbs.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22visualization%22%3A%22grouped%22%2C%22grouped%22%3Afalse%7D"
       data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-query-ref="q1a.rq"
       data-output="geo">
</query>

<h2 class="txt">Stap 2: Voeg meer criteria toe</h2>

<p class="txt">Laten we hier nog enkele zoek criteria aan toevoegen:</p>

<ul class="txt">
<li>De wijk moet woningen met een lage gemiddelde woningwaarde bevatten.</li>
<li>De wijk moet een relatief hoge woningvoorraad hebben.</li>
<li>De wijk moet veelal oudere woningen bevatten.</li>
</ul>

<p class="txt">Wanneer we alle wijken in Nederland op basis van deze
criteria sorteren komen de volgende wijken boven drijven:</p>

<query data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-query-ref="q1b.rq"
       data-output="gallery">
</query>

<h2 class="txt">Stap 3: Kandidaat wijken in Dordrecht</h2>

<p class="txt">Twee van de kandidaat wijken blijken in Dordrecht te
liggen, dus laten we daar eens verder kijken.  Dit zijn de buurten in
Dordrecht met in de weergave hun gemiddelde woningwaardes:</p>

<query data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-query-ref="q1c.rq"
       data-output="geo3d">
</query>

<h2 class="txt">Stap 4: BAG panden die aan de criteria voldoen</h2>

<p class="txt">Dan gecombineerd met BAG panden van vóór 1970, WOZ
waarde in de laagste klasse, en energielabel D of hoger…</p>

<query data-config="http://localhost:5000/stories/pdok-kg/#query=%23%201.%20BAG%20bouwjaar%20tussen%201960%20en%201970%2C%0A%23%202.%20RVO%20energielabel%20D%20of%20slechter%2C%0A%23%203.%20WOZ%20in%20de%20laagste%20klasse%0Aprefix%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0Aprefix%20begrip_bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fid%2Fbegrip%2F%3E%0Aprefix%20begrip_energielabel%3A%20%3Chttp%3A%2F%2Fenergielabels.gebouwen.overheid.nl%2Fepbd%2Fid%2Fbegrip%2F%3E%0Aprefix%20cbs%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fcbs%23%3E%0Aprefix%20def%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2F83487NED%23%3E%0Aprefix%20dimension%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fdimension%23%3E%0Aprefix%20energielabels%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fdef%2Fenergielabels%2F%3E%0Aprefix%20epbd%3A%20%3Chttp%3A%2F%2Fenergielabels.gebouwen.overheid.nl%2Fdef%2Fepbd%23%3E%0Aprefix%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20geof%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Fdef%2Ffunction%2Fgeosparql%2F%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20waardeklasse%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fwoz%2Fdef%2Fwaardeklasse%2F%3E%0Aprefix%20woz%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fwoz%2Fdef%2F%3E%0Aselect%20*%20%7B%0A%20%20%7B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20select%0A%20%20%20%20%20%20%20%20%3Fpand%0A%20%20%20%20%20%20%20%20%3Fshape%0A%20%20%20%20%20%20%20%20(sample(%3Fprefix0)%20as%20%3Fprefix)%0A%20%20%20%20%20%20%20%20(sample(%3FshapeName0)%20as%20%3FshapeName)%0A%20%20%20%20%20%20%20%20(sample(%3Fverblijfsobject0)%20as%20%3Fverblijfsobject)%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20graph%20%3FwoonplaatsVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fwoonplaats%20bag%3AnaamWoonplaats%20%22Dordrecht%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FwoonplaatsVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FopenbareRuimteVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3FopenbareRuimte%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AbijbehorendeWoonplaats%20%3Fwoonplaats%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AnaamOpenbareRuimte%20%3FopenbareRuimteNaam.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FopenbareRuimteVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FnummeraanduidingVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fnummeraanduiding%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Apostcode%20%3Fpostcode.%0A%20%20%20%20%20%20%20%20%20%20optional%20%7B%20%3Fnummeraanduiding%20bag%3Ahuisletter%20%3Fhuisletter%20%7D%0A%20%20%20%20%20%20%20%20%20%20optional%20%7B%20%3Fnummeraanduiding%20bag%3Ahuisnummertoevoeging%20%3Fhuisnummertoevoeging%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FnummeraanduidingVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FverblijfsobjectVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fverblijfsobject0%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Aoppervlakte%20%3Foppervlakte%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Apandrelatering%20%3Fpand%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Astatus%20%3FverblijfsobjectStatus.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3FverblijfsobjectStatus%20rdfs%3Alabel%20%3FverblijfsobjectStatusLabel.%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FverblijfsobjectVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FpandVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fpand%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3Fshape%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Astatus%20%3FpandStatus.%0A%20%20%20%20%20%20%20%20%20%20filter(%3Fbouwjaar%20%3E%201950%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fbouwjaar%20%3C%201960%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3FpandStatus%20not%20in%20(begrip_bag%3APandGesloopt%2C%20begrip_bag%3ASloopvergunningVerleend))%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FpandVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20%3FpandStatus%20rdfs%3Alabel%20%3FpandStatusLabel%0A%20%20%20%20%20%20%20%20bind(concat(str(%3FopenbareRuimteNaam)%2C'%20'%2Cstr(%3Fhuisnummer)%2C'%2C%20'%2Cstr(%3Fpostcode)%2C'%20Dordrecht')%20as%20%3FshapeName0)%0A%20%20%20%20%20%20%20%20bind(concat(%0A'%3Ch3%3E'%2Cstr(%3FopenbareRuimteNaam)%2C'%20'%2Cstr(%3Fhuisnummer)%2C'%3C%2Fh3%3E'%2C%0A'%3Cdl%3E'%2C%0A%20%20'%3Cdt%3EPand%20oppervlakte%3C%2Fdt%3E'%2C%0A%20%20'%3Cdd%3E'%2Cstr(%3Foppervlakte)%2C'%20m2%3C%2Fdd%3E'%2C%0A%20%20'%3Cdt%3EPand%20status%3C%2Fdt%3E'%2C%0A%20%20'%3Cdd%3E'%2Cstr(%3FpandStatusLabel)%2C'%3C%2Fdd%3E'%2C%0A%20%20'%3Cdt%3EBouwjaar%3C%2Fdt%3E'%2C%0A%20%20'%3Cdd%3E'%2Cstr(%3Fbouwjaar)%2C'%3C%2Fdd%3E'%2C%0A'%3C%2Fdl%3E')%20as%20%3Fprefix0)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20group%20by%20%3Fpand%20%3Fshape%0A%20%20%20%20%20%20limit%201000%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20service%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fmigratie%2Fsparql%3E%20%7B%0A%20%20%20%20%3Fpand%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fbag%2Fdef%2FmeasuredHeight%3E%20%3FshapeHeight.%0A%20%20%20%20%3Fgebouwdeel%0A%20%20%20%20%20%20epbd%3Aenergieprestatie-indicator%20%3Fenergieprestatie%3B%0A%20%20%20%20%20%20epbd%3AheeftAdresseerbaarObject%20%3Fverblijfsobject%3B%0A%20%20%20%20%20%20foaf%3AisPrimaryTopicOf%20%3Fenergielabel.%0A%20%20%20%20%3Fenergielabel%0A%20%20%20%20%20%20epbd%3Aopnamedatum%20%3Fopnamedatum%3B%0A%20%20%20%20%20%20epbd%3Aregistratiedatum%20%3Fregistratiedatum.%0A%20%20%20%20%3Fwoz%0A%20%20%20%20%20%20woz%3Aaotvboandidentificatie%20%3Fverblijfsobject%3B%0A%20%20%20%20%20%20woz%3Awaardeklasse%20waardeklasse%3A1.%0A%20%20%20%20filter(%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AD_Energielabel%20%7C%7C%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AE_Energielabel%20%7C%7C%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AF_Energielabel%20%7C%7C%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AG_Energielabel%0A%20%20%20%20)%0A%20%20%7D%0A%20%20bind(%0A%20%20%20%20if(!(bound(%3Fenergieprestatie))%2C'grey'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p__p_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AB_Energielabel%2C'%238ff334'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AC_Energielabel%2C'%23bdfc2c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AD_Energielabel%2C'%23fff200'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AE_Energielabel%2C'%23ff9a35'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AF_Energielabel%2C'%23ff7f27'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AG_Energielabel%2C'%23ed1c24'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'grey')))))))))))%20as%20%3FshapeColor)%0A%20%20bind(%0A%20%20%20%20if(!(bound(%3Fenergieprestatie))%2C'none'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p__p_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AB_Energielabel%2C'B'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AC_Energielabel%2C'C'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AD_Energielabel%2C'D'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AE_Energielabel%2C'E'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AF_Energielabel%2C'F'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AG_Energielabel%2C'G'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'unknown')))))))))))%20as%20%3Flabel)%0A%20%20bind('''%0A%7B%7Bprefix%7D%7D%0A%3Ch3%3E%0A%20%20%3Csvg%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20fill%3D%22%7B%7BshapeColor%7D%7D%22%20r%3D%2210%22%3E%0A%20%20%3C%2Fsvg%3E%0A%20%20Energielabel%20%7B%7Blabel%7D%7D%0A%3C%2Fh3%3E%0A%3Cdl%3E%0A%20%20%3Cdt%3EOpnamedatum%3C%2Fdt%3E%0A%20%20%3Cdd%3E%7B%7Bopnamedatum%7D%7D%3C%2Fdd%3E%0A%20%20%3Cdt%3ERegistratiedatum%3C%2Fdt%3E%0A%20%20%3Cdd%3E%7B%7Bregistratiedatum%7D%7D%3C%2Fddt%3E%0A%3C%2Fdl%3E'''%20as%20%3FshapeLabel)%0A%20%20bind(%3FshapeLabel%20as%20%3Fwidget)%0A%7D%0Alimit%201000%0A&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22visualization%22%3A%22heatmap%22%2C%22grouped%22%3Afalse%7D"
       data-query-ref="q1d.rq"
       data-output="geo">
</query>

<!--
## Deel 2

Panden met een winkel/industriefunctie volgens de BAG, die dicht bij
het centrum liggen, oud zijn, en waar ruimtelijke plannen woningbouw
toestaat.

<query data-query-ref="q2.rq"
       data-output="geo">
</query>

## Deel 3

Oud gebouw wat vroeger een school was, maar inmiddels niet meer.  5
Jaar combineren met functie/status-verandering.
Te laat als status “is gesloopt”.

## Scholen volgens de BRT

<query data-config="http://localhost:5000/stories/kkg/#query=prefix%20brt%3A%20%3Chttp%3A%2F%2Fbrt.basisregistraties.overheid.nl%2Fdef%2Ftop10nl%23%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aselect%20*%20%7B%0A%20%20%3Fgebouw%0A%20%20%20%20a%20brt%3ASchool%3B%0A%20%20%20%20geo%3AhasGeometry%2Fgeo%3AasWKT%20%3Fshape.%0A%7D%0Alimit%20250%0A&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22visualization%22%3A%22heatmap%22%2C%22grouped%22%3Afalse%7D"
       data-query-ref="q3a.rq"
       data-output="geo">
</query>

## BAG panden met status veranderingen binnen de afgelopen 5 jaar

<query data-query-ref="q3b.rq"
       data-output="geo">
</query>

## BAG pand & BRT school

<query data-query-ref="q3c.rq"
       data-output="geo3d">
</query>

## Examples

### BAG functies

<ul>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="green" r="15"/></svg>
    Living space
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="red" r="15"/></svg>
    Shopping
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="blue" r="15"/></svg>
    Offices
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="yellow" r="15"/></svg>
    Education
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="orange" r="15"/></svg>
    Health
  </li>
  <li>
    <svg height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" fill="violet" r="15"/></svg>
    Sport
  </li>
</ul>

<query data-query-ref="functies.rq"
       data-output="geo3d">
</query>

### WOZ waardeklasse

<query data-query-ref="waardeklassen.rq"
       data-output="geo3d">
</query>
-->
