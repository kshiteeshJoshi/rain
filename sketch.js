const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rainDrop;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  for (var i = 10; i < 400; i=i+5) {
    rainDrop = new Raindrops(i,10,10,5);
  }
  
}

function draw() { 
  background(backgroundImg);
  Engine.update(engine); 
  rainDrop.display();
  drawSprites();
}