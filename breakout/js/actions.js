const draw = () => {
  // World:
  colorBlock(0, 0, canvas.width, canvas.height, 'black');
  // Debbugind purpose:
  grid(PADDLE_WIDTH, PADDLE_HEIGHT);
  // Ball:
  colorCircle(ballPosX, ballPosY, BALL_RADIUS, 'grey');
  // Paddle:
  colorBlock(paddlePosX, paddlePosY + PADDLE_OFFSET, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

const move = () => {
  ballColision();
  paddleColision();
  ballPaddleColision();
}

const ballColision = () => {
  // ballPosX += ballVelX;
  // ballPosY += ballVelY;
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
  // paddlePosX += paddleVelX;
  if(paddlePosX - PADDLE_WIDTH/2 < 0) {
    paddleVelX *= -1;
  }
  if(paddlePosX + PADDLE_WIDTH/2 > canvas.height) {
    paddleVelX *= -1;
  }
}

const ballPaddleColision = () => {
  ballPosY += ballVelY;
  // paddlePosX += paddleVelX;
  if(ballPosY + BALL_RADIUS > paddlePosY + PADDLE_OFFSET
     && ballPosX >= paddlePosX && ballPosX <= paddlePosX + PADDLE_WIDTH) {
    ballVelY *= -1;
  }
}

const showMousePos = () => {
  colorText(`(${mousePosX}, ${mousePosY})`, mousePosX, mousePosY, 'yellow');
}

const game = () => {
  draw();
  move();  
  // showMousePos();
  // console.log(`${paddlePosX}, ${paddlePosY}`);
}