import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo (3).png";

function Header() {
  return (
    <header className="bg-pink-600">
      <nav className="flex container mx-auto items-center justify-between flex-col md:flex-row sm:flex-col">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-16 h-14 p-1" alt="logo(3).png" />

          <h1 className="text-xl font-bold text-start text-blue-900">
            Charity Minds
          </h1>
        </div>

        <div>
          <ul className="flex ml-auto gap-5 text-black">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
