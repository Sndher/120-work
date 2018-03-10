//Defining Global Variables

//Set Size Constraints
let ball = {};

//size of the ball is (x amount of pixles wide)
ball.width = 60;

//determines starting location of ball animation on canvas position (x,y)
ball.x = 30;
ball.y = 30;

// .delta determines at which angle the ball moves from
ball.delta_x = 1;
ball.delta_y = 1;

//controls the speed of starting ball on the (x and y axis and minor control of position angle of movement)
ball.scale_x = 3;
ball.scale_y = 3;

//starting setup function
function setup() {
  //creating canvas size and color
    createCanvas( windowWidth , windowHeight);
    background(255, 255, 255);
}


function draw() {

  //allows background to change activley
  if(mouseIsPressed){
    background(random(100), random(100), random(100));
  }

    //sets stroke characteristic
    noStroke();
    //allows the ball drawn to move along the (x) axis
    ball.x += ball.delta_x * ball.scale_x;
    //allows the ball drawn to move along the (y) axis
    ball.y += ball.delta_y * ball.scale_y;


    //sets animation boundary rules
    if (ball.x >= width || ball.x <= 1) {
        //allows ball animation to (bounce) off the top and bottom edges of the canvas
        ball.delta_x = -1 * ball.delta_x;
    }
    //sets animation boundary rules
    if (ball.y >= height || ball.y <= 1) {
      //allows the ball animation to (bounce) off the left and right edges of the canvas
        ball.delta_y = -1 * ball.delta_y;
    }

    //sets color of the ball
    fill(random(255), random(255), random(255));
    //draws the ball using the size constraints previously determined
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    //if mousePressed, the mapping of the animation will change direction and speed as determined by the mouse click location
    ball.scale_x = map(mouseX, 0, width, .5, 50); //last constraints determine the fps or animation spacing
    ball.scale_y = map(mouseY, 0, height, .5, 50);
}
