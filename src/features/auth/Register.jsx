import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export default function Register() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [matchPassword, setMatchPassword] = useState(false);
	const [error, setError] = useState(null);
	const { register } = useAuth();
	const navigate = useNavigate();
	// Set confirm password and check if it matches the password
	const handleConfirmPassword = (e) => {
		const value = e.target.value;
		setConfirmPassword(value);
		if (value !== "") {
			setMatchPassword(password === value);
		};
	};
	// Handle user registration
	const handleRegister = async (e) => {
    e.preventDefault();
		try {
			const userRegister = await register(
				email, 
				username, 
				password, 
				confirmPassword
			);
			
			if (!userRegister.success) {
				setError(userRegister.error);
			} else {
				setError(null);
				navigate("/auth/login");
			};
		} catch(error) {
			throw error;
		}
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Register</h1>
			<p>Already have an account? 
				<Link to="/auth/login" className="text-blue-500">Login</Link>
			</p>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
						type="email" 
						name="email" 
						id="email" 
						placeholder="user123@email.com" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} 
						required 
					/>
        </div>
				<div>
					<label htmlFor="username">Username</label>
					<input 
						type="text" 
						id="username" 
						name="username"
						placeholder="John" 
						value={username} 
						onChange={(e) => setUsername(e.target.value)} 
						required 
					/>
				</div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
						type="password" 
						id="password" 
						name="password" 
						value={password} 
						onChange={(e) => setPassword(e.target.value)} 
						required 
					/>
        </div>
				<div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
						type="password" 
						id="confirmPassword" 
						name="confirmPassword" 
						value={confirmPassword} 
						onChange={handleConfirmPassword}
						required 
					/>
					{matchPassword && 
						<p className="text-green-500">Passwords match!</p>
					}
					{confirmPassword && !matchPassword && 
						<p className="text-red-500">Passwords need to match</p>
					}
        </div>
				{error && 
          <ul>
            {error.map((error, index) => {
              return <li key={index} className="text-red-400">{error?.message || error }</li>;
            })}
          </ul>
        }
        <button type="submit">Register</button>
      </form>
    </div>
  )
};
