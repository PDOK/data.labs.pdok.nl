$('#searchbox').on('input', function (data) {
  var searchTerm = data.target.value;
  console.log(searchTerm);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://lov.okfn.org/dataset/lov/api/v2/term/search?q=" + searchTerm + "&page_size=100",
    "method": "GET",
  };

  function fillTableRows(result) {
    var urlParts = result.uri[0].split('/');
    if (urlParts.length == 3) { // URL is already a base url
      baseURL = result.uri[0];
    } else {
      baseURL = urlParts
        .slice(0, 3)
        .join('/');
    }

    var tableRow =
      '<tr><td><a href="'+ result.uri[0] + '">'+ result.prefixedName[0] +
      '</a></td>' +
      '<td><a href="' + baseURL + '">'+ baseURL +
      '</a></td></tr>';

    if (result.uri[0].match('overheid.nl')) {
      $("#trustedResults tbody").append(tableRow);
    } else {
      $("#miscResults tbody").append(tableRow);
    }
  }

  $.ajax(settings).done(function (response) {
    $('#trustedResults tbody').empty();
    $('#miscResults tbody').empty();
    response.results.forEach(fillTableRows);
  });
});
