window.onload = function() {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('colorPicker').value = savedColor;
    }
}

function saveColor() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgColor', color);
}
