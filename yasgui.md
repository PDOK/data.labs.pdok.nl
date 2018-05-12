---
layout: default
title: SPARQL
---
<div id='sparql-editor'></div>
<script>
YASGUI.YASQE.defaults.value = 'SELECT * WHERE {\n ?s ?p ?o .\n} \nLIMIT 10';
YASGUI.defaults.yasqe.sparql.endpoint = 'https://data.labs.pdok.nl/sparql';
YASGUI.YASR.plugins.leaflet.defaults.defaultMap = "nlmaps";
const yasgui = YASGUI(document.getElementById('sparql-editor'));
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
