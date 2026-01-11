let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function updateUI() {
  countDisplay.textContent = count;
}

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateUI();
});

// Decrement
decrementBtn.addEventListener("click", () => {
  count--;
  updateUI();
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});
