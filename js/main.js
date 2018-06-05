$(document).ready(function(){

  var maze = [
    [3,3,0,3,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
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
    [6,2,2,2,2,2,2,2,2,2,1,3,3,3,3,3,3,1,2,2,2,2,2,2,2,2,2,6],
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

  var pacman = {
    x: 14,
    y: 23
  }

  var board = $('#Game-Window');
  var cellCount = 0;
  var score = 0;
  var wallLeft = [];
  var wallTop = [];
  var wallRight = [];
  var wallBottom = [];

  function drawMaze(){
    document.getElementById(`Game-Window`).innerHTML = "";
    for (var i = 0; i < maze.length; i++) {
      var row = $('<tr class="row"></tr>');
      for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 0) {
          var col = $(`<td class="col score1">Score:</td>`).css("border","none").css("color","white")
          row.append(col);
        } else if (maze[i][j] === 1) {
          var col = $(`<td class="col wall${cellCount}"></td>`).css("background","white").css("border-color","black")
          row.append(col);
        } else if (maze[i][j] === 2) {
          var col = $(`<td class="col space${cellCount}"><div class="container2"><div class="coin"></div></div></td>`).css("border","none")
          row.append(col);
        } else if (maze[i][j] === 3) {
          var col = $(`<td class="col cage${cellCount}"></td>`).css("background","black").css("border","none")
          row.append(col);
        } else if (maze[i][j] === 4) {
          var col = $(`<td class="col door${cellCount}"></td>`).css("background","black")
          row.append(col);
        } else if (maze[i][j] === 5) {
          var col = $(`<td class="col space${cellCount}"><div class="container1"><div class="pacman"></div></div></td>`).css("background","black").css("border","none")
          row.append(col);
        } else if (maze[i][j] === 6) {
          var col = $(`<td class="col exit${cellCount}"></td>`).css("background","black").css("border","none")
          row.append(col);
        } else if (maze[i][j] === 7) {
          var col = $(`<td class="col score2">-${score}</td>`).css("border","none").css("color","white")
          row.append(col);
        }
        cellCount++;
      }
      board.append(row);
    }
  }

  document.onkeydown = function(e){
    if ((e.keyCode === 37)) {
      if (maze[pacman.y][pacman.x-1] ==6) {
        maze[pacman.y][pacman.x] = 3;
        pacman.x = 26;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x-1] !==1) {
        maze[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x - 1;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      }
    } else if ((e.keyCode === 38)) {
      if (maze[pacman.y-1][pacman.x] !==1) {
        maze[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y - 1;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      }
    } else if ((e.keyCode === 39)) {
      if (maze[pacman.y][pacman.x+1] ==6) {
        maze[pacman.y][pacman.x] = 3;
        pacman.x = 1;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x+1] !==1) {
        maze[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x + 1;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      }
    } else if ((e.keyCode === 40)) {
      if (maze[pacman.y+1][pacman.x] !==1) {
        maze[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y + 1;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      }
    }
  }

  drawMaze();

});
