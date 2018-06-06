$(document).ready(function(){

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

  var pacman = {
    x: 14,
    y: 23
  }

  var blinky = {
    x: 12,
    y: 14
  }

  var pinky = {
    x: 13,
    y: 14
  }

  var inky = {
    x: 14,
    y: 14
  }

  var clyde = {
    x: 15,
    y: 14
  }

  var board = $('#Game-Window');
  var cellCount = 0;
  var score = 0;
  var lives = 3;
  var time = 0;
  var interval;



  function drawMaze(){
    document.getElementById(`Game-Window`).innerHTML = "";
    for (var i = 0; i < maze.length; i++) {
      var row = $('<tr class="row"></tr>');
      for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 0) {
          var col = $(`<td class="col score1">Score:-${score}</td>`).css("border","none").css("color","white")
          row.append(col);
        } else if (maze[i][j] === 1) {
          var col = $(`<td class="col wall${cellCount}"></td>`).css("background","white").css("border-color","black")
          row.append(col);
        } else if (maze[i][j] === 2) {
          var col = $(`<td class="col space${cellCount}"><div class="container2"><div class="coin"></div></div></td>`).css("border","none")
          row.append(col);
        } else if (maze[i][j] === 3) {
          var col = $(`<td class="col blank${cellCount}"></td>`).css("background","black").css("border","none")
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
          var col = $(`<td class="col space${cellCount}"><div class="container3"><div class="pinky"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 8) {
          var col = $(`<td class="col time1">Time Left:-${time}</td>`).css("border","none").css("color","white")
          row.append(col);
        } else if (maze[i][j] === 9) {
          var col =  $(`<td class="col space${cellCount}"><div class="container3"><div class="blinky"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 10) {
          var col =  $(`<td class="col space${cellCount}"><div class="container3"><div class="inky"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 11) {
          var col =  $(`<td class="col space${cellCount}"><div class="container3"><div class="clyde"></div></div></td>`).css("background","black").css("border","none");
          row.append(col);
        } else if (maze[i][j] === 12) {
          var col = $(`<td class="col cage${cellCount}"></td>`).css("background","black").css("border","none")
          row.append(col);
        } else if (maze[i][j] === 13) {
          var col = $(`<td class="col score1">Lives:-${lives}</td>`).css("border","none").css("color","white")
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
    } else if ((e.keyCode === 38)) {
      if (maze[pacman.y-1][pacman.x] ==4) {
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
    } else if ((e.keyCode === 39)) {
      if (maze[pacman.y][pacman.x+1] ==4) {
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
    } else if ((e.keyCode === 40)) {
      if (maze[pacman.y+1][pacman.x] ==4) {
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

  var pinkyMove = setInterval(pinkyMove, 250)

  function pinkyMove() {
    var directionB = Math.random() * 10;
    if (maze[pinky.y-1][pinky.x] ==12) {
      maze[pinky.y][pinky.x] = 12;
      pinky.y = 11;
      maze[pinky.y][pinky.x] = 7;
      drawMaze();
    } else if (directionB <= 2.5) {
      if (maze[pinky.y][pinky.x-1] ==5) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = pinky.x - 1;
        maze[pinky.y][pinky.x] = 7;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pinky.y][pinky.x-1] ==4) {
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      } else if (maze[pinky.y][pinky.x-1] ==6) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = 26;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      } else if (maze[pinky.y][pinky.x-1] !==1) {
          maze[pinky.y][pinky.x] = 2;
          pinky.x = pinky.x - 1;
          maze[pinky.y][pinky.x] = 7;
          drawMaze();
      }
    } else if (directionB > 2.5 && directionB <= 5) {
      if (maze[pinky.y-1][pinky.x] ==5) {
        maze[pinky.y][pinky.x] = 2;
        pinky.y = pinky.y - 1;
        maze[pinky.y][pinky.x] = 7;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pinky.y-1][pinky.x] ==4) {
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      } else if (maze[pinky.y-1][pinky.x] !==1) {
          maze[pinky.y][pinky.x] = 2;
          pinky.y = pinky.y - 1;
          maze[pinky.y][pinky.x] = 7;
          drawMaze();
      }
    } else if (directionB > 5 && directionB <= 7.5) {
      if (maze[pinky.y][pinky.x+1] ==5) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = pinky.x + 1;
        maze[pinky.y][pinky.x] = 7;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[pinky.y][pinky.x+1] ==4) {
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      } else if (maze[pinky.y][pinky.x+1] ==6) {
        maze[pinky.y][pinky.x] = 2;
        pinky.x = 1;
        maze[pinky.y][pinky.x] = 7;
        drawMaze();
      } else if (maze[pinky.y][pinky.x+1] !==1) {
          maze[pinky.y][pinky.x] = 2;
          pinky.x = pinky.x + 1;
          maze[pinky.y][pinky.x] = 7;
          drawMaze();
      }
    } else if (directionB > 7.5) {
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
        drawMaze();
      } else if (maze[pinky.y+1][pinky.x] !==1) {
          maze[pinky.y][pinky.x] = 2;
          pinky.y = pinky.y + 1;
          maze[pinky.y][pinky.x] = 7;
          drawMaze();
      }
    }
  }

  var blinkyMove = setInterval(blinkyMove, 250)

  function blinkyMove() {
    var directionB = Math.random() * 10;
    if (maze[blinky.y-1][blinky.x] ==12) {
      maze[blinky.y][blinky.x] = 12;
      blinky.y = 11;
      maze[blinky.y][blinky.x] = 9;
      drawMaze();
    } else if (directionB <= 2.5) {
      if (maze[blinky.y][blinky.x-1] ==5) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = blinky.x - 1;
        maze[blinky.y][blinky.x] = 9;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[blinky.y][blinky.x-1] ==4) {
        maze[blinky.y][blinky.x] = 9;
        drawMaze();
      } else if (maze[blinky.y][blinky.x-1] ==6) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = 26;
        maze[blinky.y][blinky.x] = 9;
        drawMaze();
      } else if (maze[blinky.y][blinky.x-1] !==1) {
          maze[blinky.y][blinky.x] = 2;
          blinky.x = blinky.x - 1;
          maze[blinky.y][blinky.x] = 9;
          drawMaze();
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
        drawMaze();
      } else if (maze[blinky.y-1][blinky.x] ==4) {
        maze[blinky.y][blinky.x] = 9;
        drawMaze();
      } else if (maze[blinky.y-1][blinky.x] !==1) {
          maze[blinky.y][blinky.x] = 2;
          blinky.y = blinky.y - 1;
          maze[blinky.y][blinky.x] = 9;
          drawMaze();
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
        drawMaze();
      } else if (maze[blinky.y][blinky.x+1] ==4) {
        maze[blinky.y][blinky.x] = 9;
        drawMaze();
      } else if (maze[blinky.y][blinky.x+1] ==6) {
        maze[blinky.y][blinky.x] = 2;
        blinky.x = 1;
        maze[blinky.y][blinky.x] = 9;
        drawMaze();
      } else if (maze[blinky.y][blinky.x+1] !==1) {
          maze[blinky.y][blinky.x] = 2;
          blinky.x = blinky.x + 1;
          maze[blinky.y][blinky.x] = 9;
          drawMaze();
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
        drawMaze();
      } else if (maze[blinky.y+1][blinky.x] ==4) {
        maze[blinky.y][blinky.x] = 9;
        drawMaze();
      } else if (maze[blinky.y+1][blinky.x] !==1) {
          maze[blinky.y][blinky.x] = 2;
          blinky.y = blinky.y + 1;
          maze[blinky.y][blinky.x] = 9;
          drawMaze();
      }
    }
  }

  var inkyMove = setInterval(inkyMove, 250)

  function inkyMove() {
    var directionB = Math.random() * 10;
    if (maze[inky.y-1][inky.x] ==12) {
      maze[inky.y][inky.x] = 12;
      inky.y = 11;
      maze[inky.y][inky.x] = 10;
      drawMaze();
    } else if (directionB <= 2.5) {
      if (maze[inky.y][inky.x-1] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.x = inky.x - 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[inky.y][inky.x-1] ==4) {
        maze[inky.y][inky.x] = 10;
        drawMaze();
      } else if (maze[inky.y][inky.x-1] ==6) {
        maze[inky.y][inky.x] = 2;
        inky.x = 26;
        maze[inky.y][inky.x] = 10;
        drawMaze();
      } else if (maze[inky.y][inky.x-1] !==1) {
          maze[inky.y][inky.x] = 2;
          inky.x = inky.x - 1;
          maze[inky.y][inky.x] = 10;
          drawMaze();
      }
    } else if (directionB > 2.5 && directionB <= 5) {
      if (maze[inky.y-1][inky.x] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.y = inky.y - 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[inky.y-1][inky.x] ==4) {
        maze[inky.y][inky.x] = 10;
        drawMaze();
      } else if (maze[inky.y-1][inky.x] !==1) {
          maze[inky.y][inky.x] = 2;
          inky.y = inky.y - 1;
          maze[inky.y][inky.x] = 10;
          drawMaze();
      }
    } else if (directionB > 5 && directionB <= 7.5) {
      if (maze[inky.y][inky.x+1] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.x = inky.x + 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[inky.y][inky.x+1] ==4) {
        maze[inky.y][inky.x] = 10;
        drawMaze();
      } else if (maze[inky.y][inky.x+1] ==6) {
        maze[inky.y][inky.x] = 2;
        inky.x = 1;
        maze[inky.y][inky.x] = 10;
        drawMaze();
      } else if (maze[inky.y][inky.x+1] !==1) {
          maze[inky.y][inky.x] = 2;
          inky.x = inky.x + 1;
          maze[inky.y][inky.x] = 10;
          drawMaze();
      }
    } else if (directionB > 7.5) {
      if (maze[inky.y+1][inky.x] ==5) {
        maze[inky.y][inky.x] = 2;
        inky.y = inky.y + 1;
        maze[inky.y][inky.x] = 10;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[inky.y+1][inky.x] ==4) {
        maze[inky.y][inky.x] = 10;
        drawMaze();
      } else if (maze[inky.y+1][inky.x] !==1) {
          maze[inky.y][inky.x] = 2;
          inky.y = inky.y + 1;
          maze[inky.y][inky.x] = 10;
          drawMaze();
      }
    }
  }

  var clydeMove = setInterval(clydeMove, 250)

  function clydeMove() {
    var directionB = Math.random() * 10;
    if (maze[clyde.y-1][clyde.x] ==12) {
      maze[clyde.y][clyde.x] = 12;
      clyde.y = 11;
      maze[clyde.y][clyde.x] = 11;
      drawMaze();
    } else if (directionB <= 2.5) {
      if (maze[clyde.y][clyde.x-1] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = clyde.x - 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[clyde.y][clyde.x-1] ==4) {
        maze[clyde.y][clyde.x] = 11;
        drawMaze();
      } else if (maze[clyde.y][clyde.x-1] ==6) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = 26;
        maze[clyde.y][clyde.x] = 11;
        drawMaze();
      } else if (maze[clyde.y][clyde.x-1] !==1) {
          maze[clyde.y][clyde.x] = 2;
          clyde.x = clyde.x - 1;
          maze[clyde.y][clyde.x] = 11;
          drawMaze();
      }
    } else if (directionB > 2.5 && directionB <= 5) {
      if (maze[clyde.y-1][clyde.x] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.y = clyde.y - 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[clyde.y-1][clyde.x] ==4) {
        maze[clyde.y][clyde.x] = 11;
        drawMaze();
      } else if (maze[clyde.y-1][clyde.x] !==1) {
          maze[clyde.y][clyde.x] = 2;
          clyde.y = clyde.y - 1;
          maze[clyde.y][clyde.x] = 11;
          drawMaze();
      }
    } else if (directionB > 5 && directionB <= 7.5) {
      if (maze[clyde.y][clyde.x+1] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = clyde.x + 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[clyde.y][clyde.x+1] ==4) {
        maze[clyde.y][clyde.x] = 11;
        drawMaze();
      } else if (maze[clyde.y][clyde.x+1] ==6) {
        maze[clyde.y][clyde.x] = 2;
        clyde.x = 1;
        maze[clyde.y][clyde.x] = 11;
        drawMaze();
      } else if (maze[clyde.y][clyde.x+1] !==1) {
          maze[clyde.y][clyde.x] = 2;
          clyde.x = clyde.x + 1;
          maze[clyde.y][clyde.x] = 11;
          drawMaze();
      }
    } else if (directionB > 7.5) {
      if (maze[clyde.y+1][clyde.x] ==5) {
        maze[clyde.y][clyde.x] = 2;
        clyde.y = clyde.y + 1;
        maze[clyde.y][clyde.x] = 11;
        pacman.x = 14;
        pacman.y = 23;
        lives--;
        maze[pacman.y][pacman.x] = 5;
        drawMaze();
      } else if (maze[clyde.y+1][clyde.x] ==4) {
        maze[clyde.y][clyde.x] = 11;
        drawMaze();
      } else if (maze[clyde.y+1][clyde.x] !==1) {
          maze[clyde.y][clyde.x] = 2;
          clyde.y = clyde.y + 1;
          maze[clyde.y][clyde.x] = 11;
          drawMaze();
      }
    }
  }

  drawMaze();

  var Timer = setInterval(myTimer, 1000);

  function myTimer() {

    time++;
    drawMaze();

    if (lives = 0){
      sessionStorage.setItem("score",`${score}`);
      document.location.href = 'gameover.html';
    }
  }

});
