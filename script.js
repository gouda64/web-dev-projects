let gridSize = 16;
let drawMode = 0; //0 is normal, 1 is click
let inMode = 0; //0 is normal, 1 is rainbow, 2 is transparent, 3 is erase
let color = "#84827d";

let display = document.querySelector(".display");

function addListeners() {
    display.childNodes.forEach((pixel) => {
        pixel.onmouseover = (event) => {
            if (drawMode === 0 || event.buttons) {
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
    if (drawMode === 0) {
        modeSwitch.style.backgroundColor = "#545863";
        switchThumb.style.backgroundColor = "#f3e6d9";
        switchThumb.style.transform = "translateX(28px)";
        drawMode = 1;
    }
    else {
        modeSwitch.style.backgroundColor = null;
        switchThumb.style.backgroundColor = "#545863";
        switchThumb.style.transform = null;
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
        let old = document.querySelector(".sidebar-option.mode[data-mode='" + inMode + "']");
        old.style.backgroundColor = "#f3e6d9";
        old.style.color = "#545863";

        inMode = event.target.dataset.mode;
        event.target.style.backgroundColor = "#545863";
        event.target.style.color = "#f3e6d9";
    };
});