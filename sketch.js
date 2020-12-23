var fixedRect,movingRect

function setup() {
  createCanvas(1500,1000);
fixedRect = createSprite (750,500,100,50);
fixedRect.shapeColor = "red";
movingRect = createSprite (200,200,100,50);
movingRect.shapeColor = "green";
fixedRect.debug = false;
movingRect.debug = false ;
}

function draw() {

  background(0,0,0);
  movingRect.x = World.mouseX 
  movingRect.y = World.mouseY 
  if(movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2||
    fixedRect.x-movingRect.x===movingRect.width/2+fixedRect.width/2 ||
    movingRect.y-fixedRect.y===movingRect.height/2+fixedRect.height/2||
    fixedRect.y-movingRect.y===movingRect.height/2+fixedRect.height/2 )
    {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "green";
  } 
  

  drawSprites();
}