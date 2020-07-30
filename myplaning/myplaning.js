const addBtn = document.querySelector(".add")
const taskField = document.querySelector(".taskInput")
const list = document.querySelector(".listing")

addBtn.addEventListener("click", addTaskList)

function addTaskList(){
    if(taskField.value.length === 0){
        return;
    }else{
        const taskContainer = list.appendChild(document.createElement("div")) //create task div
        const task = taskContainer.appendChild(document.createElement("p")) //show task detail
        const doneBtn = taskContainer.appendChild(document.createElement("i")) //task done
        const deleteBtn = taskContainer.appendChild(document.createElement("i")) //delete task
        deleteBtn.className = "fas fa-trash-alt"
        doneBtn.className = "fas fa-check"
        taskContainer.className = "taskContainer"
        task.className = "task"  

        /*task first letter convert in upper case*/ 

        task.innerHTML = taskField.value.charAt(0).toUpperCase() + taskField.value.slice(1)
        taskField.value = ""
        deleteBtn.addEventListener("click", deleteTask)
        doneBtn.addEventListener("click", checkTask)
        function deleteTask(e){
            e.target.parentElement.remove()
        }
        function checkTask(e){
            e.target.previousSibling.style.textDecoration = "line-through";
        }
    }
}