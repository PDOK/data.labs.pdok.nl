---
layout: default
title: About Data Stories
---

# Kadaster SPARQL Editor (based on YASGUI)

## SPARQL Editor (YASQUE)

### Supported key combinations

The following key combinations are supported within the SPARQL Editor (YASQE).

We sometimes use the notion of a **group**, wich is either one word
(space-delimited sequence of non-space characters), a sequences of
multiple whitespace characters, or one newline.

| **Key combination** | **Behavior** |
|---------------------|--------------|
| `Alt + Left`        | Move the cursor to the beginning of the current line. |
| `Alt + Right`       | Move the cursor to the end of the current line. |
| `Alt + U`           | Redo the last change within the current selection. |
| `Ctrl + Backspace`  | Delete to the beginning of the group before the cursor. |
| `Ctrl + Delete`     | Delete to the beginning of the group after the cursor. |
| `Ctrl + End`        | Move the cursor to the end of the query. |
| `Ctrl + Home`       | Move the cursor to the start of the query. |
| `Ctrl + Left`       | Move the cursor to the left of the group before the cursor. |
| `Ctrl + Right`      | Move the cursor to the right of the group the cursor. |
| `Ctrl + [`          | Decrements the indentation for the current line or the lines involved in the current selection. |
| `Ctrl + ]`          | Increments the indentation for the current line or the lines involved in the current selection. |
| `Ctrl + /`          | Toggles on/off the commenting of the current line or the lines involved in the current selection. |
| `Ctrl + A`          | Select the whole query. |
| `Ctrl + D`          | Deletes the current line or all lines involved in the current selection. |
| `Ctrl + U`          | Unfo the last change within the current selection. |
| `Ctrl + Y`          | Redo the last undone edit action. |
| `Ctrl + Z`          | Undo the last edit action. |
| `Ctrl + Shift + F`  | Auto-formats the whole query or the lines involved in the current selection. |
| `Shift + Tab`       | Auto-indents the current line or the lines involved in the current selection. |
| `Tab`               | Indents the current line or the lines involved in the current selection. |

## SPARQL Result Set Viewer (YASR)

### SPARQL 2D

The following SPARQL variable names are used in the 2D visualization:

| **Variable name** | **Purpose** |
|-------------------+-------------|
| `?shape`          | An arbitrary variable name that gets bound to literals with datatype `geo:wktLiteral`, and whose name is the prefix of the other variable names in this table. |
| `?shapeColor`     | The color of the shape bound to `?shape`.  Either a CSS3 color name, an RGB color code, or a value between 0.0 and 1.0 in combination with the name of a color palette.  The color palettes to choose from are (1) the ones defined by [`colormap`](https://www.npmjs.com/package/colormap) or (2) the ones defined by [Color Brewer](http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3). |
| `?shapeLabel`     | The text or HTML content of popups that appear when clicking the shape bound to `?shape`. |

### SPARQL 3D

In addition to the variables supported by SPARQL 2D, the following
SPARQL variable names are used in the 3D visualization:

| **Variable name** | **Purpose** |
|-------------------+-------------|
| `?shapeHeight`    | The height in meters of the 2.5D shape that is based on the 2D shape that is bound to `?shape`. |
| `?shapeOffset`    | The height in meters at which the 2.5D shape that is based on the 2D shape that is bound to `?shape` starts. |

### SPARQL Gallery

The following variable names are used in the gallery visualization:

| **Variable name** | **Purpose** |
|-------------------+-------------|
| `?widget`         | A plain string or a literal with datatype IRI `rdf:HTML`, which is used as the content of the widgets that are displayed in gallery rows. |

### SPARQL Templating

It is often useful to create HTML snippets within a SPARQL query: this
allows for moderately intuitive and human-readable visualizations of
query results (e.g., in SPARQL Gallery, SPARQL 2D, or SPARQL 3D).

Perfoming all string insertions in SPARQL works, but results in
queries that are difficult to read and maintain:

```sparql
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix rvo: <https://data.labs.pdok.nl/def/>
select * {
  [ a rvo:Land;
    rdfs:label ?land;
    rvo:hoofdstad/rdfs:label ?hoofdstad;
    rvo:munteenheid/rdfs:label ?munteenheid;
    rvo:vlag ?vlag].
    bind(strdt(concat(
         '<h1>',str(?land),'</h1>',
         '<figure>',
           '<img src="',str(?vlag),'" style="width: 300px;">',
           '<figcaption>In ',str(?land),' hanteert men als munteenheid de ',str(?munteenheid),'. De hoofdstad van ',str(?land),' is ',str(?hoofdstad),'.</figcaption>',
         '</figure>'), rdf:HTML, ?widget))
}
```

YASGUI introduces SPARQL Templating, which allows one large string to
be used, rather than a large number of small strings that are
arguments to `concat/n`.  SPARQL variables `?abc` can be inserted into
this one large string by using the `{{abc}}` templating notation.

In order for a SPARQL variable to be used in this way, it must occur
in the outer projection, because YASGUI (and not the server) performs
template substitution.

```sparql
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix rvo: <https://data.labs.pdok.nl/def/>
select * {
  [ a rvo:Land;
    rdfs:label ?land;
    rvo:hoofdstad/rdfs:label ?hoofdstad;
    rvo:munteenheid/rdfs:label ?munteenheid;
    rvo:vlag ?vlag].
  bind('''
       <h1>{{land}}</h1>
         <figure>
           <img src={{vlag}} style="width: 300px;">
           <figcaption>In {{land}} hanteert men als munteenheid de {{munteenheid}}. De hoofdstad van {{land}} is {{hoofdstad}}.</figcaption>
         </figure>'''^^rdf:HTML as ?widget)
}
```

## Kadaster Data Stories

Data Stories is a way to publish SPARQL query results in a
human-readable way.

### Stories and Queries

Data Stories defines the following two HTML elements:

  - `<div class="story">`: The tag that contains zero or more
    `<query>` tags and that implements the Data Story.
  - `<query>`: The tag that implements one query within the Data
    Story.

#### Story element

The following attributes are defined on a *data story* element:

  - `data-endpoint`: The URI of the SPARQL endpoint against which all
    queries in the Data Story are executed.
  - `data-output`: The output format that is used to display SPARQL
    result sets in.  The following values are supported:
    - `boolean`: Shows the result of an `ask` query.
    - `error`: TODO
    - `gallery`: Shows HTML widgets in card rows.
    - `gchart`: Shows a UI for selecting numeric properties in order
      to generate various diagrams.
    - `geo`: Shows GeoSPARQL results on a 2D map.
    - `geo3d`: Shows GeoSPARQL results on a 3D map.
    - `pivot`: Shows a UI for selecting numeric properties in order to
      generate various diagrams and pivot tables.
    - `raw`: The textual content of the HTTP reply body. For example,
      the SPARQL result set serialized in XML, JSON, or CSV.
    - `table`: Shows the results in rows of an HTML table.  This is
      the default value.

#### Query element

The following attributes are defined on the `query` element:

  - `data-config="URI"`: A URI that encodes a query together with the
    configuration of a specific view.  These URIs can be created
    within the SPARQL IDE.
  - `data-endpoint="URI"`: The URI of the SPARQL endpoint against
    which a particular query is evaluated.  When absent, the value of
    this attribute on the `<div class="story">` tag is used.
  - `data-query-ref="URI"`: An absolute or relative URI to a file that
    stores a SPARQL query.
  - `data-output="VALUE"`: The output format that is used to display
    the SPARQL result set.  When absent, the value of this attribute
    on the `<div class="story">` tag is used.  See the documentation
    of the Story element for the supported values.
  - `data-show-query`: Used to show the query directly to the user.
