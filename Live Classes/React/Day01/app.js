// const element = document.createElement("h1");
// element.textContent = "Hello React";

// element.id = "first";
// element.class = 'second';
// element.style.color = "white"
// element.style.backgroundColor = "tomato"

// const element2 = document.createElement("h21");
// element2.textContent = "Hello React";

// element2.id = "third";
// element2.class = 'second';
// element2.style.color = "red"
// element2.style.backgroundColor = "pink"

// const React = {
//   createElement: function (tag, attributes, children) {
//     const element = document.createElement(tag);
//     console.dir(element);

//     element.textContent = children;

//     for (let key in attributes) {
//       if (key == "style") {
//         Object.assign(element.style, attributes.style);
//       } else element[key] = attributes[key];
//     }

//     return element;
//   },
// };


// const ReactDOM = {
//   render : function(child, parent){
//     parent.append(child);
//   }
// }

console.log(React);

const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "second",
    style: { color: "red", backgroundColor: "pink" },
  },
  "I am learning React",
);

const element2 = React.createElement(
  "h1",
  {
    id: "third",
    className: "second",
    style: { color: "black", backgroundColor: "white" },
  },
  "I am learning from Coder Army",
);

const root = document.getElementById("root");
ReactDOM.render(element, root);

// root.append(element2)
