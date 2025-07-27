import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
// Login controlled component utilizing global auth context
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userLogin = await login(email, password);

      if (!userLogin.success) {
        setPassword("");
        setError(userLogin.error);
      } else {
        setError(null);
        navigate("/");
      };
    } catch(error) {
      throw error;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && 
          <ul>
            {error.map((error, index) => {
              return <li key={index} className="text-red-400">{error}</li>;
            })}
          </ul>
        }
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/auth/register" className="text-blue-500">Register</Link> here.</p>
    </div>
  )
};
