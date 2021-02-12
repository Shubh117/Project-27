
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	roof = createSprite(400,250,100,20);

	bobObject1 = new bobObject(400,300,10,10);
	bobObject1 = new bobObject(405,300,10,10);
	bobObject1 = new bobObject(410,300,10,10);
	bobObject1 = new bobObject(415,300,10,10);
	bobObject1 = new bobObject(420,300,10,10);

	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
	rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0);
	rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
	rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.dispaly();
  
  drawSprites();
 
}

var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;

strokeWeight(2);

var Anchor1X = pointA.x;
var Anchor1Y = pointA.y;

var Anchor2X = pointB.x+this.offsetX;
var Anchor2Y = pointB.y+this.offsetY;

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);