$(document).ready(function(){

  // Initial Variable
  var board3 = $('.Game-Start-Window');

  // The Function That Builds A Table To Create The Game Window
  for (var i = 0; i < 8; i++) {
    var row = $('<tr class="row"></tr>');
    for (var j = 0; j < 8; j++) {
      if (i === 4 && j === 3) {
        var col = $(`<td class="col end"><button class="PBtn">PLAY GAME</button></td>`);
        row.append(col);
      } else if (i === 5 && j === 3) {
        var col = $(`<td class="col end"><button class="TTBtn">TIME TRIAL</button></td>`);
        row.append(col);
      } else {
        var col = $(`<td class="col end"></td>`);
        row.append(col);
      }
    }
    board3.append(row);
  }

  // Click Function To Start The Game
  $(".PBtn").click(function(){
    document.location.href = 'pages/game.html';
  })

  // Click Funtion To Start Time Trial
  $(".TTBtn").click(function(){
    document.location.href = 'pages/timetrial.html';
  })



});
