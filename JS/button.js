var colors = ["white", "red", "green", "blue", "yellow", "orange", "black"];
var currentColorIndex = 0;
let body = document.querySelector("body");
let store = localStorage.getItem("value");
let emo = document.querySelector("h1");
function changeBackground() {
  let currentColor = colors[currentColorIndex];

  body.style.backgroundColor = currentColor;

  currentColorIndex = (currentColorIndex + 1) % colors.length;
  localStorage.setItem("value", (body.style.backgroundColor = currentColor));
   if (body.style.background == "red") {
    emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
    emo.innerHTML = "angry";
  } else if (body.style.background == "white") {
    emo.style.color = "black";
    emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
    emo.innerHTML = "clean";
  } else if (body.style.background == "green") {
    emo.style.color = "white";
    emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
    emo.innerHTML = "Freshness";
  } else if (body.style.background == "blue") {
    emo.style.color = "white";
    emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
    emo.innerHTML = "peace";
  } else if (body.style.background == "yellow") {
    emo.style.color = "white";
    emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
    emo.innerHTML = "warmth";
  } else if (body.style.background == "black") {
    emo.style.color = "white";
    emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
    emo.innerHTML = "devastated";
  } else if (body.style.background == "orange") {
    emo.style.color = "white";
    emo.setAttribute("class", "animate__animated animate__fadeInUpBig");
    emo.innerHTML = "confidence";
  }
  
}
if (localStorage.value) {
  body.style.background = store;
}
