$(document).ready(function(){
  var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
      prop,
      el = document.createElement('div');

  for(var i = 0, l = props.length; i < l; i++) {
      if(typeof el.style[props[i]] !== "undefined") {
          prop = props[i];
          break;
      }
  }

  //*use Arrow Key to rotate
  var xAngle = 0, yAngle = 0;
  $('body').keydown(function(evt) {
      switch(evt.keyCode) {
          case 37: // left
              yAngle -= 90;
              break;

          case 38: // up
              xAngle += 90;
              break;

          case 39: // right
              yAngle += 90;
              break;

          case 40: // down
              xAngle -= 90;
              break;
      };
      document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
  });

  /* use gest.js to rotate*/
  var AngleX = 0, AngleY = 0;

	  document.addEventListener('gest', function(gesture) {
      if (gesture.left) {
        AngleY -= 90;


      } else if (gesture.right) {
        AngleY += 90;

      } else if (gesture.up){
        AngleX += 90;

      } else if (gesture.down) {
        AngleX -= 90;
      }
      document.getElementById('cube').style[prop] = "rotateX("+AngleX+"deg) rotateY("+AngleY+"deg)";

	  }, false);

  gest.start();
 });