let countEl = document.getElementById("count-el")
let entries = document.getElementById("previous-entries")

let count = 0

let entry = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    entry = count
    count = 0
    countEl.textContent = count
    entries.textContent += " " + entry + " -"
}