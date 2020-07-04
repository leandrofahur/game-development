// GLOBAL VARS:
// Environment:
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');
const frameRate = 30;

// Spaceship vars:
let spaceshipPosX = canvas.width/2;
let spaceshipPosY = canvas.height/2;
let spaceshipVelX = 7;
let spaceshipVelY = 3;

// Enemy vars:
const ENEMY_WIDTH = 10;
const ENEMY_HEIGHT = 100;
const ENEMY_SIDE_OFFSET = 20;

// GAME DISPLAY:
window.onload = () => {
  setInterval(game, 1000/frameRate);
  // addEventListener('mousemove', onUpdateMousePos);
}
