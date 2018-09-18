---
title: Spatial Data on the Web Best Practice Implementation Report
layout: default
---

# Spatial Data on the Web Best Practice Implementation Report
DISCLAIMER: THIS DOCUMENT IS WORK IN PROGRESS
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


### REST APIs

The REST APIs exposed by the Dataplatform use Linked Data as source data. This makes it possible to use SPARQL to create different types of responses, as specificied by the design-first approached OpenAPI Specifications ([OAS3](https://github.com/OAI/OpenAPI-Specification)). The designs of the APIs follow the Dutch API Guidelines in order to make them as developer-friendly as possible. Hence, the target audience for the APIs (webdevelopers) isn't aware of the Linked Data being used under the hood, where the APIs follow best practices and standards from the API community. For example, the APIs return [HAL+JSON](https://en.wikipedia.org/wiki/Hypertext_Application_Language) (`application/hal+json`) [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) responses by default, with `_embedded` resources and `_links` properties to make it easier to consume and navigate (through) the APIs using mainstream client libraries and frameworks like [AngularJS](https://angularjs.org/).

For each API, its OpenAPI Specification is being used to validate and return routes, input parameters, headers, HTTP status codes etc. Vendor extenions in the spec are parsed by the Dataplatform to map the responses to pre-configured SPARQL queries. On top of that, the spec itself is (stripped from vendor extensions) exposed on the API's root endpoint to make sure it's always in sync with the actual behaviour of the software. Example: https://brk.basisregistraties.overheid.nl/api/v1. This vendor-neutral spec can also be used to generate client SDKs and different API references, such as https://petstore.swagger.io/?url=https://brk.basisregistraties.overheid.nl/api/v1 or http://rebilly.github.io/ReDoc/?url=https://brk.basisregistraties.overheid.nl/api/v1.

### The PDOK Labs Environment
The Kadaster/PDOK Dataplatform is a SLA based service, offering high usability. [PDOK Labs](data.labs.pdok.nl) is used for experimental datasets, or new functionality. Amongst others in includes [data stories](https://data.labs.pdok.nl/stories/), and [faceted browsers](https://data.labs.pdok.nl/presentations/bevolkings-browser/). 


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

#### Comments
Searches for the data set point to other references to the data set, not the landing pages unfortunately.

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

#### Comments
There are different geometry formats available, but no varying detail levels, accuracies, precisions and sizes. Conformance to BP 6, 7 and 8 is discussed in more detail below. There are alternative geometry descriptions available for some data sets (BRK, BRT, BAG) but not through content negotiation.

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

#### Comments
The interfaces provided by the platform do not offer these fine-grained access methods, but rather more straightforward geometry requests through WFS, SPARQL and API calls.

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
Check that, when positions of entities are described as relative to other entities, these descriptions can be interpreted by a machine as well as humans, and the positions of the reference entities can be retrieved through their link relations. | :ballot_box_with_check:

### [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check that hyperlinks use typed relationships, and that link relation type can be located in order to determine how to interpret the hyperlink. | :ballot_box_with_check:
Check that the source and target of the hyperlink are Spatial Things, unless the link relation type definition indicates that this should be otherwise (e.g. when relating a Spatial Thing to its geometry). | :ballot_box_with_check:

### [Best Practice 11: Provide information on the changing nature of spatial things](https://www.w3.org/TR/sdw-bp/#desc-changing-properties)

#### Conformance statement
Does not conform, mostly: but for some datasets (BAG, BRK, BRT) changes are recorded as material history in Linked Data.

### [Best Practice 12: Expose spatial data through 'convenience APIs'](https://www.w3.org/TR/sdw-bp/#convenience-apis)

#### Conformance statement
Mostly does not conform, with a few exceptions: BAG, BRK and BRT have JSON REST APIs available.

### [Best Practice 13: Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata)

#### Conformance statement
Conforms, through metadata records in the [national geo register](https://nationaalgeoregister.nl).


### [Best Practice 14: Describe the positional accuracy of spatial data](https://www.w3.org/TR/sdw-bp/#desc-accuracy)

#### Conformance statement
Does not conform: this information is not available externally for any data set.
