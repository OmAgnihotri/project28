const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;



function preload() {
     boyImage= loadImage("sprites/boy.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,590,1200,20);

    
   
    box1 = new Mango(800,540,70,70);
    box2 = new Mango(1000,540,70,70);
  

    box3 = new Box(800,450,70,70);
    box4 = new Box(1000,450,70,70);
 

    

    box5 = new Box(900,360,70,70);

   
    stoneObj = new Stone(200,200);

    

    sling=new rope (stoneObj.body,{x:200,y:200});

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();

    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();

    mango9.display();
    mango10.display();
    image (boyImage)
    tree.display();

    
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){
    sling.fly();
}
//function detectcollision(stoneObj,mango1,mango2,mango3,mango4,
 //   mango5,mango6,mango7,mango8,mango9,mango10){

  //  }