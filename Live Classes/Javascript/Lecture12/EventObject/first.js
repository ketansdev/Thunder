const container = document.getElementById("container");

container.addEventListener("click", (e)=>{
    e.target.textContent = "I am clicked";
})


const ul = document.querySelector("ul");

ul.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
})

