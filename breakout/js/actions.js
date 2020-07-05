const draw = () => {
  // World:
  colorBlock(0, 0, canvas.width, canvas.height, 'black');
  // Debbugind purpose:
  grid(canvas.width/10, canvas.height/10);
  // paddle:
  colorBlock(paddlePosX - PADDLE_WIDTH/2, paddlePosY + PADDLE_OFFSET, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

const move = () => {
  paddlePosX += paddleVelX;
  
  if(paddlePosX - PADDLE_WIDTH/2 < 0) {
    paddleVelX *= -1;
  }
  if(paddlePosX + PADDLE_WIDTH/2 > canvas.height) {
    paddleVelX *= -1;
  }
}

const game = () => {
  draw();
  move();

  if(isMouseClicked) {  
    colorCircle(bulletPosX, bulletPosY, 10, 'blue');
    bulletPosY -= bulletVelY;
  } else {

  }
  
  colorText(`(${mousePosX}, ${mousePosY})`, mousePosX, mousePosY, 'yellow');
}