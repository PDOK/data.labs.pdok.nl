/**
 * Created by reinv on 15-6-2017.
 */

/* global $ */

function addShowcase(dataset, divId) {
  let uri = dataset['@id'];
  if (uri.slice(-1) === '/') uri = uri.slice(0, -1);
  const description = dataset['dcterms:description'] ?
    dataset['dcterms:description'] :
    uri.split('/').slice(-1);

  $(divId)
    .append(`
<div class="showcase">
  <h2 class="showcase-title">
    ${dataset['dcterms:title'] ? dataset['dcterms:title'] : uri.split('/').slice(-1)}
  </h2>
  <a href="https://data.labs.pdok.nl/yasgui?query=describe <${dataset['@id']}&gt">${description}</a>
</div>`);
}

$.get('https://data.labs.pdok.nl/api/v1/graphs', sets => {
  // Populate void:Dataset part
  sets['@graph']
    .filter(set => set['@type'].find(type => type === 'http://rdfs.org/ns/void#Dataset'))
    .forEach(dataset => addShowcase(dataset, '#dataset-showcases'));

  // Populate void:Linkset part
  sets['@graph']
    .filter(set => set['@type'].find(type => type === 'http://rdfs.org/ns/void#Linkset'))
    .forEach(dataset => addShowcase(dataset, '#linkset-showcases'));

  // Populate miscellaneous
  sets['@graph']
    .filter(set => !set['@type'].find(type =>
      type === 'http://rdfs.org/ns/void#Linkset' ||
      type === 'http://rdfs.org/ns/void#Dataset'
    ))
    .forEach(dataset => addShowcase(dataset, '#overig-showcases'));
});
