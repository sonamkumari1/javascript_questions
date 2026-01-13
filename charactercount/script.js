const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const LIMIT = 100;

textInput.addEventListener("input", () => {
  const length = textInput.value.length;
  const remaining = LIMIT - length;

  counter.textContent = `${remaining} characters remaining`;

  if (remaining === 0) {
    counter.classList.add("warning");
  } else {
    counter.classList.remove("warning");
  }
});
