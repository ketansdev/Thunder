import { useRef, useState } from "react";

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    console.log("render")
    function handleSubmit(e){
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="password" ref={passwordRef} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Login;
