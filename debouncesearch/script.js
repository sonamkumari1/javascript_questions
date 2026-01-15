const searchInput = document.getElementById("search");
const results = document.getElementById("results");

function debounce(fn, delay) {
  let timer; // closure variable

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

async function fetchUsers(query) {
  if (!query) {
    results.innerHTML = "";
    return;
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  const data = await res.json();

  const filtered = data.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  results.innerHTML = filtered
    .map(user => `<li>${user.name}</li>`)
    .join("");
}

const debouncedSearch = debounce(fetchUsers, 500);

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
