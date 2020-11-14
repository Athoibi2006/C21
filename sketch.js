var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(600,200,50,80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";

}

function draw() {
  background(255,255,255);  

  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  movingRect.velocityX=2;

  if(isTouching(fixedRect,movingRect)){
    text("Objects Are Touching",300,300);
  }
  
  //bounceOff(movingRect,fixedRect);

  drawSprites();
}












