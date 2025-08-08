document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('todo-date');
    const filterInput = document.getElementById('filter-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (todoInput.value.trim() === '' || dateInput.value === '') {
            alert('Please fill in all fields');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoInput.value} - ${dateInput.value}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);

        todoInput.value = '';
        dateInput.value = '';
    });

    todoList.addEventListener('click', e => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    filterInput.addEventListener('keyup', () => {
        const text = filterInput.value.toLowerCase();
        document.querySelectorAll('#todo-list li').forEach(item => {
            const taskText = item.textContent.toLowerCase();
            item.style.display = taskText.includes(text) ? '' : 'none';
        });
    });
});