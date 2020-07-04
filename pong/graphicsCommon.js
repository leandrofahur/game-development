const colorRect = (posXLeft, posYTop, width, height, colorNameOrNumber) => {
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.fillRect(posXLeft, posYTop, width, height);
}

const ball = (posXCenter, posYCenter, radius, colorNameOrNumber) => {
  canvasContext.beginPath();
  canvasContext.fillStyle = colorNameOrNumber;
  canvasContext.arc(posXCenter, posYCenter, radius, 0, 2*Math.PI, true);
  canvasContext.closePath();
  canvasContext.fill();
}

const ballReset = () => {
  ballPosX = canvas.width/2;
  ballPosY = canvas.height/2;
  ballVelX *= -1;
  ballVelY = 5;
}