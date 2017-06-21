---
layout: default
title: SPARQL
---
<div id='sparql-editor'></div>
<script>
YASGUI.YASQE.defaults.value = 'SELECT * WHERE {\n ?s ?p ?o .\n} \nLIMIT 10';
YASGUI.YASQE.defaults.sparql.endpoint = 'https://data.labs.pdok.nl/sparql';
YASGUI.defaults.yasqe.sparql.endpoint = 'https://data.labs.pdok.nl/sparql';
const yasgui = YASGUI(document.getElementById('sparql-editor'));
</script>