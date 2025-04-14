/***********************************
  A game based on exiting a maze.
  If you touch any obstacles, you have to start over.
  There are three levels which increase with difficulty 
************************************/

var doorOpen = 0;
var ready = -1;
var endMsg = "";
var color;
var level = 1;

//Faces
let aFace;
let bFace;
let cFace;
let dFace;
let eFace;
let fFace;
let gFace;
let hFace;
let iFace;
let jFace;
let kFace;
let lFace;

//Level 1
let blueCircle;
let redCircle;
let greenCircle;
let yellowCircle;
let pinkCircle;
let purpleCircle;

//Level 2
let blueSquircle;
let redSquircle;
let greenSquircle;
let yellowSquircle;
let pinkSquircle;
let purpleSquircle;

//Level 3 
let blueRhombus;
let redRhombus;
let greenRhombus;
let yellowRhombus;
let pinkRhombus;
let purpleRhombus;

function setup() {
  createCanvas(800, 600);
  background(220);
  color = 'blue'
}

function preload() {

  //Faces
  aFace = loadImage('/libraries/face_a.png');
  bFace = loadImage('/libraries/face_b.png');
  cFace = loadImage('/libraries/face_c.png');
  dFace = loadImage('/libraries/face_d.png');
  eFace = loadImage('/libraries/face_e.png');
  fFace = loadImage('/libraries/face_f.png');
  gFace = loadImage('/libraries/face_g.png');
  hFace = loadImage('/libraries/face_h.png');
  iFace = loadImage('/libraries/face_i.png');
  jFace = loadImage('/libraries/face_j.png');
  kFace = loadImage('/libraries/face_k.png');
  lFace = loadImage('/libraries/face_l.png');

  //Level 1
  blueCircle = loadImage('/libraries/blue_body_circle.png');
  redCircle = loadImage('/libraries/red_body_circle.png');
  greenCircle = loadImage('/libraries/green_body_circle.png');
  yellowCircle = loadImage('/libraries/yellow_body_circle.png');
  pinkCircle = loadImage('/libraries/pink_body_circle.png');
  purpleCircle = loadImage('/libraries/purple_body_circle.png');

  //Level 2
  blueSquircle = loadImage('/libraries/blue_body_squircle.png');
  redSquircle = loadImage('/libraries/red_body_squircle.png');
  greenSquircle = loadImage('/libraries/green_body_squircle.png');
  yellowSquircle = loadImage('/libraries/yellow_body_squircle.png');
  pinkSquircle = loadImage('/libraries/pink_body_squircle.png');
  purpleSquircle = loadImage('/libraries/purple_body_squircle.png');

}

function draw() {

  // Reset background
  if (mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    background(220)
  }
  noStroke();
  // Entrance Box
  textSize(20);
  fill('#355E3B');
  rect(0, 0, 120, 30);
  fill('#FFF');
  text("Start", 40, 20);

  // Exit Box
  fill('#990000');
  rect(710, 570, 90, 30);
  fill('#FFF');
  text("End", 740, 590);

  // Obstacles and Walls
  fill(0);

  // Call the function for the current level
  if (level == 1) {
    level1();
  } else if (level == 2) {
    level2();
  } else if (level == 3) {
    level3();
  }

  // Play
  if (mouseX > 0 && mouseX < 120 && mouseY > 0 && mouseY < 30) {
    ready = 1;
    endMsg = "";
  }
  if (ready == 1) {
    strokeWeight(4);
    stroke('#355E3B');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // Win Scenario
  if (ready == 1 && mouseX > 710 && mouseX < 800 && mouseY > 570 && mouseY < 600) {
    if (level < 3) {
      level++;
      ready = -1; // Reset the game state for the next level
      endMsg = "Level " + level;
    } else {
      endMsg = "You Win!";
      color = '#009999';
      ready = 0; // Stop the game
    }
  }

  // Opening message
  if (ready == -1) {
    color = '#355E3B';
    endMsg = "Hover over Start!";
  }
  textSize(30);
  fill(color);
  text(endMsg, width / 6, height / 22);

}


function level1() {
  //Blue
  image(blueCircle, 300, 300);
  image(aFace, 320, 320);

  //Red 
  image(redCircle, 550, 450);
  image(bFace, 570, 470);

  //Green
  image(greenCircle, 50, 100);
  image(cFace, 60, 120);

  //Yellow
  image(yellowCircle, 600, 200);
  image(dFace, 610, 220);

  //Pink
  image(pinkCircle, 700, 400);
  image(eFace, 710, 420);

  // Lose Scenarios
  // Blue
  // ellipse(340, 340, 80, 80)
  if (mouseX > 300 && mouseX < 380 && mouseY > 300 && mouseY < 380) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  // Red
  // ellipse(590, 490, 80, 80)
  if (mouseX > 550 && mouseX < 630 && mouseY > 450 && mouseY < 530) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  // Green
  // ellipse(90, 140, 80, 80)
  if (mouseX > 50 && mouseX < 130 && mouseY > 100 && mouseY < 180) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  // Yellow
  // ellipse(640, 240, 80, 80)
  if (mouseX > 600 && mouseX < 680 && mouseY > 200 && mouseY < 280) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  // Pink
  // ellipse(740, 440, 80, 80)
  if (mouseX > 700 && mouseX < 780 && mouseY > 400 && mouseY < 480) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  // Outside the canvas
  if (mouseX > width || mouseX < 0 || mouseY > height || mouseY < 2) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  if (mouseX == 0 && mouseY == 0)
    ready = -1;
}


function level2() {
  //Blue
  image(blueSquircle, 30, 100);
  image(fFace, 40, 120);
  // square(30, 100, 80, 20);
  image(blueSquircle, 80, 350);
  image(aFace, 90, 370);
  // square(80, 350, 80, 20);

  //Red 
  image(redSquircle, 600, 500);
  image(gFace, 610, 520);
  //square(60, 500, 80, 20);
  image(redSquircle, 300, 400);
  image(jFace, 310, 420);
  //square(300, 400, 80, 20);

  //Green
  image(greenSquircle, 200, 40);
  image(hFace, 210, 60);
  //square(200, 40, 80, 20);
  image(greenSquircle, 400, 100);
  image(lFace, 410, 120);
  //square(400, 100, 80, 20);

  //Yellow
  image(yellowSquircle, 400, 300);
  image(iFace, 410, 320);
  //square(400, 300, 80, 20);
  image(yellowSquircle, 600, 320);
  image(cFace, 610, 350);
  //square(600, 320, 80, 20);

  //Pink
  image(pinkSquircle, 700, 420);
  image(jFace, 720, 435);
  //square(700, 420, 80, 20);
  image(pinkSquircle, 600, 100);
  image(bFace, 610, 120);
  //square(600, 100, 80, 20);

  //Purple
  image(purpleSquircle, 550, 400);
  image(kFace, 560, 410);
  //square(550, 400, 80, 20);
  image(purpleSquircle, 200, 200);
  image(bFace, 210, 220);
  //square(200, 200, 80, 20);


  // Lose Scenarios
  // Blue
  // square(30, 100, 80, 20);
  if (mouseX > 30 && mouseX < 110 && mouseY > 100 && mouseY < 180) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Blue
  // square(80, 350, 80, 20);
  if (mouseX > 80 && mouseX < 160 && mouseY > 350 && mouseY < 430) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Red
  //square(600, 500, 80, 20);
  if (mouseX > 600 && mouseX < 680 && mouseY > 500 && mouseY < 580) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Red
  //square(300, 400, 80, 20);
  if (mouseX > 300 && mouseX < 380 && mouseY > 400 && mouseY < 480) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Green
  //square(200, 40, 80, 20);
  if (mouseX > 200 && mouseX < 280 && mouseY > 40 && mouseY < 120) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Green
  //square(400, 100, 80, 20);
  if (mouseX > 400 && mouseX < 480 && mouseY > 100 && mouseY < 180) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Yellow
  //square(400, 300, 80, 20);
  if (mouseX > 400 && mouseX < 480 && mouseY > 300 && mouseY < 380) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Yellow
  //square(600, 320, 80, 20);
  if (mouseX > 600 && mouseX < 680 && mouseY > 320 && mouseY < 400) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Pink
  //square(700, 420, 80, 20);
  if (mouseX > 700 && mouseX < 780 && mouseY > 420 && mouseY < 500) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Pink
  //square(600, 100, 80, 20);
  if (mouseX > 600 && mouseX < 680 && mouseY > 100 && mouseY < 180) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Purple
  //square(550, 400, 80, 20);
  if (mouseX > 550 && mouseX < 630 && mouseY > 400 && mouseY < 480) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Purple
  //square(200, 200, 80, 20);
  if (mouseX > 200 && mouseX < 280 && mouseY > 200 && mouseY < 280) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Outside the canvas
  if (mouseX > width || mouseX < 0 || mouseY > height || mouseY < 2) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  if (mouseX == 0 && mouseY == 0)
    ready = -1;
}

function level3() {
  //Blue 
  image(blueSquircle, 30, 100);
  image(aFace, 40, 120);
  // square(30, 100, 80, 20);
  image(blueCircle, 80, 350);
  image(bFace, 90, 370);
  // square(80, 350, 80, 20);
  image(blueSquircle, 600, 350);
  image(cFace, 610, 370);
  // square(600, 350, 80, 20);


  //Red 
  image(redSquircle, 600, 500);
  image(dFace, 610, 520);
  // square(600, 500, 80, 20);
  image(redCircle, 300, 400);
  image(eFace, 310, 420);
  // square(300, 400, 80, 20);
  image(redSquircle, 200, 200);
  image(fFace, 210, 220);
  // square(200, 200, 80, 20);


  //Green
  image(greenSquircle, 200, 40);
  image(gFace, 210, 60);
  // square(200, 40, 80, 20);
  image(greenCircle, 400, 100);
  image(hFace, 410, 120);
  // square(400, 100, 80, 20);
  image(greenSquircle, 500, 400);
  image(iFace, 510, 420);
  // square(500, 400, 80, 20);


  //Yellow
  image(yellowSquircle, 400, 300);
  image(jFace, 410, 320);
  // square(400, 300, 80, 20);
  image(yellowCircle, 700, 400);
  image(kFace, 710, 420);
  // square(700, 400, 80, 20);
  image(yellowSquircle, 700, 200);
  image(lFace, 710, 220);
  // square(700, 200, 80, 20);


  //Pink
  image(pinkSquircle, 700, 300);
  image(aFace, 720, 320);
  // square(700, 300, 80, 20);
  image(pinkCircle, 400, 500);
  image(bFace, 410, 520);
  // square(400, 500, 80, 20);
  image(pinkSquircle, 500, 200);
  image(cFace, 510, 220);
  // square(500, 200, 80, 20);


  //Purple
  image(purpleSquircle, 500, 310);
  image(dFace, 510, 330);
  // square(500, 310, 80, 20);
  image(purpleCircle, 230, 300);
  image(eFace, 240, 320);
  // square(230, 300, 80, 20);
  image(purpleSquircle, 200, 500);
  image(fFace, 210, 520);
  // square(200, 500, 80, 20);


  // Lose Scenarios
  // Blue
  // square(30, 100, 80, 20);
  if (mouseX > 30 && mouseX < 110 && mouseY > 100 && mouseY < 180) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(80, 350, 80, 20);
  if (mouseX > 80 && mouseX < 160 && mouseY > 350 && mouseY < 430) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(600, 350, 80, 20);
  if (mouseX > 600 && mouseX < 680 && mouseY > 350 && mouseY < 430) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Red
  // square(600, 500, 80, 20);
  if (mouseX > 600 && mouseX < 680 && mouseY > 500 && mouseY < 580) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(300, 400, 80, 20);
  if (mouseX > 300 && mouseX < 380 && mouseY > 400 && mouseY < 480) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(200, 200, 80, 20);
  if (mouseX > 200 && mouseX < 280 && mouseY > 200 && mouseY < 280) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Green
  // square(200, 40, 80, 20);
  if (mouseX > 200 && mouseX < 280 && mouseY > 40 && mouseY < 120) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(400, 100, 80, 20);
  if (mouseX > 400 && mouseX < 480 && mouseY > 100 && mouseY < 180) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(500, 400, 80, 20);
  if (mouseX > 500 && mouseX < 580 && mouseY > 400 && mouseY < 480) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Yellow
  // square(400, 300, 80, 20);
  if (mouseX > 400 && mouseX < 480 && mouseY > 300 && mouseY < 380) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(700, 400, 80, 20);
  if (mouseX > 700 && mouseX < 780 && mouseY > 400 && mouseY < 480) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(700, 200, 80, 20);
  if (mouseX > 700 && mouseX < 780 && mouseY > 200 && mouseY < 280) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Pink
  // square(700, 300, 80, 20);
  if (mouseX > 700 && mouseX < 780 && mouseY > 300 && mouseY < 380) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(400, 500, 80, 20);
  if (mouseX > 400 && mouseX < 480 && mouseY > 500 && mouseY < 580) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(500, 200, 80, 20);
  if (mouseX > 500 && mouseX < 580 && mouseY > 200 && mouseY < 280) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Purple
  // square(500, 310, 80, 20);
  if (mouseX > 500 && mouseX < 580 && mouseY > 310 && mouseY < 390) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(230, 300, 80, 20);
  if (mouseX > 230 && mouseX < 310 && mouseY > 300 && mouseY < 380) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // square(200, 500, 80, 20);
  if (mouseX > 200 && mouseX < 280 && mouseY > 500 && mouseY < 580) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000';
  }
  // Outside the canvas
  if (mouseX > width || mouseX < 0 || mouseY > height || mouseY < 2) {
    ready = 0;
    endMsg = "You Lose!";
    color = '#990000'
  }
  if (mouseX == 0 && mouseY == 0)
    ready = -1;
}
