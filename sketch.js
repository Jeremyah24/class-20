var move,fixed



function setup() {
  createCanvas(800,400);
 move= createSprite(400,200,50,50) ;
 move.shapeColor=("red");
 fixed= createSprite(300,200,50,50);
 fixed.shapeColor=("red");
}

function draw() {
  background("black");
  move.x = mouseX
  move.y = mouseY 
  isTouching() ;
  drawSprites();
}
function isTouching ()
{
  if(move.x-fixed.x<50&&fixed.x-move.x<50&&fixed.y-move.y<50&&move.y-fixed.y<50)
  {
    move.shapeColor=("green");
    fixed.shapeColor=("green");
  }
  else
  {
    move.shapeColor=("red");
    fixed.shapeColor=("red");
  }
}