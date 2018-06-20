'use strict';

/* eslint-disable no-console, func-names, prefer-template,prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-env browser */

var parcels;
var jQuery;
var jq = document.createElement('script');
var prompoly = document.createElement('script');
var parcelscript = document.createElement('script');
var parcel;
var filiationReq = 'https://intranet.kadaster.nl/iad/kdv/api/kdv/filiatie/?appartementvolgnummer=&deelperceelnummer=&deelperceelvolgnummer=&gemeentecode=LSE00&richting=down&sectie=D&toevoeging=&toevoegingdisplay=&perceelnummer=';
var processedFiliations = [];

jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(jq);
prompoly.src = 'https://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.js';
document.getElementsByTagName('head')[0].appendChild(prompoly);
parcelscript.src = 'https://data.labs.pdok.nl/assets/js/percelen-lisse-sectie-d.js';
document.getElementsByTagName('head')[0].appendChild(parcelscript);

function getFiliation(parcelID) {
  return new Promise(function (resolve, reject) {
    jQuery.ajax(filiationReq + parcelID)
      .done(function (res) {
        var selectedFiliations = res.resultaten
        .filter(function filterOnlyLisseSectionD(filiation) {
          return filiation.sectie === 'D' && filiation.gemeenteCode === 'LSE00';
        })
        .filter(function skipProcessedEntries(filiation) {
          var link = parcelID + '->' + filiation.perceelNummer; 
          var alreadyProcessed = jQuery.inArray(link, processedFiliations);
          if (alreadyProcessed > -1) {
            console.log('Already did', link);
            return false
          } else {
            return true
          }
        });
        if (selectedFiliations.length === 0) { return resolve(res); }

        return Promise
          .mapSeries(selectedFiliations, function (filiation) {
            var url = 'https://data.labs.pdok.nl/filiation?descendant=' + parcelID
            + '&ancestor=' + filiation.perceelNummer
            + '&timestamp=' + new Date().toUTCString();
            var fq = document.createElement('script');
            fq.src = url;
            jQuery('head').append(fq);
            jQuery(document).ready(function () { jQuery(fq).remove(); });
            var link = parcelID + '->' + filiation.perceelNummer; 
            processedFiliations.push(link);
            console.log('Added', link);

            return getFiliation(filiation.perceelNummer);
          })
          .then(function (r) { return resolve(r); })
          .catch(function (err) { return reject(err); });
      })
      .fail(function (err) { return reject(err); });
  });
}

parcel = parcels.features[0].properties.perceelnummer;
getFiliation(parcel, retries=3)
  .then(function () { console.log('Done!'); })
  .catch(function (err) { console.error(err); });

Promise.mapSeries(parcels.features.slice(1000), function (feature, index, length) {
  console.log('Process contemporary entry', index, 'of', length);
  return getFiliation(feature.properties.perceelnummer, retries=3);
})
  .then(function () { console.log('Done!'); })
  .catch(function (e) { console.error(e); });


