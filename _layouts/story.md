---
layout: default
---

{% if page.endpoint %}
  <div class="container story" data-query-endpoint="{{ page.endpoint }}">
{% else %}
  <!-- Fallback to default labs endpoint -->
  <div class="container story" data-query-endpoint="https://data.labs.pdok.nl/sparql/">
{% endif %}

{{ content }}

</div>
<script type="text/javascript">
YASGUI.YASR.plugins.leaflet.defaults.defaultMap = "nlmaps";
YASGUI.sparqlStories();
</script>
