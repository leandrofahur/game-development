const colorBlock = (posXLeft, posYTop, width, height, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillRect(posXLeft, posYTop, width, height);
}

const colorText = (message, posXLeft, posYTop, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillText(message, posXLeft, posYTop);
}

const shot = (posXCenter, posYCenter, radius, colorNameOrNumber) => {
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