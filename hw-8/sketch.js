
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  noCursor();
}

function draw() {
  background(150, 200, 200);

//Cloud.Sandbox
push();
translate(100,100);
push();
fill("white");
noStroke();
ellipse(50,50,50,50);
translate(50,-5);
ellipse(50,50,60,60);
translate(45,10);
ellipse(50,50,40,40);
translate(-100,-15);
rect(60,60,90,25);
pop();
pop();
//END.Cloud.Sandbox

//Cloud.2.Sandbox
push();
translate(850,200);

push();
fill("white");
noStroke();
ellipse(50,50,50,50);
translate(50,-5);
ellipse(50,50,60,60);
translate(45,10);
ellipse(50,50,40,40);
translate(-100,-15);
rect(60,60,90,25);
pop();
pop();
//END.Cloud.2.Sandbox

//Sun.Beams
  let density = map(mouseX, 0, width, 40, 100);
    for (let x = 30; x <= width-100; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        //stroke(50, 200, 230);
       stroke( random(255), random(255), random(0));
        line(x, y, width/2, windowHeight);
      }
    }

//SUN
    fill("yellow");
  //  ellipse(mouseX, 500,  500);
    ellipse(width/2,mouseY+300, 500,  500);
  }
