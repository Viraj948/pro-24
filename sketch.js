
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,stone,rubber1, sand1,iron1,sand2,sand3,sand4,sand5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

  
	ground = new Ground(600,500,1200,30);
	hammer=new Hammer(300,20,width,height);
	stone=new Stone(700,445,70,70);
	rubber1=new Rubber(10,442,28);
	sand1=new  Sand(80,232,22);
	sand5=new Sand(97,232,22);
	sand4=new Sand(21,232,22);
	sand3=new Sand(10,232,22);
	sand2=new Sand(66,232,22);
	iron1=new Iron(200,470,60,30);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  hammer.display();
 rubber1.display();
 stone.display();
 sand1.display();
 sand5.display();
 sand4.display();
 sand3.display();
 sand2.display();
 iron1.display();
 
}



