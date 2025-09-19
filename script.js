//JavaScript Functions — Scope, Parameters & Return Values

function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(5, 10);
console.log("Area:", area); // Area: 50

//Global and local scope

let globalVar = "I'm global!";

function scopeTest() {
  let localVar = "I'm local!";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

scopeTest();
console.log(globalVar);    // Accessible
// console.log(localVar); // Error: localVar is not defined

//Combining CSS Animations with JavaScript

const rotatingIcon = document.getElementById("rotating-icon");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

pauseButton.addEventListener("click", () => {
  rotatingIcon.style.animationPlayState = "paused";
});

resumeButton.addEventListener("click", () => {
  rotatingIcon.style.animationPlayState = "running";
});

//flip card on mouseover
const card = document.getElementById('flip-card');

card.addEventListener('mouseover', () => {
  card.style.transform = 'rotateY(180deg)';
});

card.addEventListener('mouseout', () => {
  card.style.transform = 'rotateY(0deg)';
});

//opening and closing modal
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("show");
});
