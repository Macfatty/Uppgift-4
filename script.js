console.log("JavaScript is running!");
const textInEmtyInputField = "Du måste skriva något i input fältet!"; // test av alert med variabeln x
const inputField = document.getElementById("taskInput"); // input fältet
const addTaskButton = document.getElementById("addTaskButton"); // inputt knappen
const taskList = document.getElementById("taskList"); // ul elementet som ska innehålla li elementet
const completedTasks = document.getElementById("completedTasks"); // hämtar span elementet

const tasks = [];

function updateCompletedCount() {
  let completedCount = 0;
  for (let i = 0; i < tasks.length; i++) {
    // lopar igenom listan
    if (tasks[i].completed === true) {
      completedCount++;
    }
  }
  completedTasks.textContent = completedCount;
};

// event listener för knappen
addTaskButton.addEventListener("click", function () {
  // console.log(inputField.value); // eget test av input fältets värde
  const taskText = inputField.value.trim();
  if (taskText === "") {
    alert(textInEmtyInputField);
    return;
  }
  const taskItem = document.createElement("li"); // skapa en li element

  const taskO = { text: taskText, completed: false }; // skapa ett objekt med text och completed egenskaper
  //console.log(taskO); // test av objektet
  taskItem.textContent = taskText; // sätt texten i li elementet till input fältets värde
  const deleteButton = document.createElement("button"); // skapar delet knappen 
  deleteButton.classList.add("delete-button") // för css stylingen 
  deleteButton.textContent = "🗑";
  taskItem.addEventListener("click", function () {
    taskO.completed = !taskO.completed; // toggla completed egenskapen
    // console.log(taskO);
    if (taskO.completed) {
      taskItem.classList.add("completed");
    } else {
      taskItem.classList.remove("completed");
    }
    updateCompletedCount();

    /* let completedCount = 0; 
        for (let i = 0; i < tasks.length; i++) {  // lopar igenom listan 
            if (tasks[i].completed === true){
                completedCount++ ;
            }
           
        }
        completedTasks.textContent = completedCount;
        console.log(completedCount);
        */

    console.log(taskO);
  });

  taskList.appendChild(taskItem); // lägg till li elementet i ul elementet
  taskItem.appendChild(deleteButton); // lägg till delete i li
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("tryckt knapp");
    taskItem.remove();

    const taskIndex = tasks.indexOf(taskO);
    tasks.splice(taskIndex, 1);
    updateCompletedCount();
    console.log(tasks);
    /*
    let completedCount = 0; 
        for (let i = 0; i < tasks.length; i++) {  // lopar igenom listan 
            if (tasks[i].completed === true){
                completedCount++ ;
            }
        }
    completedTasks.textContent = completedCount;
    */
  });
  tasks.push(taskO); // lägg till taskO i tasks arrayen
  // console.log(tasks[tasks.length - 1]); // test av senaste objektet i tasks arrayen
  inputField.value = ""; // töm input fältet
});
