// Selecting DOM elements
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// --- 1. Theme Management ---

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save preference
});

// --- 2. Task Management Logic ---

// Load tasks from LocalStorage on startup
document.addEventListener('DOMContentLoaded', getTasks);

// Add Task Event
addBtn.addEventListener('click', () => {
    addTask();
});

// Add Task when pressing "Enter" key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = todoInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task! ✨");
        return;
    }

    const taskObj = {
        id: Date.now(),
        text: taskText
    };

    createTaskElement(taskObj);
    saveTaskToLocal(taskObj);
    todoInput.value = "";
}

// Function to build the UI for a task
function createTaskElement(taskObj) {
    const li = document.createElement('li');
    li.className = 'hover-el'; // Material 3 Hover Effect
    li.setAttribute('data-id', taskObj.id);
    
    li.innerHTML = `
        <span class="task-content">${taskObj.text}</span>
        <div class="actions">
            <button class="edit-btn hover-el">Edit</button>
            <button class="delete-btn hover-el">Delete</button>
        </div>
    `;
    
    todoList.appendChild(li);

    // Event Listeners for Edit and Delete
    const deleteBtn = li.querySelector('.delete-btn');
    const editBtn = li.querySelector('.edit-btn');
    const content = li.querySelector('.task-content');

    // Delete Logic
    deleteBtn.addEventListener('click', () => {
        removeTaskFromLocal(taskObj.id);
        li.style.opacity = '0';
        li.style.transform = 'translateY(10px)';
        setTimeout(() => li.remove(), 300);
    });

    // Edit Logic
    editBtn.addEventListener('click', () => {
        const currentText = content.innerText;
        const newText = prompt("✏️ Edit your task:", currentText);
        
        if (newText !== null && newText.trim() !== "") {
            const updatedText = newText.trim();
            content.innerText = updatedText;
            updateTaskInLocal(taskObj.id, updatedText);
        }
    });
}

// --- 3. Local Storage Helpers ---

function saveTaskToLocal(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}

function removeTaskFromLocal(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInLocal(id, newText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.text = newText;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}