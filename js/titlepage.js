$(document).ready(function(){

  var board3 = $('.Game-Start-Window');

  for (var i = 0; i < 8; i++) {
    var row = $('<tr class="row"></tr>');
    for (var j = 0; j < 8; j++) {
      if (i === 4 && j === 3) {
        var col = $(`<td class="col end"><button class="PBtn">PLAY GAME</button></td>`);
        row.append(col);
      } else {
        var col = $(`<td class="col end"></td>`);
        row.append(col);
      }
    }
    board3.append(row);
  }

  $(".PBtn").click(function(){
    document.location.href = 'index.html';
  })



});
