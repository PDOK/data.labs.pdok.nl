fetch('https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=adr-c93ebdc4481109d788cb932d5b393788')
    .then(function(response) {
       return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });