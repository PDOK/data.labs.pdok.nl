---
layout: default
---
<div class="container story" data-query-endpoint="https://data.labs.pdok.nl/sparql/">

{{ content }}

</div>
<script src="../../assets/js/jquery-3.2.1.min.js"></script>
<script src="../../assets/js/tether-1.3.3.min.js"></script>
<script src="../../assets/js/bootstrap.min.js"></script>
<script src="../../assets/js/yasgui.min.js"></script>
<script type="text/javascript">
YASGUI.YASR.plugins.leaflet.defaults.defaultMap = "nlmaps";
YASGUI.sparqlStories();
</script>
