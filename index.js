let items = [];
const storageKey = "items";
const todoTable = document.getElementById("todoTable");
const inputRow = document.getElementById("inputRow");
const input = document.getElementById("ItemInput");

function renderItems() {
    // Clear all rows except the input row
    const rows = todoTable.querySelectorAll("tbody tr");
    rows.forEach(row => {
        if (row !== inputRow) row.remove();
    });

    // Render each item
    items.forEach((item, idx) => {
        const row = document.createElement("tr");

        const itemCell = document.createElement("td");
        itemCell.textContent = item;

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => removeItem(idx);

        actionCell.appendChild(deleteButton);
        row.appendChild(itemCell);
        row.appendChild(actionCell);

        inputRow.before(row);
    });
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item");
        return;
    }
    items.push(value);
    renderItems();
    input.value = "";
    saveItems();
}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);
