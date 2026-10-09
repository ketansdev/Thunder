import React from "react";
import ReactDOM from "react-dom/client"

const Header = function(){
    return (
        <>
            <h1>Welcome to React Learning</h1>
            <h2>Here we will learn React from Scratch</h2>
        </>
    )
}


const Main = function(){
    return(
    <>
        <p>Here we will learn what exactly react is</p>
        <ul>
            <li>React</li>
            <li>ReactDOM</li>
            <li>Babel</li>
        </ul>
        </>
    )
}


const Footer = function(){
    return(
        <>
            <p>This is my footer</p>
            <p>Here learning end</p>
        </>
    )
}



function App(){
    return(
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)