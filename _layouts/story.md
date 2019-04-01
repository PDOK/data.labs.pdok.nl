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
<!--[if !IE]><script>fixScale(document);</script><![endif]-->
<link href="/assets/css/yasgui.bootstrap.css" rel="stylesheet" type="text/css">
<link href="/assets/css/yasgui.min.css" rel="stylesheet" type="text/css">
<!-- removal of the flex tag for the .yasgui .yasr .yasr_btn to improve styling issue. -->
<style type="text/css">
  .yasgui .yasr .yasr_btn {
    display: flow-root;
  }
</style>
<script src="/assets/js/yasgui.min.js"></script>
<script src="/assets/js/yasgui.polyfill.min.js"></script>
<script type="text/javascript">
  window.onload = function () {
    window.Yasgui.Yasr.Instance.plugins.geo.defaults.defaults.grouped = false; //### CHANGE GROUPING FROM grouped = false => visualization = 'grouped'
    {% if page.basemap %}
    window.Yasgui.Yasr.Instance.plugins.geo.defaults.defaults.map = "{{ page.basemap }}";
    window.Yasgui.Yasr.Instance.plugins.geo3d.defaults.map =  "{{ page.basemap }}";
    {% else %}
    window.Yasgui.Yasr.Instance.plugins.geo.defaults.defaults.map = "nlmaps";
    window.Yasgui.Yasr.Instance.plugins.geo3d.defaults.map =  "nlmaps";
    {% endif %}
    Yasgui.stories()
  };
</script>
