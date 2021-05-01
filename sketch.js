var canvas;
var music;

var box;

function preload(){

} 


function setup(){
    canvas = createCanvas(800,700);
    surface1 =createSprite(50,700,190,80)
    surface1.shapeColor="red"
    surface2 =createSprite(300,700,190,80)
    surface2.shapeColor= "blue"
    surface3 =createSprite(550,700,190,80)
    surface3.shapeColor="pink"
    surface4 =createSprite(750,700,190,80)
    surface4.shapeColor="yellow"
    box =createSprite(random(50,750),50,25)
    box.shapeColor= "white"
    box.velocityY= 8
    box.velocityX=7
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
edges=createEdgeSprites()
    createEdgeSprites();
if(box.isTouching(surface1)&& box.bounceOff(surface1)){
box.shapeColor="red"
}
if(box.isTouching(surface2)&& box.bounceOff(surface2)){
    box.shapeColor="blue"}
if(box.isTouching(surface3)&& box.bounceOff(surface3)){
        box.shapeColor="pink"}
 if(box.isTouching(surface4)&& box.bounceOff(surface4)){
box.shapeColor="yellow"
}
             
if(box.isTouching(edges)){
    box.bounceOff(edges)
}
    



    //add condition to check if box touching surface and make it box
    

    drawSprites()
}
