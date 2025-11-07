import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
          ? "py-2 bg-srblack/95 backdrop-blur-xl border-b border-srgray/50 shadow-2xl"
          : "py-6 border-b border-srgray/30"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Logo container - WIDER for better proportions */}
        <div className="flex justify-center mb-4">
          <div className="max-w-[180px] max-w-2xl">
            <img src="/assets/signal-ridge-mark.svg" alt="Signal Ridge" className="h-12" />

              className={`header-logo transition-all duration-300 ${
                scrolled ? "max-w-[120px]" : "max-w-[700px]"
              }`}
            
          </div>
        </div>

        {/* Navigation - TIGHTER spacing */}
        <nav
          className={`flex flex-wrap justify-center gap-2 md:gap-6 transition-all duration-300 ${
            scrolled ? "mt-2 text-sm" : "mt-4 text-base"
          }`}
        >
          <a
            href="/"
            className={`nav-link ${
              isActive("/") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            Home
          </a>
          <a
            href="/services"
            className={`nav-link ${
              isActive("/services") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            Services
          </a>
          <a
            href="/lab7"
            className={`nav-link ${isActive("/lab7") ? "text-sryellow" : "hover:text-sryellow"}`}
          >
            Lab 7
          </a>
          <a
            href="/about"
            className={`nav-link ${
              isActive("/about") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            About
          </a>
          <a
            href="/contact"
            className={`nav-link ${
              isActive("/contact") ? "text-sryellow" : "hover:text-sryellow"
            }`}
          >
            Contact
          </a>
          <a
            href="/portal"
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
          </a>
        </nav>
      </div>
    </header>
  );
}
