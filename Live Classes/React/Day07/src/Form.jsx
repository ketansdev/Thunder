import { useState, useRef } from "react";

function Form(){

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    console.log("Render");
    function handleSubmit(e){
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="Enter your name" ref={nameRef}/>
                <input type="number"  placeholder="Enter your age" ref={ageRef}/>
                <input type="email"   placeholder="Enter your email" ref={emailRef}/>
                <input type="password"   placeholder="Enter your password" ref={passwordRef}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;