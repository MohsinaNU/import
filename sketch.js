
var path;
var pathimg;
var girl;
var girlimg;
var fruit1,fruit2,fruit3,fruit4;
var fruit1img,fruit2img,fruit3img,fruit4img;
var girllost
var gameover
var gameoverimg
var orangeleaf
var orangeleafImg
var diamondsG
var diamondsGimg
var jwellery
var jwelleryimg

var score =0

var PLAY = 1
var END = 0
var gamestate = 1


function preload(){
    

pathimg = loadImage("Road.png");
girlimg=loadImage("opponent4.png");
fruit1img = loadImage("friut1.png");
fruit2img = loadImage("friut2.png");
fruit3img = loadImage("friut3.png");
fruit4img = loadImage("friut4.png");
gameoverimg = loadImage("gameOver.pnf")
orangeleafimg = loadImage("orangeLeaf.png")
diamondsGimg = loadImage("diamonds.png")
jwelleryimg = loadImage("jwell.png")



}

function setup() {

 createCanvas(1200,600);

 

 //creating path
 path = createSprite(100,260)
 path.addImage(pathimg)
 path.scale =0.5
 path.velocityX =-5

 girl= createSprite(120,320)
 girl.addImage(girlimg);
 girl.scale = 0.2
 girl.velocityX= 0.5

 gameover = createSprite(100,200)
 gameover.addImage(gameover)


 
 


 
}

function draw() {
    background("black");

   if(gamestate ===PLAY){
   girl.x = world.mouseX
    
   edges = createEdgesSprites();
   girl.collide(edges);


    if(path.x<0){
       path.x = width/2
    }
    
    createDiamonds();
    createJwellery();
    createorangeleaf();

    if (fruit1.isTouching(boy)) {
      fruit1.destroyEach();
      score=score+50;
    }

    
     if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      score=score+100;
      
    }else if(jwellery.isTouching(boy)) {
      jwellery.destroyEach();
      score= score+ 150;
      
    }else{
      if(orangeleaf.isTouching(boy)) {
        gameState=END;
       
        orangeleaf.destroyEach()
        diamondsG.destroyEach();
        jwellery.destroyEach();
        
        
        orangeleaf.setVelocityYEach(0)
        diamondsG.setVelocityYEach(0);
        jwellery.setVelocityYEach(0);
        
//create a sprite
//add a animation for gameove
//scale the gameover image
over = createSprite(200,300);

over.addAnimation("gameover",gameover);
over.scale = 0.5;


       
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ score,10,30);
  }

}




function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsimg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryimg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwellery.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var orangeleaf = createSprite(Math.round(random(50, 350),40, 10, 10));
  orangeleaf.addImage(orangeleafimg);
  orangeleaf.scale=0.1;
  orangeleaf.velocityY = 3;
  orangeleaflifetime = 150;
  orangeleafGroup.add(orangeleafimg);
  }
  drawSprites();
}


   
