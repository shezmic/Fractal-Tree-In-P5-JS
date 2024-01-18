
// Interactive Fractal Tree in p5.js - Horizontal Mouse Movement Affects Branching Angle

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  translate(width / 2, height);
  let len = 100;
  let angle = map(mouseX, 0, width, -PI / 2, PI / 2, true);
  branch(len, angle);
}

function branch(len, angle) {
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= 0.67;
  if (len > 2) {
    push();
    rotate(angle);
    branch(len, angle); 
    pop();
    push();
    rotate(-angle);
    branch(len, angle);
    pop();
  }
}
