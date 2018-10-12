function init() {
  if (!webglEnabled()) {
    alert('Deze pagina heeft WebGL nodig, maar deze webbrowser lijkt dat niet te ondersteunen.');
    return;
  }
  document.getElementById('slider_opacity').oninput = (function() {
    document.getElementById('OpVS').setAttribute('opacityFactor', this.value);
  });
  document.getElementById('slider_depth_factor').oninput = (function() {
    document.getElementById('transform_geotop').setAttribute('scale', '44100 14000 ' +  112.25*this.value);
    var elements = document.getElementsByClassName('transform_text');
    var len = elements.length;
    for (i = 0; i < len; i++) {
      elements[i].setAttribute('scale', '0.005 ' + 0.1*(20/this.value) + ' 0.002');
    }
    document.getElementById('depth_factor').value = this.value;
  });
  document.getElementById('slider_crosssection').oninput = (function() {
    var crosssectionDirection = getCrossSectionDirection();
    document.getElementById('MPRVolStyle').setAttribute('positionLine', 1 - this.value);
    switch (crosssectionDirection) {
      case 'ns':
        document.getElementById('crosssectionPos').value = Math.round(this.value * 44100) + ' m';
        break;
      case 'ew':
        document.getElementById('crosssectionPos').value = Math.round(this.value * 14000) + ' m';
        break;
      case 'hl':
        document.getElementById('crosssectionPos').value = Math.round((this.value * 112.25) -50) + ' m';
        break;
    }
  });
  /*
  document.getElementById('slider_crosssection_rvs').oninput = (function() {
    document.getElementById('cut_plane_translation').setAttribute('translation', '0.0 0.0 ' + 2.0*(this.value - 0.5));
    document.getElementById('rvs').setAttribute('xSectionPosition', this.value);
  });
  var w = document.getElementById('x3d').getAttribute('width');
  var h = document.getElementById('x3d').getAttribute('height');
  console.log('h: ', h.substring(0, h.length-2));
  console.log('w: ', w.substring(0, w.length-2));
  //document.getElementById('deptex').setAttribute('dimensions', w.substring(0, w.length-2) + ' ' + h.substring(0, h.length-2) + ' 4');
  */
}

function getCrossSectionDirection() {
  var radios = document.getElementsByName('crosssectionRadios');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        return(radios[i].value);
        break;
    }
  }
}

function webglEnabled() {
  var canvas = document.createElement('canvas');
  var webglContextParams = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  var webglContext = null;
  for (var index = 0; index < webglContextParams.length; index++) {
    try {
      webglContext = canvas.getContext(webglContextParams[index]);
      if(webglContext) {
        break;
      }
    } catch (E) {
      console.log(E);
    }
  }
  if(webglContext === null) {
    return false;
  } else {
    return true;
  }
}

function switch_lithoclass() {
  document.getElementById('control_crosssection').setAttribute('style', 'display:none;');
  document.getElementById('control_brightness').setAttribute('style', 'display:block;');
  var radios = document.getElementsByName('lithoclassRadios');
  var lithoclass;
  for (var i = 0; i < radios.length; i++){
    if(radios[i].checked){
       lithoclass = radios[i].value;
    }
  }
  document.getElementById('volumeSwitcher').setAttribute('whichChoice', '0');
  //document.getElementById('ctrlCrosssection').setAttribute('style', 'opacity: 0.5;');
  document.getElementById('control_brightness').setAttribute('style', 'opacity: 1;');
  var maxOpacity = document.getElementById('slider_opacity').getAttribute('max');
  document.getElementById('probabilityAtlas').setAttribute('url', 'data_lekdijk/zatlas_' + lithoclass + '.png');
  document.getElementById('texture_omvs').setAttribute('url', 'transfer_' + lithoclass + '.png');
  //document.getElementById('OpVS').setAttribute('opacityFactor', (maxOpacity/2).toString());
  //document.getElementById('slider_opacity').value = (maxOpacity/2).toString();
}

function crosssection(direction) {
  document.getElementById('volumeSwitcher').setAttribute('whichChoice', '1');
  document.getElementById('control_crosssection').setAttribute('style', 'display:block;');
  document.getElementById('control_brightness').setAttribute('style', 'display:none;');
  switch (direction) {
    case 'ns':
      document.getElementById('MPRVolStyle').setAttribute('originLine','1,1,0');
      document.getElementById('MPRVolStyle').setAttribute('finalLine','0,1,0');
      document.getElementById('MPRVolStyle').setAttribute('positionLine','0.5');
      document.getElementById('crosssectionPos').value = '22050 m';
      document.getElementById('slider_crosssection').value = 0.5;
      break;
    case 'ew':
      document.getElementById('MPRVolStyle').setAttribute('originLine','0,1,1');
      document.getElementById('MPRVolStyle').setAttribute('finalLine','0,0,1');
      document.getElementById('MPRVolStyle').setAttribute('positionLine','0.5');
      document.getElementById('crosssectionPos').value = '7000 m';
      document.getElementById('slider_crosssection').value = 0.5;
      break;
    case 'hl':
      document.getElementById('MPRVolStyle').setAttribute('originLine','1,0,1');
      document.getElementById('MPRVolStyle').setAttribute('finalLine','1,0,0');
      document.getElementById('MPRVolStyle').setAttribute('positionLine','0.5708');
      document.getElementById('crosssectionPos').value = '0 m';
      document.getElementById('slider_crosssection').value = 0.39087;
      break;
  }
}

function toggleRefLayer(el) {
  document.getElementById(el.value).setAttribute('render', el.checked);
}

function toggleViewpoint(el) {
  document.getElementById(el.value).setAttribute('set_bind', el.checked);
}

function switch_bgcolour() {
  document.body.style.backgroundColor = colour;
}

function showHelp() {
  document.getElementById('help').setAttribute('style', 'display:block;');
}

function closeHelp() {
  document.getElementById('help').setAttribute('style', 'display:none;');
}

function openNav() {
  document.getElementById('side_menu').style.width = '250px';
}

function closeNav() {
  document.getElementById('side_menu').style.width = '0';
}