'use strict';

/* global $ document window fetch QrCodeWithLogo QRious */

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

  const logoSrc = `https://data.labs.pdok.nl/api/v1/text2image?text=${locatieserverLookup.huis_nlt}`;

  fetch(logoSrc)
    .then((res) => {
      if (res.status === 200) {
        return QrCodeWithLogo.toCanvas({
          canvas: document.getElementById('qrcodeCanvas'),
          content: `https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}`,
          width: 200,
          logo: {
            src: logoSrc,
            logoSize: 0.2,
          },
        });
      }

      return new QRious({
        element: document.getElementById('qrcodeCanvas'),
        size: 220,
        padding: 16,
        value: `https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}`,
      });
    })
    .catch((err) => {
      console.error(err);

      return new QRious({
        element: document.getElementById('qrcodeCanvas'),
        size: 220,
        padding: 16,
        value: `https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${locatieserverLookup.nummeraanduiding_id}`,
      });

      // return qr.canvas.parentNode.appendChild(qr.image);
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
<script type="text/javascript" src="/assets/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="/assets/js/qrious.min.js"></script>
<script type="text/javascript" src="/assets/js/qr-code-with-logo.browser.min.js"></script>
<style> @media print {@page { margin: 0; } body { margin: 1.6cm; }}</style>
</head><body>
<img alt="Kadaster logo" src="Kadaster_woordmerk_RGB_crop.jpg" width="170" hspace="20" vspace="10mm" id="kadasterlogo"/>
<div id="qrcode"><canvas id="qrcodeCanvas"/></div>
<script>
    'use strict';
    const logoSrc = 'https://data.labs.pdok.nl/api/v1/text2image?text=${globalLookup.huis_nlt}';
    fetch(logoSrc)
          .then((res) => {
              if (res.status === 200) {
                  return QrCodeWithLogo.toCanvas({
                      canvas: document.getElementById('qrcodeCanvas'),
                      content: 'https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${globalLookup.nummeraanduiding_id}',
                      width: 200,
                      logo: {
                          src: logoSrc,
                          logoSize: 0.2
                      }
                  });
              }
                  
              return new QRious({
                element: document.getElementById('qrcodeCanvas'),
                size: 220,
                padding: 16,
                value: 'https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${globalLookup.nummeraanduiding_id}',
              });
          })
          .catch((err) => {
              console.error(err);
              return new QRious({
                element: document.getElementById('qrcodeCanvas'),
                size: 220,
                padding: 16,
                value: 'https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/${globalLookup.nummeraanduiding_id}',
              });
          });
</script>
<script>setTimeout(function(){print(); }, 1000)</script>
</body></html>`);
    qrPrintWindow.focus(); // necessary for IE >= 10
  });
});

