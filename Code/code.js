var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b651828a-2eb3-4adf-8216-fa2324d0fb23"],"propsByKey":{"b651828a-2eb3-4adf-8216-fa2324d0fb23":{"name":"number1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":60,"version":"BC46OoqvlTrJ4CUbpWsAgoz11k2ZNqiW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b651828a-2eb3-4adf-8216-fa2324d0fb23.png"}}};
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

 var Player = createSprite(50, 200,15,90);
var CPU = createSprite(350, 224,15,90);
var ball = createSprite(200, 200,15,15);

var initial = createSprite(200, 200,70,70);


Player.shapeColor="White";
CPU.shapeColor="White";
ball.shapeColor="White";
line.shapeColor="white";

CPU.velocityY=1;



function draw (){
createEdgeSprites();
if(keyDown("w")){
Player.y=Player.y-5;
}
if(keyDown("s")){
Player.y=Player.y+5;
}
if(keyDown("space")){
ball.velocityX=-5;ball.velocityY=3;
}
for (var num=0; num<400; num=num+20){
  line (200, num, 200, num+10);
}
initial.depth=-1;
line.depht=2;
CPU.y=ball.y;
Player.collide(bottomEdge);
Player.collide(topEdge);
ball.bounceOff(Player);
ball.bounceOff(CPU);
ball.bounceOff(topEdge);
ball.bounceOff(bottomEdge);
CPU.bounceOff(topEdge);
CPU.bounceOff(bottomEdge);
background("black");
drawSprites();
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
