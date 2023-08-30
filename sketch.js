var forest, forestImg;
var lion, lionImg;
var tree, treeImg;
var log, logImg;
var invisibleGround;
var gameover,gameoverImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  forestImg = loadImage("ccc.png");
  treeImg = loadImage("tree.png");
  lionImg = loadAnimation("lion1.png", "lion2.png");
  logImg = loadImage("log.png");
  gameoverImg = loadImage("gameover.png");
}

function setup() {
  createCanvas(300,400);

  forest = createSprite(150,200,300,400);
  forest.addImage("forest",forestImg);
  forest.velocityX = -2;
  forest.scale = 1;

  lion = createSprite(40,305, 60,30);
  lion.addAnimation("lion running", lionImg);
  lion.scale = 0.05;
 // lion.setCollider("rectangle", 0,0, 40, 60)

 //gameover.addImage("game",gameoverImg);


  invisibleGround = createSprite (40, 325, 500,20);
  invisibleGround.visible = false;
  invisibleGround.debug = true;



}

function draw() {
  background(200);

  if( gameState === PLAY) {
    
    if(forest.x < 100){
      forest.x = 200;
    }
  
    if(keyDown("SPACE") && lion.y >= 300 ) {
      lion.velocityY = -10;
    }
  
    lion.velocityY = lion.velocityY + 0.8;

    if(forest.x < 100){
      forest.x = 200;
    }
  
    if(keyDown("SPACE") && lion.y >= 300 ) {
      lion.velocityY = -10;
    }
  
    lion.velocityY = lion.velocityY + 0.8;
  
   // lion.depth = tree.depth;
    //lion.depth += 1;
  
  
    spawnTrees();

    if(tree.isTouching(lion)){
     gameState = END;
      end();
  }

  }

  else if (gameState === END) {
    console.log("hey")
      gameOver.visible = true;
     
      forest.velocityX = 0;
      lion.velocityY = 0
     
      //set lifetime of the game objects so that they are never destroyed
    tree.setLifetimeEach(-1);
    log.setLifetimeEach(-1);
     
     tree.setVelocityXEach(0);
     log.setVelocityXEach(0);
  }


  lion.collide(invisibleGround);





 drawSprites();
  }

function spawnTrees() {
  if(frameCount % 120 === 0) {
   tree = createSprite(350, 255);
    
    tree.x = Math.round(random(350,450));

    tree.addImage(treeImg);

    tree.velocityX = -2;

    tree.scale = 0.3;

    tree.liftime = 700;
  }
  
  if(frameCount % 80 === 0) {
    log = createSprite(300, 310);
     
 //    log.x = Math.round(random(350,450));
 
     log.addImage(logImg);
 
     log.velocityX = -3;
 
     log.scale = 0.03;

     log.lifetime = 700;
   }


}



function end() {
  forest.velocityX = 0;
      lion.velocityY = 0
     
      //set lifetime of the game objects so that they are never destroyed
    tree.setLifetimeEach(-1);
    log.setLifetimeEach(-1);
     
     tree.setVelocityXEach(0);
     log.setVelocityXEach(0);
}


