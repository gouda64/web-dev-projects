let gridSize = 16;

let display = document.querySelector(".display");

function addListeners() {
    display.childNodes.forEach((pixel) => {
        pixel.onmouseover = (event) => {
            event.target.style.backgroundColor = "#84827d";
        };
    });
}

function setGrid(gridSize) {
    display.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }

    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("display-child");
        display.appendChild(div);
    }

    addListeners();
}
setGrid(gridSize);

let slider = document.querySelector(".slider");
slider.oninput = (event) => {
    gridSize = event.target.value;
    event.target.parentElement.firstChild.textContent = `${gridSize} x ${gridSize}`;
    setGrid(gridSize);
};