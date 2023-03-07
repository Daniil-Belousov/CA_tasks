let currentElement = null;

document.addEventListener("mousedown", function(event) {
  if (event.target.classList.contains("draggable")) {
    currentElement = event.target;
    currentElement.startX = event.clientX - currentElement.offsetLeft;
    currentElement.startY = event.clientY - currentElement.offsetTop;
  }
});

document.addEventListener("mousemove", function(event) {
  if (currentElement) { 
    let newX = event.clientX - currentElement.startX;
    let newY = event.clientY - currentElement.startY;
    currentElement.style.left = newX + "px";
    currentElement.style.top = newY + "px";
  }
});

document.addEventListener("mouseup", function(event) {
  currentElement = null;
});