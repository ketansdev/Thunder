const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const h2 = document.querySelector("h2")

let count = 0;

increase.addEventListener("click", () => {
  count++;
  h2.textContent = count;
});

decrease.addEventListener("click", () => {
  count--;
  h2.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  h2.textContent = count;
});
