---
layout: default
title: SPARQL Stories
---

Data stories zijn HTML presentaties waarin de mogelijkheden van SPARQL, de kracht van datavisualisatie en de eenvoud van beschrijvende tekst worden gedemonstreerd.

Een uitgebreidere beschrijving van de manier waarop deze technisch tot stand komen is [hier](about.html) te vinden.

## Beschikbare data stories

{% for page in site.pages %}
    {% if page.layout == "story" %}
* [{{page.title}}]({{page.url}})
    {% endif %}
{% endfor %}