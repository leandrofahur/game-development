// GLOBAL VARS:
// Environment:
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');
const frameRate = 30;

// Ball vars:
let ballPosX = canvas.width/2;
let ballPosY = canvas.height/2;
let ballVelX = 7;
let ballVelY = 3;
const BALL_RADIUS = 10;

// Paddle vars:
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;
const PADDLE_SIDE_OFFSET = 20;
let paddlePosY = canvas.height/2 - PADDLE_HEIGHT/2;
let paddleVelY = 5;

// GAME DISPLAY:
window.onload = () => {
  setInterval(game, 1000/frameRate);
}



// --------------------------------------------------------------------------------------------------------------------
// GRAPHICS & OBJECTS:
const colorRect = (posXLeft, posYTop, width, height, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillRect(posXLeft, posYTop, width, height);
}

const ball = (posXCenter, posYCenter, radius, colorNameOrNumber) => {
  canvasContext.beginPath();
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.arc(posXCenter, posYCenter, radius, 0, 2*Math.PI, true);
  canvasContext.closePath();
  canvasContext.fill();
}



// --------------------------------------------------------------------------------------------------------------------
// ACTIONS:
const draw = () => {
  // World:
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  // Ball:
  ball(ballPosX, ballPosY, BALL_RADIUS, 'white');
  // Player (Paddle 1):
  colorRect(PADDLE_SIDE_OFFSET, paddlePosY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

const move = () => {
  ballColisionHandler();
  paddleColisionHandler();
  ballPaddleColisionHandler();
}

const ballColisionHandler = () => {
  // BALL COLISION: 
  ballPosX += ballVelX;  
  ballPosY += ballVelY;  
  if(ballPosX - BALL_RADIUS < 0) {
    ballVelX *= -1;
  }
  if(ballPosX + BALL_RADIUS > canvas.width) {
    ballVelX *= -1;
  }
  if(ballPosY - BALL_RADIUS < 0) {
    ballVelY *= -1;
  }
  if(ballPosY + BALL_RADIUS > canvas.height) {
    ballVelY *= -1;
  }
}

const paddleColisionHandler = () => {
  // PADDLE COLISION:
  paddlePosY += paddleVelY;
  if(paddlePosY < 0) {
    paddleVelY *= -1;
  }
  if(paddlePosY + PADDLE_HEIGHT> canvas.height) {
    paddleVelY *= -1;
  }
}

const ballPaddleColisionHandler = () => {
  let paddlePosX = PADDLE_SIDE_OFFSET + PADDLE_WIDTH;
  let paddleTopPosY = paddlePosY;
  let paddleBottonPosY = paddlePosY + PADDLE_HEIGHT;

  if(ballPosX - BALL_RADIUS < paddlePosX && ballPosY > paddleTopPosY && ballPosY < paddleBottonPosY) {
    ballVelX *= -1;
    // ballVelY *= -1;
  }
}

const game = () => {
  draw();
  move();
}