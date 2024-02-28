function createErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error");
  errorDiv.innerText = message;
  return errorDiv;
}

export function renderErrorMessage(message, parent) {
  parent.innerHTML = "";
  parent.append(createErrorMessage(message));
}
