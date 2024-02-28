export function displayMessage(container, message, style) {
  const feedback = document.getElementById(container);
  feedback.innerHTML = "";
  feedback.className = "";
  feedback.innerText = message;
  feedback.classList.add(style);
}
