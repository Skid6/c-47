var bg, bgimg
var SeongGiHun, SeongGiHunimg
var LightGreen, LightGreenimg
var LightRed, LightRedimg
var Laser, Laserimg
var laserGroup


function preload(){
 bgimg = loadImage("Backround.jpg")
 SeongGiHunimg = loadImage("unnamed.png")
 LightRed = loadImage("Red.png")
 LightGreen = loadImage("Green.png")
 Laserimg = loadImage("Laser.png")
 gameSound = loadSound("Song.mp3")
}

function setup(){
  createCanvas(750,967)
  SeongGiHun = createSprite(375,900,10,10)
  SeongGiHun.addImage("SeongGiHun",SeongGiHunimg)
  SeongGiHun.scale = 0.03
  
  light=createSprite(150,150,20,20)
  
  laserGroup = new Group()
  gameSound.play()

 
}

function draw(){
  background(bgimg);
 text(mouseX+","+mouseY,mouseX,mouseY)
 if(keyDown(UP_ARROW)){
  SeongGiHun.y-=4
}
if(keyDown(LEFT_ARROW)){
  SeongGiHun.x-=4
}
if(keyDown(RIGHT_ARROW)){
  SeongGiHun.x+=4
}
if(keyDown(DOWN_ARROW)){
  SeongGiHun.y+=4
}
if(frameCount%26===0){
  light.addImage("Red",LightRed)
  light.scale = 0.3
    }
    if(frameCount%25===0){
      light.addImage("Green",LightGreen)
      light.scale = 0.3
    }
    if(laserGroup.isTouching(SeongGiHun)){
      SeongGiHun.destroy()
    }
    
  Laser()
drawSprites()
}
function Laser(){
  if(frameCount%10 === 0){
    var Laser = createSprite(0,random(240,830),5,5)
    Laser.addImage("Laser",Laserimg)
    Laser.velocityX = 10
    Laser.scale = 0.2
    laserGroup.add(Laser)
  }
  
}
