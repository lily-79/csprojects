function setup() {
  createCanvas(400, 400);
  background(0);
}

let x = 50;

function draw() {

}

function mousePressed(){
fill(random(255),random(255),random(255));
ellipse(mouseX,mouseY,30,30);
}
