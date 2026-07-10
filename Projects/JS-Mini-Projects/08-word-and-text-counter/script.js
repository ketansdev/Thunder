const input = document.getElementById("input");
const button = document.querySelector("button");

const charWithSpaces = document.getElementById("char-w-space");
const charWithoutSpaces = document.getElementById("char-wo-space");
const word = document.getElementById("word");
const sentence = document.getElementById("sentence");

function clearDefault() {
  input.value = "";
  charWithSpaces.textContent = 0;
  charWithoutSpaces.textContent = 0;
  word.textContent = 0;
  sentence.textContent = 0;
}

input.addEventListener("input", (e) => {
  const text = e.target.value;
  // char with spaces
  charWithSpaces.textContent = text.length;

  charWithoutSpaces.textContent = text.replace(/\s/g, "").length;

  const words = text.trim().split(" ");
  word.textContent = words.length;

  const sentences = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim() !== "");

  sentence.textContent = sentences.length;
});

button.addEventListener("click", () => {
  clearDefault();
});
