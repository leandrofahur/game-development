// GLOBAL VARS:
const canvas = document.getElementById('gameCanvas');
const canvasContext = canvas.getContext('2d');
const frameRate = 30;

window.onload = () => {
  setInterval(game, 1000/frameRate);
}

const game = () => {
  // console.log('sanity test...');
}