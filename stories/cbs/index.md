---
endpoint: https://data.pdok.nl/sparql/cbs
layout: story
logo: /stories/cbs/logo.png
output: leaflet
title: CBS/Kadaster Data Story
---

# CBS/Kadaster Data Story

## Query 1

bv. query 1 zou dan zijn om op basis van een aantal criteria uit te
komen bij zoetermeer (dichtbij uitvalswegen, etc..)

<div data-query="http://localhost:4000/stories/cbs/index.html#query=prefix+cbs%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fcbs%23%3E%0Aprefix+def%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2F83487NED%23%3E%0Aprefix+dimension%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fdimension%23%3E%0Aprefix+gemeente%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fregios%2F2016%2Fid%2Fgemeente-geografisch%2F%3E%0Aprefix+qb%3A+%3Chttp%3A%2F%2Fpurl.org%2Flinked-data%2Fcube%23%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aselect+%3Flabel+%3Fgouda+%3Fwaddinxveen+%3Fzoetermeer+%7B%0A++values+(%3Fp)+%7B+(def%3AnabijheidVoorzieningen_Basisonderwijs_AfstandTotSchool)+(+def%3AnabijheidVoorzieningen_AfstandTotKinderdagverblijf)+%7D%0A++%3Fp+rdfs%3Alabel+%3Flabel+.%0A++%3Fobservatie1+%3Fp+%3Fgouda+%3B+dimension%3Aregio+gemeente%3AGM0513+.+%23+Gouda%0A++%3Fobservatie2+%3Fp+%3Fwaddinxveen+%3B+dimension%3Aregio+gemeente%3AGM0627+.+%23+Waddinxveen%0A++%3Fobservatie3+%3Fp+%3Fzoetermeer+%3B+dimension%3Aregio+gemeente%3AGM0637+.+%23+Zoetermeer%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql%2Fcbs&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22legend%22%3A%22right%22%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
     data-query-sparql="q1.rq"
     data-query-output="gchart">
</div>

## Query 2

We visualiseren de samenstelling van de bevolking in Zoetermeer, naar
leeftijdscategorie en per wijk, met de gemiddeldes voor heel
Nederland.

<div data-query="http://localhost:4000/stories/cbs/#query=prefix+def%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2F83487NED%23%3E%0Aprefix+dimension%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fdef%2Fdimension%23%3E%0Aprefix+land%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fregios%2F2016%2Fid%2Fland-geografisch%2F%3E%0Aprefix+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aprefix+wijk%3A+%3Chttp%3A%2F%2Fbetalinkeddata.cbs.nl%2Fregios%2F2016%2Fid%2Fwijk%2F%3E%0Aselect+%3FregioLabel+%3Finwoners0_14+%3Finwoners15_24+%3Finwoners25_44+%3Finwoners45_64+%3Finwoners65plus+%7B%0A++values+%3Fregio+%7B%0A++++land%3ANL00%0A++++wijk%3AWK063709%0A++++wijk%3AWK063702%0A++++wijk%3AWK063700%0A++++wijk%3AWK063708%0A++++wijk%3AWK063701%0A++++wijk%3AWK063704%0A++++wijk%3AWK063706%0A++++wijk%3AWK063705%0A++++wijk%3AWK063703%0A++%7D%0A++_%3A0+def%3Abevolking_AantalInwoners+%3Ftotaal+%3B+dimension%3Aregio+%3Fregio+.%0A++_%3A1+def%3Abevolking_Leeftijdsgroepen_0Tot15Jaar+%3Fx1+%3B+dimension%3Aregio+%3Fregio+.%0A++_%3A2+def%3Abevolking_Leeftijdsgroepen_15Tot25Jaar+%3Fx2+%3B+dimension%3Aregio+%3Fregio+.%0A++_%3A3+def%3Abevolking_Leeftijdsgroepen_25Tot45Jaar+%3Fx3+%3B+dimension%3Aregio+%3Fregio+.%0A++_%3A4+def%3Abevolking_Leeftijdsgroepen_45Tot65Jaar+%3Fx4+%3B+dimension%3Aregio+%3Fregio+.%0A++_%3A5+def%3Abevolking_Leeftijdsgroepen_65JaarOfOuder+%3Fx5+%3B+dimension%3Aregio+%3Fregio+.%0A++bind(xsd%3Aint(%3Fx1%2Fxsd%3Adouble(%3Ftotaal)*1.0e2)+as+%3Finwoners0_14)%0A++bind(xsd%3Aint(%3Fx2%2Fxsd%3Adouble(%3Ftotaal)*1.0e2)+as+%3Finwoners15_24)%0A++bind(xsd%3Aint(%3Fx3%2Fxsd%3Adouble(%3Ftotaal)*1.0e2)+as+%3Finwoners25_44)%0A++bind(xsd%3Aint(%3Fx4%2Fxsd%3Adouble(%3Ftotaal)*1.0e2)+as+%3Finwoners45_64)%0A++bind(xsd%3Aint(%3Fx5%2Fxsd%3Adouble(%3Ftotaal)*1.0e2)+as+%3Finwoners65plus)%0A++%3Fregio+rdfs%3Alabel+%3FregioLabel%0A%7D%0A&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fdata.pdok.nl%2Fsparql%2Fcbs&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=gchart&outputSettings=%7B%22chartConfig%22%3A%7B%22options%22%3A%7B%22hAxis%22%3A%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3Anull%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%2C%22viewWindowMode%22%3Anull%7D%2C%22legacyScatterChartLabels%22%3Atrue%2C%22vAxes%22%3A%5B%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C%22viewWindow%22%3A%7B%22max%22%3Anull%2C%22min%22%3Anull%7D%2C%22minValue%22%3Anull%2C%22maxValue%22%3Anull%7D%5D%2C%22isStacked%22%3Afalse%2C%22booleanRole%22%3A%22certainty%22%2C%22legend%22%3A%22right%22%2C%22width%22%3A600%2C%22height%22%3A371%7D%2C%22state%22%3A%7B%7D%2C%22view%22%3A%7B%22columns%22%3Anull%2C%22rows%22%3Anull%7D%2C%22isDefaultVisualization%22%3Afalse%2C%22chartType%22%3A%22ColumnChart%22%7D%2C%22motionChartState%22%3Anull%7D"
     data-query-output="gchart">
</div>

## Query 3

We visualiseren de gemiddelde woningwaarde per buurt in Zoetermeer.

<div data-query
     data-query-endpoint="https://api.demo.triply.cc/datasets/wouter/cbs-dump/services/sparql/sparql"
     data-query-output="leaflet"
     data-query-sparql="q3.rq">
</div>

## Query 4

We zoomen in op het stadscentrum van Zoetermeer (buurt <a
href="http://betalinkeddata.cbs.nl/regios/2016/id/buurt/BU06370002">BU06370002</a>).
We tonen de bouwjaren voor de gebouwen in deze buurt.  Hiervoor
combineren we informatie uit CBS Wijken en Buurten met informatie uit
de BAG.

<div data-query data-query-output="leaflet" data-query-sparql="q4.rq"></div>

## Query 5

We vergelijken de buurten in Zoetermeer op basis van hoe toegankelijk
de volgende voorzieningen zijn:

  - Basisschool
  - Huisarts
  - Kinderdagverblijf
  - Supermarkt

De kleurcode geeft de gemiddelde score voor de toegankelijkheid van
deze voorzieningen aan.

<div data-query
     data-query-endpoint="https://api.demo.triply.cc/datasets/wouter/cbs-dump/services/sparql/sparql"
     data-query-output="leaflet"
     data-query-sparql="q5.rq">
</div>

## Appendix

<table>
  <thead>
    <tr><th>Statistic</th><th>№ observations</th></tr>
  </thead>
  <tbody>
    <tr><td>bevolking_AantalInwoners</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Gehuwd</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Gescheiden</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Ongehuwd</td><td>16194</td></tr>
    <tr><td>bevolking_BurgerlijkeStaat_Verweduwd</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_GeboorteRelatief</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_GeboorteTotaal</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_SterfteRelatief</td><td>16194</td></tr>
    <tr><td>bevolking_GeboorteEnSterfte_SterfteTotaal</td><td>16194</td></tr>
    <tr><td>bevolking_Geslacht_Mannen</td><td>16194</td></tr>
    <tr><td>bevolking_Geslacht_Vrouwen</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_0Tot15Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_15Tot25Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_25Tot45Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_45Tot65Jaar</td><td>16194</td></tr>
    <tr><td>bevolking_Leeftijdsgroepen_65JaarOfOuder</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_Eenpersoonshuishoudens</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_HuishoudensMetKinderen</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_HuishoudensTotaal</td><td>16194</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_HuishoudensZonderKinderen</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Bedrijfsmotorvoertuigen</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Motorfietsen</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_sTotaal</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Brandstoftype_Personenauto_s_BrandstofBenzine</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Brandstoftype_Personenauto_s_OverigeBrandstof</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Leeftijd_Personenauto_s_6JaarEnOuder</td><td>16194</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_s_Leeftijd_Personenauto_s_JongerDan6Jaar</td><td>16194</td></tr>
    <tr><td>oppervlakte_OppervlakteLand</td><td>16194</td></tr>
    <tr><td>oppervlakte_OppervlakteTotaal</td><td>16194</td></tr>
    <tr><td>oppervlakte_OppervlakteWater</td><td>16194</td></tr>
    <tr><td>wonen_Woningvoorraad</td><td>16194</td></tr>
    <tr><td>stedelijkheid_MateVanStedelijkheid</td><td>16134</td></tr>
    <tr><td>stedelijkheid_Omgevingsadressendichtheid</td><td>16134</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenTotaal</td><td>15998</td></tr>
    <tr><td>bevolking_ParticuliereHuishoudens_GemiddeldeHuishoudensgrootte</td><td>15882</td></tr>
    <tr><td>bevolking_Bevolkingsdichtheid</td><td>15596</td></tr>
    <tr><td>nabijheidVoorzieningen_AfstandTotGroteSupermarkt</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_AfstandTotHuisartsenpraktijk</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_AfstandTotKinderdagverblijf</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_Basisonderwijs_AfstandTotSchool</td><td>15520</td></tr>
    <tr><td>nabijheidVoorzieningen_Basisonderwijs_ScholenBinnen3Km</td><td>15520</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_GemiddeldElektriciteitsverbruikTotaal</td><td>15033</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_GemiddeldAardgasverbruikTotaal</td><td>14847</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarEigendom_EigenWoning</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Ao</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Aow</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Bijstand</td><td>14814</td></tr>
    <tr><td>socialeZekerheid_PersonenPerSoortUitkering_Ww</td><td>14814</td></tr>
    <tr><td>wonen_WoningenNaarBewoning_PercentageBewoond</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarBewoning_PercentageOnbewoond</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarBouwjaar_BouwjaarVanaf2000</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarBouwjaar_BouwjaarVoor2000</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarType_PercentageEengezinswoning</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarType_PercentageMeergezinswoning</td><td>14746</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_EigendomOnbekend</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Huurwoningen_HuurwoningenTotaal</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Huurwoningen_InBezitOverigeVerhuurders</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Huurwoningen_InBezitWoningcorporatie</td><td>14721</td></tr>
    <tr><td>wonen_WoningenNaarEigendom_Koopwoningen</td><td>14721</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarEigendom_EigenWoning</td><td>14624</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_ALandbouw_BosbouwEnVisserij</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_B-fNijverheidEnEnergie</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_G_p_IHandelEnHoreca</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_H_p_JVervoer_InformatieEnCommunicatie</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_K-lFinancieleDiensten_OnroerendGoed</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_M-nZakelijkeDienstverlening</td><td>13896</td></tr>
    <tr><td>bedrijfsvestigingen_Sbi2008_BedrijfsvestigingenNaarActiviteit_R-uCultuur_Recreatie_OverigeDiensten</td><td>13896</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_sNaarOppervlakte</td><td>13268</td></tr>
    <tr><td>motorvoertuigen_Personenauto_s_Personenauto_sPerHuishouden</td><td>13268</td></tr>
    <tr><td>wonen_GemiddeldeWoningwaarde</td><td>13018</td></tr>
    <tr><td>postcode_Dekkingspercentage</td><td>12766</td></tr>
    <tr><td>postcode_MeestVoorkomendePostcode</td><td>12766</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_VrijstaandeWoning</td><td>12694</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_VrijstaandeWoning</td><td>12595</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarEigendom_Huurwoning</td><td>12439</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarEigendom_Huurwoning</td><td>12223</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Twee-onder-een-kap-woning</td><td>11159</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Twee-onder-een-kap-woning</td><td>11027</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Tussenwoning</td><td>10524</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Tussenwoning</td><td>10334</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Hoekwoning</td><td>10270</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Hoekwoning</td><td>10094</td></tr>
    <tr><td>energie_GemiddeldElektriciteitsverbruik_NaarWoningtype_Appartement</td><td>9099</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_NaarWoningtype_Appartement</td><td>8908</td></tr>
    <tr><td>energie_GemiddeldAardgasverbruik_PercentageWoningenMetStadsverwarming</td><td>866</td></tr>
  </tbody>
</table>
