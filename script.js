let gridSize = 16;
let mode = 0; //0 is normal, 1 is click
let color = "#84827d";

let display = document.querySelector(".display");

function addListeners() {
    display.childNodes.forEach((pixel) => {
        pixel.onmouseover = (event) => {
            if (mode === 0 || event.buttons) {
                event.target.style.backgroundColor = color;
            }
        };
        pixel.onmousedown = (event) => {
            event.target.style.backgroundColor = color;
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

let modeSwitch = document.querySelector(".switch");
let switchThumb = document.querySelector(".switch .switch-thumb");

modeSwitch.onclick = (event) => {
    //using event.target causes some issues with child
    if (mode === 0) {
        modeSwitch.style.backgroundColor = "#545863";
        switchThumb.style.backgroundColor = "#f3e6d9";
        switchThumb.style.transform = "translateX(28px)";
        mode = 1;
    }
    else {
        modeSwitch.style.backgroundColor = null;
        switchThumb.style.backgroundColor = "#545863";
        switchThumb.style.transform = null;
        mode = 0;
    }
};

let colorInput = document.querySelector(".color [type='color']");
let colorBox = document.querySelector(".color");
colorInput.oninput = (event) => {
    color = event.target.value;
    colorBox.style.backgroundColor = color;
};