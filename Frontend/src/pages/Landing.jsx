// src/pages/Landing.jsx
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

export default function Landing() {
  return (
     <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpeg')" }} // <-- Replace with your image path
    >
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-6 py-4  bg-opacity-90 ">
        <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-pink-500">Pixigram</h1>
        <img
      src="/logo2.png" // <-- Replace with your logo path
      alt="Pixigram Logo"
      className="h-8 w-8 object-contain"
    />
    </div>
        
       
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col md:flex-row items-center justify-center gap-10 px-8 py-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Share Your Moments with{" "}
            <span className="text-pink-500">Pixigram</span>
          </h2>
          <p className="text-gray-600 mb-6">
            A new way to connect, share, and discover. Capture your best
            memories and be part of the Pixigram community.
          </p>
           <div className="space-x-3">
            <Link to="/login">
          <button className="px-4 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition">
            Log In
          </button> 
          </Link>
          <Link to="/signup">
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-pink-500 transition">
            Sign Up
          </button>
          </Link>
        </div>
        </motion.div>

       
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 mt-auto">
        <p>
          © {new Date().getFullYear()} Pixigram. Built with ❤️ using React +
          Tailwind.
        </p>
      </footer>
    </div>
  );
}
