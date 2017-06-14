---
layout: story
title: Kadaster Data Stories ― Nederlandse gemeentes
logo: /stories/municipality/logo.png
endpoint: https://data.pdok.nl/sparql
output: leaflet
---
# Dutch Municipalities

We want to show the 25 Dutch municipalities with the largest
surface.  Unfortunately, GeoSPARQL does not have an area
function.  We therefore decided <em>to implement this function
ourselves in SPARQL</em>.  We use the <tt>geof:envelope</tt>
function in order to extract the closest bounding box of a
municipality, for which we can calculate the area using simple
arithmetic and geometric conversion (from long/lat distance to
meters).  The following shows the shape of
<a href="https://bag.basisregistraties.overheid.nl/bag/doc/woonplaats/1527">Baak</a>
and the smallest bounding box that holds it:

<div data-query data-query-sparql="baarn_surface.rq"></div>

## The biggest Dutch municipalities
We can now sort the municipalities based on their surface. The
following gives an overview of the 25 largest municipalities.
Zeewolde is larger than Amsterdam!

<div data-query
     data-query-sparql="largest_municipalities.rq"
     data-query-output="gchart">
</div>

The same result can also be shown on a map.  Notice that big
  municipalities often have a large water surface.

<div data-query
     data-query-sparql="largest_municipalities_geo.rq">
</div>

## Most populous Dutch municipalities
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
