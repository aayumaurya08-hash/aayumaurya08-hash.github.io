const text = "DevOps Engineer";
let index = 0;
const speed = 90;
const target = document.getElementById("typing-text");

function typeText() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

typeText();
