const text = "I'm a DevOps Engineer";
let index = 0;
const speed = 80;
const target = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

console.log("Aayu Maurya DevOps Portfolio Loaded 🚀");
