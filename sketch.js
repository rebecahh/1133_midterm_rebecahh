// scene1
let balls_1 = [];
let numBalls_1 = 50;
let balls_2 = [];
let numBalls_2 = 80;
let balls_3 = [];
let numBalls_3 = 130;
let bgColor1 = 0;
let bgColor2 = 255;
let specialBall;
// scene2
let people = [];
let numPeople = 50;
// scene3
// let angle = 0;
// let r = 200;
// let stars = [];
// let numStars = 50;

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  // scene1
  for (i = 0; i < numBalls_1; i++) {
    balls_1[i] = new Ball(random(width), random(height), 10, random(5, 10), random(120), random(120), random(120), 50);
  }
  for (j = 0; j < numBalls_2; j++) {
    balls_2[j] = new Ball(random(width), random(height), 15, random(5, 15), random(180), random(180), random(180), 50);
  }
  for (k = 0; k < numBalls_3; k++) {
    balls_3[k] = new Ball(random(width), random(height), 20, random(5, 20), random(255), random(255), random(255), 50);
  }
  // scene2
  for (l = 0; l < numPeople; l++) {
    people[l] = new Person(random(width), random(height), 5, 8, random(200), random(200), random(200));
  }
  // for (m=0;m<numStars;m++){
  //   let x = random(0,width);
  //   let y = x/2;
  //   stars[m] = new Star(x,y);
  // }
}

function draw() {
  if (millis() < 15000) {
    scene1();
  }
  if (millis() > 15000 && millis() < 30000) {
    scene2();
  }
  // if (millis() > 30000 && millis () < 45000){
  //   scene3();
  // }
  if (millis() > 30000){
    background(0);
  }
  // background(0);
  // if (millis() < 100) {
  //   background(0);
  // }
  // if (millis() < 15000) {
  //   scene3();
  // }
}

function scene1() {
  // scene1
  if (millis() < 5000) {
    background(0);
    for (let i = 0; i < balls_1.length; i++) {
      balls_1[i].move();
      balls_1[i].display();
      specialBall = new Ball(width / 2, height / 2, 0, 0, 0, 0, 0, 100);
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
      specialBall = new Ball(width / 2, height / 2, 0, 0, 0, 0, 0, 100);
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
      specialBall = new Ball(width / 2, height / 2, 0, 0, 0, 0, 0, 100);
      specialBall.display();
    }
  }
  // fade to white
  if (millis() > 13000 && millis() < 15000) {
    background(bgColor1);
    bgColor1 += 5;
  }
}
function scene2() {
  if (millis() > 15000 && millis() < 18000) {
    background(bgColor2);
    specialPerson = new Person(width / 2, height / 2, 0, 0, 0, 0, 0, 100);
    specialPerson.display();
    for (let p = 0; p < people.length; p++) {
      people[p].move();
      people[p].display();
    }
  }
  if (millis() > 18000 && millis() < 30000) {
    background(bgColor2);
    specialPerson = new Person(width / 2, height / 2, 0, 0, 0, 0, 0, 100);
    specialPerson.display();
    for (let p = 0; p < people.length; p++) {
      people[p].move();
      people[p].display();
    }
    // fade to black
    bgColor2--;
  }
}
// Coding Train Polar Coordinates
// function scene3() {
//   // background(150);
//   // if (millis() > 45000 && millis() < 47000) {
//   if (millis() < 1000) {
//     stroke(244, 255, 181);
//     strokeWeight(4);
//     for (i=0;i<stars.length;i++){
//       stars[i].display();
//     }
//   }
// }
//scene1
class Ball {
  constructor(x, y, xIncr, yIncr, r, g, b, size) {
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
    circle(this.x, this.y, this.size);
  }
}
class Person {
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
    this.x += random(-this.xIncr, this.xIncr);
    if (this.x < 0 || this.x > width) {
      this.x = width / 2;
    }
    this.y += random(-this.yIncr, this.yIncr);
    if (this.y < 0 || this.y > height) {
      this.y = height / 2;
    }
  }
  display() {
    fill(this.r, this.g, this.b);
    stroke(this.r, this.g, this.b);
    circle(this.x, this.y, 50);
    ellipse(this.x, this.y + 60, 50, 80);
    // rect(this.x-25,this.y+25,50,60);
    strokeWeight(10);
    line(this.x, this.y + 25, this.x - 50, this.y + 50);
    line(this.x, this.y + 25, this.x + 50, this.y + 50);
    line(this.x - 15, this.y + 50, this.x - 15, this.y + 115);
    line(this.x + 15, this.y + 50, this.x + 15, this.y + 115);
    fill(0, 0, 0);
    circle(this.x - 10, this.y - 10, 15);
    circle(this.x + 10, this.y - 10, 15);
    strokeWeight(5);
    stroke(0, 0, 0);
    noFill();
    arc(this.x, this.y, width / 50, height / 50, 0, PI)
    // arc(150, 110, 200, 200, 120, 103);
  }
}
// class Star {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   display() {
//     translate(width/2,height/2);
//     let x = r * cos(angle);
//     let y = r * sin(angle);
//     point(x, y);
//     angle += 2;
//     r -= 0.1;
//   }
// }
