let counter = 0;

function adderP() {
    const newP = document.createElement("p");
    counter++;
    nePw.id = "paragraph -" + counter;
    newP.textContent = "NEW" + counter;

    const parent = document.getElementById("?");
    parent.appendChild(newParagraph);
}