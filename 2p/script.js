
let scoreDisplay,scoreDisplay2,fpsDisplay;
let score = 0;
let score2 = 0;
let myFont;
let player = new GameObject();
let distAbove = 400;
let distBehind = 300;
let horizontalTiltSpeed = 0.05;
let moveSpeed = 5;
let gravity = 3.5 ;
let gameState = "ingame"
//player.transform.rotation.y = 45;
player.transform.position.x = 500;
let cam = new Camera();
let mrSnake;
let myList = [];
let myHud;
let frameRateSum = 0;
let winnerBgColor = "blue";
let winnerText = "BLUE WINS";

function preload() {
  myFont = loadFont(
    "https://cdn.glitch.com/a505537e-e31c-44b7-a7d0-3f1df6037202%2FPressStart2P.ttf?v=1582643146331"
  );
}

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes("antialias", true);
  // setup the camera
  cam.setParent(player, distBehind, distAbove);
  createHUD();
  mrSnake = new Snake("blue",200,800,1)
  myList[0] = mrSnake;
  msSnake = new Snake("red",800,200,-1)
  myList[1] = msSnake;
  for(let i=0;i<4;i++){
    myList.push(new Food())
  }
  
}

function draw() {
  if(gameState == "ingame"){
    ingame()
  }
  if(gameState == "gameover"){
    gameover()
    exitPointerLock()
  }
}

function ingame(){
  background(20);
  // light the scene
  ambientLight(100);
  directionalLight(128, 128, 128, 1, -1, 1);
  directionalLight(0, 0, 128, -1, -1, 1);
  directionalLight(128, 0, 128, -1, -1, -1);
  directionalLight(0, 128, 0, 1, -1, -1);
  checkPlayerControls();
  cam.update();
  //player.show();
  drawFloor();
  //drawBoxes();
  // add the p5js text
  push();
  translate(1000, 0, 1000);
  rotateY(45);
  drawText("p5js");
  pop();
  // label the x axis
  push();
  translate(1000, 0, 0);
  rotateY(90);
  drawText("X+", "red", 10)
  pop();
  // label the x axis
  push();
  translate(0, 0, 1000);
  drawText("Z+", "blue", 10);
  pop();
  for(let i=myList.length-1;i>=0;i--){
    myList[i].update()
    myList[i].show()
    if(mrSnake.isTouching(myList[i])){
      
      myList.splice(i,1)
      myList.push(new Food())
      mrSnake.snakeLength++
      score++
    }else if(msSnake.isTouching(myList[i])){
      
      myList.splice(i,1)
      myList.push(new Food())
      msSnake.snakeLength++
      score2++
    }
    if(mrSnake.hasCollided(msSnake)){
        gameState = "gameover"
        mrSnake.color = "darkblue"
        winnerBgColor = "red"
      winnerText = "RED WINS";
      }else if(msSnake.hasCollided(mrSnake)){
        gameState = "gameover"
        msSnake.color = "darkred"
        winnerBgColor = "blue"
        winnerText = "BLUE WINS";
      }else if(mrSnake.hasCollided(mrSnake)){
        gameState = "gameover"
        mrSnake.color = "darkblue"
        winnerBgColor = "red"
        winnerText = "RED WINS";
      }else if(msSnake.hasCollided(msSnake)){
        gameState = "gameover"
        msSnake.color = "darkred"
        winnerBgColor = "blue"
        winnerText = "BLUE WINS";
      }
  }
  //player glide to snake
  player.transform.position.x += ((mrSnake.snakeBody[0].x+msSnake.snakeBody[0].x)/2-player.transform.position.x)*0.01
  player.transform.position.z += (min(min(mrSnake.snakeBody[0].z,msSnake.snakeBody[0].z),350)-250-player.transform.position.z)*0.01
  
  scoreDisplay.innerHTML = score
  scoreDisplay2.innerHTML = score2
  showFps()
}

function gameover(){
  background(winnerBgColor);
  // light the scene
  ambientLight(128);
  directionalLight(128, 128, 128, 1, -1, 1);
  directionalLight(0, 0, 128, -1, -1, 1);
  directionalLight(128, 0, 128, -1, -1, -1);
  directionalLight(0, 128, 0, 1, -1, -1);
  
  
  //player.show();
  drawFloor();
  //drawBoxes();
  // add the p5js text
  push();
  translate(1000, 0, 1000);
  rotateY(45);
  drawText("p5js");
  pop();
  // label the x axis
  push();
  translate(1000, 0, 0);
  rotateY(90);
  drawText("X+", "red", 10)
  pop();
  // label the x axis
  push();
  translate(0, 0, 1000);
  drawText("Z+", "blue", 10);
  pop();
  for(let i=myList.length-1;i>=0;i--){
    
    myList[i].show()
    
  }
  push();
  translate(500, 0, 1000);
  //rotateY(90);
  drawText(winnerText, "white", 150)
  pop();
  
}

function createHUD() {
  myHud = document.createElement("div"); // Create a <div> element
  myHud.innerHTML = "BLUE (WASD + Space): <span id='scoreDiv'></span><br>RED (arrow keys + Enter): <span id='scoreDiv2'></span><br>fps: <span id='fpsDiv'></span>"; // Insert text
  myHud.id = "hud";
  myHud.style.position = "absolute";
  myHud.style.top = 0;
  myHud.style.left = 0;
  document.body.appendChild(myHud); // Append <div> to <body>
  scoreDisplay = document.getElementById("scoreDiv");
  scoreDisplay2 = document.getElementById("scoreDiv2");
  fpsDisplay = document.getElementById("fpsDiv");
}

function drawBoxes() {
  push();
  translate(600, 5, 50);
  fill("red");
  rotateY(frameCount)
  noStroke();
  box(10);
  pop();
  push();
  translate(100, 5, 800);
  fill("blue");
  rotateY(frameCount)
  noStroke();
  box(10);
  pop();
}

function drawFloor() {
  let tileSize = 100;
  // tile floor
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      push();
      translate(
        row * tileSize + tileSize / 2,
        0,
        col * tileSize + tileSize / 2
      );
      fill(255);
      if ((row + col) % 2) {
        fill(235);
      }
      stroke(0);
      box(tileSize, 0, tileSize);
      pop();
    }
  }
}
function drawText(mytext = "", color = '#ED225D', size = 36) {
  push();
  scale(1, -1, 1);
  textAlign(CENTER);
  fill(color);
  textFont(myFont);
  textSize(size);
  text(mytext, 0, 0);
  pop();
}
function showFps(){
  //stroke(0)
  //fill(255)
  frameRateSum += frameRate()
  //textSize(12)
  //text("FPS: "+round(frameRateSum/frameCount),width/2,10)
  //myhud.innerHTML = "FPS: "+round(frameRateSum/frameCount)
  fpsDisplay.innerHTML = round(frameRateSum/frameCount)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
