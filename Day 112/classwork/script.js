function manualRstrip(text) {
    while (text.endsWith(" ")) {
        text = text.slice(0, -1);
    }
    return text;
}

function manualLstrip(text) {
    while (text.startsWith(" ")) {
        text = text.slice(1);
    }
    return text;
}

function manualStrip(text) {
    return manualLstrip(manualRstrip(text));
}

let text = "   Hello, World!   ";
console.log("[" + manualRstrip(text) + "]");  
console.log("[" + manualLstrip(text) + "]");  
console.log("[" + manualStrip(text) + "]");  
