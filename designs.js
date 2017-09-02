// Select color input
let color = "#000";
document.getElementById("colorPicker").onchange = function () {
    color = this.value;
};
// Select size input
let gridHeight = document.getElementById("input_height").value;
document.getElementById("input_height").onchange = function () {
    gridHeight = this.value;
};
let gridWidth = document.getElementById("input_width").value;
document.getElementById("input_width").onchange = function () {
    gridWidth = this.value;
};
// utilities
const canvas = document.getElementById("pixel_canvas");
let tds = "";
// When size is submitted by the user, call makeGrid()

const makeGrid = function () {
    // crearing the previous values
    canvas.innerHTML = "";
    tds = "";

    // Generatiing grid rows and cells
    for (let j = 1; j <= gridWidth; j++) {
        tds += "<td class='td'> </td>";
    }
    for (let i = 1; i <= gridHeight; i++) {
        canvas.innerHTML += "<tr>" + tds + "</tr";
    }
    // On clic, Changing the color
    var pixels = document.querySelectorAll('table td');
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].onclick = function () {
            this.style.backgroundColor = color;
        };
    }

};
document.getElementById("button").addEventListener("click", makeGrid);