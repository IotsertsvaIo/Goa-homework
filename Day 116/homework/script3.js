document.getElementById("add").addEventListener("click", () => {
    let taskText = document.getElementById("task").value;
    if (!taskText) return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => li.remove());

    li.appendChild(btn);
    document.getElementById("tasks").appendChild(li);
    document.getElementById("task").value = "";
});
