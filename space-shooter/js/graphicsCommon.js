const colorBlock = (posXLeft, posYTop, width, height, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillRect(posXLeft, posYTop, width, height);
}

const colorText = (message, posXLeft, posYTop, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillText(message, posXLeft, posYTop);
}

const colorLine = (initPosX, initPosY, finalPosX, finalPosY, colorNameOrNumber) => {
  canvasContext.beginPath();
  canvasContext.strokeStyle = colorNameOrNumber;
  canvasContext.moveTo(initPosX, initPosY);
  canvasContext.lineTo(finalPosX, finalPosY);
  canvasContext.stroke();
}

const grid = (stepX, stepY) => {
  for(let col = 0; col <= canvas.width; col += stepX) {
    colorLine(col, 0, col, canvas.width, 'white');
  }
  for(let row = 0; row <= canvas.height; row += stepY) {
    colorLine(0, row, canvas.width, row, 'white');
  }
}

const bullet = (posXCenter, posYCenter, radius, colorNameOrNumber) => {
  canvasContext.beginPath();
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.arc(posXCenter, posYCenter, radius, 0, 2*Math.PI, true);
  canvasContext.closePath();
  canvasContext.fill();
}

const spaceshipReset = () => {
  spaceshipPosX = canvas.width/2;
  spaceshipPosY = canvas.height/2;
  spaceshipVelX *= -1;
  spaceshipVelY = 5;
}
