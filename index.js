// index.js
let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("ItemInput")

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display ="inline"
        text.style.marginRight ="10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

function loadItems() {}

function saveItems() {}

function addItem() {
    const value = input.value;
    if (!value) {
        alert ("You canot add and empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
}

function removeItem(idx) {
    items.splice(idx)
    renderItems()
}