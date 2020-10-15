const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,ground1,box2,box1

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
box2=new box(200,100,50,100)
box1=new box(200,300,50,50)
ground1=new ground(400,385,800,10)

}

function draw() {
  background("black");  
  Engine.update(engine)
  box2.display();
  ground1.display();
  box1.display();
}