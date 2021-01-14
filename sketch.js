const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var dHeight = 300;

function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 460, 800, 20);

  d1 = new Division(100, 400, 20, 100);
  d2 = new Division(200, 400, 20, 100);
  d3 = new Division(300, 400, 20, 100);
  d4 = new Division(400, 400, 20, 100);
  d5 = new Division(480, 400, 20, 100);
  d6 = new Division(50, 400, 20, 100);
  for(var i = 0; i <= width; i = i+80){
    divisions.push(new Division(i,height - dHeight/2, 10, dHeight))
  }
  for(var j = 75; j <= width; j = j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j = 50; j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j = 75; j <= width; j = j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j = 50; j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j,375))
  }
}
function draw() {
  background("black");  
  Engine.update(engine);
  drawSprites();

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();

  ground.display();
}