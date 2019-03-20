var html = '';
var numColor;
var rgbColor;

for ( var i = 0; i < 10; i++ ) {
  rgbColor = 'rgb(';
  for (var j = 0; j < 3; j++) {
    
    rgbColor += Math.floor(Math.random() * 256);
    
    if ( j === 2) {
      rgbColor += ')';
      break;
    }
    rgbColor += ',';
  }
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);