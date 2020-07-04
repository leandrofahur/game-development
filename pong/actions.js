const draw = () => {
  // World:
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  // Ball:
  ball(ballPosX, ballPosY, BALL_RADIUS, 'white');
  // Player (Paddle 1):
  colorRect(PADDLE_SIDE_OFFSET, paddlePosY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
  // AI Player (Paddle 2):
  colorRect(canvas.width - PADDLE_SIDE_OFFSET - PADDLE_WIDTH, aiPaddlePosY, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

const move = () => {
  ballColisionHandler();
  // playerPaddleColisionHandler();
  // aiPaddleColisionHandler();
  ballAiPaddleColisionHandler();
  ballPaddleColisionHandler();
  aiPaddlePlayer();
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

const aiPaddleColisionHandler = () => {
  // PADDLE COLISION:
  // paddlePosY += paddleVelY;
  // aiPaddlePosY += aiPaddleVelY;
  // if(aiPaddlePosY < 0) {
  //   aiPaddleVelY *= -1;
  // }
  // if(aiPaddlePosY + PADDLE_HEIGHT > canvas.height) {
  //   aiPaddleVelY *= -1;
  // }
}

const ballPaddleColisionHandler = () => {
  let paddlePosX = PADDLE_SIDE_OFFSET + PADDLE_WIDTH;
  let paddleTopPosY = paddlePosY;
  let paddleBottonPosY = paddlePosY + PADDLE_HEIGHT;

  if(ballPosX - BALL_RADIUS < paddlePosX && ballPosY > paddleTopPosY && ballPosY < paddleBottonPosY) {
    ballVelX *= -1;
    
    let centerPaddlePosY = paddleTopPosY + PADDLE_HEIGHT/2;
    let k = 0.35;
    ballVelY = k * Math.abs(centerPaddlePosY - ballPosY);
  }
}

const ballAiPaddleColisionHandler = () => {
  let paddlePosX = canvas.width - PADDLE_SIDE_OFFSET - PADDLE_WIDTH;
  let paddleTopPosY = aiPaddlePosY;
  let paddleBottonPosY = aiPaddlePosY + PADDLE_HEIGHT;

  if(ballPosX + BALL_RADIUS > paddlePosX && ballPosY > paddleTopPosY && ballPosY < paddleBottonPosY) {
    ballVelX *= -1;
    
    let centerPaddlePosY = paddleTopPosY + PADDLE_HEIGHT/2;
    let k = 0.35;
    ballVelY = k * Math.abs(centerPaddlePosY - ballPosY);
  }
}

const aiPaddlePlayer = () => {
  let aiPaddlePosYCenter = aiPaddlePosY + PADDLE_HEIGHT/2;
  if(aiPaddlePosYCenter < ballPosY - 35) {
    aiPaddlePosY += 5;
  } 
  if(aiPaddlePosYCenter > ballPosY + 35) {
    aiPaddlePosY -= 5;
  }

  // if(aiPaddlePosY < 0) {
  //   aiPaddleVelY *= -1;
  // }
  // if(aiPaddlePosY + PADDLE_HEIGHT > canvas.height) {
  //   aiPaddleVelY *= -1;
  // }
}

const game = () => {
  draw();
  move();
}