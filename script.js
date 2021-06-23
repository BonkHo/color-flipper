// Finds the background color of body and shows what color it is
let body = document.querySelector('body');
let bodyStyle = window.getComputedStyle(body);
let bodyBackground = bodyStyle.getPropertyValue('background-color');
document.getElementById("background-color").innerHTML = 'Periwinkle';

// If the button is clicked on will execture buttonEventListener
document.getElementById("color-flipper").addEventListener("click", buttonEventListener);

// Creates an array of colors
let colors = ['Aero Blue', 'Opal', 'Periwinkle', 'Heliotrope', 'Liver'];
let hexColor = ['#C4E7D4', '#C4DACF', '#B9C0DA', '#998DA0', '#63585E'];

// Gets a random integer in the range 0 to max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function buttonEventListener() {
    colorNumber = getRandomInt(5);
    color = hexColor[colorNumber];
    colorName = colors[colorNumber];
    document.getElementById("body").style.background = color;
    document.getElementById("background-color").style.color = color;
    document.getElementById("background-color").innerHTML = colorName;
}