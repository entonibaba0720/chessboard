var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function drawCheckeredPattern(row, col){
	var width = canvas.width;
	var height= canvas.height;
	var x=0;
    var y=0;
	var xPos = width/col;
	var yPos = height/row;
    var color1;
    var color2;
  
  for (var i = 1; i <= row; i++) {
    if (i % 2===0) {
      color1 = "black";
      color2 = "white";
    }
    else {
      color1 = "white";
      color2 = "black";
    }
    
    for (var j = 0; j <= col; j++) {
      if (j % 2===0) {
        context.fillStyle = color1;
      }
      else { 
        context.fillStyle = color2;
      }
      context.fillRect(x,y,xPos,yPos);
      x += xPos;
    }
    y += yPos;
    x = 0;
  }
}
drawCheckeredPattern(8,8);