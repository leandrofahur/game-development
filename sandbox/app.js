// GLOBAL VARS:
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');
const frameRate = 30;

let mousePosX = 0;
let mousePosY = 0;

window.onload = () => {
  gameWorld(); 
  worldMap();
  setInterval(game, 1000/frameRate);
  addEventListener('mousemove', onUpdateMousePos);
}

const game = () => {
  gameWorld();
  canvasContext.drawImage(img, 0, 0);
  colorText(mousePosX, mousePosY, `(${mousePosX}, ${mousePosY})`, 'yellow');

}

// ----------------------------------------------------------------------------------------
// GRAPHICS AND SCENES:
const gameWorld = () => {
  baseWorldWithGrid();
}

// HACK:
const onUpdateMousePos = (evt) => {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;

  mousePosX = Math.floor(evt.clientX - rect.left - root.scrollLeft);
  mousePosY = Math.floor(evt.clientY - rect.top - root.scrollTop);
}

