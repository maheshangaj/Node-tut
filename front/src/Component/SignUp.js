import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
//useEffect for after login sign in page does not operate all nav bae access
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });  

  const Collectdata = async () => {
    console.log(name, email, password);
    let result = await fetch("http://127.0.0.1:5100/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result)); //data store to local storage for login check
    localStorage.setItem("token", JSON.stringify(result.auth))
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1>Registor</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button className="appButton" onClick={Collectdata} type="Button">
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
