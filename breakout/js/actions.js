const draw = () => {
  // World:
  colorBlock(0, 0, canvas.width, canvas.height, 'black');
  // Debbugind purpose:
  grid(PADDLE_WIDTH, PADDLE_HEIGHT);
  // Ball:
  colorCircle(ballPosX, ballPosY, BALL_RADIUS, 'white');
  // Paddle:
  colorBlock(paddlePosX - PADDLE_WIDTH/2, paddlePosY + PADDLE_OFFSET, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

const move = () => {
  ballColision();
  paddleColision();
}

const ballColision = () => {
  ballPosX += ballVelX;
  ballPosY += ballVelY;

  if(ballPosX - BALL_RADIUS < 0) {
    ballVelX *= -1;
  }
  if(ballPosX + BALL_RADIUS > canvas.width) {
    ballVelX *= -1;
  }
  if(ballPosY - BALL_RADIUS < 0) {
    ballVelY *= -1;
  }
  if(ballPosY + BALL_RADIUS > canvas.height) {
    ballVelY *= -1;
  }
}

const paddleColision = () => {
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
  colorText(`(${mousePosX}, ${mousePosY})`, mousePosX, mousePosY, 'yellow');
}