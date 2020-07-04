const draw = () => {
  // World:
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  // Spaceship:
  spaceship(spaceshipPosX, spaceshipPosY, 10, 'white');
}

const move = () => {
  // ...
}

const game = () => {
    draw();
    move();
}