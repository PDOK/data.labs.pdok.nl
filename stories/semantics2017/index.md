---
endpoint: https://data.pdok.nl/sparql
layout: story
logo: /stories/semantics2017/logo-semantics.png
output: leaflet
published: false
title: Kadaster Data Stories ― SEMANTiCS 2017
---

The BAG (_Basisregistratie Adressen en Gebouwen_) is the base register
of all addresses and buildings in the Netherlands.  The BAG is
maintained and published by the [Kadaster](https://www.kadaster.com/),
the Netherlands’ Cadastre, Land Registry and Mapping Agency.

In this data story we present a short introduction to the data
available in the linked data version of the BAG that is available for
querying via the [SPARQL endpoint](https://data.pdok.nl/sparql).

The following information is available for buildings:

  * year of construction
  * validity date
  * geometry
  * area
  * postcode
  * status (in/out of use)
  * type (residential, office, etc.)

For exampe, let's consider the [Meervaart
Theatre](http://www.meervaart.nl/congres-event/english/) where
[SEMANTiCS 2017](https://2017.semantics.cc/) is taking place.  Using
the postcode `1068LE` and house number `300`, we are able to use a
SPARQL DESCRIBE to lookup the information about the _nummeraanduiding_
(number designation):

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="meerenvaart1.rq" data-output="rawResponse"> </query>

As you can see the returned data shows the nummeraanduiding has an
outbound _bijbehorende openbare ruimte_ (associated pubilc space) link
to the road Meer en Vaart and inbound _hoofdadres_ (main address) link
from the _verblijfsobject_ (residential object).

With a bit more understanding of the [data
model](https://bag.basisregistraties.overheid.nl/bag/query/model) you
can also easily find the _pand_ (property) related to the
verblijfsobject and the _woonplaats_ related to the bijbehorende
openbare ruimte.  Also that the pand, verblijfsobject and woonplaats
have an associated geometry, which may be a point or polygon.

Hence it is relatively straightforward to show these geometries on a
map:

<query data-endpoint="hhttps://data.pdok.nl/sparql" data-query-ref="meerenvaart2.rq" data-output="geo"> </query>

Or we could show the verblijfsobject located in the same property as
the Meervaart Theatre with a pop-up showing more information about the
object:

<query data-endpoint="hhttps://data.pdok.nl/sparql" data-query-ref="meerenvaart3.rq" data-output="geo"> </query>

One of the more subtle aspects to querying the BAG is understanding
how change over time is modelled and how this data is managed in the
SPARQL endpoint.  The BAG is the official history and, as such, it is
important that historic information is accessible and can be queried.

The approach used is there may be multiple _voorkomen_ (registrations)
for every nummeraanduiding, openbare ruimte, verblijfsobject, pand,
woonplaats, etc.  Each voorkomen has metadata that indicates the
temporal validity of that voorkomen.  The `rdfs:isDefinedBy` predicate
relates the object to the voorkomen.

In the BAG [RDF
dataset](https://www.w3.org/TR/sparql11-query/#rdfDataset), each
voorkomen is contained in a named graph with the same IRI as the
voorkomen.  The default graph is the union of all named graphs.

So when we query the default graph as in the above examples, we are
actually querying across all voorkomen, which can give unexpected
results for the uninitiated.

To illustrate this, we look at the voorkomen of the nummeraanduiding
with the associated openbare ruimte and woonplaats.  We also include
the begin and end date of the validity of each voorkomen.  Note the
end date is optional as the currently valid voorkomen does not have an
end date:

<query data-endpoint="hhttps://data.pdok.nl/sparql" data-query-ref="meerenvaart4.rq" data-output="table"> </query>

This shows there are 8 potential combinations of voorkomen and not all
combinations may be valid.  To locate the currently valid voorkomen
can be achieved by changing the `OPTIONAL` clauses into `FILTER NOT
EXISTS`.

As for querying against a certain point in time, or across time? Well,
that's another story…
