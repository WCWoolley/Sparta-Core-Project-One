$(document).ready(function(){

  var maze = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,2,1,1,4,4,4,4,1,1,2,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,2,1,3,3,3,3,3,3,1,2,1,1,2,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,2,2,1,3,3,3,3,3,3,1,2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,1,1,2,1,1,2,1,3,3,3,3,3,3,1,2,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,2,1,1,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,1,1,2,2,2,1],
    [1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1],
    [1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1],
    [1,2,2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  console.log(maze[0].length)

  var board = $('#Game-Window');
  var cellCount = 0;

  for (var i = 0; i < maze.length; i++) {
    var row = $('<tr class="row"></tr>');
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 0) {
        var col = $(`<td class="col score${cellCount}"></td>`)
        row.append(col);
      } else if (maze[i][j] === 1) {
        var col = $(`<td class="col wall${cellCount}"></td>`).css("background","white")
        row.append(col);
      } else if (maze[i][j] === 2) {
        var col = $(`<td class="col space${cellCount}"></td>`).css("background","black")
        row.append(col);
      } else if (maze[i][j] === 3) {
        var col = $(`<td class="col cage${cellCount}"></td>`).css("background","black")
        row.append(col);
      } else if (maze[i][j] === 4) {
        var col = $(`<td class="col door${cellCount}"></td>`).css("background","black")
        row.append(col);
      } else if (maze[i][j] === 5) {
        var col = $(`<td class="col space${cellCount}"><div class="container1"><div class="pacman"></div></div></td>`).css("background","black")
        row.append(col);
      }
      cellCount++;
    }
    board.append(row);
  }

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

      // interval = setInterval(function(){
      // Check ball position
      // var pacLeft = $pacman.offset().left;
      // var pacTop = $pacman.offset().top;
      // var pacRight = pacLeft + $pacman.width();
      // var pacBottom = pacTop + $pacman.height();
      //
      // // Check container position
      // var wallLeft = $wall.offset().left;
      // var wallTop = $wall.offset().top;
      // var wallRight = wallLeft + $wall.width();
      // var wallBottom = wallTop + $wall.height();

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
      // }, 20)
    }
  }


  // console.log($wall.offset().left);

});
