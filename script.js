let gridSize = 16;
let drawMode = 0; //0 is normal, 1 is click
let outMode = 0; //0 is normal, 1 is rainbow, 2 is erase
let color = "#84827d";
let gridLines = false;

let display = document.querySelector(".display");

function addListeners() {
    display.childNodes.forEach((pixel) => {
        pixel.onmouseover = (event) => {
            if (drawMode === 0 || event.buttons) {
                draw(event);
            }
        };
        pixel.onmousedown = draw;
    });
}

function draw(event) {
    switch (+outMode) {
        case 0:
            event.target.style.backgroundColor = color;
            break;
        case 1:
            event.target.style.backgroundColor = `rgb(${Math.random()*255 + 1}, 
                ${Math.random()*255 + 1}, ${Math.random()*255 + 1})`;
            break;
        case 2:
            event.target.style.backgroundColor = "white";
            break;
    }
}

function setGrid(gridSize) {
    display.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }

    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement("div");
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

let modeSwitch = document.querySelector(".draw-toggle .switch");
let modeSwitchThumb = document.querySelector(".draw-toggle .switch .switch-thumb");

modeSwitch.onclick = (event) => {
    //using event.target causes some issues with child
    if (drawMode === 0) {
        modeSwitch.style.backgroundColor = "#545863";
        modeSwitchThumb.style.backgroundColor = "#f3e6d9";
        modeSwitchThumb.style.transform = "translateX(28px)";
        drawMode = 1;
    }
    else {
        modeSwitch.style.backgroundColor = null;
        modeSwitchThumb.style.backgroundColor = "#545863";
        modeSwitchThumb.style.transform = null;
        drawMode = 0;
    }
};

let colorInput = document.querySelector(".color [type='color']");
let colorBox = document.querySelector(".color");
colorInput.oninput = (event) => {
    color = event.target.value;
    colorBox.style.backgroundColor = color;
};

document.querySelectorAll(".sidebar-option.mode").forEach((mode) => {
    mode.onclick = (event) => {
        let old = document.querySelector(".sidebar-option.mode[data-mode='" + outMode + "']");
        old.style.backgroundColor = "#f3e6d9";
        old.style.color = "#545863";

        outMode = event.target.dataset.mode;
        event.target.style.backgroundColor = "#545863";
        event.target.style.color = "#f3e6d9";
    };
});

let gridSwitch = document.querySelector(".grid-toggle .switch");
let gridSwitchThumb = document.querySelector(".grid-toggle .switch .switch-thumb");

gridSwitch.onclick = (event) => {
    if (gridLines === false) {
        gridSwitch.style.backgroundColor = "#545863";
        gridSwitchThumb.style.backgroundColor = "#f3e6d9";
        gridSwitchThumb.style.transform = "translateX(28px)";
        gridLines = true;
        display.childNodes.forEach((pixel) => {
            pixel.style.borderStyle = "solid";
        });
    }
    else {
        gridSwitch.style.backgroundColor = null;
        gridSwitchThumb.style.backgroundColor = "#545863";
        gridSwitchThumb.style.transform = null;
        gridLines = false;
        display.childNodes.forEach((pixel) => {
            pixel.style.borderStyle = null;
        });
    }
};