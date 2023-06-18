var colors = ["white", "red", "green", "blue", "yellow", "orange", "black"];
var emotion = [
  "clean",
  "angry",
  "Freshness",
  "peace",
  "warmth",
  "confidence",
  "devastated",
];
var currentColorIndex = 0;
let body = document.body;
let store = JSON.parse(localStorage.getItem("value"));
let emo = document.querySelector("h1");
let hd = document.querySelector("title");

function changeBackground() {
  if (body.style.backgroundColor == "orange") {
    body.style.color = "white";
  } else {
    body.style.color = "black";
  }
  emo.removeAttribute("class");
  emo.innerHTML = "";
  let currentColor = colors[currentColorIndex];
  let currentEmo = colors[currentColorIndex];

  body.style.backgroundColor = currentColor;
  emo.innerHTML = emotion[currentColorIndex];
  hd.innerHTML = emotion[currentColorIndex];

  let arr = {
    color: currentColor,
    feel: emotion[currentColorIndex],
  };
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  localStorage.setItem("value", JSON.stringify(arr));
  emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
}
if (localStorage.value) {
  body.style.background = store.color;
  emo.innerHTML = store.feel;
  hd.innerHTML = store.feel;
}
