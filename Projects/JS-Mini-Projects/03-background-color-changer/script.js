const buttons = document.getElementById("buttons");


buttons.addEventListener("click",(e)=>{
    const body = document.querySelector("body");
    body.style.backgroundColor = e.target.id;
})

