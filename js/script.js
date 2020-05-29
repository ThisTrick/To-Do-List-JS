window.onload = function(){
    let addTask = this.document.getElementsByClassName("addTask")[0];
    addTask.addEventListener("click", this.AddTaskClick);
    let content = document.getElementsByClassName("content")[0];
    let addForm = new AddForm();
    content.appendChild(addForm.form);
    addForm.form.style.visibility = "hidden";

}

function AddTaskClick(e){
    e.target.style.visibility = "hidden";
    let addForm = document.getElementsByClassName("addTaskForm")[0];
    addForm.style.visibility = "visible";
}
function AddForm(){
    this.form = document.createElement("form");
    this.form.className = "addTaskForm";

    let textBox = CreateInput("text", "textBox");
    let addButton = CreateInput("button", "addButton");
    addButton.value = "ADD";
    addButton.addEventListener("click", addButtonClick);
    this.form.appendChild(textBox);
    this.form.appendChild(addButton);
    
    function CreateInput(type, className){
        let input = document.createElement("input");
        input.type = type;
        input.className = className;
        return input;
    }
    function addButtonClick(e){
        e.target.parentNode.style.visibility = "hidden";
        let addTask = document.getElementsByClassName("addTask")[0];
        addTask.style.visibility = "visible";

        let textBox = document.getElementsByClassName("textBox")[0];
        let textTask = textBox.value;
        createTask(textTask);
        textBox.value = "";
    }
}
function createTask(text){
    let list = document.getElementsByClassName("list")[0];

    let task = document.createElement("li");
    task.className = "task";
    let checkBox = document.createElement("div");
    checkBox.className = "checkBox";
    checkBox.addEventListener("click", checkBoxClick);

    let textTask = document.createElement("a");
    textTask.className = "textTask";
    textTask.innerText = text;

    let delButton = document.createElement("a");
    delButton.innerText = "X";
    delButton.className = "delButton";
    delButton.addEventListener("click", delButtonClick)

    task.appendChild(checkBox);
    task.appendChild(textTask);
    task.appendChild(delButton);
    list.appendChild(task);
    function checkBoxClick(e){
        let flag = e.target.value;
        if(flag != "clicked"){
            e.target.style.background = "white";
            e.target.nextSibling.style.textDecoration = "line-through";
            e.target.nextSibling.style.color = "#7f8fa6";
            e.target.value = "clicked";
        }
        else if(flag == "clicked"){
            e.target.style.background = "#192a56";
            e.target.nextSibling.style.textDecoration = "none";
            e.target.nextSibling.style.color = "white";
            e.target.value = "notclicked";
        }
        else{
            alert("Error");
        }

    }
    function delButtonClick(e){
        let task = e.target.parentNode;
        let list = task.parentNode;
        list.removeChild(task);
    }
}

   