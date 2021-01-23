const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
   //apiBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(750,320,70,70);
    box2 = new Box(750,200,70,70);
   
    //box3 = new Box(750+70,10,70,70);
    box4 = new Box(750+70,50,70,70);
    box7= new Box(750+70,200,70,70)


    platform2 = new Ground(800,250,240,70);
   


    box5 = new Box(1000,125-70,70,70);
    box6 = new Box(1070,125-70,70,70);
    //bird= new Bird(200,50);

    platform3 = new Ground(1000,125,240,70)

   

   
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
   slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
   // box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    bird.display();
    platform.display();
    platform2.display();
    platform3.display();
    //log6.display();
    slingshot.display();  

    //box1.score();
    box2.score();
    box5.score();
    box6.score();
    box7.score();

    text("Score:"+ score,750,40);
   

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){
        slingshot.attach(bird.body);
       
    }
}

async function getBackgroundImage(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
    var responseJson = await response.json();
    console.log(responseJson);
    var dateTime= responseJson.datetime;
    var hovr= dateTime.slice(11,13);
    console.log(hovr);
    // the morning time
   if(hovr>=06&& hovr<=19){
     bg= color(245,240,240);
   }
    else{
      bg= color(1,2,3);
    }
   // backgroundImg= loadImage(bg);
  }

