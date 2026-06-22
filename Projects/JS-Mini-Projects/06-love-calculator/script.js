const girl = document.getElementById("girl");
const boy = document.getElementById("boy");
const result = document.getElementById("result");
const text = document.querySelector(".text");
const suggestion = document.querySelector(".suggestion");

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const girlName = girl.value;
  const boyName = boy.value;

  const lovePercentage =
    (girlName.length * boyName.length * girlName.length * boyName.length) % 101;

  result.textContent = `${lovePercentage} %`;
  result.classList.add("lovePercentage");

  text.textContent = "❤️ Love Match ❤️";

  suggestion.textContent =
    Number(lovePercentage) > 50
      ? "You have a great chance! Keep loving ❤️ and supporting each other"
      : "💔 Love needs a little more magic here. Spend more time together and see where the journey takes you!";
  text.after(suggestion);
});
