let img1 = './th (1).jfif';
let img2 = './th (2).jfif';
let img3 = './th (3).jfif';
let img4 =  './th (4).jfif';
let img5 =  './th.jfif';

let i = 0;

document.getElementById('slider-image').src = photo1;



function newImg() {
    if (i === 0) {
        document.getElementById('photo').src = img1;
    } else if (i === 1) {
        document.getElementById('photo').src = img2;
    } else if (i === 2) {
        document.getElementById('photo').src = img3;
    } else if (i === 3) {
        document.getElementById('photo').src = img4;
    } else if (i === 4) {
        document.getElementById('photo').src = img5;
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
    if (i === 4) {
        i = 0;
    } else {
        i++;
    }
    newImg();
}
