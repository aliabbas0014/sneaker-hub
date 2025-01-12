import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the hamburger menu visibility

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* First Bar - Website Name */}
      <div className="text-black py-2">
        <div className="container mx-auto px-4">
          <h1 className="font-bold text-3xl h-12 mt-2 animate-pulse text-center tracking-[0.3em]">
            SneakerHub
          </h1>
        </div>
      </div>

      {/* Second Bar - Navigation Links */}
      <header className="bg-gray-600 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-center items-center px-4">
          {/* Navigation Links */}
          <nav className="flex flex-row space-x-20 font-bold">
            <ul className="flex sm:space-x-20 space-x-10 font-bold sm:flex-row flex-row sm:text-base text-lg">
              <li>
                <button
                  onClick={() => scrollToSection("adidas")}
                  className="hover:text-gray-300 hover:underline transition-colors duration-200"
                >
                  Adidas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nike")}
                  className="hover:text-gray-300 hover:underline transition-colors duration-200"
                >
                  Nike
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("puma")}
                  className="hover:text-gray-300 hover:underline transition-colors duration-200"
                >
                  Puma
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
