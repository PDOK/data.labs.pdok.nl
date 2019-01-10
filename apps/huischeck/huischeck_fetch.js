'use strict';

/* global $ document window fetch QrCodeWithLogo QRious yasgui */

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

function createPrintTable() {
  let printTableWindowText = `
<!doctype html>
<html lang="nl-NL"><head>
<title>${document.title}</title>
<style> @media print {@page { margin: 0; } body { margin: 1.6cm; }}</style>
</head><body>
<div id="printTable" style="width: 10cm; height: 15cm;">
<img src="https://data.labs.pdok.nl/assets/images/PDOK_logo.svg" style="background-color: midnightblue;">
<p>
  <h3>Informatie over uw huis</h3>
  <table style="width: 100%"><tbody>
    <tr><td>Straatnaam:</td><td style="text-align: right">${$('#straatnaam')[0].innerText}</td></tr>
    <tr><td>Huisnummer:</td><td style="text-align: right">${$('#huisnummer')[0].innerText}</td></tr>
    <tr><td>Woonplaats:</td><td style="text-align: right">${$('#woonplaats')[0].innerText}</td></tr>
    <tr><td>Postcode:</td><td style="text-align: right">${$('#postcode')[0].innerText}</td></tr>
    <tr><td>Bouwjaar:</td><td style="text-align: right">${$('#bouwjaar')[0].nextSibling.data}</td></tr>
    <tr><td>Oppervlak:</td><td style="text-align: right">${$('#oppervlak')[0].nextSibling.data}</td></tr>
  </tbody></table>
  <h3>Informatie over uw buurt</h3>
  <table style="width: 100%"><tbody>
    <tr><td>Aantal inwoners:</td><td style="text-align: right">${$('#aantalinwoners')[0].nextSibling.data}</td></tr>
    <tr><td>Aantal mannen:</td><td style="text-align: right">${$('#aantalmannen')[0].nextSibling.data}</td></tr>
    <tr><td>Aantal vrouwen:</td><td style="text-align: right">${$('#aantalvrouwen')[0].nextSibling.data}</td></tr>
    <tr><td>Gemiddelde woningwaarde:</td><td style="text-align: right">${$('#woningwaarde')[0].nextSibling.data}</td></tr>
    <tr><td>Percentage koopwoningen:</td><td style="text-align: right">${$('#koopwoningen')[0].nextSibling.data}</td></tr>
    <tr><td>Percentage huurwoningen:</td><td style="text-align: right">${$('#huurwoningen')[0].nextSibling.data}</td></tr>
    <tr><td>Percentage woningen voor 2000:</td><td style="text-align: right">${$('#woningenvoor2000')[0].innerText}</td></tr>
    <tr><td>Percentage woningen na 2000:</td><td style="text-align: right">${$('#woningenna2000')[0].innerText}</td></tr>
    <tr><td>Gem. elektriciteitsverbruik:</td><td style="text-align: right">${$('#elektriciteitsverbruik')[0].nextSibling.data}</td></tr>
    <tr><td>Gem. afstand tot supermarkt:</td><td style="text-align: right">${$('#supermarkt')[0].nextSibling.data}</td></tr>
    <tr><td>Gem. afstand tot huisarts:</td><td style="text-align: right">${$('#huisarts')[0].nextSibling.data}</td></tr>
    <tr><td>Gem. afstand tot kinderdagverblijf:</td><td style="text-align: right">${$('#kinderdagverblijf')[0].nextSibling.data}</td></tr>
    <tr><td>Gem. afstand tot school:</td><td style="text-align: right">${$('#school')[0].nextSibling.data}</td></tr>
  </tbody></table>
  
  <h3>Deze informatie is verkregen via de Huischeck van PDOK.</h3>
  <a href="https://data.labs.pdok.nl/apps/huischeck/huischeck.html">https://data.labs.pdok.nl/apps/huischeck/huischeck.html</a>
</p>
</div>
<script>
  const printDiv = document.getElementById("printTable");
  // printDiv.style.border = "solid #0000FF"; 
  window.resizeTo(printDiv.offsetWidth,printDiv.offsetHeight);
  setTimeout(function(){print(); }, 1000);
</script>
</body></html>
  `;
  const printTableWindow = window.open('', 'print table', 'height=1920,width=1080');
  printTableWindow.document.write(printTableWindowText);
}
