const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var tree1, stone1, ground1, launcher1;
var mango1, mango1, mango3, mango4, mango5;
var world, boy;
var launchingForce = 100;

function preload(){
	boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	stone1 = new stone(235, 420, 30);
	
	ground1 = new ground(width/2, 600, width, 20);
	launcher1 = new launcher(stone1.body,{x:235,y:420})
	tree1 = new Tree(1050,580);

	mango1 = new mango(1100, 100, 30);
	mango2 = new mango(1170, 130, 30);
	mango3 = new mango(1010, 140, 30);
	mango4 = new mango(1000, 70, 30);
	mango5 = new mango(1100, 70, 30);
	var render = Render.create({
		element: document.body,
		engine:engine,
		options: {
			width: 1300,
			height: 600,
			wireframes: false
		}
	});
	Engine.run(engine);
}


function draw() {
  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50,50);
  image(boy, 200, 340, 200, 300);
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();  
  stone1.display();
  ground1.display();
  launcher1.display();
  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5) 
}
function detectCollision(a,b){
	mangoBodyPosition=b.body.position
	stoneBodyPosition=a.body.position 

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= b.r + a.r){
		Matter.Body.setStatic(b.body,false);
	}
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		launcherObject.attach(stone1.Body)
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher1.fly()
}