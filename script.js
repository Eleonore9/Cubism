/** Canvas playground for Codebar's tutorial Drawing in Canvas **/

function draw() {
 var canvas = document.getElementById('canvas-id');
 var context = canvas.getContext("2d");

 //draw items
 //style
 context.fillStyle = "yellow";
 context.strokeStyle = "purple";
 context.lineWidth = "1";
 //Draw a rectangle (fill and stroke)
 context.fillRect(100, 100, 50, 100);
 context.strokeRect(100, 100, 50, 100);
 //Draw a rect on upper rigt corner
 context.strokeRect(300, 100, 50, 100);
 //Draw a rect on the lower right corner
 context.strokeRect(280, 350, 50, 100);
 //Draw a line
 context.strokeStyle = "blue";
 context.moveTo(0,300);
 context.lineTo(400,500);
 context.stroke();
 //Draw a rectangle by joining lines
 context.beginPath();

 context.lineWidth = 1;
 context.strokeStyle = "purple";

 context.moveTo(0,0);
 context.lineTo(0,200);
 context.lineTo(200,200);
 context.lineTo(200,0);
 context.lineTo(0,0);

 context.stroke();
 //Draw a circle 
 context.beginPath();
 context.arc(200, 100, 50, 0, Math.PI*2, true);
 context.closePath();
 context.strokeStyle = "green";
 context.lineWidth = 4;
 context.stroke();
 //and another circle

 context.beginPath();
 context.arc(300, 250, 100, 0, Math.PI*2, true);
 context.closePath();
 context.fillStyle = "blue";
 context.fill();
 context.lineWidth = 2;
 context.stroke();

 context.save();
 context.rotate(10*Math.PI/180);

 context.scale(2,2);

}

function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");

  // reset canvas
  canvas.width = canvas.width;

}
