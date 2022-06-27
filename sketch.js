var car, background, finish, smile
var reset
var Play=1
var End=0
var gameState=Play

function preload(){
carImg=loadImage("car.png")
backImg=loadImage("background.jpg")
finishImg=loadImage("finish.webp")
resetImg=loadImage("reset.png")
smileImg=loadImage("smiley.png")

}






function setup() {
  createCanvas(1400,700);

background=createSprite(700,350,50,50)
background.addImage(backImg)
background.scale=6
  
car=createSprite(100,650,50,50)
car.addImage(carImg)
car.scale=.5

finish=createSprite(1300,600,50,50)
finish.addImage(finishImg)
finish.scale=.3

reset=createSprite(1300,100,50,50)
reset.addImage(resetImg)
reset.scale=.5

smile=createSprite(700,350,50,50)
smile.addImage(smileImg)
smile.scale=.5



}

function draw() {

if(gameState===Play){

if(background.x<600){
  background.x=700
}

background.velocityX=-6

if(keyDown("Right_Arrow")){
 car.velocityX=6
}

if(car.isTouching(finish)){
gameState=End
}

reset.visible=false


smile.visible=false






}

if(gameState===End){
  car.velocityX=0

  background.velocityX=0

 reset.visible=false

 smile.visible=true

}
    
  drawSprites();
}