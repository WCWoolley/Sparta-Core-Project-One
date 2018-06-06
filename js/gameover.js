$(document).ready(function(){

  var board2 = $('.Game-Over-Window');
  var x = sessionStorage.getItem("score");

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

  $(".PABtn").click(function(){
    document.location.href = 'index.html';
  })

  $(".MMBtn").click(function(){
    document.location.href = 'titlepage.html';
  })

});
