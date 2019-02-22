---
layout: default
---

{% if page.endpoint %}
    <div class="container story" data-endpoint="{{ page.endpoint }}" data-output="{{ page.output }}">
{% else %}
  <!-- Fallback to default labs endpoint -->
  <div class="container story" data-endpoint="https://data.labs.pdok.nl/sparql/" data-output="{{ page.output }}">
{% endif %}

{{ content }}

</div>

<style>
.google-visualization-table .gradient {
  color: black;
  font-family: inherit;
}


/*Changes made to the colours of the headers from sparql. Could only be forced with important at the moment.*/

th {
	color: black;
  background: white;
}

.yasgui .yasqe .CodeMirror-fullscreen {
	top: 100px !important;
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
