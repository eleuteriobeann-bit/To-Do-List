function AddTask() {
     let taskinput = document.getElementById("TaskInput");
     let task = taskinput.value;
     if (task === "") {
        alert("Please Enter a Task!");
        return;
     }

// Create the list item
     let li = document.createElement("li");

// Create Checkbox
     let checkbox = document.createElement("input"); 
     checkbox.type = "checkbox;"    
}

// Create task text
     let span = document.createElement("span");
     span.textContet = task;

// Create delete button
     let deleteButton = DocumentFragment.Element("button");
     deleteButton.textContent = "delete";
     deleteButton.className =  "delete-btn";

// Checkbox functionality
    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed");
    });

// Delete functionality
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

// Put everything inside the list item
    li.appendChild(deleteButton);

// Add list item to the page
    Content.getElementById("taskList").appendChild(li);

// Clear input box
    taskInput.value = "";

