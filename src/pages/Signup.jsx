import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth} from "../context/AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {signup} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try{
    await signup(name, email, password);
    navigate("/dashboard");
  }catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    };
};

return(
  <div className = "container">
     <h1>Create Account</h1>
    <form onSubmit={handleSubmit}>
     
      <input
      type="text"
      placeholder="your name"
      value={name}
      onChange={(e) =>setName(e.target.value)} />

      <input 
      type="email"
      placeholder="email"
      value={email}
      onChange={(e) =>setEmail(e.target.value)}/>
      
      <input
      type="password"
    
      placeholder="*******"
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit" disabled={loading}>{loading? "Signing Up..." : "Sign up"}</button>
    </form>
  </div>
);

}
export default Signup;