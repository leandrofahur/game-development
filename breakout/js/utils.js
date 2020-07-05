const onUpdateMousePos = (evt) => {
  var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mousePosX = Math.floor(evt.clientX - rect.left - root.scrollLeft);
	mousePosY = Math.floor(evt.clientY - rect.top - root.scrollTop);
}

const onUpdateMouseClick = (evt) => {
  isMouseClicked = !isMouseClicked;
}

