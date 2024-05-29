"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const localTodosContainer = document.getElementById("local-storage-todos-container");
    const localInputEle = document.getElementById("local-storage-todo-input-ele");
    const localAddTaskBtn = document.getElementById("local-storage-add-task-btn");

    const sessionTodosContainer = document.getElementById("session-storage-todos-container");
    const sessionInputEle = document.getElementById("session-storage-todo-input-ele");
    const sessionAddTaskBtn = document.getElementById("session-storage-add-task-btn");

    let localTodoTasksArray = JSON.parse(localStorage.getItem('localTodoTasksArray')) || [];
    let sessionTodoTasksArray = JSON.parse(sessionStorage.getItem('sessionTodoTasksArray')) || [];

    function createTodoLiElements(todoArray, sectionType) {
        return todoArray.map((i, index) => {
            const liElement = document.createElement('li');
            const checkboxEle = document.createElement('input');
            const labelEle = document.createElement('label');

            checkboxEle.setAttribute('type', 'checkbox');
            checkboxEle.setAttribute('id', `${sectionType}-chbx-${index}`);
            checkboxEle.checked = i.checked;

            labelEle.setAttribute('for', `${sectionType}-chbx-${index}`);
            labelEle.textContent = i.text;

            if (i.checked) {
                labelEle.classList.add('todo-task-done');
            }

            checkboxEle.addEventListener('click', (e) => {
                const todoIndex = e.target.getAttribute('id').split('-')[2];
                todoArray[todoIndex].checked = !todoArray[todoIndex].checked;
                if (todoArray[todoIndex].checked) {
                    labelEle.classList.add('todo-task-done');
                } else {
                    labelEle.classList.remove('todo-task-done');
                }

                if (sectionType === 'local') {
                    localStorage.setItem('localTodoTasksArray', JSON.stringify(localTodoTasksArray));
                } else if (sectionType === 'session') {
                    sessionStorage.setItem('sessionTodoTasksArray', JSON.stringify(sessionTodoTasksArray));
                }
            });

            liElement.append(checkboxEle, labelEle);
            return liElement;
        });
    }

    function renderTodos() {
        const localTodoLiElements = createTodoLiElements(localTodoTasksArray, 'local');
        localTodosContainer.replaceChildren(...localTodoLiElements);

        const sessionTodoLiElements = createTodoLiElements(sessionTodoTasksArray, 'session');
        sessionTodosContainer.replaceChildren(...sessionTodoLiElements);
    }

    localAddTaskBtn.addEventListener("click", () => {
        const newTodoInfo = { checked: false, text: localInputEle.value };
        localTodoTasksArray.push(newTodoInfo);
        localStorage.setItem('localTodoTasksArray', JSON.stringify(localTodoTasksArray));
        renderTodos();
        localInputEle.value = '';
    });

    sessionAddTaskBtn.addEventListener('click', () => {
        const newTodoInfo = { checked: false, text: sessionInputEle.value };
        sessionTodoTasksArray.push(newTodoInfo);
        sessionStorage.setItem('sessionTodoTasksArray', JSON.stringify(sessionTodoTasksArray));
        renderTodos();
        sessionInputEle.value = '';
    });

    // Initial render
    renderTodos();
});
