const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var universe,earth,ground,coder;

var box1,box2,box3,box4,box5;

var bird;
var pig1,pig2;
var log1,log2,log3,log4;


function setup() {
  createCanvas(1000,400);
 universe = Engine.create() // universe.world
 earth = universe.world; //   Engine.create().world

//java script object notation

box1 = new Box(500,350,60,60);
box2 = new Box(700,350,60,60);
box3 = new Box(500,250,60,60);
box4 = new Box(700,250,60,60);
box5 = new Box(600,160,50,50);

ground = new Ground (500,400,1000,20);

bird = new Bird (200,200);

pig1 = new Pig (600,350);
pig2 = new Pig (600,250);

log1 = new Log (600,300,300,PI/2);
log2 = new Log (600,200,300,PI/2);
log3 = new Log (570,160,100,PI/7);
log4 = new Log (670,160,100,-PI/7);

}

function draw() {
  Engine.update(universe)
  background(0)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  bird.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  
}