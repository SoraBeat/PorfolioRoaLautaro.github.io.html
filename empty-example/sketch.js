let material;
let modelo;
let bg;
let radius=0;
function preload(){
    material =  loadImage("../Nagatoro.png");
    modelo = loadModel("../Nagatoro.obj");  
    bg   =  loadImage("../imagenes/giphy-1.gif");
}
function setup() {
    var canvas = createCanvas(330,330,WEBGL);
    canvas.parent("sketch-holder");
}
function draw(){
    clear();
    noStroke();
    translate(0,0,-100);
    image(bg,-250,-250,500,500);
    

    scale(30);
    rotateX(90.5);
    rotateY(3.15);
    translate(0,-2.5,2);
    if(mouseIsPressed){
        rotateY(mouseX*0.01);
    }
    else{
        rotateY(radius);
        radius+=0.01;
    }
    texture(material);
    model(modelo);
    
}
