
let option = 4;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(200, 200, 200);
  let density = map(mouseX, 0, width, 20, 50);

  if (option == 1) {
    // Option 1: Stitches
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        line(x-20, y-14, x+15, y+15);
        line(x+20, y-14, x-15, y+15);
      }
    }
  }
  else if (option == 2) {
    // Option 2: Perspective
    for (let x = 3; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        line(x, y, width/2, height/2);
      }
    }
  }
  else if (option == 3) {
    // Option 3: Overlapping circles
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        ellipse(x, y, 40, 40);
      }
    }
  }
  else if (option == 4) {
    // Option 4: Rotating arcs
    let count = 120;
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        let s = map(count, 120, 0, 0, TWO_PI*2);
        arc(x, y, 14, 14, s, s + PI);
        count--;
      }
    }
  }
}

function mousePressed() {
  option++;
  if (option > 4) option = 1;
}
