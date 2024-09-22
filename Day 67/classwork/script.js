const childDiv = document.getElementById('box');

let lefter = 0;
let toper = 0;
let position = 1;

setInterval(function() {
    lefter += position;
    toper += 1;
    
    if(lefter >= 150) {
        position = -1;
        if(toper >= 200) {
            toper = -1
        }
    } else if(lefter <= 0) {
        position = 1;
        if(toper <= 0) {
            toper = 1
        }
    }
    childDiv.style.top = toper + 'px'
    childDiv.style.left = lefter + 'px'
}, 10)