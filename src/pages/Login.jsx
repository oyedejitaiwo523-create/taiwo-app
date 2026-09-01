import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../context/AuthContext"


const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
   const {login} = useAuth();
   const navigate = useNavigate();
    const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try{
    await login(email, password);
    navigate("/dashboard");
  }catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    };
}

    return (
      <>
 <h2>welcome to login</h2>
 <form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)} 
/>

<input
type="password"
placeholder="***************"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
 <button type="submit" disabled={loading}>{loading? "Loging in ..." : "log in"}</button>
 </form>
 </>
   
    );
  };
    

export default Login;