const onUpdateMousePos = (evt) => {
  var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	// mousePosX = evt.clientX - rect.left - root.scrollLeft;
	mousePosY = evt.clientY - rect.top - root.scrollTop;

  paddlePosY = mousePosY - PADDLE_HEIGHT/2
}