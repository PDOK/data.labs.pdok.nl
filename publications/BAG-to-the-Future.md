---
layout: default
title: BAG to the Future
---

<style>
  @font-face {
    font-family: 'MyWebFont';
    src: url('bttf.ttf') format('truetype');
  }
  *.bttf {
    font-family: 'MyWebFont', Fallback, sans-serif !important;
    font-size: 280% !important;
  }
  ul {
    list-style-type: none !important;
  }
</style>

<h1 class="bttf">BAG &lt; to the Future</h1>

Toon de BAG mutaties uit 2015 in 3D.  Een BAG pand kan in één van de
volgende toestanden verkeren:

<ul>
  <li><svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" fill="#22b14c" r="10"/></svg> Bouwvergunning verleend</li>
  <li><svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" fill="#8ff334" r="10"/></svg> Bouw gestart</li>
  <li><svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" fill="#bdfc2c" r="10"/></svg> Pand in gebruik</li>
  <li><svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" fill="#fff200" r="10"/></svg> Niet gerealiseerd pand</li>
  <li><svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" fill="#ff9a35" r="10"/></svg> Pand buiten gebruik</li>
  <li><svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" fill="#ff7f27" r="10"/></svg> Sloopvergunning verleend</li>
  <li><svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" fill="#ed1c24" r="10"/></svg> Pand gesloopt</li>
</ul>

<query data-endpoint="https://data.pdok.nl/sparql" data-query-ref="bag-to-the-future-q1.rq" data-output="geo3d"></query>
