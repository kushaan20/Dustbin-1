//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,
var ground;
var dustbin,dustbin2,dustbin3;
var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(400,690,800,20);

	dustbin= new Dustbin(400,630,10,100);
	dustbin2= new Dustbin(600,630,10,100);
	dustbin3= new Dustbin(500,680,200,10);

	paper= new Paper(100,660,50);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-300});
	   
	 }
   }
   




