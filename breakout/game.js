// GLOBAL VARS:
// Environment:
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');
const frameRate = 30;

// Spaceship vars:
let spaceshipPosX = canvas.width/2;
let spaceshipPosY = canvas.height/2;
let spaceshipVelX = 5;
let spaceshipVelY = 2;
const SPACESHIP_HEIGHT = 25*2;
const SPACESHIP_WIDTH = 25*2;
const SPACESHIP_OFFSET = 150;

// Enemy vars:
const ENEMY_WIDTH = 10;
const ENEMY_HEIGHT = 100;
const ENEMY_SIDE_OFFSET = 20;

// Mouse vars:
let mousePosX = 0;
let mousePosY = 0;
let isMouseClicked = false;

// Bullet vars:
const BULLET_RADIUS = 5;
let bulletPosX = 0;
let bulletPosY = 0;
let bulletVelY = 3;



// GAME DISPLAY:
window.onload = () => {
  setInterval(game, 1000/frameRate);
  addEventListener('mousemove', onUpdateMousePos);
  addEventListener('mousedown', onUpdateMouseClick);
}
