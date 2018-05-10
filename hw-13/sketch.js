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
var soundtrack;
var playbutton, stopbutton;
var analyzer;

function preload()
{
  soundtrack = loadSound('mountain.mp3');
}

function setup()
{
  createCanvas(600, 600);

   loop sound
  soundtrack.loop();

   stop sound to prevent it from playing automatically
  soundtrack.stop();

   play button
  playbutton = createButton('Play');
  playbutton.position(25, 25);
  playbutton.mousePressed(playsound);

   stop button
  stopbutton = createButton('Stop');
  stopbutton.position(75, 25);
  stopbutton.mousePressed(stopsound);

   music visualizer
  analyzer = new p5.Amplitude();
  analyzer.setInput(soundtrack);
}

function draw()
{
  background(255);

   draw an ellipse based on current volume level
  var vol = analyzer.getLevel();
  Stroke(3);
  fill("white");
  ellipse(width/2, height/2, map(vol, 0, 1, 0, width), map(vol, 0, 1, 0, height));

}

function playsound()
{
  if(soundtrack.isPlaying() == false)
  {
    soundtrack.play();
  }
}

function stopsound()
{
  if(soundtrack.isPlaying() == true)
  {
    soundtrack.pause();
  }
}
