var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5d4cec6f-bc99-483f-9459-af2eb15bc424","c7c6966c-0c0e-4eb0-8fc8-96f8938e5d10","aa991964-aea0-41b6-b02a-e4df110f9404","36c4ec4e-c469-4ff7-b1f8-e286dca33228","df72ed8b-0416-4f19-8fb0-4403714ba323","f7be3876-7eee-479e-92eb-3cb68910126d","14d20600-64f3-47df-93c5-8e89224e6810"],"propsByKey":{"5d4cec6f-bc99-483f-9459-af2eb15bc424":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/Kfu9NTDcN2JeUf0dVhxGA87T._LngL9v/category_characters/alienPink.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"Kfu9NTDcN2JeUf0dVhxGA87T._LngL9v","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Kfu9NTDcN2JeUf0dVhxGA87T._LngL9v/category_characters/alienPink.png"},"c7c6966c-0c0e-4eb0-8fc8-96f8938e5d10":{"name":"oof","sourceUrl":"assets/api/v1/animation-library/gamelab/KseHp65CQX9KMk6GCnegkD0nifipSlsT/category_characters/alienPink_hit.png","frameSize":{"x":128,"y":256},"frameCount":1,"looping":true,"frameDelay":2,"version":"KseHp65CQX9KMk6GCnegkD0nifipSlsT","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":256},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KseHp65CQX9KMk6GCnegkD0nifipSlsT/category_characters/alienPink_hit.png"},"aa991964-aea0-41b6-b02a-e4df110f9404":{"name":"enemy","sourceUrl":null,"frameSize":{"x":1000,"y":1080},"frameCount":1,"looping":true,"frameDelay":12,"version":"Py5wICsnK9npwy.F62WjzuzwP63HKD81","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1080},"rootRelativePath":"assets/aa991964-aea0-41b6-b02a-e4df110f9404.png"},"36c4ec4e-c469-4ff7-b1f8-e286dca33228":{"name":"ob1","sourceUrl":"assets/api/v1/animation-library/gamelab/T2o.JOjkvOCB_WJ8JDnhEjpDulkPtwR1/category_obstacles/fence_stone.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"T2o.JOjkvOCB_WJ8JDnhEjpDulkPtwR1","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T2o.JOjkvOCB_WJ8JDnhEjpDulkPtwR1/category_obstacles/fence_stone.png"},"df72ed8b-0416-4f19-8fb0-4403714ba323":{"name":"ob2","sourceUrl":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r","loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png"},"f7be3876-7eee-479e-92eb-3cb68910126d":{"name":"ob3","sourceUrl":"assets/api/v1/animation-library/gamelab/paRBZ1IDgpB8JjI8z4sBpRGSRUCCQLC2/category_obstacles/fence_wood.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"paRBZ1IDgpB8JjI8z4sBpRGSRUCCQLC2","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/paRBZ1IDgpB8JjI8z4sBpRGSRUCCQLC2/category_obstacles/fence_wood.png"},"14d20600-64f3-47df-93c5-8e89224e6810":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Create a sprite
var BG = createSprite(200, 200, 400, 400);
BG.setAnimation("space");
BG.scale = 2;
var player = createSprite(200, 360,20,20);
var enemy = createSprite(randomNumber(50, 382), 15);
enemy.velocityY = 2.25;
var enemy1 = createSprite(randomNumber(50, 382), 15);
enemy1.velocityY = 2.25;

var ob = createSprite(400, 370);
ob.velocityX = -3.5;

var score = 0;
var speed = 3.5;
var gameState = "in";
var fm = 97;
  
var rand = randomNumber(1,3);
ob.setAnimation("ob" + rand);
  
  setTimeout(function(){
    gameState = "start";
    playSound("assets/category_background/progression.mp3");
  }, 6000);
  
function draw() {
  
 //console.log(World.frameCount);
  
  
  
  //egde boundaries
  createEdgeSprites();

  //all the animation and scales
  player.setAnimation("player");
  enemy.setAnimation("enemy");
  enemy1.setAnimation("enemy");
  ob.scale = 0.2;
  
  enemy.scale = 0.05;
  enemy1.scale = 0.05;
  
  player.scale = 0.5;
  
  //player ship and bullet bounce off edges
  player.collide(edges);
  
  if (gameState === "start"){
    
    score = score + 1;
    
    if(keyWentDown(RIGHT_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    player.velocityX = 4.5;
  }
  
  if(keyDown(LEFT_ARROW))
  {
    player.velocityX = -4.5;
    
  }
  
  if (keyDown("space") && player.y > 355){
    player.velocityY = -12;
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  }
  
  if (keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0;
  }
  
  if (enemy.isTouching(player) || enemy1.isTouching(player) || ob.isTouching(player)){
    player.setAnimation("oof");
    player.y = 350; 
    player.scale = 0.5;
    gameState = "reset";  
}

  if (gameState === "reset"){
    //score = 0;
    speed = 2.8;
    speed = speed + 0.12;
    ob.visible = false;
    enemy1.visible = false;
    enemy.visible = false;
    stopSound("assets/category_background/progression.mp3");
  }  
  
  if (keyDown("space") && gameState === "reset"){
    score = 0;
    setTimeout(function(){
      gameState = "start";
      playSound("assets/category_background/progression.mp3");
    }, 800);
  }
player.velocityY = player.velocityY + 0.9;
  
  //display the sprites
  drawSprites();
  
  //console.log(lives);
    }
  //You lose if the enemy touches the bottom edge
 // if (enemy.isTouching(bottomEdge) || enemy1.isTouching(bottomEdge) || enemy2.isTouching(bottomEdge) || enemy3.isTouching(bottomEdge)|| enemy4.isTouching(bottomEdge)|| enemy5.isTouching(bottomEdge) && lives === 0){

  
  if (World.frameCount % (fm + 19) === 0 && gameState === "start"){
  enemy = createSprite(randomNumber(50, 382), 15);
  enemy.velocityY = speed;
  speed = speed + 0.15;
  
  //how long the enemy spaceships will last
  //this is the code for deleting the memory leaks
  enemy.lifetime = (400 - 15) / speed;
  fm = fm - 1;
}
  if (World.frameCount % fm === 0){
  enemy1 = createSprite(randomNumber(50, 382), 15);
  enemy1.velocityY = speed;
  speed = speed + 0.15;
  
  //how long the enemy spaceships will last
  //this is the code for deleting the memory leaks
  enemy1.lifetime = (400 - 15) / speed;
  fm = fm - 1;
} 
  
   if (World.frameCount % 87 === 0 && gameState === "start"){
  ob = createSprite(400, 370);
  ob.velocityX = -(speed);
  speed = speed - 0.15;
  
  var rand = randomNumber(1,3);
ob.setAnimation("ob" + rand);

  //how long the enemy spaceships will last
  //this is the code for deleting the memory leaks
  ob.lifetime = (400 - 15) / speed;
}
  if (World.frameCount % fm === 0 && gameState === "start"){
  enemy1 = createSprite(randomNumber(50, 382), 15);
  enemy1.velocityY = speed;
  speed = speed + 0.15;
  
  //how long the enemy spaceships will last
  //this is the code for deleting the memory leaks
  enemy1.lifetime = (400 - 15) / speed;
  fm = fm - 1;
} 

   //display score
  text("Score:"+score, 15, 388);
  
  //instructions
  //text("Destroy all the enemy spaceships!",110, 20);
  text("Avoid all obstacles, in order to stay alive!" , 150, 390);
  
  textSize(15);
  if (gameState === "in"){
    text("Use the arrow keys to move!", 150, 195);
    text("Use the spacebar to jump!", 150, 220);
    text("Avoid all obstacles, no matter what.", 150, 235);
    text("Good luck!!", 150, 260);
  }
  
  textSize(21);
  if (gameState == "reset"){
    text("GAME OVER!", 200, 220);
    text("SCORE: " + score, 20, 225);
    textSize(15);
    text("(Prepared by Prakhar)", 22, 250);
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
