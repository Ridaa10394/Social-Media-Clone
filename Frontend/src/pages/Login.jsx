import { useState } from "react";
import { logIn } from "../apiCalls/authCalls";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [username , setUsername] = useState("");
   const [password , setPassword] = useState("");
   const navigate = useNavigate();

   const handleLogIn = async() => {
    if(!username || !password){
      alert("Please fill all the fields");
      return;
    }

    const user = {
      username,
      password
    }

    try{
      const response =  await logIn(user);
       
      console.log("Sign In Successful" , response);
        navigate("/home");
      // Clear the form
      setUsername("");
      setPassword("");
    }catch(error){
      console.error("Error during sign in" , error);
      alert("Sign In Failed. Please try again.");
    }
   }
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-700 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-700 focus:outline-none"
          />
          <div className="flex justify-between items-center">
            <Link to="/forgot-password" className="text-sm text-pink-600 hover:underline">
              Forgot Password?
            </Link>
            </div>
          <button
          type="button"
            className="w-full py-2 font-semibold text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition"
            onClick={handleLogIn}
          >
           Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;