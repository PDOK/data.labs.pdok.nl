---
layout: default
---

{% if page.endpoint %}
    <div class="container story" data-query-endpoint="{{ page.endpoint }}" data-query-output="{{ page.output }}">
{% else %}
  <!-- Fallback to default labs endpoint -->
  <div class="container story" data-query-endpoint="https://data.labs.pdok.nl/sparql/" data-query-output="{{ page.output }}">
{% endif %}

{{ content }}

</div>
<script type="text/javascript">
YASGUI.YASR.plugins.leaflet.defaults.defaultMap = "nlmaps";
YASGUI.sparqlStories();
</script>

<style>
.google-visualization-table .gradient {
  color: black;
  font-family: inherit;
}

header {
  display: none;
}

.wrapper {
    width: 95%;
}

section {
  margin-left: 50px;
  // margin-right: 50px;
}
</style>
