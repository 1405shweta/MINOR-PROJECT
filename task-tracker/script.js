const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.onclick = () => editTask(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const newTask = prompt('Edit your task', tasks[index]);
    if (newTask) {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskButton.addEventListener('click', addTask);
