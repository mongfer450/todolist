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
    inputBox.value = ""; // reset inputBox
    let span = document.createElement(`span`); // create element(span) store in var(span)
    span.innerHTML = "❌"; // create span and print on page with ❌
    li.appendChild(span); // Append span right-side of li
  }
};

// limit addTask
let addNum = 0;

function addCount() {
  const addLimit = 8;
  if (addNum <= addLimit) {
    addTask(); // add Task function from line 5
    addNum++; // addNum value +1
    console.log(addNum);
  } else if (addNum > addLimit) {
    alert("Please remove some tasks");
}
}

// remove&cross out function
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    // if element tagname <span>
    e.target.parentElement.remove(); // parentElement of <span> will be remove and <span> too
    addNum--;
    console.log(addNum);
  } else if (e.target.tagName === "LI") {
    // if element tagname <li>
    e.target.classList.toggle("checked"); // it will toggle class = "checked"
  }
});

addBtn.addEventListener("click", addCount);

// Press Enter to addTask
inputBox.addEventListener(`keyup`, function (e) {
  if (e.key === "Enter") addCount(); // if user press "Enter" addTask() will run
});
