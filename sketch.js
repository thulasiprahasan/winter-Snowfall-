const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bg_img
var snow
var snow_img
var snow = []
var maxSnow = 100


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  //snow = new Snow(200,20,10,10)

  
}
function preload(){
  bg_img = loadImage("snow3.jpg")
  //snow_img = loadImage("snow5.webp")


}

function draw() {
  background(bg_img);  
  Engine.update(engine);

  if(frameCount % 1 === 0){
    snow.push(new Snow(random(10,10000),3,9));

  }
  
 for(var i = 0 ; i<snow.length; i++){
   snow[i].display();
 }

  
  //drawSprites();
 
  //snow.display();
}