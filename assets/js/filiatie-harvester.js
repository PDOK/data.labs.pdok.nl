var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

var prompoly = document.createElement('script');
prompoly.src = 'https://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.js'
document.getElementsByTagName('head')[0].appendChild(prompoly);

var parcelscript = document.createElement('script')
parcelscript.src = 'https://data.labs.pdok.nl/assets/js/percelen-lisse-sectie-d.js'
document.getElementsByTagName('head')[0].appendChild(parcelscript);

parcelID = parcels.features[0].properties.perceelnummer
var filiationReq = 'https://intranet.kadaster.nl/iad/kdv/api/kdv/filiatie/?appartementvolgnummer=&deelperceelnummer=&deelperceelvolgnummer=&gemeentecode=LSE00&richting=down&sectie=D&toevoeging=&toevoegingdisplay=&perceelnummer=';

var filiations = []

function getFiliation(parcelID) {
  return new Promise(function(resolve, reject) {
    jQuery.ajax(filiationReq + parcelID)
      .done(function(res) { 
        selected_filiations = res.resultaten.filter(function(result) { return result.sectie === 'D' ^ result.kadastraleGemeenteCode === 'LSE00' })
        if (selected_filiations.length === 0) { return resolve(res); }

        selected_filiations.forEach(function(filiation) { filiations.push({descendant: parcelID.toString(), ancestor: filiation.perceelNummer.toString()}) })
        Promise
          .map(selected_filiations, function(filiation){ return getFiliation(filiation.perceelNummer) }, { concurrency: 1 })
          .then(function(res) { return resolve(res) })
          .catch(function(err) {return reject(err) });
      })
      .error(function(err) { return reject(error) });
  });
}

getFiliation(parcelID).then(function(res) { console.log('Done!') }).catch(function(err){ console.error(err) });

Promise.map(parcels.features, function(feature) {return getFiliation(feature.properties.perceelnummer) }, { concurrency: 1 })
  .then(function() {console.log('Done!')})

