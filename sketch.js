var p1,p2,p3,p4,p5,p6; 
var pI1,pI2,pI3,pI4,pI5,pI6;
var gameState = 0;
var database;
var players = [];
var rand;
var game,player,form;
var playerCount;
var table;
var mapImg,map;
var border1,border2,border3,border4,border5,border6,border7,border8,border9,border10,border11,border12;
var task1, task2, task3, task4, task5;

var task,part1,part2,part3,part4,part5;

function preload(){
    pI1 = loadImage("capture.PNG");
    pI2 = loadImage("capture1.PNG");
    pI3 = loadImage("capture2.PNG");
    pI4 = loadImage("capture3.PNG");
    pI5 = loadImage("capture4.PNG");
    pI6 = loadImage("capture5.PNG");
    mapImg = loadImage("Untitled.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);


    database = firebase.database();
   map = createSprite(0,220,50,50);
   map.addImage(mapImg);
   map.scale = 5;
   
    p1 = createSprite(400,300,20,20);
    p1.addImage(pI1);

    
    p1.debug = false;
    p1.setCollider("rectangle", 5, 5, 80, 120);
     
    border1 = createSprite(-200 , -1070, 20,1550);
    border2 = createSprite(650,-1850,1700,20);
    border3 = createSprite(1480,-1070,20,1550)
    border4 = createSprite(2705,-300,2500,20);
    border5 = createSprite(2705,900,2500,20);
    border6 = createSprite(3925, 300,20,1200);
    border7 = createSprite(765, 2222,2000,20);
    border8 = createSprite(-200, 1880,20,2000);
    border9 = createSprite(1500, 1900,20,2000);
    border10 = createSprite(-2000, -310,3600,20);
    border11 = createSprite(-3795, 420,20,2000 );
    border12 = createSprite(-2000, 900,3600,20);

    task1 = createSprite(-2525, -80, 500, 500);
    task2 = createSprite(0, 2147,600,250);
    task3 = createSprite(3126, -195, 500, 250);
    task4 = createSprite( 688, -1711, 250,500)

    


    border1.visible = false;
    border2.visible = false;
    border3.visible = false;
    border4.visible = false;
    border5.visible = false;
    border6.visible = false;
    border7.visible = false;
    border8.visible = false;
    border9.visible = false;
    border10.visible = false;
    border11.visible = false;
    border12.visible = false;

    task1.visible = false; 
    task2.visible = false; 
    task3.visible = false; 
    task4.visible = false; 
  
    
}

function draw(){

//image (mapImg,200,200,displayWidth*3,displayHeight*4);
camera.position.x = p1.x;
camera.position.y = p1.y;
 if(gameState === 0){

   
 }
 if(keyDown('w')){
    p1.y =p1.y -12
 }
 

 if(keyDown('s')){
    p1.y = p1.y +12
 }
 
 if(keyDown('a')){
    p1.x = p1.x -12
 }
 
 if(keyDown('d')){
    p1.x = p1.x +12
 }

 if(p1.isTouching(task1)){
  rect = createSprite(-2525, -80, 500, 500);
  rect.shapeColor = "cyan";
   = createSprite(-2325, -160,50,50);
  part1.shapeColor = "red";

  part2 = createSprite(-2425, -160,50,50);
  part2.shapeColor = "red";

  part3 = createSprite(-2525, -160,50,50);
  part3.shapeColor = "red";

  part4 = createSprite(-2625, -160,50,50);
  part4.shapeColor = "red";
  
  // if(mouseReleased(part1)){
 // part1.shapeColor = "green"
  // }
  
 }


console.log(p1.x,p1.y)
p1.collide(border1);
p1.collide(border2);
p1.collide(border3);
p1.collide(border4);
p1.collide(border5);
p1.collide(border6);
p1.collide(border7);
p1.collide(border8);
p1.collide(border9);
p1.collide(border10);
p1.collide(border11);
p1.collide(border12);




 //timer();
 drawSprites();
 
 
}  

function mouseReleased(){

}