$(document).ready(function(){

  // The Array Used To Build The Maze
  var maze = [
    [3,3,0,3,3,3,3,3,3,3,3,8,3,3,3,3,3,3,3,3,13,3,3,3,3,3,3,3],
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
    [6,2,2,2,2,2,2,2,2,2,1,12,9,7,10,11,12,1,2,2,2,2,2,2,2,2,2,6],
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

  // Blinky Starting Position
  var blinky = {
    x: 12,
    y: 14
  }

  // Pinky Starting Position
  var pinky = {
    x: 13,
    y: 14
  }

  // Inky Starting Position
  var inky = {
    x: 14,
    y: 14
  }

  // Clyde Starting Position
  var clyde = {
    x: 15,
    y: 14
  }

  // Initial Variables
  var board = $('#Game-Window');
  var score = 0;
  var lives = 2;
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
        } else if (maze[i][j] === 7) {
          var col = $(`<td class="col space"><div class="container3"><div class="pinky"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 8) {
          var col = $(`<td class="col time"></td>`).css("border","none").css("color","white")
          row.append(col);
        } else if (maze[i][j] === 9) {
          var col =  $(`<td class="col space"><div class="container3"><div class="blinky"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 10) {
          var col =  $(`<td class="col space"><div class="container3"><div class="inky"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 11) {
          var col =  $(`<td class="col space"><div class="container3"><div class="clyde"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 12) {
          var col = $(`<td class="col cage"></td>`).css("background","black").css("border","none")
          row.append(col);
        } else if (maze[i][j] === 13) {
          var col = $(`<td class="col lives">Lives:-${lives}</td>`).css("border","none").css("color","white")
          row.append(col);
        }
      }
      board.append(row);
    }
  }

  // Sets The Direction Pac-Man Is Travelling
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
  }

  // Pac-Man Move Interval
  var pacMove = setInterval(pacMove, 320)

  // Function Loops That Starts Pac-Man Moving In Set Direction
  function pacMove() {
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

  // Pinky Move Interval
  var pinkyMove = setInterval(pinkyMove, 300)

  // Pinky Initial Direction
  var directionP = 2;

  // Function Loops That Starts Pinky Moving In Set Direction
  function pinkyMove() {
    if (maze[pinky.y-1][pinky.x] ==12) {
      maze[pinky.y][pinky.x] = 12;
      pinky.y = 11;
      maze[pinky.y][pinky.x] = 7;
      drawMaze();
    } else if (directionP <= 2.5) {
      if (maze[pinky.y][pinky.x-1] ==5) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = pinky.x - 1;
        maze[pinky.y][pinky.x] = 7;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pinky.y][pinky.x-1] ==6) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = 26;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      } else if (maze[pinky.y][pinky.x-1] ==1) {
        maze[pinky.y][pinky.x] = 7;
        directionP = Math.random() * 10;
        drawMaze();
      } else if (maze[pinky.y][pinky.x-1] !==1) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = pinky.x - 1;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      }
    } else if (directionP > 2.5 && directionP <= 5) {
      if (maze[pinky.y-1][pinky.x] ==5) {
        maze[pinky.y][pinky.x] = 2;
        pinky.y = pinky.y - 1;
        maze[pinky.y][pinky.x] = 7;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pinky.y-1][pinky.x] ==1) {
        maze[pinky.y][pinky.x] = 7;
        directionP = Math.random() * 10;
        drawMaze();
      } else if (maze[pinky.y-1][pinky.x] !==1) {
        maze[pinky.y][pinky.x] = 2;
        pinky.y = pinky.y - 1;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      }
    } else if (directionP > 5 && directionP <= 7.5) {
      if (maze[pinky.y][pinky.x+1] ==5) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = pinky.x + 1;
        maze[pinky.y][pinky.x] = 7;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pinky.y][pinky.x+1] ==6) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = 1;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      } else if (maze[pinky.y][pinky.x+1] ==1) {
        maze[pinky.y][pinky.x] = 7;
        directionP = Math.random() * 10;
        drawMaze();
      } else if (maze[pinky.y][pinky.x+1] !==1) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = pinky.x + 1;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      }
    } else if (directionP > 7.5) {
      if (maze[pinky.y+1][pinky.x] ==5) {
        maze[pinky.y][pinky.x] = 2;
        pinky.y = pinky.y + 1;
        maze[pinky.y][pinky.x] = 7;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pinky.y+1][pinky.x] ==4) {
        maze[pinky.y][pinky.x] = 7;
        directionP = Math.random() * 10;
        drawMaze();
      } else if (maze[pinky.y+1][pinky.x] ==1) {
        maze[pinky.y][pinky.x] = 7;
        directionP = Math.random() * 10;
        drawMaze();
      } else if (maze[pinky.y+1][pinky.x] !==1) {
        maze[pinky.y][pinky.x] = 2;
        pinky.y = pinky.y + 1;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      }
    }
  }

  // Blinky Move Interval
  var blinkyMove = setInterval(blinkyMove, 300)

  // Blinky Initial Direction
  var directionB = 3;

  // Function Loops That Starts Blinky Moving In Set Direction
  function blinkyMove() {
    if (maze[blinky.y-1][blinky.x] ==12) {
      maze[blinky.y][blinky.x] = 12;
      blinky.y = 11;
      maze[blinky.y][blinky.x] = 9;
    } else if (directionB <= 2.5) {
      if (maze[blinky.y][blinky.x-1] ==5) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = blinky.x - 1;
        maze[blinky.y][blinky.x] = 9;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[blinky.y][blinky.x-1] ==6) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = 26;
        maze[blinky.y][blinky.x] = 9;
      } else if (maze[blinky.y][blinky.x-1] ==1) {
        maze[blinky.y][blinky.x] = 9;
        directionB = Math.random() * 10;
      } else if (maze[blinky.y][blinky.x-1] !==1) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = blinky.x - 1;
        maze[blinky.y][blinky.x] = 9;
      }
    } else if (directionB > 2.5 && directionB <= 5) {
      if (maze[blinky.y-1][blinky.x] ==5) {
        maze[blinky.y][blinky.x] = 2;
        blinky.y = blinky.y - 1;
        maze[blinky.y][blinky.x] = 9;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[blinky.y-1][blinky.x] ==1) {
        maze[blinky.y][blinky.x] = 9;
        directionB = Math.random() * 10;
      } else if (maze[blinky.y-1][blinky.x] !==1) {
        maze[blinky.y][blinky.x] = 2;
        blinky.y = blinky.y - 1;
        maze[blinky.y][blinky.x] = 9;
      }
    } else if (directionB > 5 && directionB <= 7.5) {
      if (maze[blinky.y][blinky.x+1] ==5) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = blinky.x + 1;
        maze[blinky.y][blinky.x] = 9;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[blinky.y][blinky.x+1] ==6) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = 1;
        maze[blinky.y][blinky.x] = 9;
      } else if (maze[blinky.y][blinky.x+1] ==1) {
        maze[blinky.y][blinky.x] = 9;
        directionB = Math.random() * 10;
      } else if (maze[blinky.y][blinky.x+1] !==1) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = blinky.x + 1;
        maze[blinky.y][blinky.x] = 9;
      }
    } else if (directionB > 7.5) {
      if (maze[blinky.y+1][blinky.x] ==5) {
        maze[blinky.y][blinky.x] = 2;
        blinky.y = blinky.y + 1;
        maze[blinky.y][blinky.x] = 9;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[blinky.y+1][blinky.x] ==4) {
        maze[blinky.y][blinky.x] = 9;
        directionB = Math.random() * 10;
      } else if (maze[blinky.y+1][blinky.x] ==1) {
        maze[blinky.y][blinky.x] = 9;
        directionB = Math.random() * 10;
      } else if (maze[blinky.y+1][blinky.x] !==1) {
        maze[blinky.y][blinky.x] = 2;
        blinky.y = blinky.y + 1;
        maze[blinky.y][blinky.x] = 9;
      }
    }
  }

  // Inky Move Interval
  var inkyMove = setInterval(inkyMove, 300)

  // Inky Initial Direction
  var directionI = 6;

  // Function Loops That Starts Inky Moving In Set Direction
  function inkyMove() {
    if (maze[inky.y-1][inky.x] ==12) {
      maze[inky.y][inky.x] = 12;
      inky.y = 11;
      maze[inky.y][inky.x] = 10;
    } else if (directionI <= 2.5) {
      if (maze[inky.y][inky.x-1] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.x = inky.x - 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[inky.y][inky.x-1] ==6) {
        maze[inky.y][inky.x] = 2;
        inky.x = 26;
        maze[inky.y][inky.x] = 10;
      } else if (maze[inky.y][inky.x-1] ==1) {
        maze[inky.y][inky.x] = 10;
        directionI = Math.random() * 10;
      } else if (maze[inky.y][inky.x-1] !==1) {
        maze[inky.y][inky.x] = 2;
        inky.x = inky.x - 1;
        maze[inky.y][inky.x] = 10;
      }
    } else if (directionI > 2.5 && directionI <= 5) {
      if (maze[inky.y-1][inky.x] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.y = inky.y - 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[inky.y-1][inky.x] ==1) {
        maze[inky.y][inky.x] = 10;
        directionI = Math.random() * 10;
      } else if (maze[inky.y-1][inky.x] !==1) {
        maze[inky.y][inky.x] = 2;
        inky.y = inky.y - 1;
        maze[inky.y][inky.x] = 10;
      }
    } else if (directionI > 5 && directionI <= 7.5) {
      if (maze[inky.y][inky.x+1] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.x = inky.x + 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[inky.y][inky.x+1] ==6) {
        maze[inky.y][inky.x] = 2;
        inky.x = 1;
        maze[inky.y][inky.x] = 10;
      } else if (maze[inky.y][inky.x+1] ==1) {
        maze[inky.y][inky.x] = 10;
        directionI = Math.random() * 10;
      } else if (maze[inky.y][inky.x+1] !==1) {
        maze[inky.y][inky.x] = 2;
        inky.x = inky.x + 1;
        maze[inky.y][inky.x] = 10;
      }
    } else if (directionI > 7.5) {
      if (maze[inky.y+1][inky.x] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.y = inky.y + 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[inky.y+1][inky.x] ==4) {
        maze[inky.y][inky.x] = 10;
        directionI = Math.random() * 10;
      } else if (maze[inky.y+1][inky.x] ==1) {
        maze[inky.y][inky.x] = 10;
        directionI = Math.random() * 10;
      } else if (maze[inky.y+1][inky.x] !==1) {
        maze[inky.y][inky.x] = 2;
        inky.y = inky.y + 1;
        maze[inky.y][inky.x] = 10;
      }
    }
  }

  // Clyde Move Interval
  var clydeMove = setInterval(clydeMove, 300)

  // Clyde Initial Direction
  var directionC = 3;

  // Function Loops That Starts Clyde Moving In Set Direction
  function clydeMove() {
    if (maze[clyde.y-1][clyde.x] ==12) {
      maze[clyde.y][clyde.x] = 12;
      clyde.y = 11;
      maze[clyde.y][clyde.x] = 11;
    } else if (directionC <= 2.5) {
      if (maze[clyde.y][clyde.x-1] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = clyde.x - 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[clyde.y][clyde.x-1] ==6) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = 26;
        maze[clyde.y][clyde.x] = 11;
      } else if (maze[clyde.y][clyde.x-1] ==1) {
        maze[clyde.y][clyde.x] = 11;
        directionC = Math.random() * 10;
      } else if (maze[clyde.y][clyde.x-1] !==1) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = clyde.x - 1;
        maze[clyde.y][clyde.x] = 11;
      }
    } else if (directionC > 2.5 && directionC <= 5) {
      if (maze[clyde.y-1][clyde.x] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.y = clyde.y - 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[clyde.y-1][clyde.x] ==1) {
        maze[clyde.y][clyde.x] = 11;
        directionC = Math.random() * 10;
      } else if (maze[clyde.y-1][clyde.x] !==1) {
        maze[clyde.y][clyde.x] = 2;
        clyde.y = clyde.y - 1;
        maze[clyde.y][clyde.x] = 11;
      }
    } else if (directionC > 5 && directionC <= 7.5) {
      if (maze[clyde.y][clyde.x+1] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = clyde.x + 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[clyde.y][clyde.x+1] ==6) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = 1;
        maze[clyde.y][clyde.x] = 11;
      } else if (maze[clyde.y][clyde.x+1] ==1) {
        maze[clyde.y][clyde.x] = 11;
        directionC = Math.random() * 10;
      } else if (maze[clyde.y][clyde.x+1] !==1) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = clyde.x + 1;
        maze[clyde.y][clyde.x] = 11;
      }
    } else if (directionC > 7.5) {
      if (maze[clyde.y+1][clyde.x] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.y = clyde.y + 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
      } else if (maze[clyde.y+1][clyde.x] ==4) {
        maze[clyde.y][clyde.x] = 11;
        directionC = Math.random() * 10;
      } else if (maze[clyde.y+1][clyde.x] ==1) {
        maze[clyde.y][clyde.x] = 11;
        directionC = Math.random() * 10;
      } else if (maze[clyde.y+1][clyde.x] !==1) {
        maze[clyde.y][clyde.x] = 2;
        clyde.y = clyde.y + 1;
        maze[clyde.y][clyde.x] = 11;
      }
    }
  }

  // Initial Creation Of The Maze
  drawMaze();

  // Counter Updating The Lives Counter Once A Second
  var lifeWatch = setInterval(livesLeft, 1000)

  // Function To Switch To The Game Over Screen When Lives Hit Zero And Store Session Score
  function livesLeft(){
    if (lives <= 0){
      sessionStorage.setItem("score",`${score}`);
      document.location.href = 'gameover.html';
    };
  }

});
