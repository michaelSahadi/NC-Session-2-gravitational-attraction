// Michael Sahadi
// Nature of Code Session 2
let thing = [];
let G = 1;
let a = 20;
let img;

function preload() {
  img = loadImage("images/bug.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // calling loop to declare the multiple objects
  for (let i = 0; i < a; i++) {
    // creating new object
    thing[i] = new Thing(random(width), random(height), random(20, 100));
  }
}

function draw() {
  background(66, 135, 245);
  // calling loop to draw objects
  for (let i = 0; i < thing.length; i++) {
    // nesting second loop to be attracted to each other
    for (let j = 0; j < thing.length; j++) {
      // don't be attracted to yourself
      if (i != j) {
        let force = thing[j].calculateAttraction(thing[i]);
        thing[i].applyForce(force);
      }
      // let gravity = createVector(0, 0.2 * thing[i].mass);
      // thing[i].applyForce(gravity);

      thing[i].update();
      // thing[i].edges();
      thing[i].show();
    }
  }
}
