var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(50,100,50,50);
  movingRect.shapeColor = "red";

  fixedRect = createSprite(200,200,100,50);
  fixedRect.shapeColor = "green";

 
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.width/2 + fixedRect.width/2);
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y-fixedRect.y< movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y-movingRect.y< movingRect.height/2 + fixedRect.height/2  ){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else
  {
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "green";
  }
  drawSprites();
}