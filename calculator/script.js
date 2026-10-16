const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "0";
    }

    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value === "Error") {
        display.value = "0";
        return;
    }

    display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
    try {
        const expression = display.value;

        if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
            throw new Error("Invalid expression");
        }

        const result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        display.value = Number.isInteger(result)
            ? String(result)
            : String(Number(result.toFixed(8)));

    } catch (error) {
        display.value = "Error";
    }
                            }
