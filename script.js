const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');

// Theme Switcher
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
});

// Add Task
addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        li.className = 'hover-el'; // Adding the hover effect class
        
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        todoList.appendChild(li);
        todoInput.value = "";

        // Delete Logic
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }
});