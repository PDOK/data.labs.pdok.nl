'use strict';

const commitsBaseUrl = 'https://api.github.com/repos/PDOK/data.labs.pdok.nl/commits';

const settings = {
  async: true,
  crossDomain: true,
  url: commitsBaseUrl,
  method: 'GET',
  headers: {
    accept: 'application/vnd.github.v3+json',
  },
};

const updatedMarkdownFiles = [];

/* global $ */
$.ajax(settings).done((commits) => {
  commits.slice(0, 16)
    .forEach((commit) => {
      settings.url = `${commitsBaseUrl}/${commit.sha}`;

      $.ajax(settings).done((response) => {
        response.files
          .filter(file =>
            file.filename.slice(-2) === 'md' && // just use markdown updates
            file.filename[0] !== '_' && // don't include unprocessed
            !file.filename.includes('assets') && // don't include resources in assets
            !file.filename.includes('README')) // don't include readme's
          .forEach((markDownFile) => {
            const path = markDownFile.filename
              .replace('.md', '.html');

            if ($.inArray(path, updatedMarkdownFiles) === -1) {
              updatedMarkdownFiles.push(path);
              const capitalized = path
                .replace('/index.html', '')
                .replace('.html', '')
                .replace(/(?:^|\s)\S/g, a => a.toUpperCase()); // capitalize
              $('#updates').append(`<a href="/${path}">${capitalized}</a><br />`);
            }
          });
      });
    });
});
