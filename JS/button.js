var colors = ['red', 'green', 'blue', 'black'];

var currentColorIndex = 0;

function changeBackground() {
    var body = document.getElementsByTagName('body')[0];

    var currentColor = colors[currentColorIndex];

    body.style.backgroundColor = currentColor;


    currentColorIndex = (currentColorIndex + 1) % colors.length;
}