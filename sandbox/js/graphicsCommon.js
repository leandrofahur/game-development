// GLOBAL VARS:
const binMap = [1,1,1,1,1,1,1,1,1,1,
                1,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,1,
                1,0,0,1,1,1,1,0,0,1,
                1,0,0,1,1,1,1,0,0,1,
                1,0,0,1,1,1,1,0,0,1,
                1,0,0,1,1,1,1,0,0,1,
                1,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,1,
                1,1,1,1,1,1,1,1,1,1];

const GROUND = 0;
let img = document.createElement('img');
let imgLoaded = false;

// ----------------------------------------------------------------------------------------
// GRAPHICS AND SCENES:
const colorRect = (posX, posY, width, height, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillRect(posX, posY, width, height);
}

const colorLine = (initPosX, initPosY, finalPosX, finalPosY, colorNameOrNumber) => {
  canvasContext.beginPath();
  canvasContext.strokeStyle = colorNameOrNumber;
  canvasContext.moveTo(initPosX, initPosY);
  canvasContext.lineTo(finalPosX, finalPosY);
  canvasContext.stroke();
}

const colorText = (posX, posY, words2Display, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillText(words2Display, posX, posY, )
}

const grid = (stepX, stepY) => {
  for(let col = 0; col <= canvas.width; col += stepX) {
    colorLine(col, 0, col, canvas.width, 'white');
  }
  for(let row = 0; row <= canvas.height; row += stepY) {
    colorLine(0, row, canvas.width, row, 'white');
  }
}

const baseWorldWithGrid = () => {
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  grid(canvas.width/10, canvas.height/10);
  // colorText(mousePosX, mousePosY, `(${mousePosX}, ${mousePosY})`, 'yellow');
}

const loadImages = (imgNumber) => { 
  img.onload = () => {
    imgLoaded = true;
  }
  img.src = './assets/scenario/ground.png';
}

const worldMap = () => {
  // binMap.forEach((index) => {
  //   if(index == 1) {
      loadImages();
  //   }
  // });
};

const displayImages = () => {
  binMap.forEach((value, index) => {
    if(value == 1) {
      // canvasContext.drawImage(img, 0, 0);
    }
  });
}
