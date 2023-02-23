"use strict";
window.addEventListener("load", initApp);

// ========== Variables ========== //
let number = 0;

// ========== Init App Event ========== //

function initApp() {
    number = 0;
    document.querySelector("#btn-increment").addEventListener("click", incrementNumber);
    document.querySelector("#btn-decrement").addEventListener("click", decrementNumber);
}

// ========== Increment and decrement functions ========== //

function incrementNumber() {
    number = number + 1;
    displayNumber();
}

function decrementNumber() {
    number = number - 1;
    displayNumber();
}

// ========== Display Number function ========== //

function displayNumber() {
    document.querySelector("#number").textContent = number;

    let message = "";
    console.log("Lige før if");

    if (number > 10) {
        message = "The number is above 10";
    } else if ( number === 10) {
        message = "The number is equal to 10";
    } else {
        message = "The number is below 10";
}

console.log(message);
document.querySelector("#message").textContent = message;
}