---
layout: default
title: Archiefviewer op de kaart
---
<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
<!-- The line below is only needed for old environments like Internet Explorer and Android 4.x -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
<script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
<style>
  .map:-moz-full-screen {
    height: 100%;
  }
  .map:-webkit-full-screen {
    height: 100%;
  }
  .map:-ms-fullscreen {
    height: 100%;
  }
  .map:fullscreen {
    height: 100%;
  }
  .ol-rotate {
    top: 3em;
  }
  .map {
    position: relative;
  }
  
  #overlay {
    display: inline-block;
    position: absolute;
    top: 1em;
    right: 3em;
    height: 90%;
    width: 300px;
    z-index: 20000;
    background-color: white;
    padding: 0 0.5em 0.5em 0.5em;
    opacity: 0.8;
    overflow-y: auto;
  }
</style>
    
<div id="map" class="map"><div id="overlay" style="z-index:9999">Selecteer een perceel</div></div>

<script src="/assets/js/archive-mapviewer.js">
</script>