const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform;
var Ball;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10, Block11, Block12, Block13, Block14, Block15, Block16, Block17, Block18, Bloc19, Block20, Block21, Block22, Block23, Block24, Block25, Block26, Block27, Block28, Block29, Block30;  ;  
var engine, world;
var ground1, ground2;
var rope;

function preload(){

}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;

	ground1 = new ground(600, 250, 200, 20);
	ground2 = new ground(400, 500, 220, 20);

	Block1 = new block1(600, 210, 32, 40);
	Block2 = new block1(565, 210, 32, 40);
	Block3 = new block1(530, 210, 32, 40);
	Block4 = new block1(635, 210, 32, 40);
	Block5 = new block1(670, 210, 32, 40);
	Block6 = new block1(615, 155, 32, 40);
	Block7 = new block1(580, 155, 32, 40);
	Block8 = new block1(545, 155, 32, 40);
	Block9 = new block1(650, 155, 32, 40);
	Block10 = new block1(630, 100, 32, 40);
	Block11 = new block1(595, 100, 32, 40);
	Block12 = new block1(560, 100, 32, 40);
	Block13 = new block1(610, 45, 32, 40);
	Block14 = new block1(572, 45, 32, 40);
	Block15 = new block1(590, 0, 32, 40);

	///
	Block16 = new block1(400, 470, 32, 40);
	Block17 = new block1(434, 470, 32, 40);
	Block18 = new block1(470, 470, 32, 40);
	Block19 = new block1(370, 470, 32, 40);
	Block20 = new block1(334, 470, 32, 40);
	Block21 = new block1(350, 440, 32, 40);
	Block22 = new block1(386, 440, 32, 40);
	Block23 = new block1(416, 440, 32, 40);
	Block24 = new block1(450, 440, 32, 40);
	Block25 = new block1(366, 410, 32, 40);
	Block26 = new block1(400, 410, 32, 40);
	Block27 = new block1(433, 410, 32, 40);
	Block28 = new block1(417, 380, 32, 40);
	Block29 = new block1(380, 380, 32, 40);
	Block30 = new block1(398, 350, 32, 40);

	Ball = new ball(300, 200);

	rope = new Slingshot(Ball.body, {x : 200, y : 250});
	
    Engine.run(engine);
}
function draw() {
	rectMode(CENTER);
	background("black");

	ground1.display();
	ground2.display();
	Block1.display();
	Block2.display();
	Block3.display();
	Block4.display();
	Block5.display();
	Block6.display();
	Block7.display();
	Block8.display();
	Block9.display();
	Block10.display();
	Block11.display();
	Block12.display();
	Block13.display();
	Block14.display();
	Block15.display();
	Block16.display();
	Block17.display();
	Block18.display();
	Block19.display();
	Block20.display();
	Block21.display();
	Block22.display();
	Block23.display();
	Block24.display();
	Block25.display();
	Block26.display();
	Block27.display();
	Block28.display();
	Block29.display();
	Block30.display();

	Ball.display();


}
function mouseDragged(){
	Matter.Body.setPosition(Ball.body, {x:mouseX, y:mouseY});	
}
function mouseReleased(){
	rope.fly();
}



















































































