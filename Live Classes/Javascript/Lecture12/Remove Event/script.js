const btn = document.querySelector("button");

const handleClick = () =>{
    btn.textContent = "I am Clicked"
    btn.removeEventListener("click", handleClick);
}

btn.addEventListener("click", handleClick);


