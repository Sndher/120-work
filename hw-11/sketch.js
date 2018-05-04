let robots = [];
let t = 0;

function setup(){
  createCanvas(windowWidth, 700);
  background("lightGrey");
  robotMode(CENTER);
  noStroke();
  fill();
  for (var i = 0; i < 20; i++) {

////////////////////////////////////////////
  function drawRobot( robot, time ) {
      // determine the value of individual sine wave functions
      let x = sinePos( robot.period.x, time );
      let y = sinePos( robot.period.y, time );

      let pos_x = x * robot.maxDist.x + robot.pos.x;
      let pos_y = y * robot.maxDist.y + robot.pos.y;

      // draw a robot based on object data
      robotHead(
          pos_x,
          pos_y,
          x * robot.maxSize,
          y * robot.maxSize
      );
  }
  ////////////////////////////////////////////
}
robots.push(
    {
        period: { x: random(60, 240), y: random(60, 240) },
        maxSize: random(4),
        maxDist: {
            x: random(width/2),
            y: random(height/2)
        },
        pos: {
            x: random(width),
            y: random(height)
        }
    } // <- end robots
); 

function draw(){
  let numToDraw = map( mouseX, 0, width, 1, robots.length );
  for ( let i = 0; i < numToDraw; i++ ) {
  robotHead( robots[i], t );
}

function mousePressed(){
  function robotHead( pos_x, pos_y, scale_x, scale_y ) {

///////////////////////////////////////////////
    push(); // <--Start Sandbox

    translate(pos_x, pos_y);
    scale( scale_x, scale_y );

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
  //  strokeWeight(3);
  line( 340, 305, 459, 305 );
  //mouth stroke shading (top)
  //  strokeWeight(4);
  line( 340, 290, 459, 290 );
  //mouth stroke shading (middle)
  strokeWeight (2);
  line( 340, 300, 459, 300 );
  //Red accent
  fill ('red');
  rect(360, 300, 10, 10);

    pop (); // <-- End Sandbox
  }
  ///////////////////////////////////////////////
/* sine function */
function sinePos( timeScale, time ) {
    let val = sin( TWO_PI * time/timeScale );
    return val;
}
