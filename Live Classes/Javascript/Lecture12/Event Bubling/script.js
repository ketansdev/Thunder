const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", ()=>{
    console.log("Grand Parent is Clicked")
}, false);

parent.addEventListener("click", ()=>{
    console.log("Parent is Clicked")
}, false);

child.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Child is Clicked")
}, false);