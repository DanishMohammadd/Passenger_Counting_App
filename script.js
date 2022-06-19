
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    let Para = count + " - ";
    saveEl.innerText += Para;
    countEl.innerText = 0;
    count = 0;
}