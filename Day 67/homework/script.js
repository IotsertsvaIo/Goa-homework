function displayer() { 
    const divv = document.getElementById("div");
    const btn = document.getElementById("btn");
   
    btn.style.display = "none";
    divv.style.display = "block";
}



const loader = document.getElementById("loader");

let left = 0;

setInterval(function() {
    left++

    if(left >= 150) {
        left = 0
    }

    loader.style.left = left + 'px';
}, 30)