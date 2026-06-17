let element = document.getElementById("first");

element.textContent = "Coder Army is Awesome"


let newElement = document.createElement("h3");
newElement.textContent = "Web Devlopment makes easy"

element.after(newElement)

let heading = document.createElement("h1");
heading.textContent = "Coder Army";
heading.style.backgroundColor = "orange";
heading.style.color = "black"

element.before(heading);



let ul = document.getElementById("ul");

let li1 = document.createElement("li");
li1.textContent = "Web Devlopment";

let li2 = document.createElement("li");
li2.textContent = "System Design";

let li3 = document.createElement("li");
li3.textContent = "Security";

let li4 = document.createElement("li");
li4.textContent = "Devops";

ul.append(li1, li2, li3, li4)


let li5 = document.createElement("li");
li5.textContent = "DSA";

ul.prepend(li5)



let newHeading = document.createElement("h1");
newHeading.textContent = "Strike is Best";
newHeading.style.backgroundColor = "lightgreen"

heading.prepend(newHeading)



const ul2 = document.getElementById("fruits");
const fruits = ["Apple", "Banana", "Mango", "Watermelon", "Pineapple"];
// const fra = document.createDocumentFragment()

const arr = [];

for(let fruit of fruits){
    const li = document.createElement("li");
    li.textContent = fruit;
    arr.push(li);
}


console.log(arr);

ul2.append(...arr);
