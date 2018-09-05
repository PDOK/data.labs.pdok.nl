var trustedSites = [
  'overheid.nl',
  'cbs.nl',
];

function fillTableRows(result) {
  var urlParts = result.uri[0].split('/');
  if (urlParts.length === 3) { // URL is already a base url
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

  var domain = result.uri[0]
    .split('/')[2]
    .split('.')
    .slice(-2)
    .join('.');

  if (trustedSites.indexOf(domain) > -1) {
    $('#trustedResults tbody').append(tableRow);
  } else {
    $('#miscResults tbody').append(tableRow);
  }
}

function searchForTerm(data) {
  var searchTerm = data.target.value;

  var settings = {
    async: true,
    crossDomain: true,
    url: 'https://lov.linkeddata.es/dataset/lov/api/v2/term/search?q=' + searchTerm + "&page_size=100",
    method: 'GET',
  };

  $.ajax(settings).done(function (response) {
    $('#trustedResults tbody').empty();
    $('#miscResults tbody').empty();
    response.results.forEach(fillTableRows);
  });
}

// Using https://raw.githubusercontent.com/cowboy/jquery-throttle-debounce/v1.1/jquery.ba-throttle-debounce.js
$('#searchbox').on('input', $.debounce(250, searchForTerm));
