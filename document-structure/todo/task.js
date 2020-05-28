document.getElementById("tasks__list").insertAdjacentHTML("beforeEnd", localStorage.getItem("storageTasks"));

let crosses = Array.from(document.getElementsByClassName("task__remove"));
let tkList = document.getElementById("tasks__list");

let btn = document.getElementById("tasks__add")
btn.addEventListener("click", (event) => {
    let textInput = document.getElementById("task__input").value
    
    let task = `<div class="task">
    <div class="task__title">
      ${textInput}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;    
    
    if(textInput !== ""){
        tkList.insertAdjacentHTML("beforeEnd", task);
    }

    localStorage.setItem("storageTasks", tkList.innerHTML)
    document.getElementById("task__input").value = "";
});

crosses.forEach(element => {          
    element.onclick = () => {
        element.closest(".task").remove();    
        localStorage.setItem("storageTasks", tkList.innerHTML);
    }  
});
