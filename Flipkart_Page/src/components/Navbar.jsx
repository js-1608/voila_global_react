import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="bg-white text-white px-8 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* LOGO + TITLE */}
      <div className="flex items-center gap-4">
        <img src={logo1} alt="logo1" className="w-40 h-auto" />
        <div className="w-px h-12 bg-linear-to-b from-gray-300 to-gray-500"></div>
        <img src={logo2} alt="logo2" className="w-20 h-auto" />
      </div>

      {/* Right side contact links */}
      <ul className="flex gap-2 text-sm font-medium">
        <li>
          <a
            href="mailto:example@gmail.com"
            className="text-black hover:text-gray-700"
          >
            Info@Intenim.com
          </a>
        </li>
        <div className="w-px h-6 bg-linear-to-b from-gray-300 to-gray-500"></div>
        <li>
          <a
            href="tel:+910000000000"
            className="text-black hover:text-gray-700"
          >
            +91 9810554548
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
