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
  var wallLeft = [];
  var wallTop = [];
  var wallRight = [];
  var wallBottom = [];

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
        var col = $(`<td class="col space${cellCount}"><div class="container2"><div class="coin"></div></div></td>`)
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

  var $pacman = $('.pacman');
  var interval;

  setInterval(movePlane, 200);
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

      for (var i = 0; i < wallLeft.length; i++) {

        interval = setInterval(function(){
          // Check ball position
          var pacLeft = $pacman.offset().left;
          var pacTop = $pacman.offset().top;
          var pacRight = pacLeft + $pacman.width();
          var pacBottom = pacTop + $pacman.height();

          // When ballRight is greater than containerRight
          if (pacRight >= wallLeft[i]) {
            $pacman.stop();
          }

          // When ballLeft is less than containerRight
          if (pacLeft <= wallRight[i]) {
            $pacman.stop();
          }

          // When ballBottom is greater than containerBottom
          if (pacBottom >= wallTop[i]) {
            $pacman.stop();
          }

          // When ballTop is less than containerTop
          if (pacTop <= wallBottom[i]) {
            $pacman.stop();
          }
        }, 20);
      }

    }

  }
});
