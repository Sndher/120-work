// DEFINE GLOBAL VARIABLES
let bgColor;
// background-color
let centerX, centerY;
//setting size constraints
let cloud = {};
cloud.pos1x = 50;
cloud.pos1y = 50;
cloud.pos2x = 150;
cloud.pos2y = 150;
cloud.pos3x = 20;
cloud.pos3y = 20;
cloud.pos4x = 300
cloud.pos4y = 300
let multMax = 0.09;
//let multDelta;
let mult;
let redFill = 255;
let alphaAmt = 40;



function setup() {
    bgColor = color(15, 20, 35);
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);
    background(bgColor);
    frameRate(100);
    noCursor()

    // Set initial position
    cloud.pos1x = random(width);
    cloud.pos1y = random(height);
    cloud.pos2x = cloud.pos1x + 10;
    cloud.pos2y = cloud.pos1y - 10;
}

function draw() {

    //create Eraser
    fill(bgColor);
    ellipse( mouseX, mouseY, 150 , 150);

    centerX = width * 0.5;
    centerY = height * 0.5;

    multDelta = noise(0.01 * frameCount + pow(2, 8));
    multDelta = map(multDelta, 0, 1, -0.0002, 0.0002);
    multMax = constrain(multMax + multDelta, 0.007, 0.3);
    mult = random(-multMax, multMax);
    cloud.pos3x = abs(((width * mult) + cloud.pos2x) % width);
    mult = random(-multMax, multMax);
    cloud.pos3y = abs(((height * mult) + cloud.pos2y) % height);


    mult = noise(frameCount * 0.002) * 200;
    redFill = constrain(mult, 3, 20);

    noStroke();
    // get a random noise value between (0-1)
    alphaNoise = noise(0.2 * frameCount + 200);
    alphaNoise = map(alphaNoise, 0, 1, -2, 2);
    alphaAmt += alphaNoise;
    alphaAmt = constrain(alphaAmt, 30, 20);
    fill(redFill, 150 - redFill, 180, 15);

    rect(cloud.pos1x, cloud.pos1y, cloud.pos2x, cloud.pos2y, cloud.pos3x, cloud.pos3y, cloud.pos4x, cloud.pos4y);

    cloud.pos1x = cloud.pos2x;
    cloud.pos1y = cloud.pos2y;
    cloud.pos2x = cloud.pos3x;
    cloud.pos2y = cloud.pos3y;
    cloud.pos3x = cloud.pos4x;
    cloud.pos3y = cloud.pos4y;
}
