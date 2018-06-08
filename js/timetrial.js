$(document).ready(function(){

  // The Array Used To Build The Maze
  var maze = [
    [3,3,0,3,3,3,3,3,3,3,3,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
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
    [1,1,1,1,1,1,2,1,1,2,1,12,12,12,12,12,12,1,2,1,1,2,1,1,1,1,1,1],
    [6,2,2,2,2,2,2,2,2,2,1,12,12,12,12,12,12,1,2,2,2,2,2,2,2,2,2,6],
    [1,1,1,1,1,1,2,1,1,2,1,12,12,12,12,12,12,1,2,1,1,2,1,1,1,1,1,1],
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

  // Pac-Man Starting Position
  var pacman = {
    x: 14,
    y: 23
  }

  var board = $('#Game-Window');
  var score = 0;
  var time = 45;
  var interval;
  var directionPM = 1;


  // The Function That Uses The Maze Array To Build Out The Maze
  function drawMaze(){
    document.getElementById(`Game-Window`).innerHTML = "";
    for (var i = 0; i < maze.length; i++) {
      var row = $('<tr class="row"></tr>');
      for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 0) {
          var col = $(`<td class="col score">Score:-${score}</td>`).css("border","none").css("color","white")
          row.append(col);
        } else if (maze[i][j] === 1) {
          var col = $(`<td class="col wall"></td>`).css("background","white").css("border-color","black")
          row.append(col);
        } else if (maze[i][j] === 2) {
          var col = $(`<td class="col space"><div class="container2"><div class="coin"></div></div></td>`).css("border","none")
          row.append(col);
        } else if (maze[i][j] === 3) {
          var col = $(`<td class="col blank"></td>`).css("background","black").css("border","none")
          row.append(col);
        } else if (maze[i][j] === 4) {
          var col = $(`<td class="col door"></td>`).css("background","black")
          row.append(col);
        } else if (maze[i][j] === 5) {
          if (directionPM == 1) {
            var col = $(`<td class="col space"><div class="container1"><div class="pacman"></div></div></td>`).css("background","black").css("border","none").css("transform","rotate(180deg)");
          } else if (directionPM == 2) {
            var col = $(`<td class="col space"><div class="container1"><div class="pacman"></div></div></td>`).css("background","black").css("border","none").css("transform","rotate(270deg)");
          } else if (directionPM == 3) {
            var col = $(`<td class="col space"><div class="container1"><div class="pacman"></div></div></td>`).css("background","black").css("border","none").css("transform","rotate(0deg)");
          } else if (directionPM == 4) {
            var col = $(`<td class="col space"><div class="container1"><div class="pacman"></div></div></td>`).css("background","black").css("border","none").css("transform","rotate(90deg)");
          }
          row.append(col);
        } else if (maze[i][j] === 6) {
          var col = $(`<td class="col exit"></td>`).css("background","black").css("border","none")
          row.append(col);
        } else if (maze[i][j] === 8) {
          var col = $(`<td class="col time">Time Remaining:-${time}</td>`).css("border","none").css("color","white")
          row.append(col);
        } else if (maze[i][j] === 12) {
          var col = $(`<td class="col cage"></td>`).css("background","black").css("border","none")
          row.append(col);
        }
      }
      board.append(row);
    }
  }

  // Sets The Direction Pac-Man Is Travelling
  // document.onkeydown = function(e){
  //   if ((e.keyCode === 37)) {
  //     directionPM = 1;
  //   } else if ((e.keyCode === 38)) {
  //     directionPM = 2;
  //   } else if ((e.keyCode === 39)) {
  //     directionPM = 3;
  //   } else if ((e.keyCode === 40)) {
  //     directionPM = 4;
  //   }
  // }

  // Pac-Man Move Interval
  // var pacMove = setInterval(pacMove, 320)

  // Function Loops That Starts Pac-Man Moving In Set Direction
  document.onkeydown = function(e){
    if ((e.keyCode === 37)) {
      directionPM = 1;
    } else if ((e.keyCode === 38)) {
      directionPM = 2;
    } else if ((e.keyCode === 39)) {
      directionPM = 3;
    } else if ((e.keyCode === 40)) {
      directionPM = 4;
    }
    if (directionPM == 1) {
      if (maze[pacman.y][pacman.x-1] ==7 || maze[pacman.y][pacman.x-1] ==9 || maze[pacman.y][pacman.x-1] ==10 || maze[pacman.y][pacman.x-1] ==11) {
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x-1] ==6) {
        maze[pacman.y][pacman.x] = 3;
        pacman.x = 26;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x-1] ==4) {
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x-1] !==1) {
        if (maze[pacman.y][pacman.x-1] ==2) {
          maze[pacman.y][pacman.x] = 3;
          pacman.x = pacman.x - 1;
          maze[pacman.y][pacman.x] = 5;
          score += 100;
          drawMaze();
        } else {
          maze[pacman.y][pacman.x] = 3;
          pacman.x = pacman.x - 1;
          maze[pacman.y][pacman.x] = 5;
          drawMaze();
        }
      }
    } else if (directionPM == 2) {
      $(".pacman").css("transform","rotate(270deg)");
      if (maze[pacman.y-1][pacman.x] ==7 || maze[pacman.y-1][pacman.x] ==9 || maze[pacman.y-1][pacman.x] ==10 || maze[pacman.y-1][pacman.x] ==11) {
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y-1][pacman.x] ==4) {
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y-1][pacman.x] !==1) {
        if (maze[pacman.y-1][pacman.x] ==2) {
          maze[pacman.y][pacman.x] = 3;
          pacman.y = pacman.y - 1;
          maze[pacman.y][pacman.x] = 5;
          score += 100;
          drawMaze();
        } else {
          maze[pacman.y][pacman.x] = 3;
          pacman.y = pacman.y - 1;
          maze[pacman.y][pacman.x] = 5;
          drawMaze();
        }
      }
    } else if (directionPM == 3) {
      $(".pacman").css("transform","rotate(0deg)");
      if (maze[pacman.y][pacman.x+1] ==7 || maze[pacman.y][pacman.x+1] ==9 || maze[pacman.y][pacman.x+1] ==10 || maze[pacman.y][pacman.x+1] ==11) {
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x+1] ==4) {
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x+1] ==6) {
        maze[pacman.y][pacman.x] = 3;
        pacman.x = 1;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y][pacman.x+1] !==1) {
        if (maze[pacman.y][pacman.x+1] ==2) {
          maze[pacman.y][pacman.x] = 3;
          pacman.x = pacman.x + 1;
          maze[pacman.y][pacman.x] = 5;
          score += 100;
          drawMaze();
        } else {
          maze[pacman.y][pacman.x] = 3;
          pacman.x = pacman.x + 1;
          maze[pacman.y][pacman.x] = 5;
          drawMaze();
        }
      }
    } else if (directionPM == 4) {
      $(".pacman").css("transform","rotate(90deg)");
      if (maze[pacman.y+1][pacman.x] ==7 || maze[pacman.y+1][pacman.x] ==9 || maze[pacman.y+1][pacman.x] ==10 || maze[pacman.y+1][pacman.x] ==11) {
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y+1][pacman.x] ==4) {
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pacman.y+1][pacman.x] !==1) {
        if (maze[pacman.y+1][pacman.x] ==2) {
          maze[pacman.y][pacman.x] = 3;
          pacman.y = pacman.y + 1;
          maze[pacman.y][pacman.x] = 5;
          drawMaze();
        } else {
          maze[pacman.y][pacman.x] = 3;
          pacman.y = pacman.y + 1;
          maze[pacman.y][pacman.x] = 5;
          drawMaze();
        }
      }
    }
  }

  // Initial Creation Of The Maze
  drawMaze();

  // Counter Updating The Lives Counter Once A Second
  var lifeWatch = setInterval(livesLeft, 1000)

  // Function To Switch To The Game Over Screen When Lives Hit Zero And Store Session Score
  function livesLeft(){
    if (time != 0) {
      time--;
    } else if (time === 0){
      sessionStorage.setItem("score",`${score}`);
      document.location.href = 'gameovertime.html';
    };
  }

});
