import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import githubIcon from "/src/assets/icons/github-mark.svg";
import logoutIcon from "/src/assets/icons/logout.svg";

// TODO:
// - Render logout button only if user is logged in
// - Render login button if user is not logged in
// - If logged in user is admin/author render a CMS page button

export default function Header() {
	const navigate = useNavigate();
	const { logout } = useAuth();
	// Logout user
	const handleLogout = () => {
		logout();
		navigate("/auth/login");
	};

	return (
		<header className="p-4 pt-6 flex items-center">
			<h1 className="mx-auto font-['Midland-Regular']">
				Archaeoblog
			</h1>
			<Link 
				to="https://github.com/Dimitrije108/blog-api-cms"
				className="w-6"
			>
				<img 
					src={githubIcon}
					alt="github icon" 
					title="GitHub"
				/>
			</Link>
			<button 
				className="w-6 p-0 ml-4"
				onClick={handleLogout}
			>
				<img 
					src={logoutIcon}
					alt="logout icon" 
					title="Logout"
				/>
			</button>
		</header>
	)
};
