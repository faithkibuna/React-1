import { Link } from "react-router-dom";
import react from "react";
import logo from "../assets/image/logo (3).png";
function Header() {
  return (
    <header class="bg-pink-600">
      <nav class="flex container mx-auto items-center justify-between flex-col md:flex-row sm:flex-col">
        <div class="flex items-center gap-2">
          <img
            src="assets/image/logo (3).png"
            class="w-16 h-14 p-1"
            alt="logo"
          />
          <h1 class="text-xl font-bold text-start text-blue-900">
            charity minds
          </h1>
        </div>
        <div>
          <ul class="flex ml-auto gap-5 text-black">
            <li>
              <Link to="/login"> login</Link>
            </li>
            <li>
              <Link to="/index"> home</Link>
            </li>
            <li>
              <Link to="/register"> register </Link>
            </li>
            <li>
              <Link to="/dashboard"> dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
