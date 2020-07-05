const draw = () => {
  // World:
  colorBlock(0, 0, canvas.width, canvas.height, 'black');
  // Debbugind purpose:
  grid(canvas.width/10, canvas.height/10);
  // Spaceship:
  colorBlock(spaceshipPosX - SPACESHIP_WIDTH/2, canvas.height - SPACESHIP_OFFSET, SPACESHIP_WIDTH, SPACESHIP_HEIGHT, 'white');
}

const move = () => {
  spaceshipPosX += spaceshipVelX;
  
  if(spaceshipPosX - SPACESHIP_WIDTH/2 < 0) {
    spaceshipVelX *= -1;
  }
  if(spaceshipPosX + SPACESHIP_WIDTH/2 > canvas.height) {
    spaceshipVelX *= -1;
  }
}

const shot = () => {
  
}

const game = () => {
  draw();
  move();
  colorText(`(${mousePosX}, ${mousePosY})`, mousePosX, mousePosY, 'yellow');
}