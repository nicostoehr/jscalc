const display = document.getElementById("display")

function toDisplay(key) {
    if (display.value == "Error") {
        display.value = key;
    }
    else {
        display.value += key;
    }
}

function clearDisplay() {
    display.value = "";
}

function calc() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}