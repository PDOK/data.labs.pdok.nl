---
title: Spatial Data on the Web Best Practice Implementation Report
layout: default
---

# Spatial Data on the Web Best Practice Implementation Report

## Title
Kadaster/PDOK Data Platform

## Description of service

### About
The Land Registry and Mapping Agency of the Netherlands (‘Kadaster’ in Dutch) is developing an online publication platform for sharing its geospatial data assets called KDP (`Kadaster Data Platform’ in Dutch). One of the main goals of this platform is to better share geospatial data with the wider, web-oriented world, including its developers, approaches, and standards. Linked Open Data (W3C), GeoSPARQL (OGC), and Open APIs (OpenAPI Specification) are the predominant standardized approaches for this purpose. As a result, the most important spatial datasets of the Netherlands – including several key registries – are now being published as Linked Open Data that can be accessed through a SPARQL endpoint and a collection of REST APIs. In addition to providing raw access to the data, Kadaster Data Platform also offers developers functionalities that allow them to gain a better understanding about the contents of its datasets. These functionalities include various ways for viewing Linked Data.

The Dataplatform is made accessible through [PDOK](https://pdok.nl), an neutral platform that traditionally serves a broad range of geospatial datasets in geospatial (OGC) formats. By integrating both we now have a platform that is able to serve OGC formats, Linked Data & APIs, for a broad range of governmental spatial datasets (includings Cadastre, Statistical and Heritage data amongst others).

### The Architecture of the Platform
Joost kan je hier wat zeggen? Misschien een plaatje?
[SPARQL Endpoint](<https://data.pdok.nl/sparql>)
Building URI [example](https://bag.basisregistraties.overheid.nl/bag/id/pand/0003100000117848)


### The Linked Data API

DIMITRI KUN JE HIER WAT INVULLEN over de API? 
(ook even voorbeelden; link naar de bag api en de documentation)

(hieronder de oude tekst van Australie)

The API is a minimal implementation of a RESTful HTTP API that allows portions of the G-NAF dataset to be delivered as human- or machine-readable web resources (web pages and code files). It essentially presents endpoints (URIs; web addresses) for G-NAF items according to various conceptual models. Models such as the [ISO's 19160-1:2015 -- Addressing](https://www.iso.org/standard/61710.html) are related to the elements in G-NAF through deliberate mappings made in the *model* portion of this API's codebase. On web address request, the API extracts data for its various models from the G-NAF database using SQL queries. It then uses HTML templates or in-memory RDF graphs to generate *views* for human or machine reading.

The following programming languages and tools are used by this API:

* [pyLDAPI](https://pypi.org/project/pyldapi/) - a tiny [Python](https://www.python.org) module implementing Linked Data-style functionality on top of the commonly used [Flask](http://flask.pocoo.org/) HTTP framework
* [Python Flask framework](http://flask.pocoo.org/) - the lower-level Python HTTP framework used by this API
* [Apache web server](https://en.wikipedia.org/wiki/Apache_HTTP_Server) - the web server that allows communication with [Flask](http://flask.pocoo.org/) over HTTP
* [Postgres database](https://en.wikipedia.org/wiki/PostgreSQL) - an open source relational database containing the data of the [G-NAF](https://www.psma.com.au/products/g-naf).

### The PDOK Labs Environment
The Kadaster/PDOK Dataplatform is a SLA based service, offering high usability. [PDOK Labs](data.labs.pdok.nl) is used for experimental datasets, or new functionality. Amongst others in includes [data stories](https://data.labs.pdok.nl/stories/), and [facetted browsers](https://data.labs.pdok.nl/presentations/bevolkings-browser/). 


## Best Practice Scorecard

### [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids)

#### Conformance statement
Conforms

| Test | Conforms |
|---|---|
| Check that within the data [Spatial Things](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), such as countries, regions and people, are referred to by HTTP URIs or by short identifiers that can be converted to HTTP URIs. Ideally dereferencing the URIs should return the [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), however, they have value as globally scoped variables whether they dereference or not | :ballot_box_with_check: |


#### How-to
For some data sets there are URI's, for others there aren't. The Dutch Cadastre (Kadaster) has several Linked Data sets pertaining spatial objects, the chief amongst these being:
- the [Base registration for addresses and buildings](https://bag.basisregistraties.overheid.nl) (BAG) 
- the [Cadastral Base Registration](https://brk.basisregistraties.overheid.nl)
- the [Baste Registration for Topography](https://brt.basisregistraties.overheid.nl)

All spatial objects are both identified and dereferenceable by their http URI. These URIs were all minted following rules defined by the [Dutch URI strategy](https://www.geonovum.nl/uploads/documents/D1-2013-09-19_Towards_a_NL_URI_Strategy.pdf).

### [Best Practice 2: Make your spatial data indexable by search engines](https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines)

#### Conformance statement
Conforms

Test | Conforms
---|---
Using a Web browser, search for the landing page of your dataset | :black_square_button:
Using a Web browser, check that you can browse to human-readable HTML pages for each [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing) that the dataset describes | :black_square_button:

#### How-to

From the landing page, there is no direct access to browseable pages of the data. However, each spatial object in the Linked Data sets has a html representation; see for example [https://bag.basisregistraties.overheid.nl/bag/id/pand/0361100000125870](https://bag.basisregistraties.overheid.nl/bag/id/pand/0361100000125870). When dereferencing this ID URI, the call is redirected to a document URI [https://bag.basisregistraties.overheid.nl/bag/doc/pand/0361100000125870](https://bag.basisregistraties.overheid.nl/bag/doc/pand/0361100000125870). Both the ID URI and the document URI are content-negotiable. 

### [Best Practice 3: Link resources together to create the Web of Data](https://www.w3.org/TR/sdw-bp/#linking)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check that hyperlinks are distinguishable within the data — a string-literal that happens to contain a URL is insufficient | :ballot_box_with_check:
Check that hyperlinks use global identifiers, preferably HTTP URIs, to identify the link target | :ballot_box_with_check:
Check that hyperlinks use typed relationships, and that the definition of the link relation type can be located in order to determine how to interpret the hyperlink | :ballot_box_with_check:

### [Best Practice 4: Use spatial data encodings that match your target audience](https://www.w3.org/TR/sdw-bp/#semantic-thing)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check if spatial data is encoded, so that it can be understood and re-used reliably | :ballot_box_with_check:
Consider the main target audience or audiences of a web page or service, and check if spatial information is provided in a way appropriate for that audience | :ballot_box_with_check:

#### How-to
The Cadastre/PDOK data platform supplies WKT serialisations in both CRS84 and Netherlands RD [EPSG:28992](https://epsg.io/28992) representations. The Netherlands RD grid uses a easting/northing terrestrial coordinate system in meters, so it is easy to work with in the field. The JSON REST API's provide GeoJSON, WFS provides GML.

#### To-do

Document URI pages such as [https://bag.basisregistraties.overheid.nl/bag/doc/pand/0361100000125870](https://bag.basisregistraties.overheid.nl/bag/doc/pand/0361100000125870) do not provide an easy solution to access the geometry - this is hidden within an 'appearance' (voorkomen) such as [http://bag.basisregistraties.overheid.nl/bag/id/pand/0361100000125870](http://bag.basisregistraties.overheid.nl/bag/id/pand/0361100000125870). This 'appearance' is a temporally constrained state of the building with its own properties in a separate graph. 

### [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry)

#### Conformance statement
Conforms

Test | Conforms
---|---
[Geometries](https://www.w3.org/TR/sdw-bp/#dfn-geometry) are made available in possibly different formats and levels of complexity, considering their intended uses and their consumption on the Web | :black_square_button:
The chosen [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions comply with [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries), [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice), and [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs) | :black_square_button:
The (possibly) alternative [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions can be accessible via standard mechanisms, as HTTP content negotiation | :black_square_button:
 

### [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check if the original and most detailed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data is available | :black_square_button:
Check if a compressed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data can be obtained via HTTP content negotiation or other mechanisms | :black_square_button:
Check if centroids and bounding boxes are made available, without the need of downloading and processing the relevant [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data | :black_square_button:
Check if it is possible to get a 2-dimensional representation of a 3-dimensional [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) | :black_square_button:
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different levels of precision, e.g., by allowing users to specify the maximum number of decimals in point coordinates | :black_square_button:
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different scales / spatial resolutions | :black_square_button:

### [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check that [geospatial data](https://www.w3.org/TR/sdw-bp/#dfn-geographic-information-(also-geospatial-data)) (i.e. data about things located relative to the Earth) is available, as a minimum, in a global [coordinate reference system](https://www.w3.org/TR/sdw-bp/#dfn-coordinate-reference-system-(crs)): for vector data, this should be WGS 84 Lat/Long ([EPSG:4326](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4326)) or WGS 84 Lat/Long/Elevation ([EPSG:4979](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4979)); for raster data this should be Web Mercator ([EPSG:3857](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::3857)) | :ballot_box_with_check:


### [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs)

#### Conformance statement
Conforms

Test | Conforms
---|---
For a given [spatial data](https://www.w3.org/TR/sdw-bp/#dfn-spatial-data) publication, check that users can find information about the coordinate axes, their order and unit of measurement, plus the [datum](https://www.w3.org/TR/sdw-bp/#dfn-datum) used | :ballot_box_with_check:


### [Best Practice 9: Describe relative positioning](https://www.w3.org/TR/sdw-bp/#relative-position)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check that, when positions of entities are described as relative to other entities, these descriptions can be interpreted by a machine as well as humans, and the positions of the reference entities can be retrieved through their link relations. | <ul><li>- [x] </li></ul>

### [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check that hyperlinks use typed relationships, and that link relation type can be located in order to determine how to interpret the hyperlink. | <ul><li>- [x] </li></ul>
Check that the source and target of the hyperlink are Spatial Things, unless the link relation type definition indicates that this should be otherwise (e.g. when relating a Spatial Thing to its geometry). | :ballot_box_with_check:

### [Best Practice 11: Provide information on the changing nature of spatial things](https://www.w3.org/TR/sdw-bp/#desc-changing-properties)

#### Conformance statement
Does not conform, mostly.

### [Best Practice 12: Expose spatial data through 'convenience APIs'](https://www.w3.org/TR/sdw-bp/#convenience-apis)

#### Conformance statement
Mostly does not conform, with a few exceptions

### [Best Practice 13: Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata)

#### Conformance statement
Conforms, through metadata records in the [national geo register](https://nationaalgeoregister.nl)


### [Best Practice 14: Describe the positional accuracy of spatial data](https://www.w3.org/TR/sdw-bp/#desc-accuracy)

#### Conformance statement
Does not conform
