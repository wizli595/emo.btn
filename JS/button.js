var colors = ["red", "green", "blue", "black"];
var currentColorIndex = 0;
let body = document.querySelector("body");
let store = localStorage.getItem("value");

function changeBackground() {
  let currentColor = colors[currentColorIndex];

  body.style.backgroundColor = currentColor;

  currentColorIndex = (currentColorIndex + 1) % colors.length;
  localStorage.setItem("value", (body.style.backgroundColor = currentColor));
}
if (localStorage.value) {
  body.style.background = store;
}
