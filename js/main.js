$(document).ready(function(){

  var $wall = $('.wall')
  var $pacman = $('.pacman');
  var interval;

  setInterval(movePlane, 100);
  var keys = {}

  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
    delete keys[e.keyCode];
  });

  function movePlane() {
    for (var direction in keys) {
      if (!keys.hasOwnProperty(direction)) continue;
      if (direction == 37) {
        $pacman.animate({left: "-=300"}, 1000, "linear");
      }
      if (direction == 38) {
        $pacman.animate({top: "-=300"}, 1000, "linear");
      }
      if (direction == 39) {
        $pacman.animate({left: "+=300"}, 1000, "linear");
      }
      if (direction == 40) {
        $pacman.animate({top: "+=300"}, 1000, "linear");
      }

      interval = setInterval(function(){
        // Check ball position
        var pacLeft = $pacman.offset().left;
        var pacTop = $pacman.offset().top;
        var pacRight = pacLeft + $pacman.width();
        var pacBottom = pacTop + $pacman.height();

        // Check container position
        var wallLeft = $wall.offset().left;
        var wallTop = $wall.offset().top;
        var wallRight = wallLeft + $wall.width();
        var wallBottom = wallTop + $wall.height();

        // When ballRight is greater than containerRight
        // if (pacRight > wallLeft) {
        //   $pacman.stop();
        // }

        // When ballLeft is less than containerRight
        // if (pacLeft < wallRight) {
        //   $pacman.stop();
        // }

        // When ballBottom is greater than containerBottom
        // if (pacBottom >= wallTop) {
        //   $pacman.stop();
        // }

        // When ballTop is less than containerTop
        // if (pacTop <= wallBottom) {
        //   $pacman.stop();
        // }
        // console.log(pacTop);
        // console.log(wallBottom);
      }, 20)
    }
  }


  console.log($wall.offset().left);

});
