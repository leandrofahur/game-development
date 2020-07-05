const draw = () => {
  // World:
  colorBlock(0, 0, canvas.width, canvas.height, 'black');
  // Debbugind purpose:
  grid(canvas.width/10, canvas.height/10);
  // Spaceship:
  colorBlock(spaceshipPosX - SPACESHIP_WEIGHT/2, canvas.height - SPACESHIP_OFFSET, SPACESHIP_WEIGHT, SPACESHIP_HEIGHT, 'white');
}

const move = () => {
  let spaceshipPosXCenter = spaceshipPosX - SPACESHIP_WEIGHT/2;
  let spaceshipPosYCenter = canvas.width - SPACESHIP_OFFSET;

   += 5;
  if( spaceshipPosX < 0) {
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