---
layout: default
title: About Data Stories
---

# Kadaster Data Stories

Data Stories is a simple HTML-based templating language that makes it
easy to showcase the results of SPARQL queries to human users.

## Stories & queries

Data Stories defines the following two HTML elements:

  * **data story** element

    An HTML `div` element with class name `story`.
  * **query** element

    An HTML `query` element.

A Data Stories document has exactly one data story element, which
contains zero or more data query elements as its direct children.

## Story element

The following attributes are defined on a *data story* element:

  * `data-endpoint`

    The SPARQL endpoint against which all queries in this story are
    executed. Default: data-query-endpoint="https://data.labs.pdok.nl/sparql/".
  * `data-output`

    The output format that is used to display SPARQL result sets in.
    The following values are supported:
    * `boolean`

      Specifically used for `ASK` queries.
    * `rawResponse`

      The textual content of the HTTP reply body.  For example, the
      SPARQL result set serialized in XML, JSON, or CSV.
    * `leaflet`

      Shows the Well-Known Text (WKT) results on a geographical map.
    * `table`

      Shows the results in rows of an HTML table.  This is the default
      view.
    * `error`

    * `pivot`

    * `gchart`

### `query` element

The following attributes are defined on the `query` element:

  * `data-config`

    Used for reading the configuration of links created by the YASGUI share function
  * `data-endpoint`

    The SPARQL endpoint against which a particular data query is
    evaluated.  This is typically only used when the endpoint for a
    query differs from the endpoint used by the rest of the story.
  * `data-query-ref`

    An absolute or relative URI to a file that stores a SPARQL query.
  * `data-output`

    The output format that is used to display the SPARQL result set
    in.  This is typically only used when the output format for a
    query differs from the output format used by the rest of the story.
  * `data-show-query`

    Used to show the query directly to the user
