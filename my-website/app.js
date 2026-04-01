"use strict";
const welcomeBtn = document.getElementById("welcomeBtn");
if (welcomeBtn) {
    welcomeBtn.addEventListener("click", () => {
        alert("Welcome to my TypeScript website!");
    });
}
