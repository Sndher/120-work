function setup() {
    createCanvas( windowWidth, 700 );
}

let ovalAngle = 1;
let ovalWidth = 60;
let ovalHeight = 80;

function draw(){

  //background

  background( 200, 110, 160 );

  //elliminate cursor
  noCursor()

  // UPDATE VALUES
     // base oval rotation rate on mouseY pos
     ovalRotationRate = (mouseY * 0.2) - 10;
     // update head angle,
     // to equal itself plus ovalRotationRate
     ovalAngle = ovalAngle + ovalRotationRate;
     // set the arm to spin at a constant rate

  //*******************
  //SANDBOX
  //*******************
  push();


  //bowtie
  push();
  translate(width/4, height/2);
  fill( 60, 255, 255);
  push();
  pop();
  rotate( radians (mouseX) );
  beginShape();
  vertex( 320, 120);
  vertex( 60, 390);
  vertex( 240, 180);
  vertex( 10, 200);
  endShape();

  //black square
  translate( 200, 200);
  fill( 'orange' );
  rect(0, 0, 40, 40);

  //arc
  translate( 250, 220);
  fill( 'purple' );
  arc( 0, 0.4, 260, 220, 0, PI );


  pop();
    fill('black');
    ellipse( 625, 435, 2);
  //*******************
  //END SANDBOX
  //*******************

  //ellipse 01 yellow

  fill( 255, 255, 0, 100);
  noStroke();
  ellipse(mouseX, 500,  500);

  //ellipse 02 Blue
  translate( 0, 0);
  noStroke();
  fill( 0, 0, 255, 100);
  ellipse( width/4, mouseY, 450, 300);

  //Body
  fill( 240, 80, 30);
  rect( width/2, height/2, 180 , 250);

    fill(200, 20, 80);
    // move center
    translate( width/2, height/2 );
    // rotate head based on ovalAngle
    rotate( radians(ovalAngle) );
    ellipse( 0, 0, ovalWidth, ovalHeight );

  //ellipse 03 Green

  noStroke();

  fill( 0, 255, 0 , 100);
  translate( 0, 0);
  var scalar = mouseX / 60.0;
  scale(scalar);
  ellipse( 300 , mouseY, 400 );




}
