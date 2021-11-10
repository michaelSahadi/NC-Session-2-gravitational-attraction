class Thing {
  // construct the object
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
  }
  // Newtons second law : acc = force / mass
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }
  // attraction function Gravity * object1 mass * object 2 mass / distance sqr
  calculateAttraction(m) {
    let force = p5.Vector.sub(this.pos, m.pos);
    let distance = force.mag();
    distance = constrain(distance, 100, 1000);
    force.normalize();
    let strength = (G * this.mass * m.mass) / (distance * distance);

    force.mult(strength);
    return force;
  }
  // seting acceleration
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  // drawing objects
  show() {
    noStroke();
    fill(255, 5);
    // ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
    image(img, this.pos.x, this.pos.y, this.mass, this.mass);
  }
  // unused edges
  edges() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0;
    }
    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
    if (this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
    }
  }
}
