import { useState } from "react";
import {signUp} from "../apiCalls/authCalls.js";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name , setName] = useState("");
    const [username , setUserName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    // Handle SignUp 
    const handleSignUp = async() => {
      if(!name || !username || !email || !password){
        alert("Please fill all the fields");
        return;
      }

      const user = {
        name,
        username,
        email,
        password
      }
      console.log("Signing Up User: ", user);

      try{
        const response = await signUp(user);
        console.log("Sign Up Successful" , response);
        alert("Sign Up Successful! Please Sign In.");
        navigate("/login");
        // Clear the form
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
      }catch(error){
        console.error("Error during sign up" , error);
        alert("Sign Up Failed. Please try again.");
      }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form className="space-y-4" >
            <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-700 focus:outline-none"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-700 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button
          type="button"
            className="w-full py-2 font-semibold text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
         <Link to="/login" className="text-pink-600 hover:underline">   
            Log In
         </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;