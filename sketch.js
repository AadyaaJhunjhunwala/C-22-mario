var platform1,platformGroup
var mario

function preload()
{}

function setup() {
  createCanvas(displayWidth, 668);

mario= new Player()
platformGroup=new Group()

  var xValue=0
  var gap=random([30,60,80])
  for(var i=0;i<40;i++){
    platform1=new Platform(xValue);
    xValue=xValue +platform1.rw +gap

    platformGroup.add(platform1.spt)
  }
  
}

function draw() {
  background('skyblue'); 
translate(-mario.spt.x+width/2,0)

mario.spt.collide(platformGroup)

if (keyDown("left")){
mario.moveLeft()
}
if (keyDown("right")){
 mario.moveRight()
  }
if (keyDown("up")){
  mario.moveUp()
}

//calling
mario.applyGravity();
 drawSprites();
}

