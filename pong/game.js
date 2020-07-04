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
  addEventListener('mousemove', onUpdateMousePos);
}
