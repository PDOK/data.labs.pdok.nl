/**
 * Created by reinv on 15-6-2017.
 */

/* global $ */

$.get('/api/v1/graphs', sets => {
  // Populate void:Dataset part
  sets['@graph']
    .filter(set => set['@type'].find(type => type === 'void:Dataset'))
    .forEach(dataset => $('#dataset-showcases')
      .append(`
<div class="showcase">
  <h2 class="showcase-title">Zonder titel</h2>
  <a href="${dataset['@id']}">${dataset['@id'].split('/').slice(-1)}</a>
</div>
`
    ));

  // Populate void:Linkset part
  sets['@graph']
    .filter(set => set['@type'].find(type => type === 'void:Linkset'))
    .forEach(dataset => $('#linkset-showcases')
      .append(`
<div class="showcase">
<h2 class="showcase-title">Zonder titel</h2>
<a href="${dataset['@id']}">${dataset['@id'].split('/').slice(-1)}</a></div>`
    ));

  // Populate miscellaneous
  sets['@graph']
    .filter(set => !set['@type'].find(type => type === 'void:Linkset' || type === 'void:Dataset'))
    .forEach(dataset => $('#overig-showcases')
      .append(`
<div class="showcase">
<h2 class="showcase-title">Zonder titel</h2>
<a href="${dataset['@id']}">${dataset['@id'].split('/').slice(-1)}</a></div>`
    ));
});
