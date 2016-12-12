var enemyRate1 = 100;
var enemies;
var enemy;
var enemyAngle = 30
var gameState = 'startUp';

var hero;
var heroSpeed = 20;
var bg;
var frame;
//the scene is twice the size of the canvas
var SCENE_W = 1800;
var SCENE_H = 1000;

var explosionDensity = 20;
var score = 0;
var heroHealth = 5;

//declare sprite groups
var bullets;
var enemies;

//declare still images
var heroImg;
var enemyOne, enemyTwo, enemyThree;
var backgroundOne, backgroundTwo, backgroundThree;
var bulletImg;
var startUpImg, youWinImg, youLoseImg, countdownImg;

var level1ScoreAdvance = 5;
var level2ScoreAdvance = 10;
var level3ScoreAdvance = 15;

var count1Downtimer = 0;
var count2Downtimer = 0;
var count3Downtimer = 0;

var healthone,healthtwo,healththree;

var heroDefault;
var heroDefaultAnimation;
var heroDefault_Frames = [
  {'name':'herodefault00', 'frame':{'x':0,   'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault01', 'frame':{'x':120, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault02', 'frame':{'x':240, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault03', 'frame':{'x':360, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault04', 'frame':{'x':480, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault05', 'frame':{'x':600, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault06', 'frame':{'x':720, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault07', 'frame':{'x':840, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault08', 'frame':{'x':960, 'y': 0, 'width': 120, 'height': 120}},
  {'name':'herodefault09', 'frame':{'x':0,   'y': 120, 'width': 120, 'height': 120}},
  {'name':'herodefault10', 'frame':{'x':120, 'y': 120, 'width': 120, 'height': 120}},
  {'name':'herodefault11', 'frame':{'x':240, 'y': 120, 'width': 120, 'height': 120}}]
  
var heroLeft;
var heroLeftAnimation;
var heroLeft_Frames = [
  {'name':'heroleft00', 'frame':{'x':360, 'y': 120, 'width': 120, 'height': 120}},
  {'name':'heroleft01', 'frame':{'x':480, 'y': 120, 'width': 120, 'height': 120}},
  {'name':'heroleft02', 'frame':{'x':600, 'y': 120, 'width': 120, 'height': 120}},
  {'name':'heroleft03', 'frame':{'x':720, 'y': 120, 'width': 120, 'height': 120}},
  {'name':'heroleft04', 'frame':{'x':840, 'y': 120, 'width': 120, 'height': 120}},
  {'name':'heroleft05', 'frame':{'x':960, 'y': 120, 'width': 120, 'height': 120}},
  {'name':'heroleft06', 'frame':{'x':0,   'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroleft07', 'frame':{'x':120, 'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroleft08', 'frame':{'x':240, 'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroleft09', 'frame':{'x':360, 'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroleft10', 'frame':{'x':480, 'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroleft11', 'frame':{'x':600, 'y': 240, 'width': 120, 'height': 120}}]
 
 //CHANGE THE Y NUMBERS TO 240 YA DINGUS 
var heroRight;
var heroRightAnimation;
var heroRight_Frames = [
  {'name':'heroright00', 'frame':{'x':720, 'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroright01', 'frame':{'x':840, 'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroright02', 'frame':{'x':960, 'y': 240, 'width': 120, 'height': 120}},
  {'name':'heroright03', 'frame':{'x':0,   'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright04', 'frame':{'x':120, 'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright05', 'frame':{'x':240, 'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright06', 'frame':{'x':360, 'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright07', 'frame':{'x':480, 'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright08', 'frame':{'x':600, 'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright09', 'frame':{'x':720, 'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright10', 'frame':{'x':840, 'y': 360, 'width': 120, 'height': 120}},
  {'name':'heroright11', 'frame':{'x':960, 'y': 360, 'width': 120, 'height': 120}}]
  
var enemyOne;
var enemyOneAnimation;
var enemyOne_Frames = [
  {'name':'enemyone00', 'frame':{'x':0,   'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone01', 'frame':{'x':120, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone02', 'frame':{'x':240, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone03', 'frame':{'x':360, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone04', 'frame':{'x':480, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone05', 'frame':{'x':600, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone06', 'frame':{'x':720, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone07', 'frame':{'x':840, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone08', 'frame':{'x':960, 'y': 480, 'width': 120, 'height': 120}},
  {'name':'enemyone09', 'frame':{'x':0,   'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemyone10', 'frame':{'x':120, 'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemyone11', 'frame':{'x':240, 'y': 600, 'width': 120, 'height': 120}}]
  
var enemyTwo;
var enemyTwoAnimation;
var enemyTwo_Frames = [
  {'name':'enemytwo00', 'frame':{'x':360, 'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemytwo01', 'frame':{'x':480, 'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemytwo02', 'frame':{'x':600, 'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemytwo03', 'frame':{'x':720, 'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemytwo04', 'frame':{'x':840, 'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemytwo05', 'frame':{'x':960, 'y': 600, 'width': 120, 'height': 120}},
  {'name':'enemytwo06', 'frame':{'x':0,   'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemytwo07', 'frame':{'x':120, 'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemytwo08', 'frame':{'x':240, 'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemytwo09', 'frame':{'x':360, 'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemytwo10', 'frame':{'x':480, 'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemytwo11', 'frame':{'x':600, 'y': 720, 'width': 120, 'height': 120}}]
  
var enemyThree;
var enemyThreeAnimation;
var enemyThree_Frames = [
  {'name':'enemythree00', 'frame':{'x':720, 'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemythree01', 'frame':{'x':840, 'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemythree02', 'frame':{'x':960, 'y': 720, 'width': 120, 'height': 120}},
  {'name':'enemythree03', 'frame':{'x':0,   'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree04', 'frame':{'x':120, 'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree05', 'frame':{'x':240, 'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree06', 'frame':{'x':360, 'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree07', 'frame':{'x':480, 'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree08', 'frame':{'x':600, 'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree09', 'frame':{'x':720, 'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree10', 'frame':{'x':840, 'y': 840, 'width': 120, 'height': 120}},
  {'name':'enemythree11', 'frame':{'x':960, 'y': 840, 'width': 120, 'height': 120}}]
  

//declare the music and sounds
var startUpMusic;
var levelOneMusic;
var levelTwoMusic;
var levelThreeMusic;
var youWinMusic;
var youLoseMusic;
var shootSound;
var enemyHitSound;
var heroHitSound;


function preload(){
  
  heroDefault = loadSpriteSheet("assets/SpriteSheet.png", heroDefault_Frames);
  heroDefaultAnimation = loadAnimation(heroDefault);
  
  heroLeft = loadSpriteSheet("assets/SpriteSheet.png", heroLeft_Frames);
  heroLeftAnimation = loadAnimation(heroLeft);
  
  heroRight = loadSpriteSheet("assets/SpriteSheet.png", heroRight_Frames);
  heroRightAnimation = loadAnimation(heroRight);
  
  enemyOne = loadSpriteSheet("assets/SpriteSheet.png", enemyOne_Frames);
  enemyOneAnimation = loadAnimation(enemyOne);
  
  enemyTwo = loadSpriteSheet("assets/SpriteSheet.png", enemyTwo_Frames);
  enemyTwoAnimation = loadAnimation(enemyTwo);
  
  enemyThree = loadSpriteSheet("assets/SpriteSheet.png", enemyThree_Frames);
  enemyThreeAnimation = loadAnimation(enemyThree);
  

  startUpImg = loadImage("assets/startUpScreen.png");
  backgroundOne = loadImage("assets/BGlevelone.png");
  backgroundTwo = loadImage("assets/BGleveltwo.png");
  backgroundThree = loadImage("assets/BGlevelthree.png");
  countdownImgone = loadImage("assets/countdownScreentest.png");
  countdownImg = loadImage("assets/countdownScreen.png");
  youLoseImg = loadImage("assets/youlosetestimg.png");
  youWinImg = loadImage("assets/youWintest.png");
  healthone = loadImage("assets/healthBarImgone.png");
  healthtwo = loadImage("assets/healthBarImgtwo.png");
  healththree = loadImage("assets/healthBarImgthree.png");
  bulletImg = loadImage("assets/bulletImage.png");
  
  //load the music in
  startUpMusic = loadSound("assets/startupmusic.mp3");
  levelOneMusic = loadSound("assets/levelonemusic.mp3");
  levelTwoMusic = loadSound("assets/leveltwomusic.mp3");
  levelThreeMusic = loadSound("assets/levelthreemusic.mp3");
  youWinMusic = loadSound("assets/youwinmusic.mp3");
  youLoseMusic= loadSound("assets/youlosescreen.mp3");
  
  shootSound = loadSound("assets/shootsound.mp3");
  enemyHitSound = loadSound("assets/enemyhitsound.mp3");
  heroHitSound = loadSound("assets/herohitsound.mp3");
  
}

function setup() {
  createCanvas(800,400);
  startUpMusic.loop();
   enemies = new Group();
   bullets = new Group();
  //create a sprite and add the 3 animations
  hero = loadImage("assets/HeroDefault.png");
  hero = createSprite(400, 200, 50, 100);
  
  hero.addAnimation("default", heroDefaultAnimation);
  hero.addAnimation("left", heroLeftAnimation);
  hero.addAnimation("right", heroRightAnimation);
  hero.scale = 1.5;
  
  
  hero.friction = .85;
  
  youLoseImg.scale = 4;
}

function draw() {
  
  switch(gameState){
    case 'startUp':
      background(startUpImg);
      image(startUpImg,0,0);
      //fill('white');
      //text('Press X to Begin',width/2,height/2);
    break;
    
    case 'win':
      background(youWinImg);
      image(youWinImg,0,0);
      //fill('white');
      //textSize(25);
      //text('You Won!',hero.position.x,hero.position.y);
      camera.off();
    break;
    
    case 'lose':
    
      background(youLoseImg);
      image(youLoseImg,0,0);
      camera.off();
      //image(youLoseImg,0,0);
      //youLoseImg.scale = 6;
      //fill('white');
      //textSize(25);
      //text('You Died',hero.position.x,hero.position.y);
    break;
    
    case 'countDown1':
      camera.on();
      background(countdownImg);
      //image(countdownImg,0,0);
      fill('black');
      textSize(32);
      //only runs the first time through the coutdown
      if(count1Downtimer === 0){
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",width/2,height/2);
      }else{
        text(3 - flooredCount,width/2,height/2);
      }
      
      if(flooredCount > 3){
        gameState = "levelOne";
        startUpMusic.stop();
        levelOneMusic.loop();
        camera.off();
      }  
    break;
    
    case 'levelOne':
      levelOne();
    break;
    
    case 'countDown2':
    
       background(countdownImgone);
       image(countdownImgone,0,0);
      fill('black');
      textSize(32);
      //only runs the first time through the coutdown
      if(count2Downtimer === 0){
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",width/2,height/2);
      }else{
        text(3 - flooredCount,width/2,height/2);
        camera.off();
      }
      
      if(flooredCount > 3){
        gameState = "levelTwo";
        levelOneMusic.stop();
        levelTwoMusic.loop();
      }  
    break;
    
    case 'levelTwo':
      levelTwo();
    break;
    
    case 'countDown3':
      
      background(countdownImgone);
      image(countdownImgone,0,0);
      fill('black');
      textSize(32);
      //only runs the first time through the coutdown
      if(count3Downtimer === 0){
        count3Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count3Downtimer)/50);
      //this runs every time
      if((3 - flooredCount) <= 0){
        text("GO!",width/2,height/2);
      }else{
        text(3 - flooredCount,width/2,height/2);
        camera.off();
      }
      
      if(flooredCount > 3){
        gameState = "levelThree";
        levelTwoMusic.stop();
        levelThreeMusic.loop();
      }  
    break;
    
    case 'levelThree':
      levelThree();
    break;
  }
  
  
  //limit the hero movements
  if(hero.position.x < 0)
    hero.position.x = 0;
  if(hero.position.y < 0)
    hero.position.y = 0;
  if(hero.position.x > SCENE_W)
    hero.position.x = SCENE_W;
  if(hero.position.y > SCENE_H)
    hero.position.y = SCENE_H;


  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at 
  //the absolute 0,0 (try to see what happens if you don't turn it off
  camera.off();
}

  function keyTyped(){
    if(key === 'x'){
      gameState = 'countDown1';
      
    }
}

 function keyPressed(){
    
  //limit the hero movements
  if(key === 'D'){
    hero.changeAnimation("right");
    hero.animation.changeFrame(0);
    hero.setSpeed(heroSpeed,0);
  } 
  if (key === 'A') {
    hero.changeAnimation("left");
    hero.animation.changeFrame(0);
    hero.setSpeed(heroSpeed,180);
  } 
  if (key === 'W') {
    hero.changeAnimation("default");
    hero.animation.changeFrame(0);
    hero.setSpeed(heroSpeed, 270);
  } 
  if (key === 'S') {
    hero.changeAnimation("default");
    hero.animation.changeFrame(0);
    hero.setSpeed(heroSpeed,90);
      }
    }


function mouseClicked(){
   if(mouseClicked){
     shootSound.play();
   //create bullet
      var bullet = createSprite(hero.position.x,hero.position.y,20,20);
      bullet.addImage(bulletImg);
      var angle;
      angle = atan2(mouseY - height/2,mouseX - width/2);
      angle = degrees(angle);
      //set speed and direction of bullet
      bullet.setSpeed(20,angle);
      //mkae the bullet disapear after x amout of frames
      bullet.life = 40;
      //adding bullet to the group bullets
      bullets.add(bullet);
  }
}