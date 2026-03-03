import react from "react";
import logo from "../assets/image/logo (3).png";
function Header() {
  return (
    <header className="bg-pink-600 fixed top-0 left-0 w-full z-1000 flex-col md:flex-row sm:flex-col">
      <nav className="container mx-auto flex items-center justify-between px-4 h-16 flex-col md:flex-row sm:flex-col">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-16 h-14" alt="logo" />
          <h1 className="text-xl font-bold text-start text-blue-900">
            charity minds
          </h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
