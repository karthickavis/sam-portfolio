import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#0f172a] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">Sam Jebaraj</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-gray-200 hover:text-emerald-300 transition duration-300 ${
                    isActive ? "text-emerald-300" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 text-xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0f172a] px-6 pb-6 space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 hover:text-emerald-300"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
