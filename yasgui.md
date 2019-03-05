---
layout: story
title: SPARQL
---

<div id="yasgui"></div>
<script>
document.addEventListener("DOMContentLoaded", function(event) {
  Yasgui(document.getElementById("yasgui"), {
    endpoint: "https://data.labs.pdok.nl/sparql"
  });
});
</script>



<style>
.google-visualization-table .gradient {
  color: black;
  font-family: inherit;
}

/*Changes made to the colours of the headers from sparql. Could only be forced with important at the moment.*/

th {
	color: black !important;
	background: white !important;
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
