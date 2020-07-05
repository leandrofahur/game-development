const draw = () => {
  // World:
  colorBlock(0, 0, canvas.width, canvas.height, 'black');
  // Spaceship:
  colorBlock(spaceshipPosX - SPACESHIP_WEIGHT/2, canvas.width - SPACESHIP_OFFSET, SPACESHIP_WEIGHT, SPACESHIP_HEIGHT, 'white');
}

const move = () => {
  // Spaceship colision:
  spaceshipPosX += spaceshipVelX;
  if(spaceshipPosX < 0) {
    spaceshipVelX *= -1;
  }
  if(spaceshipPosX + SPACESHIP_WEIGHT/2 > canvas.width) {
    spaceshipVelX *= -1;
  }
}

const game = () => {
  draw();
  move();
  colorText(`(${mousePosX}, ${mousePosY})`, mousePosX, mousePosY, 'yellow');
}