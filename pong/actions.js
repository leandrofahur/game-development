const draw = () => {
  // World:
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  // Ball:
  ball(ballPosX, ballPosY, BALL_RADIUS, 'white');
  // Player (Paddle 1):
  colorRect(PADDLE_SIDE_OFFSET, paddlePosY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
  // AI Player (Paddle 2):
  colorRect(canvas.width - PADDLE_SIDE_OFFSET - PADDLE_WIDTH, paddlePosY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

const move = () => {
  ballColisionHandler();
  playerPaddleColisionHandler();
  paddleColisionHandler();
  ballPaddleColisionHandler();
}

const ballColisionHandler = () => {
  // BALL COLISION: 
  ballPosX += ballVelX;  
  ballPosY += ballVelY;  
  if(ballPosX - BALL_RADIUS < 0) {
    ballReset();
  }
  if(ballPosX + BALL_RADIUS > canvas.width) {
    ballReset();
  }
  if(ballPosY - BALL_RADIUS < 0) {
    ballVelY *= -1;
  }
  if(ballPosY + BALL_RADIUS > canvas.height) {
    ballVelY *= -1;
  }
}

const playerPaddleColisionHandler = () => {
  // PADDLE COLISION:
  // paddlePosY += paddleVelY;
  if(paddlePosY < 0) {
    paddleVelY *= -1;
  }
  if(paddlePosY + PADDLE_HEIGHT > canvas.height) {
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
    ballVelY = -1 * k * Math.abs(centerPaddlePosY - ballPosY);
  }
}

const paddleColisionHandler = () => {
  let paddlePosX = canvas.width - PADDLE_SIDE_OFFSET - PADDLE_WIDTH;
  let paddleTopPosY = paddlePosY;
  let paddleBottonPosY = paddlePosY + PADDLE_HEIGHT;

  if(ballPosX + BALL_RADIUS > paddlePosX && ballPosY > paddleTopPosY && ballPosY < paddleBottonPosY) {
    ballVelX *= -1;
    
    let centerPaddlePosY = paddleTopPosY + PADDLE_HEIGHT/2;
    let k = 0.35;
    ballVelY = -1 * k * Math.abs(centerPaddlePosY - ballPosY);
  }
}

const game = () => {
  draw();
  move();
}