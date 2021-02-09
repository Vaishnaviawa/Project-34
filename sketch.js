//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var backgroundImage;
var ground, hero, rope;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
var monster;

function preload() {
  //loading background image
  backgroundImage = loadImage("GamingBackground.png");

}

function setup() {
  //create a canvas
  createCanvas(1200, 650);

  //creating the engine
  engine = Engine.create();
  world = engine.world;

  //creating a ground
  ground = new Ground(380, 480, 760, 20);

  //creating a hero
  hero = new Hero(150, 450, 100);

  //creating the invisible rope
  rope = new Fly(hero.body, {x: 150, y: 100});

  //first tower
  block1 = new Blocks(490, 430, 40, 40);
  block2 = new Blocks(490, 390, 40, 40);
  block3 = new Blocks(490, 350, 40, 40);
  block4 = new Blocks(490, 310, 40, 40);
  block5 = new Blocks(490, 270, 40, 40);
  block6 = new Blocks(490, 230, 40, 40);
  block7 = new Blocks(490, 190, 40, 40);

  //second tower
  block8 = new Blocks(530, 430, 40, 40);
  block9 = new Blocks(530, 390, 40, 40);
  block10 = new Blocks(530, 350, 40, 40);
  block11 = new Blocks(530, 310, 40, 40);
  block12 = new Blocks(530, 270, 40, 40);
  block13 = new Blocks(530, 230, 40, 40);

  //third tower
  block14 = new Blocks(570, 430, 40, 40);
  block15 = new Blocks(570, 390, 40, 40);
  block16 = new Blocks(570, 350, 40, 40);
  block17 = new Blocks(570, 310, 40, 40);
  block18 = new Blocks(570, 270, 40, 40);
  block19 = new Blocks(570, 230, 40, 40);
  block20 = new Blocks(570, 190, 40, 40);
  block21 = new Blocks(570, 150, 40, 40);

  //fourth tower
  block22 = new Blocks(610, 430, 40, 40);
  block23 = new Blocks(610, 390, 40, 40);
  block24 = new Blocks(610, 350, 40, 40);
  block25 = new Blocks(610, 310, 40, 40);
  block26 = new Blocks(610, 270, 40, 40);

  //creating the monster
  monster = new Monster(730, 470, 80);

}

function draw() {
  //background = background image
  background(backgroundImage);
  
  //updating the engine
  Engine.update(engine);

  //drawing the sprites
  drawSprites();

  //displaying the objects
  ground.display();
  rope.display();
  hero.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  monster.display();
}

//function for mouse dragged
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}