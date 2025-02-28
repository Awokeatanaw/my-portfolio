import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars ,FaTimes } from 'react-icons/fa';

function Navbar() {
    const [open, setOpen] = useState(false);
  
    return (
      <nav className="shadow-md w-full fixed top-0 left-0 z-10 bg-navy">
        <div className="flex items-center justify-between py-4 px-7 md:px-10">
          {/* ✅ Logo */}
          <div className="text-white text-2xl font-bold cursor-pointer">
            Awoke
          </div>
  
          {/* ✅ Menu Icon */}
          <div 
            onClick={() => setOpen(!open)} 
            className="text-3xl text-white cursor-pointer md:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
  
          {/* ✅ Navigation Links */}
          <ul
            className={`md:flex md:items-center md:static absolute right-0 w-[150px] bg-navy md:bg-transparent md:w-auto transition-all duration-500 ease-in ${
              open ? "top-16 opacity-100" : "top-[-500px] opacity-0 md:opacity-100"
            }`}
          >
            <li className="md:ml-8 text-xl p-3 md:p-0">
              <Link to="/home" className="text-white hover:text-indigo-300" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="md:ml-8 text-xl p-3 md:p-0">
              <Link to="/aboutme" className="text-white hover:text-indigo-300" onClick={() => setOpen(false)}>About Me</Link>
            </li>
            <li className="md:ml-8 text-xl p-3 md:p-0">
              <Link to="/project" className="text-white hover:text-indigo-300" onClick={() => setOpen(false)}>Projects</Link>
            </li>
            <li className="md:ml-8 text-xl p-3 md:p-0">
              <Link to="/skills" className="text-white hover:text-indigo-300" onClick={() => setOpen(false)}>Skills</Link>
            </li>
            <li className="md:ml-8 text-xl p-3 md:p-0">
              <Link to="/contact" className="text-white hover:text-indigo-300" onClick={() => setOpen(false)}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;