const draw = () => {
  // World:
  colorBlock(0, 0, canvas.width, canvas.height, 'black');
  // Spaceship:
  colorBlock(spaceshipPosX, canvas.width - SPACESHIP_OFFSET, SPACESHIP_WEIGHT, SPACESHIP_HEIGHT, 'white');

  // shot(spaceshipPosX, spaceshipPosY, 10, 'white');
}

const move = () => {
  // Spaceship colision:
  spaceshipPosX += spaceshipVelX;
  if(spaceshipPosX < 0) {
    spaceshipVelX *= -1;
  }
  if(spaceshipPosX > canvas.width) {
    spaceshipVelX *= -1;
  }
}

const game = () => {
    draw();
    move();
}