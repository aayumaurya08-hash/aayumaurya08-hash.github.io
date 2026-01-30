const text = "DevOps Engineer";
let index = 0;
const speed = 100;
const target = document.getElementById("typing-text");

function typeEffect() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
