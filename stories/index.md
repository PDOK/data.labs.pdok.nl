---
layout: default
title: SPARQL Stories
---

# Data Stories

Data stories zijn HTML presentaties waarin de mogelijkheden van SPARQL, de kracht van datavisualisatie en de eenvoud van beschrijvende tekst worden gedemonstreerd.

Een uitgebreidere beschrijving van de manier waarop deze technisch tot stand komen is [hier](about.html) te vinden.

## Beschikbare data stories

{% for page in site.pages %}
  {% if page.layout == "story" %}
<div class="showcase" style="background-image: url('{{page.logo}}'); background-repeat: no-repeat; background-size: cover; background-position: bottom;">
  <h2>
    <div class="showcase-title">{{page.title}}</div>
  </h2>
  <p style="background-color: rgba(255, 255, 255, 0.6);">{{page.description}}</p>
  <br>
  <a href="{{page.url}}" class="btn showcase-btn">Kijk verder...</a>
</div>
    {% endif %}
{% endfor %}
