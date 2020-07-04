const draw = () => {
  // World:
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  // Ball:
  ball(ballPosX, ballPosY, BALL_RADIUS, 'white');
  // Player (Paddle 1):
  colorRect(PADDLE_SIDE_OFFSET, paddlePosY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

const move = () => {
  ballColisionHandler();
  paddleColisionHandler();
  ballPaddleColisionHandler();
}

const ballColisionHandler = () => {
  // BALL COLISION: 
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

const paddleColisionHandler = () => {
  // PADDLE COLISION:
  paddlePosY += paddleVelY;
  if(paddlePosY < 0) {
    paddleVelY *= -1;
  }
  if(paddlePosY + PADDLE_HEIGHT> canvas.height) {
    paddleVelY *= -1;
  }
}

const ballPaddleColisionHandler = () => {
  let paddlePosX = PADDLE_SIDE_OFFSET + PADDLE_WIDTH;
  let paddleTopPosY = paddlePosY;
  let paddleBottonPosY = paddlePosY + PADDLE_HEIGHT;

  if(ballPosX - BALL_RADIUS < paddlePosX && ballPosY > paddleTopPosY && ballPosY < paddleBottonPosY) {
    ballVelX *= -1;
    
    let centerPaddlePosY = paddleTopPosY + PADDLE_HEIGHT/2;
    let k = 0.35;
    ballVelY = Math.abs(centerPaddlePosY - ballPosY) * 0.35;
  }
}

const game = () => {
  draw();
  move();
}