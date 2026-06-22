const btn = document.querySelector("#calculator");
const display = document.getElementById("display");
const backSpace = document.querySelector("#backSpace");

btn.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  let value = e.target.textContent;
  console.log(value);

  console.log(display.value);

  if (e.target.id === "backSpace") {
    display.value = display.value.slice(0, -1);
    return;
  }
  if (value === "C") {
    display.value = "";
    return;
  }

  if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
    return;
  }

  display.value += value;
});
