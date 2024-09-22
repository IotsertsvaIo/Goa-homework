let img1 = './car1.png';
let img2 = './car2.png';
let img3 = './car3.png';

let i = 0;

document.getElementById('slider-image').src = photo1;



function newImg() {
    if (i === 0) {
        document.getElementById('photo').src = img1;
    } else if (i === 1) {
        document.getElementById('photo').src = img2;
    } else if (i === 2) {
        document.getElementById('photo').src = img3;
    }
}

function prev() {
    if (i === 0) {
        i = 2;
    } else {
        i--;
    }
    newImg();
}

function next() {
    if (i === 2) {
        i = 0;
    } else {
        i++;
    }
    newImg();
}
