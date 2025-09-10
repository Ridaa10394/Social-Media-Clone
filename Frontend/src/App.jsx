import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ForgotPassword from "./pages/ForgotPass";

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        
      </Routes>
    
  );
}

export default App