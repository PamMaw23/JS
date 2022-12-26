let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let thisSave = count + " - "
    saveEl.textContent += thisSave
    console.log(count)
    countEl.textContent = 0
    count = 0
}

console.log(count)

let myName ="Pamela"
let greeting = "Welcome back "

welcomeEl.textContent = greeting + myName
welcomeEl.textContent += " 👋"



