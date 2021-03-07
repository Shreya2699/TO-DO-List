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
function myfunc(){
	k=document.getElementById("myDropdown");
	k.style.display=block;
}

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
let c=0;
let addTaskBtn = document.getElementById("addTask");




addTaskBtn.addEventListener("click", function(e) {
	e.preventDefault();
	

	if(newTaskData.trim().length == 0 ) {
		alert("Write some task to add");
	}else {
		var y = document.getElementById("message");
		y.style.display="none";
		
		let newLi = document.createElement("li");
		let newDeleteBtn = document.createElement("button");
		let newpriority=document.createElement("button");
		
		
		newDeleteBtn.className = "delete";
		newpriority.className = "delete1";
		newDeleteBtn.appendChild(document.createTextNode("X"));

		newLi.appendChild(newDeleteBtn); 

		newLi.appendChild(document.createTextNode(newTaskData));
		newpriority.appendChild(document.createTextNode("Done"));
		
		newLi.appendChild(newpriority); 

		taskList.appendChild(newLi);
		
		c=c+1;

		taskInputElement.value = "";

	}


	newTaskData = "";
	
})
//selecting priority




// deleting stuff

taskList.addEventListener("click", function(e) {
	
	if(e.target.classList.contains("delete")  ) {

		if(  confirm("Do you really want to delete") ) {
			
			let liToBeDeleted = e.target.parentElement;
			taskList.removeChild(liToBeDeleted);
			// alert("your task is deleted")
			c=c-1;
			if (c==0){
				var y = document.getElementById("message");
				y.style.display="block";
			}
			

		}

		
	}
	



})
taskList.addEventListener("click", function(e) {
	
	if(e.target.classList.contains("delete1") ) {

		if(  confirm("Did you complete your task?") ) {
			
			let liToBeDeleted = e.target.parentElement;
			taskList.removeChild(liToBeDeleted);
			// alert("your task is deleted")
			c=c-1;
			if (c==0){
				var y = document.getElementById("message");
				y.style.display="block";
			}
			

		}

		
	}
	



})

















