"use strict";

const panels = document.querySelector(".panel-container");
const panel = panels.querySelectorAll(".panel");
console.log(panel);
panel.forEach((panel) => panel.addEventListener("click", openPanel));
panel.forEach((panel) => panel.addEventListener("transitionend", slidePanel));
function openPanel() {
  this.classList.toggle("open");
}

function slidePanel(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-slide");
  }
}
