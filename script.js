document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addBtn");
    const clearButton = document.getElementById("clearBtn");

    function addTask() {
        const task = taskInput.value.trim();

        if (task === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.type = "button";

        checkbox.addEventListener("change", function () {
            span.classList.toggle("completed", checkbox.checked);
        });

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
    }

    function clearTasks() {
        taskList.innerHTML = "";
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    clearButton.addEventListener("click", clearTasks);
});
