$(document).ready(function(){

  var board2 = $('.Game-Over-Window');
  var cellCount = 0;
  var x = sessionStorage.getItem("score");

  for (var i = 0; i < 8; i++) {
    var row = $('<tr class="row"></tr>');
    for (var j = 0; j < 8; j++) {
      if (i === 4 && j === 3) {
        var col = $(`<td class="col end">FINAL SCORE - ${x}</td>`);
        row.append(col);
        cellCount++;
      } else {
        var col = $(`<td class="col end"></td>`);
        row.append(col);
        cellCount++;
      }
    }
    board2.append(row);
  }







});
