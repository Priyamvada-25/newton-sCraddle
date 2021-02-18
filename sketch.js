
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var roof;
var rope11,rope22,rope33,rope44,rope55;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(240,500,70);
    bobObject2= new Bob(310,500,70);
	bobObject3= new Bob(380,500,70);
	bobObject4= new Bob(450,500,70);
	bobObject5= new Bob(520,500,70);
    roof= new Roof(380,200,340,30);
	rope11= new Rope1(bobObject1.body,roof.body);
	rope22= new Rope2(bobObject2.body,roof.body);
	rope33= new Rope3(bobObject3.body,roof.body);
	rope44= new Rope4(bobObject4.body,roof.body);
	rope55= new Rope5(bobObject5.body,roof.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope11.display();
  rope22.display();
  rope33.display();
  rope44.display();
  rope55.display();

}



