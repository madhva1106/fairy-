var back;
var fairy,fairyi;
var star,stari;





function preload(){
   //preload the images here
back=loadImage("images/starnight.png")
fairyi=loadImage("images/fairy1.png")
stari=loadImage("images/star.png")

}

function setup() {
  createCanvas(800, 750);
  fairy=createSprite(400,470,100,100);
  fairy.addImage("fairyi",fairyi);
  fairy.scale="0.2";

  star=createSprite(50,50,20,20);
  star.x=Math.round(random(100,800));
  star.addImage("stari",stari);
  star.scale="0.3";
  
}


function draw() {
  background(back);

  if(keyDown("left_arrow")){
    fairy.x=fairy.x-2;
  }

  if(keyDown("right_arrow")){
    fairy.x=fairy.x+2;
  }

  if(keyDown("space")){
   star.velocityY=2;
  }

  if(star.position.y > 470){
    star.velocityY=0;

  }

 
  drawSprites();

}

