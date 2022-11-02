let balls_1 = [];
let numBalls_1 = 20;
let balls_2 = [];
let numBalls_2 = 40;
let balls_3 = [];
let numBalls_3 = 80;
// let ballsSpeed = [];

let specialBall;

function setup() {
  noStroke();
  createCanvas(800, 800);
  //scene1
  for (i = 0; i < numBalls_1; i++) {
    balls_1[i] = new Ball(random(0, width), random(0, height), 10, random(5, 10), random(100),random(100),random(100),50);
  }
  for (j = 0; j < numBalls_2; j++) {
    balls_2[j] = new Ball(random(0, width), random(0, height), 15, random(5, 15), random(150),random(150),random(150),50);
  }
  for (k = 0; k < numBalls_3; k++) {
    balls_3[k] = new Ball(random(0, width), random(0, height), 20, random(5, 20), random(255),random(255),random(255),50);
  }

}

function draw() {
  if (millis()<15000){
    scene1();
  }
  //scene2

}

function scene1(){
  // scene1
  if (millis() < 5000) {
    background(0);
    for (let i = 0; i < balls_1.length; i++) {
      balls_1[i].move();
      balls_1[i].display();
      specialBall = new Ball(width / 2, height / 2, 0, 0, 0, 0, 0,50);
      specialBall.display();
    }
  }
  if (millis() > 5000 && millis() < 5200) {
    background(0);
  }
  if (millis() > 5200 && millis() < 9000) {
    background(0);
    for (let j = 0; j < balls_2.length; j++) {
      balls_2[j].move();
      balls_2[j].display();
      specialBall = new Ball(width / 2, height / 2, 0, 0, 0, 0, 0,50);
      specialBall.display();
    }
  }
  if (millis() > 9000 && millis() < 9200) {
    background(0);
  }
  if (millis() > 9200 && millis() < 13000) {
    background(0);
    for (let k = 0; k < balls_3.length; k++) {
      balls_3[k].move();
      balls_3[k].display();
      specialBall = new Ball(width / 2, height / 2, 0, 0, 0, 0, 0,50);
      specialBall.display();
    }
  }
  if (millis() > 13000) {
    fill(r,g,b,10)
  }
}

class Ball {
  constructor(x, y, xIncr, yIncr, r, g, b,size) {
    this.x = x;
    this.y = y;
    this.xIncr = xIncr;
    this.yIncr = yIncr;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = size;
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
    ellipse(this.x-30, this.y, this.size,this.size - 20);
    ellipse(this.x+30, this.y, this.size,this.size - 20);
    ellipse(this.x, this.y+30, this.size-20,this.size);
    ellipse(this.x, this.y-30, this.size-20,this.size);
  }
}
