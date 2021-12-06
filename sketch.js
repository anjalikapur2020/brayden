var bg,waitimg,play,about,home
var gameState="wait"
var logo

function preload(){
waitimg=loadImage("bga.png")
playimg=loadImage("game.jpg")
aboutimg=loadImage("bga.jpg")
aboutpopimg=loadImage("popupzombie.png")
endbg=loadImage("zombiewin.gif")

//zombie1img=loadImage("zombie.png")

}

function setup(){
    createCanvas(windowWidth,windowHeight)
    //zombie1=createSprite(windowWidth/2,windowHeight/2,400,400)
    //zombie1.addImage(zombie1img)
    //zombie1.visible=false


logo=createImg("logo.png")
logo.position(windowWidth/2-250,0)
logo.size(500,500)


play=createImg("play.png")
play.position(50,20)
play.size(100,100)

about=createImg("about2.png")
about.position(50,120)
about.size(100,100)


home=createImg("back.png")
home.position(50,windowHeight-100)
home.size(100,100)
home.hide()

popup1=createSprite(windowWidth/2,windowHeight/2)
popup1.addImage(aboutpopimg)
popup1.visible=false
popup1.scale=1.5

}

function draw(){

    if (gameState==="wait"){
    background(waitimg)
   // zombie1.visible=false
   popup1.visible=false


}

if(play.mousePressed(()=>{
gameState="play"
//zombie1.visible=true
home.show()


}))


if(home.mousePressed(()=>{
    gameState="wait"
    }))

if(about.mousePressed(()=>{
    gameState="about"
    //popup1.visible=true

    }))

if(gameState==="play"){
background(playimg)
logo.hide()
popup1.visible=false




}

//camera.position.x=zombie1.position.x

if(keyDown("RIGHT_ARROW")){
   // zombie1.velocityX = 2
}


if(gameState==="about"){
   // background(aboutimg)}

   popup1.visible=true
   logo.hide()


    drawSprites()
    }
}



