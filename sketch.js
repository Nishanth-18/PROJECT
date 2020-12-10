
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var slingshot;
var ground;
var ball;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (600,600,1200,20)
    
	box1 = new Block (800,565,70,70) 
	box2 = new Block (890,565,70,70)
	box3 = new Block (980,565,70,70)
	box6 = new Block (1070,565,70,70)
	box8 = new Block (710,565,70,70)

	box9 = new Block (760,495,70,70)
	box4 = new Block (850,495,70,70) 
	box5 = new Block (940,495,70,70)
	box7 = new Block (1030,495,70,70)

	box10 = new Block (810,425,70,70)
	box11 = new Block (900,425,70,70)
	box12 = new Block (990,425,70,70)

	box13 = new Block (850,345,70,70)
	box14 = new Block (945,345,70,70)

	box15 = new Block (870,275,50,70)
	box16 = new Block (930,275,50,70)

	box17 = new Block (900,205,50,70)
	

	ball = new Ball (600,400,50)
	
	slingshot = new Sling (ball.body,{x:700,y:100})
	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(47,49,54);

  ground.display();
  box1.display();  
  box2.display();  
  box3.display();  
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();



  ball.display();
  
  slingshot.display();
  
  drawSprites();
 
}


function mouseDragged()
{

 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}




