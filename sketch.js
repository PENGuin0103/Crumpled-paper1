
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper = new Paper(50,100);
	ground = new Ground(400,700,800,10);
	dustbin1 = new Dustbin(650,600,10,100);
	dustbin2 = new Dustbin(700,650,100,10);
	dustbin3 = new Dustbin(750,600,10,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 keyPressed();
}

function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body,applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}


