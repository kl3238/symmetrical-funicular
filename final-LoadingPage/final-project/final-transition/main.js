let container = document.querySelector(".scroller__container");

function moveRight() {
  flex.classList.add("run-animation");
}

container.addEventListener("click", moveRight);

setTimeout(function() {
  window.open("./final-filter/index.html")
}, 3000);