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

<h1 class="txt">Cases 1: Mogelijkheden voor projectontwikkeling</h1>

<p class="txt">We willen dat er meer huizen worden verkocht.  Één
manier om dat voor elkaar te krijgen is door meer huizen te bouwen.
Buitenstedelijk bouwen is echter lastig: dit tast groen aan en is
mogelijk minder duurzaam.  Randstedelijk en binnenstedelijk bouwen is
ook lastig, want vaak moeten bestaande woningen eerst worden
afgebroken alvorens verbeterde nieuwbouw kan worden gepleegd.  Daarom
deze Data Story: we combineren data uit verschillende PDOK bronnen en
gebruiken de PDOK Knowledge Graph om te zoeken naar die plekken in
Nederland waar de meeste potentie voor projectontwikkeling is.</p>

<h2 class="txt">Bevraging 1A: Vind een geschikte wijk</h2>

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

<h2 class="txt">Bevraging 1B: Voeg meer criteria toe</h2>

<p class="txt">Laten we hier nog enkele zoekcriteria aan toevoegen:</p>

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

<h2 class="txt">Bevraging 1C: Kandidaat wijken in Dordrecht</h2>

<p class="txt">Twee van de kandidaat wijken blijken in Dordrecht te
liggen, dus laten we daar eens verder kijken.  Dit zijn de buurten in
Dordrecht met in de weergave hun gemiddelde woningwaardes.  Deze
waardes zijn afkomstig van het Centraal Bureau van de Statistiek
(CBS).</p>

<div class="alert alert-info txt" role="alert">
  <h2>Probeer uit</h2>
  <p>In deze 3D omgeving zijn de kandidaat wijken weergegeven.  De hoogte en kleur van de wijken duidt de hoogte van de gemiddelde woningwaarde aan.  Door op de 3D objecten te klikken wordt de naam van de wijk getoond samen met de gemiddelde woningwaarde voor die wijk.  Navigatie binnen de 3D omgeving functioneert door gebruik te maken van de muis en de <kbd>Ctrl</kbd> toets.</p>
</div>

<query data-endpoint="https://betalinkeddata.cbs.nl/sparql"
       data-query-ref="q1c.rq"
       data-output="geo3d">
</query>

<h2 class="txt">Bevraging 1D: BAG panden die aan de criteria voldoen</h2>

<p class="txt">Dan gecombineerd met BAG panden van vóór 1970, WOZ
waarde in de laagste klasse, en energielabel D of hoger.  De ‘hete’
deleten van de kaart duiden aan waar de potentie het hoogst is.

<div class="alert alert-info txt" role="alert">
  <h2>Probeer uit</h2>
  <p>Deze heatmap maakt in één oogopslag duidelijk waar de meeste kandidaat panden gelokaliseerd zijn.  Het is ook mogelijk om dezelfde informatie op andere manieren te visualiseren, bijvoorbeeld door de editor te openen en weergave optie “Gallery” te kiezen.</p>
</div>

<query data-config="http://localhost:5000/stories/pdok-kg/#query=%23%201.%20BAG%20bouwjaar%20tussen%201960%20en%201970%2C%0A%23%202.%20RVO%20energielabel%20D%20of%20slechter%2C%0A%23%203.%20WOZ%20in%20de%20laagste%20klasse%0Aprefix%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0Aprefix%20begrip_bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fid%2Fbegrip%2F%3E%0Aprefix%20begrip_energielabel%3A%20%3Chttp%3A%2F%2Fenergielabels.gebouwen.overheid.nl%2Fepbd%2Fid%2Fbegrip%2F%3E%0Aprefix%20cbs%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fcbs%23%3E%0Aprefix%20def%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2F83487NED%23%3E%0Aprefix%20dimension%3A%20%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fdimension%23%3E%0Aprefix%20energielabels%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fdef%2Fenergielabels%2F%3E%0Aprefix%20epbd%3A%20%3Chttp%3A%2F%2Fenergielabels.gebouwen.overheid.nl%2Fdef%2Fepbd%23%3E%0Aprefix%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20geof%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Fdef%2Ffunction%2Fgeosparql%2F%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20waardeklasse%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fwoz%2Fdef%2Fwaardeklasse%2F%3E%0Aprefix%20woz%3A%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fwoz%2Fdef%2F%3E%0Aselect%20*%20%7B%0A%20%20%7B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20select%0A%20%20%20%20%20%20%20%20%3Fpand%0A%20%20%20%20%20%20%20%20%3Fshape%0A%20%20%20%20%20%20%20%20(sample(%3Fprefix0)%20as%20%3Fprefix)%0A%20%20%20%20%20%20%20%20(sample(%3FshapeName0)%20as%20%3FshapeName)%0A%20%20%20%20%20%20%20%20(sample(%3Fverblijfsobject0)%20as%20%3Fverblijfsobject)%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20graph%20%3FwoonplaatsVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fwoonplaats%20bag%3AnaamWoonplaats%20%22Dordrecht%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FwoonplaatsVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FopenbareRuimteVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3FopenbareRuimte%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AbijbehorendeWoonplaats%20%3Fwoonplaats%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AnaamOpenbareRuimte%20%3FopenbareRuimteNaam.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FopenbareRuimteVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FnummeraanduidingVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fnummeraanduiding%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Apostcode%20%3Fpostcode.%0A%20%20%20%20%20%20%20%20%20%20optional%20%7B%20%3Fnummeraanduiding%20bag%3Ahuisletter%20%3Fhuisletter%20%7D%0A%20%20%20%20%20%20%20%20%20%20optional%20%7B%20%3Fnummeraanduiding%20bag%3Ahuisnummertoevoeging%20%3Fhuisnummertoevoeging%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FnummeraanduidingVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FverblijfsobjectVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fverblijfsobject0%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Aoppervlakte%20%3Foppervlakte%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Apandrelatering%20%3Fpand%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Astatus%20%3FverblijfsobjectStatus.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3FverblijfsobjectStatus%20rdfs%3Alabel%20%3FverblijfsobjectStatusLabel.%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FverblijfsobjectVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20graph%20%3FpandVoorkomen%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Fpand%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3Fshape%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20bag%3Astatus%20%3FpandStatus.%0A%20%20%20%20%20%20%20%20%20%20filter(%3Fbouwjaar%20%3E%201950%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Fbouwjaar%20%3C%201960%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3FpandStatus%20not%20in%20(begrip_bag%3APandGesloopt%2C%20begrip_bag%3ASloopvergunningVerleend))%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3FpandVoorkomen%20bag%3AeindGeldigheid%20%5B%5D%20%7D%0A%20%20%20%20%20%20%20%20%3FpandStatus%20rdfs%3Alabel%20%3FpandStatusLabel%0A%20%20%20%20%20%20%20%20bind(concat(str(%3FopenbareRuimteNaam)%2C'%20'%2Cstr(%3Fhuisnummer)%2C'%2C%20'%2Cstr(%3Fpostcode)%2C'%20Dordrecht')%20as%20%3FshapeName0)%0A%20%20%20%20%20%20%20%20bind(concat(%0A'%3Ch3%3E'%2Cstr(%3FopenbareRuimteNaam)%2C'%20'%2Cstr(%3Fhuisnummer)%2C'%3C%2Fh3%3E'%2C%0A'%3Cdl%3E'%2C%0A%20%20'%3Cdt%3EPand%20oppervlakte%3C%2Fdt%3E'%2C%0A%20%20'%3Cdd%3E'%2Cstr(%3Foppervlakte)%2C'%20m2%3C%2Fdd%3E'%2C%0A%20%20'%3Cdt%3EPand%20status%3C%2Fdt%3E'%2C%0A%20%20'%3Cdd%3E'%2Cstr(%3FpandStatusLabel)%2C'%3C%2Fdd%3E'%2C%0A%20%20'%3Cdt%3EBouwjaar%3C%2Fdt%3E'%2C%0A%20%20'%3Cdd%3E'%2Cstr(%3Fbouwjaar)%2C'%3C%2Fdd%3E'%2C%0A'%3C%2Fdl%3E')%20as%20%3Fprefix0)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20group%20by%20%3Fpand%20%3Fshape%0A%20%20%20%20%20%20limit%201000%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20service%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fmigratie%2Fsparql%3E%20%7B%0A%20%20%20%20%3Fpand%20%3Chttps%3A%2F%2Fdata.labs.pdok.nl%2Fbag%2Fdef%2FmeasuredHeight%3E%20%3FshapeHeight.%0A%20%20%20%20%3Fgebouwdeel%0A%20%20%20%20%20%20epbd%3Aenergieprestatie-indicator%20%3Fenergieprestatie%3B%0A%20%20%20%20%20%20epbd%3AheeftAdresseerbaarObject%20%3Fverblijfsobject%3B%0A%20%20%20%20%20%20foaf%3AisPrimaryTopicOf%20%3Fenergielabel.%0A%20%20%20%20%3Fenergielabel%0A%20%20%20%20%20%20epbd%3Aopnamedatum%20%3Fopnamedatum%3B%0A%20%20%20%20%20%20epbd%3Aregistratiedatum%20%3Fregistratiedatum.%0A%20%20%20%20%3Fwoz%0A%20%20%20%20%20%20woz%3Aaotvboandidentificatie%20%3Fverblijfsobject%3B%0A%20%20%20%20%20%20woz%3Awaardeklasse%20waardeklasse%3A1.%0A%20%20%20%20filter(%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AD_Energielabel%20%7C%7C%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AE_Energielabel%20%7C%7C%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AF_Energielabel%20%7C%7C%0A%20%20%20%20%20%20%3Fenergieprestatie%3Dbegrip_energielabel%3AG_Energielabel%0A%20%20%20%20)%0A%20%20%7D%0A%20%20bind(%0A%20%20%20%20if(!(bound(%3Fenergieprestatie))%2C'grey'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p__p_Energielabel%2C'%2322b14c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AB_Energielabel%2C'%238ff334'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AC_Energielabel%2C'%23bdfc2c'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AD_Energielabel%2C'%23fff200'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AE_Energielabel%2C'%23ff9a35'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AF_Energielabel%2C'%23ff7f27'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AG_Energielabel%2C'%23ed1c24'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'grey')))))))))))%20as%20%3FshapeColor)%0A%20%20bind(%0A%20%20%20%20if(!(bound(%3Fenergieprestatie))%2C'none'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AA_p__p__p_Energielabel%2C'A'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AB_Energielabel%2C'B'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AC_Energielabel%2C'C'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AD_Energielabel%2C'D'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AE_Energielabel%2C'E'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AF_Energielabel%2C'F'%2C%0A%20%20%20%20if(%3Fenergieprestatie%3Dbegrip_energielabel%3AG_Energielabel%2C'G'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'unknown')))))))))))%20as%20%3Flabel)%0A%20%20bind('''%0A%7B%7Bprefix%7D%7D%0A%3Ch3%3E%0A%20%20%3Csvg%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20fill%3D%22%7B%7BshapeColor%7D%7D%22%20r%3D%2210%22%3E%0A%20%20%3C%2Fsvg%3E%0A%20%20Energielabel%20%7B%7Blabel%7D%7D%0A%3C%2Fh3%3E%0A%3Cdl%3E%0A%20%20%3Cdt%3EOpnamedatum%3C%2Fdt%3E%0A%20%20%3Cdd%3E%7B%7Bopnamedatum%7D%7D%3C%2Fdd%3E%0A%20%20%3Cdt%3ERegistratiedatum%3C%2Fdt%3E%0A%20%20%3Cdd%3E%7B%7Bregistratiedatum%7D%7D%3C%2Fddt%3E%0A%3C%2Fdl%3E'''%20as%20%3FshapeLabel)%0A%20%20bind(%3FshapeLabel%20as%20%3Fwidget)%0A%7D%0Alimit%201000%0A&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=geo&outputSettings=%7B%22map%22%3A%22nlmaps%22%2C%22visualization%22%3A%22heatmap%22%2C%22grouped%22%3Afalse%7D"
       data-query-ref="q1d.rq"
       data-output="geo">
</query>

<h1 class="txt">Casus 2: Herbenutten van schoolgebouwen</h1>

<p class="txt">Een andere mogelijkheid voor het realiseren van nieuwe
woningen zijn leegstaande schoolgebouwen.</p>

<h2 class="txt">Bevraging 2A: BAG panden met onderwijsfunctie door de tijd heen</h2>

<p class="txt">Het volgende diagram toont een overzicht van het aantal
BAG panden met een onderwijsfunctie, geteld per jaar en per status
categorie.  We zien dat de afgelopen jaren een groot aantal BAG panden
met een onderwijsfunctie van status is veranderd.</p>

<query data-config="https://stories.triply.cc/kadaster/pdok-kg/#query=prefix%20bag%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fdef%2Fbag%23%3E%0Aprefix%20geo%3A%20%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0Aprefix%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix%20begrip%3A%20%3Chttp%3A%2F%2Fbag.basisregistraties.overheid.nl%2Fid%2Fbegrip%2F%3E%0Aselect%0A%20%20(str(%3Fyear)%20as%20%3Fx)%0A%20%20%3FbouwGestart%20(str(%3FbouwGestart)%20as%20%3FbouwGestartLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FbouwGestart)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22bouw%20gestart%22.')%20as%20%3FbouwGestartHover)%0A%20%20%3FbouwvergunningVerleend%20(str(%3FbouwvergunningVerleend)%20as%20%3FbouwvergunningVerleendLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FbouwvergunningVerleend)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22bouwvergunning%20verleend%22.')%20as%20%3FbouwvergunningVerleendHover)%0A%20%20%3FpandInGebruik%20(str(%3FpandInGebruik)%20as%20%3FpandInGebruikLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FpandInGebruik)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22pand%20in%20gebruik%22.')%20as%20%3FpandInGebruikHover)%0A%20%20%3FpandInGebruikNietIngemeten%20(str(%3FpandInGebruikNietIngemeten)%20as%20%3FpandInGebruikNietIngemetenLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FpandInGebruikNietIngemeten)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22pand%20in%20gebruik%2C%20niet%20ingemeten%22.')%20as%20%3FpandInGebruikNietIngemetenHover)%0A%20%20%3FsloopvergunningVerleend%20(str(%3FsloopvergunningVerleend)%20as%20%3FsloopvergunningVerleendLabel)%20(concat('In%20'%2Cstr(%3Fyear)%2C'%20waren%20er%20'%2Cstr(%3FsloopvergunningVerleend)%2C'%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%22sloopvergunning%20verleend%22.')%20as%20%3FsloopvergunningVerleendHover)%0A%7B%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FbouwGestart0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3ABouwGestart.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FbouwvergunningVerleend0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3ABouwvergunningVerleend.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FpandInGebruik0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3APandInGebruik.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FpandInGebruikNietIngemeten0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3APandInGebruik_nietIngemeten.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20optional%20%7B%0A%20%20%20%20select%20%3Fyear%20(count(*)%20as%20%3FsloopvergunningVerleend0)%20%7B%0A%20%20%20%20%20%20values%20%3Fyear%20%7B%202008%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20%7D%0A%20%20%20%20%20%20bind(%22Dordrecht%22%40nl%20as%20%3FwoonplaatsNaam)%0A%20%20%20%20%20%20graph%20%3Fg0%20%7B%20%3Fplace%20rdfs%3Alabel%20%3FwoonplaatsNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg0%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg1%20%7B%20%3FopenbareRuimte%20bag%3AbijbehorendeWoonplaats%20%3Fplace%3B%20bag%3AnaamOpenbareRuimte%20%3FstraatNaam.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg1%20bag%3AeindGeldigheid%20%3Feind1.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg2%20%7B%20%3Fnummeraanduiding%20bag%3AbijbehorendeOpenbareRuimte%20%3FopenbareRuimte%3B%20bag%3Ahuisnummer%20%3Fhuisnummer%3B%20bag%3Apostcode%20%3Fpostcode.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg2%20bag%3AeindGeldigheid%20%3Feind2.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg3%20%7B%20%3Fverblijfsobject%20a%20bag%3AVerblijfsobjectOnderwijsfunctie%3B%20bag%3Ahoofdadres%20%3Fnummeraanduiding%3B%20bag%3Aoppervlakte%20%3Foppervlakte%3B%20bag%3Apandrelatering%20%3Fpand.%20%7D%0A%20%20%20%20%20%20filter%20not%20exists%20%7B%20%3Fg3%20bag%3AeindGeldigheid%20%3Feind3.%20%7D%0A%20%20%20%20%20%20graph%20%3Fg4%20%7B%20%3Fpand%20bag%3AgeometriePand%2Fgeo%3AasWKT%20%3FpandShape%3B%20bag%3AoorspronkelijkBouwjaar%20%3Fbouwjaar%3B%20bag%3Astatus%20begrip%3ASloopvergunningVerleend.%20%7D%0A%20%20%20%20%20%20%3Fg4%20bag%3AbeginGeldigheid%20%3Fbegin.%0A%20%20%20%20%20%20optional%20%7B%20%3Fg4%20bag%3AeindGeldigheid%20%3Feind0.%20%7D%0A%20%20%20%20%20%20bind(if(bound(%3Feind0)%2C%3Feind0%2C3000)%20as%20%3Feind)%0A%20%20%20%20%20%20filter(year(%3Fbegin)%20%3C%3D%20%3Fyear%20%26%26%20%3Fyear%20%3C%3D%20year(%3Feind))%0A%20%20%20%20%7D%0A%20%20%20%20group%20by%20%3Fyear%0A%20%20%7D%0A%20%20bind(if(bound(%3FbouwGestart0)%2C%3FbouwGestart0%2C0)%20as%20%3FbouwGestart)%0A%20%20bind(if(bound(%3FbouwvergunningVerleend0)%2C%3FbouwvergunningVerleend0%2C0)%20as%20%3FbouwvergunningVerleend)%0A%20%20bind(if(bound(%3FpandInGebruik0)%2C%3FpandInGebruik0%2C0)%20as%20%3FpandInGebruik)%0A%20%20bind(if(bound(%3FpandInGebruikNietIngemeten0)%2C%3FpandInGebruikNietIngemeten0%2C0)%20as%20%3FpandInGebruikNietIngemeten)%0A%20%20bind(if(bound(%3FsloopvergunningVerleend0)%2C%3FsloopvergunningVerleend0%2C0)%20as%20%3FsloopvergunningVerleend)%0A%7D%0A&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=text%2Fturtle%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22dataTable%22%3A%7B%22cols%22%3A%5B%7B%22id%22%3A%22%22%2C%22label%22%3A%22x%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwGestart%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwGestartLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwGestartHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwvergunningVerleend%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%2C%22p%22%3A%7B%7D%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwvergunningVerleendLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22bouwvergunningVerleendHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruik%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikNietIngemeten%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikNietIngemetenLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22pandInGebruikNietIngemetenHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22sloopvergunningVerleend%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22sloopvergunningVerleendLabel%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%2C%7B%22id%22%3A%22%22%2C%22label%22%3A%22sloopvergunningVerleendHover%22%2C%22pattern%22%3A%22%22%2C%22type%22%3A%22string%22%7D%5D%2C%22rows%22%3A%5B%7B%22c%22%3A%5B%7B%22v%22%3A%222010%22%7D%2C%7B%22v%22%3A5%7D%2C%7B%22v%22%3A%225%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%205%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A7%7D%2C%7B%22v%22%3A%227%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%207%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A54%7D%2C%7B%22v%22%3A%2254%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%2054%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A4%7D%2C%7B%22v%22%3A%224%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%204%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A9%7D%2C%7B%22v%22%3A%229%22%7D%2C%7B%22v%22%3A%22In%202010%20waren%20er%209%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222011%22%7D%2C%7B%22v%22%3A15%7D%2C%7B%22v%22%3A%2215%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2015%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A12%7D%2C%7B%22v%22%3A%2212%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2012%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A49%7D%2C%7B%22v%22%3A%2249%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2049%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A7%7D%2C%7B%22v%22%3A%227%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%207%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A13%7D%2C%7B%22v%22%3A%2213%22%7D%2C%7B%22v%22%3A%22In%202011%20waren%20er%2013%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222012%22%7D%2C%7B%22v%22%3A14%7D%2C%7B%22v%22%3A%2214%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%2014%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A8%7D%2C%7B%22v%22%3A%228%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%208%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A45%7D%2C%7B%22v%22%3A%2245%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%2045%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A17%7D%2C%7B%22v%22%3A%2217%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%2017%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A8%7D%2C%7B%22v%22%3A%228%22%7D%2C%7B%22v%22%3A%22In%202012%20waren%20er%208%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222013%22%7D%2C%7B%22v%22%3A7%7D%2C%7B%22v%22%3A%227%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%207%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A3%7D%2C%7B%22v%22%3A%223%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%203%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A40%7D%2C%7B%22v%22%3A%2240%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%2040%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A18%7D%2C%7B%22v%22%3A%2218%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%2018%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A4%7D%2C%7B%22v%22%3A%224%22%7D%2C%7B%22v%22%3A%22In%202013%20waren%20er%204%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%2C%7B%22c%22%3A%5B%7B%22v%22%3A%222014%22%7D%2C%7B%22v%22%3A1%7D%2C%7B%22v%22%3A%221%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%201%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouw%20gestart%5C%22.%22%7D%2C%7B%22v%22%3A2%7D%2C%7B%22v%22%3A%222%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%202%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22bouwvergunning%20verleend%5C%22.%22%7D%2C%7B%22v%22%3A40%7D%2C%7B%22v%22%3A%2240%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%2040%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%5C%22.%22%7D%2C%7B%22v%22%3A9%7D%2C%7B%22v%22%3A%229%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%209%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22pand%20in%20gebruik%2C%20niet%20ingemeten%5C%22.%22%7D%2C%7B%22v%22%3A0%7D%2C%7B%22v%22%3A%220%22%7D%2C%7B%22v%22%3A%22In%202014%20waren%20er%200%20BAG%20panden%20met%20een%20onderwijsfunctie%20met%20status%20%5C%22sloopvergunning%20verleend%5C%22.%22%7D%5D%7D%5D%7D%2C%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindow%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22curveType%22%3A%22%22%2C%22booleanRole%22%3A%22certainty%22%2C%22lineWidth%22%3A2%2C%22series%22%3A%7B%220%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%221%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%222%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%223%22%3A%7B%22hasAnnotations%22%3Atrue%7D%2C%224%22%3A%7B%22hasAnnotations%22%3Atrue%7D%7D%2C%22legend%22%3A%22right%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3A%5B0%2C1%2C%7B%22sourceColumn%22%3A2%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22bouwGestartLabel%22%7D%2C%7B%22sourceColumn%22%3A3%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22bouwGestartHover%22%7D%2C4%2C%7B%22sourceColumn%22%3A5%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22bouwvergunningVerleendLabel%22%7D%2C%7B%22sourceColumn%22%3A6%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22bouwvergunningVerleendHover%22%7D%2C7%2C%7B%22sourceColumn%22%3A8%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22pandInGebruikLabel%22%7D%2C%7B%22sourceColumn%22%3A9%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22pandInGebruikHover%22%7D%2C10%2C%7B%22sourceColumn%22%3A11%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22pandInGebruikNietIngemetenLabel%22%7D%2C%7B%22sourceColumn%22%3A12%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22pandInGebruikNietIngemetenHover%22%7D%2C13%2C%7B%22sourceColumn%22%3A14%2C%22properties%22%3A%7B%22role%22%3A%22annotation%22%7D%2C%22label%22%3A%22sloopvergunningVerleendLabel%22%7D%2C%7B%22sourceColumn%22%3A15%2C%22properties%22%3A%7B%22role%22%3A%22annotationText%22%7D%2C%22label%22%3A%22sloopvergunningVerleendHover%22%7D%5D%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22LineChart%22%7D%7D"
       data-query-ref="scholen-bag-mutaties-diagram.rq"
       data-output="gchart">
</query>

<h2 class="txt">Bevraging 2B: Mutaties voor BAG panden met onderwijsfunctie</h2>

<p class="txt">We kunnen deze panden op de kaart zetten, samen met hun
recente mutaties volgens de BAG, en in relatie tot hun bijbehorende
perceel volgens de BRK.  Dit laatste is van belang omdat het laat zien
hoeveel bouwgrond er mogelijk vrij zou kunnen komen wanneer een
voormalig schoolgebouw vrijkomt voor nieuwbouw.</p>

<query data-query-ref="scholen-bag-mutaties-map.rq"
       data-output="geo">
</query>

<h2 class="txt">Bevraging 2C: BRT school én BAG pand met onderwijsfunctie</h2>

<p class="txt">De BRT bevat ook schoolgebouwen, maar deze set is
onvolledig.  Slechts één van de BAG panden met een onderwijsfunctie
komt ook als zodanig in de BRT voor.</p>

<query data-query-ref="scholen-bag-en-brt.rq"
       data-output="geo3d">
</query>

<h1 class="txt">Casus 3: Energielabel verplichting kantoren</h1>

<p class="txt">Vanaf 2023 moet ieder kantoorpand in Nederland met een
oppervlakte groter dan 100 m² minimaal energielabel C hebben.  Een
kantoor dat per 1 januari 2023 energielabel E of slechter heeft mag
dan niet meer als zodanig worden gebruikt.  Deze bepaling is een
wijziging van het Bouwbesluit 2012 en is op 2 november 2018 <a
href="https://zoek.officielebekendmakingen.nl/stb-2018-380.html"
target="_blank">gepubliceerd in het Staatsblad</a>.

<table class="txt">
<thead>
<tr><th>Kleur</th><th>Energielabel</th></tr>
</thead>
<tbody>
<tr>
<td>
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="#22b14c" r="9"/>
</svg>
</td>
<td>A, A+, A++, A+++</td>
</tr>
<tr>
<td>
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="#8ff334" r="9"/>
</svg>
</td>
<td>B</td>
</tr>
<tr>
<td>
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="#bdfc2c" r="9"/>
</svg>
</td>
<td>C</td>
</tr>
<tr>
<td>
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="#fff200" r="9"/>
</svg>
</td>
<td>D</td>
</tr>
<tr>
<td>
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="#ff9a35" r="9"/>
</svg>
</td>
<td>E</td>
</tr>
<tr>
<td>
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="#ff7f27" r="9"/>
</svg>
</td>
<td>F</td>
</tr>
<tr>
<td>
<svg height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" fill="#ed1c24" r="9"/>
</svg>
</td>
<td>G</td>
</tr>
</tbody>
</table>

<p class="txt">Soms bevinden zich in één pand meerdere kantoren, die mogelijk verschillende energielabels hebben.  In dat geval is de kleur van het pand bepaald door het slechtste enrgielabel dat binnen dat pand aanwezig is.</p>

<div class="alert alert-info txt" role="alert">
  <h2>Probeer uit</h2>
  <p>Door op de panden te klikken wordt een overzicht getoond van de kantoren en daarbij behorende energielabels binnen dat pand.</p>
</div>

<query data-query-ref="energielabels-aggregatie.rq"
       data-output="geo3d">
</query>
