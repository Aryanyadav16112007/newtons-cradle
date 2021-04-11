
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObjects1,bobObjects2,bobObjects3,bobObjects4,bobObjects5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
	roof=new Roof(350,100,300,30);
	World.add(world,roof);

	bobObjects1=new Bob(250,300);
	bobObjects2=new Bob(300,300);
	bobObjects3=new Bob(350,300);
	bobObjects4=new Bob(400,300);
	bobObjects5=new Bob(450,300);

	rope1=new Rope(bobObjects1.body,roof.body,-100,0);
	World.add(world,rope1);
	rope2=new Rope(bobObjects2.body,roof.body,-50,0);
	World.add(world.rope2);
	rope3=new Rope(bobObjects3.body,roof.body,0,0);
	World.add(world,rope3);
	rope4=new Rope(bobObjects4.body,roof.body,+50,0)
    World.add(world,roof4);
	rope5=new Rope(bobObjects5.body,roof.body,+100,0)
	World.add(world,roof5);

	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  Engine.update(engine);

  
 


  roof.display();
  bobObjects1.display();
  bobObjects2.display();
  bobObjects3.display();
  bobObjects4.display();
  bobObjects5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bobObjects1.body,bobObjects1.body.position,{x:730,y:0});
	}
}



