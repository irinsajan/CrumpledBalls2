const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1,box2,box3;
var ground;
var paper, dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-10,width,20);

	box1 = new Box(width-200,height-30,150,20);
	box2 = new Box(width-275,height-80,20,100);
	box3 = new Box(width-125,height-80,20,100);

	paper = new Paper(100,height-20,20);

	Engine.run(engine);
  
}


function draw() {
  background("grey");
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
	
  image(dustbinImage,600,height-80,200,200);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 50, y: -85});
	}
}



