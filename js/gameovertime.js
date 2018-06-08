$(document).ready(function(){

  // Initial Variable
  var board2 = $('.Game-Over-Window');

  // Get Score From Session Storage
  var x = sessionStorage.getItem("score");

  // The Function That Builds A Table To Create The Game Window
  for (var i = 0; i < 8; i++) {
    var row = $('<tr class="row"></tr>');
    for (var j = 0; j < 8; j++) {
      if (i === 4 && j === 3) {
        var col = $(`<td class="col end">FINAL SCORE - ${x}</td>`);
        row.append(col);
      } else if (i === 5 && j === 3) {
        var col = $(`<td class="col end"><button class="PABtn">PLAY AGAIN</button></td>`);
        row.append(col);
      } else if (i === 6 && j === 3) {
        var col = $(`<td class="col end"><button class="MMBtn">MAIN MENU</button></td>`);
        row.append(col);
      } else {
        var col = $(`<td class="col end"></td>`);
        row.append(col);
      }
    }
    board2.append(row);
  }

  // Click Function To Restart The Time Trial
  $(".PABtn").click(function(){
    document.location.href = 'timetrial.html';
  })

  // Click Function To Return To Main Menu
  $(".MMBtn").click(function(){
    document.location.href = '../index.html';
  })

});
