function levelThree(){

 
  background(0, 51, 102);
  randomSeed(frameCount*1000);
  //creating an enemy every 30 frames
    if(frameCount%enemyRate1 === 0){
      var xpos = random(SCENE_W);
      var ypos = random(SCENE_H);
  //make an enemy at the top, random X position
    var enemy = createSprite(random(xpos),random(ypos),100,100);
      //set speed and direction of enemy
      //enemy.setSpeed(4,random(20),random(100));
      //make the enemy disapear after x amout of frames
      enemy.life = 1000;
      //health slot
      enemy.type = 0;
      //adding enemy to the group enemies
      enemy.addAnimation("enemythree", enemyThree);
      enemy.scale = 1.5;
      
      enemies.add(enemy);
      enemy.attractionPoint(5, hero.position.x,hero.position.y);
  }
  
    switch(heroHealth){
      case 1:
        image(healthone,40,60);break;
      case 2:
        image(healthtwo,40,60);break;
      case 3:
        image(healththree,40,60);break;
    }
  
  //code for going back to default animation
  if(hero.getAnimationLabel() == "left" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("default");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  
 if(hero.getAnimationLabel() == "right" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("default");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  
    //Bouncing!
  for(var i = 0;i < enemies.length;i++){
    if(enemies[i].position.x > SCENE_W || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
    if(enemies[i].position.y > SCENE_H || enemies[i].position.y < 0){
      enemies[i].velocity.y *= -1;
  }
}    
    
  //test for overlap
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the hero?
  enemies.overlap(hero,heroHit);


  //a camera is created automatically at the beginning
  

    camera.zoom = .5;

  
  //set the camera position to the hero position
  camera.position.x = hero.position.x;
  camera.position.y = hero.position.y;
  
 image(backgroundThree,0,0);
  
  //shadow using p5 drawing
  noStroke();
  fill(0,0,0,20);
  //shadow
  ellipse(hero.position.x, hero.position.y+90, 80, 30);
  //character on the top
  drawSprites();
  }