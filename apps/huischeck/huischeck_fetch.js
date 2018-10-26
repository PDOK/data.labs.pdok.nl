function makeAdressInfo(locatieserverLookup) {
    $('#AdressInfo').html(`
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
        render: "canvas",
        text: "https://bag.basisregistraties.overheid.nl/bag/doc/nummeraanduiding/" + locatieserverLookup.nummeraanduiding_id
    });
}

$(document).ready(function() {
    $("#huischeck_now").click(function(){
        var address = $('#adres');
        console.log(address.val());

        fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?q=' + address.val())
            .then(response => response.json())
            .then(json => json.response.docs[0].id)
            .then(id => fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=' + id))
            .then(response => response.json())
            .then(json => json.response.docs[0])
            .then(makeAdressInfo)
            .catch(err => console.error);
    });

    $("#printQRcode").click(function PrintElem(){
        var mywindow = window.open('', 'PRINT', 'height=1920,width=1080');

        mywindow.document.write('<html><head><title>' + document.title  + '</title>');
        mywindow.document.write('<style> @media print {@page { margin: 0; } body { margin: 1.6cm; }}</style>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<img src="Kadaster_woordmerk_RGB_crop.jpg" width="256" vspace="20" id="kadasterlogo" onload="print()"/>');
        mywindow.document.write('<div><canvas id="printCanvas"></canvas></div>');
        mywindow.document.write('</body></html>');
        mywindow.document.write("<script>setTimeout(function(){print(); }, 1000)</script>");

        sourceContext = document.getElementById('qrcodeCanvas').firstChild.getContext("2d");
        imgData = sourceContext.getImageData(0, 0, 256, 256);
        destinationCanvas = mywindow.document.getElementById('printCanvas');
        destinationCanvas.width = 1000;
        destinationCanvas.height = 1000;
        var printContext = destinationCanvas.getContext('2d');
        printContext.putImageData(imgData, 0, 0);

        mywindow.focus(); // necessary for IE >= 10*/

    })

    $("#printSPARQL").click(function PrintElem(){
        var mywindow = window.open('', 'PRINT', 'height=1920,width=1080');

        mywindow.document.write('<html><head><title>' + document.title  + '</title>');
        mywindow.document.write('<style> @media print {@page { margin: 0; } body { margin: 1.6cm; }}</style>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<img src="Kadaster_woordmerk_RGB_crop.jpg" width="256" vspace="20" id="kadasterlogo" onload="print()"/>');
        mywindow.document.write('<div><canvas id="printCanvas"></canvas></div>');
        mywindow.document.write('</body></html>');
        mywindow.document.write("<script>setTimeout(function(){print(); }, 1000)</script>");

        sourceContext = document.getElementById('SPARQLcanvas').firstChild.getContext("2d");
        imgData = sourceContext.getImageData(0, 0, 1920, 1080);
        destinationCanvas = mywindow.document.getElementById('printCanvas');
        destinationCanvas.width = 1000;
        destinationCanvas.height = 1000;
        var printContext = destinationCanvas.getContext('2d');
        printContext.putImageData(imgData, 0, 0);

        mywindow.focus(); // necessary for IE >= 10*/

    })
});
