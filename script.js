// DOM Element Selectors
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const historyList = document.getElementById('history-list');
const themeToggle = document.getElementById('theme-toggle');
const clearHistoryBtn = document.getElementById('clear-history');

// 1. Initial Load from LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    renderTasks();
    renderHistory();
});

// 2. Theme Management Logic
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('theme', target);
});

function loadTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
}

// 3. Task Logic (Add, Render, Edit, Delete)
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

function addTask() {
    const text = todoInput.value.trim();
    if (!text) return;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ id: Date.now(), text: text });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    todoInput.value = "";
    renderTasks();
}

function renderTasks() {
    todoList.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'hover-el';
        li.innerHTML = `
            <div class="item-left">
                <label class="checkbox-container hover-el">
                    <input type="checkbox" onchange="handleTaskCompletion('${task.id}')">
                    <span class="checkmark-box">
                        <svg class="checkmark-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                </label>
                <span>${task.text}</span>
            </div>
            <div class="actions">
                <button onclick="editTask(${task.id})" class="edit-btn hover-el">✏️</button>
                <button onclick="deleteItem(${task.id}, 'tasks')" class="delete-btn hover-el">🗑️</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// 4. History Management
function renderHistory() {
    historyList.innerHTML = "";
    const history = JSON.parse(localStorage.getItem('history')) || [];
    
    history.forEach(item => {
        const li = document.createElement('li');
        li.className = 'hover-el history-item';
        li.innerHTML = `
            <span>${item.text}</span>
            <button onclick="deleteItem(${item.id}, 'history')" class="delete-btn hover-el">🗑️</button>
        `;
        historyList.appendChild(li);
    });
}

// Handlers
window.handleTaskCompletion = (id) => {
    // Animation delay so user sees the tick draw before it moves
    setTimeout(() => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        const index = tasks.findIndex(t => t.id == id);
        const completedItem = tasks.splice(index, 1)[0];
        
        let history = JSON.parse(localStorage.getItem('history')) || [];
        history.push(completedItem);
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('history', JSON.stringify(history));
        
        renderTasks();
        renderHistory();
    }, 400); 
};

window.editTask = (id) => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    const task = tasks.find(t => t.id == id);
    const newText = prompt("Update your task:", task.text);
    if (newText && newText.trim()) {
        task.text = newText.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
};

window.deleteItem = (id, storageKey) => {
    let items = JSON.parse(localStorage.getItem(storageKey));
    items = items.filter(i => i.id != id);
    localStorage.setItem(storageKey, JSON.stringify(items));
    storageKey === 'tasks' ? renderTasks() : renderHistory();
};

clearHistoryBtn.addEventListener('click', () => {
    if(confirm("Permanently delete all history items?")) {
        localStorage.setItem('history', JSON.stringify([]));
        renderHistory();
    }
});