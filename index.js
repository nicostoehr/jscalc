const display = document.getElementById("display")

function toDisplay(key) {
    if (display.value == "Error") {
        display.value = key;
    }
    else if (key == "x" && display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
    else if (key != "x") {
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
