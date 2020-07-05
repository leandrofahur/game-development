// GLOBAL VARS:
// Environment:
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');
const frameRate = 30;

// Paddle vars:
let paddlePosX = canvas.width/2;
let paddlePosY = canvas.height/2;
let paddleVelX = 5;
let paddleVelY = 2;
const PADDLE_HEIGHT = 15;
const PADDLE_WIDTH = 100;
const PADDLE_OFFSET = 150;

// Ball vars:
const BALL_RADIUS = 10;
let ballPosX = canvas.width/2;
let ballPosY = canvas.height/2;
let ballVelX = 4;
let ballVelY = 7;

// Brick vars:
const BRICK_WIDTH = 10;
const BRICK_HEIGHT = 100;
const BRICK_SIDE_OFFSET = 20;
let brickPosX = 0;
let brickPosY = 0;

// Mouse vars:
let mousePosX = 0;
let mousePosY = 0;
let isMouseClicked = false;



// GAME DISPLAY:
window.onload = () => {
  setInterval(game, 1000/frameRate);
  addEventListener('mousemove', onUpdateMousePos);
}
