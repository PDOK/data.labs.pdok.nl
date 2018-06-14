jQuery.ajax('https://intranet.kadaster.nl/iad/kdv/api/kdv/filiatie/?appartementvolgnummer=&deelperceelnummer=&deelperceelvolgnummer=&gemeentecode=LSE00&perceelnummer=207&richting=down&sectie=D&toevoeging=&toevoegingdisplay=')
  .done((res) => { console.log(res); });
