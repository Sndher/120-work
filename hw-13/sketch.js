
var img;
var snowflakeImage
var flakes = []; //declaring the array
let pos_y = 20

/////////////////////////////////////////

function preload(){
  img = loadImage("trees.jpg");
}
/////////////////////////////////////////

function setup(){
  createCanvas(850,600);
}
/////////////////////////////////////////

function draw(){
image(img, 0,0);

for (var i=0; i<flakes.length; i++){
  flakes[i].update();
  flakes[i].display();

}
push();
  scale(1.10);
  snowflake( 10, pos_y+50, -50);
  // update the position
  pos_y = pos_y + 1.5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

push();
  scale(1.0);
  snowflake( 350, pos_y-200, -250);
  // update the position
  pos_y = pos_y + .5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

push();
  scale(.70);
  snowflake( 900, pos_y-200, -200);
  // update the position
  pos_y = pos_y + .5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

push();
  scale(1.5);
  snowflake( 100, pos_y-200, -1000);
  // update the position
  pos_y = pos_y + .5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

push();
  scale(1.7);
  snowflake( 400, pos_y-200, -600);
  // update the position
  pos_y = pos_y + .5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

push();
  scale(1);
  snowflake( 100, pos_y-200, -1000);
  // update the position
  pos_y = pos_y + .5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

push();
  scale(1);
  snowflake( 700, pos_y-400, -0);
  // update the position
  pos_y = pos_y + .5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

push();
  scale(.5);
  snowflake( 450, pos_y-200, -300);
  // update the position
  pos_y = pos_y + .5;
  // bound it to the height of the canvas
  pos_y = pos_y % height;
pop();

}
/////////////////////////////////////////

function snowflake(x,y){
  beginShape();
translate(-100,-100);
  push();
  translate(x,y);
  strokeWeight(7);
  strokeCap(ROUND);
  line(100,100,200,200);
    strokeWeight(7);
    strokeCap(ROUND);
    line(100,200,200,100);
      strokeWeight(7);
      strokeCap(ROUND);
      line(150,215,150,85);
        strokeWeight(7);
        strokeCap(ROUND);
        line(85,150,215,150);
        pop();
  endShape();
}





////////////////////////////////////////////////////////////////////

// SOUND CODE BELOW
      // NOTE // did not work due to local server

////////////////////////////////////////////////////////////////////
// var music;
// var radius=120;
// var x=0;
// var speed = 1.0;
// var direction=1;

// function preload(){
  // music = loadSound("audio/piano.mp3");
// }
//function setup(){
  // createCanvas(600,600);
  // ellipseMode(RADIUS);
  // x=width/2; //starts in center
// }
// function draw(){
  // background(0);
  // x+=speed*direction;
  // fit((x>width-radius)||(x<radius)) {
    // direction= -direction; //flip direction
    // music.play();
  // }
  // if (direction ==1) {
    // arc(x,220, radius, radius, 0.52, 5.76); //face right
  // }
  // else{
    // arc(x,220, radius, radius, 3.67, 8.9); //face left
  // }
// }


////////////////////////////////////////////////////////////////////

//function setup(){
//  createCanvas(600,600);
//}
//function draw(){
//  background(10,50,100);
//}

//import processing.sound.*;
//SoundFile file;

//void setup() {
//size(640, 360);
//background(255);

// Load a soundfile from the /data folder of the sketch and play it back
//    file = new SoundFile(this, "mountain.mp3");
//      file.play();
//  }

//void draw() {
//}import p


///////////////////////////////////////////////////////////////////////
//var soundtrack;
//var playbutton, stopbutton;
//var analyzer;
//var uploadLoading = false;

//function preload()
//{
//  soundtrack = loadSound('audio/mountain.mp3');
//}

//function setup()
//{
//  createCanvas(600, 600);

//   loop sound
//  soundtrack.loop();

//   stop sound to prevent it from playing automatically
//  soundtrack.stop();

//   //play button
//  playbutton = createButton('Play');
//  playbutton.position(25, 25);
//  playbutton.mousePressed(playsound);

//   stop button
//  stopbutton = createButton('Stop');
//  stopbutton.position(75, 25);
//  stopbutton.mousePressed(stopsound);

//   music visualizer
//  analyzer = new p5.Amplitude();
//  analyzer.setInput(soundtrack);
//}

//function draw()
//{
//  background(255);

//   draw an ellipse based on current volume level
//  var vol = analyzer.getLevel();
//  Stroke(3);
//  fill("white");
//  ellipse(width/2, height/2, map(vol, 0, 1, 0, width), map(vol, 0, 1, 0, height));

//}

//function playsound()
//{
//  if(soundtrack.isPlaying() == false)
//  {
//    soundtrack.play();
//  }
//}

//function stopsound()
//{
//  if(soundtrack.isPlaying() == true)
//  {
//    soundtrack.pause();
//  }
//}
