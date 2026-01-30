/* Typing effect */
const text = "DevOps Engineer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 120);
  }
}
typing();

/* Terminal animation */
const terminalLines = [
  "aayu@devops:~$ whoami",
  "DevOps Engineer",
  "",
  "aayu@devops:~$ skills",
  "Docker | Kubernetes | AWS | CI/CD | Bash | Python",
  "",
  "aayu@devops:~$ echo \"Learning daily 🚀\""
];

let t = 0;
function terminal() {
  if (t < terminalLines.length) {
    document.getElementById("terminal").innerHTML += terminalLines[t] + "\n";
    t++;
    setTimeout(terminal, 600);
  }
}
terminal();

console.log("Aayu Maurya · DevOps Portfolio Loaded 🚀");



