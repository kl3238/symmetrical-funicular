let flex = document.querySelector(".flex-container-image");

function moveRight() {
  flex.classList.add("run-animation");
}

flex.addEventListener("click", moveRight);