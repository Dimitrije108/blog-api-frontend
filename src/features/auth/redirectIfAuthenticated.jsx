import { redirect } from "react-router-dom";
import checkAuth from "./checkAuth";
// Login and Register pages should not display to logged in users
// Check if user is logged in and redirect if needed
export default async function redirectIfAuthenticated() {
  const isAuth = await checkAuth();
  
  if (isAuth) {
    return redirect("/");
  };
  
  return;
};
