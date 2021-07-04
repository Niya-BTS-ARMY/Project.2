var sea,ship,ship_sailing,edges;

function preload(){
seaImg=loadImage("sea.png");
ship_sailing=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(600,400);
   sea=createSprite(300,200);
  sea.addImage(seaImg);
  sea.scale=0.3;
  sea.velocityX=-4;
  sea.width=750;
ship=createSprite(150,200,20,50);
ship.addAnimation("sailing", ship_sailing);
edges=createEdgeSprites();
ship.scale=0.3;
ship.x=150;

}

function draw() {
  
  background("white");
  //console.log(sea.x)
  if(sea.x<0){
    sea.x=sea.width/2;
    
  }
  
  drawSprites();
  
}