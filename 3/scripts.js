let selectedTask = null;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <input type="radio" name="taskRadio">
        <span>${taskValue}</span>
        <button class="edit" onclick="editTask(this)">✎</button>
        <button class="remove" onclick="removeTask(this)">❌</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Edit Task', span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask;
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

function moveToPadding() {
    const selectedTask = getSelectedTask();
    if (selectedTask) {
        const paddingList = document.getElementById('paddingList');
        const taskList = document.getElementById('taskList');
        paddingList.appendChild(selectedTask);
        selectedTask.querySelector('input[type="radio"]').checked = false;
    }
}

function moveToCompleted() {
    const selectedTask = getSelectedTask();
    if (selectedTask) {
        const completedList = document.getElementById('completedList');
        const taskList = document.getElementById('taskList');
        completedList.appendChild(selectedTask);
        selectedTask.querySelector('input[type="radio"]').checked = false;
        selectedTask.classList.add('completed');
    }
}

function deleteSelectedTask() {
    const selectedTask = getSelectedTask();
    if (selectedTask) {
        selectedTask.remove();
    }
}

function getSelectedTask() {
    const taskList = document.getElementById('taskList');
    const checkedRadio = taskList.querySelector('input[type="radio"]:checked');
    if (checkedRadio) {
        return checkedRadio.parentElement;
    }
    return null;
}

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(`${section}Section`).classList.add('active');
}
