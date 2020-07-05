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
const PADDLE_HEIGHT = 25*2;
const PADDLE_WIDTH = 25*2;
const PADDLE_OFFSET = 150;

// Enemy vars:
const ENEMY_WIDTH = 10;
const ENEMY_HEIGHT = 100;
const ENEMY_SIDE_OFFSET = 20;

// Mouse vars:
let mousePosX = 0;
let mousePosY = 0;
let isMouseClicked = false;



// GAME DISPLAY:
window.onload = () => {
  setInterval(game, 1000/frameRate);
  addEventListener('mousemove', onUpdateMousePos);
}
