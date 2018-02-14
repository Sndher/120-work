// Declare the setup function
function setup(){
  // create a canvas
  createCanvas( 800, 600 );
  // color the background 'light blue' (30, 230, 255)
  background(30, 230, 255);
}


//Create Shape
function draw(){

        //Body Portion

//hand peices(left)
  fill('grey');
  ellipse(550, 310, 15, 15);
    fill('grey');
    ellipse(550, 295, 15, 15,);
      fill('grey');
      ellipse(559, 282, 15, 15);
  fill('grey');
  ellipse(640, 342, 15, 15);
    fill('grey');
    ellipse(652, 328, 15, 15);
      fill('grey');
      ellipse(655, 312, 15, 15);
  fill('grey');
  ellipse(600, 330, 13, 13);
    fill('grey');
    ellipse(610, 316, 12, 12);
//hand (right)
  fill('green');
  triangle(550, 320, 577, 349, 630, 350);
//arm (right)
  fill('green');
  triangle(530, 470, 575, 350, 400, 450);
//arm shoulder (right)
  fill('green');
  ellipse(480, 460, 100, 100);
//shoulder bolts (right)
  fill ('black');
  ellipse(485, 435, 10, 10);
  fill ('black');
  ellipse(509, 465, 10, 10);

//hand peices(left)
  fill('grey');
  ellipse(215, 295, 15, 15);
    fill('grey');
    ellipse(213, 276, 15, 15,);
      fill('grey');
      ellipse(198, 263, 15, 15);
  fill('grey');
  ellipse(120, 330, 15, 15);
    fill('grey');
    ellipse(110, 315, 15, 15);
      fill('grey');
      ellipse(112, 298, 15, 15);
  fill('grey');
  ellipse(155, 319, 13, 13);
    fill('grey');
    ellipse(147, 306, 12, 12);
//hand(left)
  fill('green');
  triangle(120, 340, 220, 305, 183, 342);
//arm (left)
  fill('green');
  triangle(330, 435, 185, 345, 240, 465);
//arm shoulder (left)
  fill('green');
  ellipse( 290, 460, 100, 100);
//shoulder bolts (left)
  fill('black');
  ellipse(285, 435, 10, 10);
  fill('black');
  ellipse(265, 460, 10, 10);


//robot body (slightly (darker) color)
  fill(65, 65, 65);
  triangle(600, 700, 400, 300, 200, 600);

//accessory pannel accent (red)
  fill('red');
  rect(340, 470, 100, 130);
//accessory pannel accent (black)
  fill ('black');
  rect(355, 485, 70, 120);
//accessory pannel accent (green)
  fill('green');
  ellipse(390, 530, 45, 45);
//accessory pannel accent (white)
  fill('white');
  ellipse(370, 500, 15, 15);


        //Head Portion

      //Robots Head
//triangle with 'grey' color
  fill(80, 80, 80);
  triangle(600, 70, 400, 450, 200, 70);
//top head ellipse with 'grey' color
  fill(80, 80, 80);
  ellipse(400, 70, 400, 70);
//robot nose
  fill(60, 60, 60);
  rect(387, 200, 25, 60);
//nose accent (green)
  fill ('green');
  rect(387, 200, 25, 25);
//rectangle antenna
  fill(255, 200, 230);
  rect( 397, 28, 5, 55);
//antenna ball
  fill('red');
  ellipse( 400, 20, 20, 20);

      //Robots Eyes
//left eye
  fill(185, 185, 185);
  ellipse(325, 175, 50, 120);
//right eye
  fill(185, 185, 185);
  ellipse(475, 175, 50, 120);
//left pupil
  fill('black');
  ellipse(325, 190, 20, 40);
//right pupil
  fill('black');
  ellipse(475, 190, 20, 40);
//red dot (left)
  fill('red')
  ellipse(325, 200, 15, 15);
//red dot (right)
  fill('red')
  ellipse(475, 200, 15, 15);
//white eye shine(left)
  fill('white');
  ellipse(490, 165, 10, 10);
//white eye shine(right)
  fill('white');
  ellipse(340, 165, 10, 10);

    //Robots Mouth
//rectangle mouth
  fill(200, 200, 200);
  rect( 340, 280, 120, 35);
//mouth stroke shading (bottom)
  strokeWeight(5);
  line( 340, 305, 459, 305 );
//mouth stroke shading (top)
  strokeWeight(4);
  line( 340, 290, 459, 290 );
//mouth stroke shading (middle)
    strokeWeight (5);
    line( 340, 300, 459, 300 );
//Red accent
  fill ('red');
  rect(360, 300, 10, 10);


}
