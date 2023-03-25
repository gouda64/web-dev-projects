const operatorSymbols = new Set(["^","%","/","*","-","+"]);

const displayText = document.querySelector(".top .display span");
let currNumber = displayText.textContent; //string
let lastNumber = "";
let currOperation = "";

const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-symbol]");

numbers.forEach((number) => number.onclick = (event) => {
    if (currNumber === "0" || currNumber === "NaN" || currNumber === "Infinity") 
        currNumber = event.target.dataset.number;
    else currNumber = currNumber + event.target.dataset.number;
    displayText.textContent = currNumber;
});

operators.forEach((operator) => operator.onclick = (event) => {
    if (operatorSymbols.has(event.target.dataset.symbol)) {
        if (currOperation !== "")
            currNumber = "" + operate(lastNumber, currNumber, currOperation);
        lastNumber = currNumber;
        currNumber = "0";
        currOperation = event.target.dataset.symbol;
        displayText.textContent = lastNumber;
    }
    else {
        switch(event.target.dataset.symbol) {
            case ".":
                if (!currNumber.includes(".")) currNumber = currNumber + ".";
                break;
            case "delete":
                currNumber = currNumber.slice(0, currNumber.length-1);
                if (currNumber === "") currNumber = "0";
                break;
            case "clear":
                currNumber = "0";
                lastNumber = ""; currOperation = "";
                break;
            case "posneg":
                if (currNumber.slice(0, 1) === "-") 
                    currNumber = currNumber.slice(1);
                else currNumber = "-" + currNumber;
                break;
            case "=":
                if (currOperation !== "")
                    currNumber = "" + operate(lastNumber, currNumber, currOperation);
                lastNumber = "";
                currOperation = "";
                break;
        }
        displayText.textContent = currNumber;
    }
});

function operate(a, b, operator) {
    a = +a; b = +b;
    let fin = a;
    switch (operator) {
        case "+": fin = a+b; break;
        case "-": fin = a-b; break;
        case "*": fin = a*b; break;
        case "/": fin = a*1.0/b; break;
        case "^": fin = Math.pow(a, b); break;
        case "%": fin = a%b; break;
    }
    return Math.round(fin*100000)/100000;
}

window.onkeydown = (event) => {
    if (!isNaN(event.key)) {
        if (currNumber === "0" || currNumber === "NaN" || currNumber === "Infinity") 
            currNumber = event.key;
        else currNumber = currNumber + event.key;
        displayText.textContent = currNumber;
    }
    else if (operatorSymbols.has(event.key)) {
        if (currOperation !== "")
            currNumber = "" + operate(lastNumber, currNumber, currOperation);
        lastNumber = currNumber;
        currNumber = "0";
        currOperation = event.key;
        displayText.textContent = lastNumber;
    }
    else {
        switch (event.key) {
            case ".":
                if (!currNumber.includes(".")) currNumber = currNumber + ".";
                displayText.textContent = currNumber;
                break;
            case "Backspace":
                currNumber = currNumber.slice(0, currNumber.length-1);
                if (currNumber === "") currNumber = "0";
                displayText.textContent = currNumber;
                break;
            case "c":
            case "C":
                currNumber = "0";
                lastNumber = ""; currOperation = "";
                displayText.textContent = currNumber;
                break;
            case "p":
            case "P":
                if (currNumber.slice(0, 1) === "-") 
                    currNumber = currNumber.slice(1);
                else currNumber = "-" + currNumber;
                displayText.textContent = currNumber;
                break;
            case "Enter":
            case "=":
                if (currOperation !== "")
                    currNumber = "" + operate(lastNumber, currNumber, currOperation);
                lastNumber = "";
                currOperation = "";
                displayText.textContent = currNumber;
                break;
        }
    }      
};