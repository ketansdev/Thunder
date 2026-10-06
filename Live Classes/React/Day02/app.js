// const element = <h1>Hello React</h1>;
// const element2 = <div>I am the best</div>;

// const element3 = <>
//     <h1>Hello React</h1>
//     <div>I am the best</div>
// </>

// // const root = document.getElementById("root");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element3);


// 
// 

// React components - functions

// function App(){
//     // code
//     let fname = "Ketan";
//     let lname = "shetge";
//     let fullName = fname + " " + lname;

//     return <h1>Hello Coder Army {fullName}</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App());


// 

// 


// function App(){
//     const isLoggedIn = false;

//     return <h1>Coder Army {isLoggedIn ? <h2>Logout</h2> : <h2>Login</h2>}</h1>
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App());





function Hello(props){
    return (
        <>
            <h1>I am best</h1>
            <h2>Tommorow is the best day of my life</h2>
            <h3>My name is {props.name} and my age is {props.age}</h3>
        </>
    )
}



// const element = Hello({name : "Ketan", age : 27})
// const element = <Hello name = {"Rohit"} age = {20}></Hello>
const element = <Hello name = "Rohit" age = {20}/>



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element)