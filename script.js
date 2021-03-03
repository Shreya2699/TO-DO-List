let username = prompt("Enter your Name");   //enter your name

// if I don't add any name
if(typeof(username) === null) {
	username = "user";
}else if(username.length == 0) {
	username = "user";
}else if(username.trim().length === 0 ) {
	username = "user";
}

let newTaskData = ""; // xyz

// selecting stuff
let taskInputElement = document.getElementById("task-input");
let taskList = document.getElementById("task-list");



// updating the username 
// select the header
let usernameElement = document.getElementById("username");
usernameElement.textContent = username;//textContent sets or returns text to a specific node


// updates the input value
taskInputElement.addEventListener("change", function(e) {
	newTaskData = e.target.value;
})



// adding task when we click add button
let addTaskBtn = document.getElementById("addTask");
addTaskBtn.addEventListener("click", function(e) {
	e.preventDefault();

	if(newTaskData.trim().length == 0 ) {
		alert("Write some task to add");
	}else {
		let newLi = document.createElement("li");
		let newDeleteBtn = document.createElement("button");
		newDeleteBtn.className = "delete";
		newDeleteBtn.appendChild(document.createTextNode("X"));

		newLi.appendChild(newDeleteBtn); 

		newLi.appendChild(document.createTextNode(newTaskData));

		taskList.appendChild(newLi);

		taskInputElement.value = "";

	}


	newTaskData = "";
	
})



// deleting stuff
taskList.addEventListener("click", function(e) {
	
	if(e.target.classList.contains("delete")) {

		if(  confirm("Do you really want to delete") ) {
			
			let liToBeDeleted = e.target.parentElement;
			taskList.removeChild(liToBeDeleted);
			// alert("your task is deleted")

		}

		
	}


})
















