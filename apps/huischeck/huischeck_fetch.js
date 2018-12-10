'use strict';

/* global $ document window fetch */

function makeAdressInfo(locatieserverLookup) {
  $('#AdressInfo').html(`
Nummeraanduiding: <a target="_blank" href="https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}">https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}</a><br>
Weergavenaam: ${locatieserverLookup.weergavenaam}<br>
Woonplaats: ${locatieserverLookup.woonplaatsnaam}<br>
Buurtnaam: ${locatieserverLookup.buurtnaam}<br>
Wijknaam: ${locatieserverLookup.wijknaam}<br>
Gemeentenaam: ${locatieserverLookup.gemeentenaam}<br>
Provincienaam: ${locatieserverLookup.provincienaam}<br>
Waterschapsnaam: ${locatieserverLookup.waterschapsnaam}<br>
`);

  $('#qrcodeCanvas').empty();
  $('#qrcodeCanvas').qrcode({
    render: 'canvas',
    text: `https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}`,
  });
}

$(document).ready(() => {
  $('#huischeck_now').click(() => {
    const address = $('#adres');
    console.log(address.val());

    fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?q=${address.val()}`)
      .then(response => response.json())
      .then(json => json.response.docs[0].id)
      .then(id => fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=${id}`))
      .then(response => response.json())
      .then(json => json.response.docs[0])
      .then(makeAdressInfo)
      .catch(err => console.error(err));
  });

  $('#printQRcode').click(() => {
    const qrPrintWindow = window.open('', 'PRINT', 'height=1920,width=1080');

    qrPrintWindow.document.write(`<html><head><title>${document.title}</title>`);
    qrPrintWindow.document.write('<style> @media print {@page { margin: 0; } body { margin: 1.6cm; }}</style>');
    qrPrintWindow.document.write('</head><body >');
    qrPrintWindow.document.write('<img src="Kadaster_woordmerk_RGB_crop.jpg" width="180" vspace="10mm" id="kadasterlogo" onload="print()"/>');
    qrPrintWindow.document.write('<div><canvas id="printCanvas"></canvas></div>');
    qrPrintWindow.document.write('</body></html>');
    qrPrintWindow.document.write('<script>setTimeout(function(){print(); }, 1000)</script>');

    const sourceContext = document.getElementById('qrcodeCanvas').firstChild.getContext('2d');
    const imgData = sourceContext.getImageData(0, 0, 256, 256);
    const destinationCanvas = qrPrintWindow.document.getElementById('printCanvas');
    destinationCanvas.width = 1000;
    destinationCanvas.height = 1000;

    const printContext = destinationCanvas.getContext('2d');
    printContext.putImageData(imgData, 0, 0);

    qrPrintWindow.focus(); // necessary for IE >= 10
  });
});

