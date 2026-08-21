import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("theme") === "dark";
  });

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur transition-colors duration-300 dark:border-gray-800 dark:bg-[#080D0D]/95">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Konfirm Tech Africa"
    className="h-12 w-auto object-contain"
  />
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[14px] font-medium transition-colors ${
                  isActive
                    ? "text-[#00529C]"
                    : "text-[#3F3F3F] hover:text-[#00529C] dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-6 lg:flex">

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#333333] transition-all duration-300 hover:bg-gray-50 hover:text-[#00529C] dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun size={18} strokeWidth={1.8} />
            ) : (
              <Moon size={18} strokeWidth={1.8} />
            )}
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="flex h-11 items-center justify-center rounded-md bg-[#00529C] px-6 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#003F78] hover:shadow-md"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center text-gray-800 dark:text-gray-200 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 transition-colors duration-300 dark:border-gray-800 dark:bg-[#080D0D] lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `border-b border-gray-100 py-4 text-[15px] font-medium dark:border-gray-800 ${
                    isActive
                      ? "text-[#00529C]"
                      : "text-[#3F3F3F] dark:text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-5 flex items-center justify-between">

              {/* Mobile Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors dark:border-gray-700 dark:text-gray-200"
              >
                {isDark ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-[#00529C] px-5 py-3 text-sm font-semibold text-white"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}