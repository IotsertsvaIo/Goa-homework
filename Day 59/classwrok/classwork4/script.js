const messageBox = document.getElementById("message")
const countBox = document.getElementById("count")

messageBox.addEventListener("input",counter)

function counter(){
    const limit = 200;
    let current_count = messageBox.value.length

    if(current_count > limit){
        countBox.style.color = "red"
        countBox.textContent = "Character limit exceeded";
    }
    else{
        countBox.style.color = "green"
        countBox.textContent = current_count + "/" + limit;
    }
}