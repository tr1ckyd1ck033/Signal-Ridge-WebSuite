import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-srblack/95 backdrop-blur-xl border-b border-srgray/50 shadow-2xl"
          : "py-6 border-b border-srgray/30"
      }`}
    >
      <div className="container mx-auto px-4">
        <Link to="/" className="block">
          <img
            src="/assets/logo-white.png"
            alt="Signal Ridge"
            className="header-logo"
          />
        </Link>

        <nav className="mt-6 flex flex-wrap justify-center gap-2 md:gap-6">
          <Link
            to="/"
            className={`nav-link ${
              isActive("/") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`nav-link ${
              isActive("/services") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              isActive("/about") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              isActive("/contact") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/portal"
            className={`nav-link ${
              isActive("/portal") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            <span className="flex items-center gap-2">
              Client Portal
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
