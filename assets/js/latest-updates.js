var commitsBaseUrl = "https://api.github.com/repos/PDOK/data.labs.pdok.nl/commits";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": commitsBaseUrl,
  "method": "GET",
  "headers": {
    "accept": "application/vnd.github.v3+json",
  }
};

var commits;
var updatedMarkdownFiles = [];

String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

$.ajax(settings).done(function (commits) {
  commits.slice(0,16)
    .forEach(function (commit) {
      settings.url = commitsBaseUrl + '/' + commit.sha;

      $.ajax(settings).done(function (response) {
        response.files
          .filter(function (file) { return file.filename.slice(-2) === 'md' && file.filename[0] !== "_"})
          .forEach(function (markDownFile) {
            var path = markDownFile.filename
              .replace('.md', '.html');

            if ($.inArray(path, updatedMarkdownFiles) === -1) {
              updatedMarkdownFiles.push(path);
              $('#updates').append('<a href="/' + path + '">' + path
                .replace('/index.html', '')
                .replace('.html', '')
                .capitalize() + '</a><br />')
            }
          });
    });
  })
});