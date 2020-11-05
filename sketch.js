const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world ,box_2, box_1, ground;


function setup() {
  var canvas = createCanvas(400,400);

  

  engine = Engine.create();
  world = engine.world;
  box_2 = new Box(200,300,50,50);
  box_1 = new Box(240,100,40,80);
  ground = new Ground(200,390,400,30);

  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  box_2.displayboxes();
  box_1.displayboxes();
  ground.displayground();
  
  
}