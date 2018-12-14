'use strict';

/* global $ document window fetch */

let globalLookup = {};

function makeAdressInfo(locatieserverLookup) {
  console.log(locatieserverLookup);
    globalLookup = locatieserverLookup;
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


  $('#qrcode').empty();
  const logoSrc = `https://data.labs.pdok.nl/api/v1/text2image?text=${locatieserverLookup.huis_nlt}`;

  fetch(logoSrc)
      .then((res) => {
          if (res.status == 200) {
              $('#qrcode').append('<canvas id="qrcodeCanvas"/>');
              return QrCodeWithLogo.toCanvas({
                  canvas: document.getElementById('qrcodeCanvas'),
                  content: `https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}`,
                  width: 200,
                  logo: {
                      src: logoSrc,
                      logoSize: 0.2
                  }
              });
          } else {
              return $('#qrcode').qrcode({
                  render: 'canvas',
                  text: `https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}`,
              });
          }
      })
      .catch((err) => {
          console.error(err);
          $('#qrcode').qrcode({
              render: 'canvas',
              text: `https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}`,
          })
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
    if (!globalLookup) return;
    const qrPrintWindow = window.open('', 'PRINT', 'height=1920,width=1080');

    qrPrintWindow.document.write(`
<!doctype html>
<html lang="nl-NL"><head>
<title>${document.title}</title>
<script src="/assets/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="/apps/huischeck/jquery.qrcode.min.js"></script>
<script src="/assets/js/qr-code-with-logo.browser.min.js"></script>
<style> @media print {@page { margin: 0; } body { margin: 1.6cm; }}</style>
</head><body>
<img alt="Kadaster logo" src="Kadaster_woordmerk_RGB_crop.jpg" width="170" hspace="20" vspace="10mm" id="kadasterlogo"/>
<div id="qrcode" style="width: 1000px; height: 1000px"></div>
<script>
    'use strict';
    const logoSrc = 'https://data.labs.pdok.nl/api/v1/text2image?text=${globalLookup.huis_nlt}';
    fetch(logoSrc)
          .then((res) => {
              if (res.status == 200) {
                  $('#qrcode').append('<canvas id="qrcodeCanvas"/>');
                  return QrCodeWithLogo.toCanvas({
                      canvas: document.getElementById('qrcodeCanvas'),
                      content: 'https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${globalLookup.nummeraanduiding_id}',
                      width: 200,
                      logo: {
                          src: logoSrc,
                          logoSize: 0.2
                      }
                  });
              } else {
                  return $('#qrcode').qrcode({
                      render: 'canvas',
                      text: 'https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${globalLookup.nummeraanduiding_id}',
                  });
              }
          })
          .catch((err) => {
              console.error(err);
              $('#qrcode').qrcode({
                  render: 'canvas',
                  text: 'https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${globalLookup.nummeraanduiding_id}'
              })
          });
</script>
<script>setTimeout(function(){print(); }, 1000)</script>
</body></html>`);

    // const sourceContext = document.getElementById('qrcode').firstChild.getContext('2d');
    // const imgData = sourceContext.getImageData(0, 0, 256, 256);
    // const destinationCanvas = qrPrintWindow.document.getElementById('printCanvas');
    // destinationCanvas.width = 1000;
    // destinationCanvas.height = 1000;
    //
    // const printContext = destinationCanvas.getContext('2d');
    // printContext.putImageData(imgData, 0, 0);

    qrPrintWindow.focus(); // necessary for IE >= 10
  });
});

