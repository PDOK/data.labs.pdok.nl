---
layout: story
title: Kadaster Data Stories ― Nederlandse gemeentes
endpoint: https://data.pdok.nl/sparql
output: leaflet
---
# Most populous Dutch municipalities

Using SPARQL federation, we can dynamically pull in the
  population numbers for each municipality.  This allows us to
  display the 25 most populous municipalities.  With YASGUI, we
  are able to put these results on a map and show nice popups
  per result.  The popup shows the name of the municipality, the
  population, the surface, and also links to the RDF resource
  (using URI dereferencing).
<div data-query
     data-query-sparql="most_populous_municipalities.rq">
</div>
