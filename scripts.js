// Link value,element to variable
const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");

// Add Task Function
let addTask = function () {
  const task = inputBox.value; // store inputBox.Value to varibale(task)
  if (task === "") {
    alert("Enter your task"); // if no text in input box, it will alert
  } else {
    let li = document.createElement("li"); // create element(li) store in var(li)
    li.innerHTML = task; // create li and print on page with inputBox.value 
    taskList.appendChild(li); // Append li inside of TaskList 
    inputBox.value = "";  // reset inputBox
    let span = document.createElement(`span`); // create element(span) store in var(span)
    span.innerHTML = "❌"; // create span and print on page with ❌ 
    li.appendChild(span); // Append span right-side of li 
  }
};

// Click to addTask
addBtn.addEventListener("click", function () {
  addTask(); // if user click #addBtn addTask() will run 
}); 

// Press Enter to addTask
inputBox.addEventListener(`keyup`, function (e) {
  if (e.key === "Enter") addTask(); // if user press "Enter" addTask() will run
}); 

// remove&cross out function
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") { // if element tagname <span>
    e.target.parentElement.remove(); // parentElement of <span> will be remove and <span> too
  } else if (e.target.tagName === "LI") { // if element tagname <li>
    e.target.classList.toggle("checked");// it will toggle class = "checked"
  }
});
