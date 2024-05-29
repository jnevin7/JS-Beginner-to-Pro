"use strict";

window.onload = async function () {
    await loadToDoItems();
}

async function loadToDoItems() {
    let toDoItems = JSON.parse(sessionStorage.getItem("toDoItems")) || [];
    let list = document.getElementById("toDoList");

    toDoItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

async function saveItem() {
    let newItem = document.createElement("li");
    let toDoItem = document.getElementById("toDoItem").value;
    let text = document.createTextNode(toDoItem);
    newItem.appendChild(text);
    document.getElementById("toDoItem").value = "";
    document.getElementById("toDoList").appendChild(newItem);

    let savedToDoList = JSON.parse(sessionStorage.getItem("toDoItems")) || [];
    savedToDoList.push(toDoItem);
    sessionStorage.setItem("toDoItems", JSON.stringify(savedToDoList));

}

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get("name");

    alert(`We will get in contact with you, ${name}!`);
}

const form = document.querySelector("form")
form.addEventListener("submit", handleSubmit);