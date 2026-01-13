const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
body.classList.add(savedTheme);

// Toggle theme
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");

  body.classList.remove(isDark ? "dark" : "light");
  body.classList.add(isDark ? "light" : "dark");

  localStorage.setItem("theme", isDark ? "light" : "dark");
});
