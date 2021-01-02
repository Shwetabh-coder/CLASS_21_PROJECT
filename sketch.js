var bullet,wall;

var speed,weight,thickness;

var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  // createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = (30,52);
  thickness = random(22,83)

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall = color(80,80,80);


  bullet.velocityX = speed;
}

function draw() {
  // background(255,255,255);
  // background(black);  
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0  
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
    
  }
  
  drawSprites();
}

function hascollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
}