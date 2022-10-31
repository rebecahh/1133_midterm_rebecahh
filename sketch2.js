let balls_1 = [];
let balls_2 = [];
let ballsSpeed = [];
let numBalls = 25;
let specialBall;

function setup() {
  // noStroke();
  createCanvas(800, 800);
  //scene1
  for (i = 0; i < numBalls; i++) {
    balls_1[i] = new Ball(random(0, width), random(0, height), 10, random(5, 10), random(255),random(255),random(255));
  }
  for (j = 0; j < numBalls; j++) {
    balls_2[j] = new Ball(width/j,height/j,10,0,random(255),random(255),random(255));
  }
  // for (k = 0; k < numBalls; k++) {
  //   balls_3[k] = new Ball(width/k,height/k,0,10,255,255,255);
  // }
}

function draw() {
  if (millis() < 10000) {
    background(0);
    for (let i = 0; i < balls_1.length; i++) {
      balls_1[i].move();
      balls_1[i].display();
      specialBall = new Ball(width / 2, height / 2, 0, 0, 255, 255, 255);
      specialBall.display();
    }
  }
  if (millis() > 10000 && millis() < 20000) {
    background(0);
    for (let j = 0; j < balls_2.length; j++){
      balls_2[j].move();
      balls_2[j].display();
      specialBall = new Ball(width / 2, height / 2, 0, 0, 255, 0, 0);
      specialBall.display();
    }
  }
}

class Ball {
  constructor(x, y, xIncr, yIncr, r, g, b) {
    this.x = x;
    this.y = y;
    this.xIncr = xIncr;
    this.yIncr = yIncr;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  move() {
    this.x += this.xIncr;
    if (this.x < 0 || this.x > width) {
      this.xIncr *= -1;
    }
    this.y += this.yIncr;
    if (this.y < 0 || this.y > height) {
      this.yIncr *= -1;
    }
  }
  display() {
    fill(this.r, this.g, this.b);
    ellipse(this.x-30, this.y, 50,30);
    ellipse(this.x+30, this.y, 50,30);
    ellipse(this.x, this.y+30, 30,50);
    ellipse(this.x, this.y-30, 30,50);
  }
}
