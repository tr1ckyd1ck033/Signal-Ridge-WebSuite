import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-srgray/30 mt-16 bg-gradient-to-b from-transparent to-srblack/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 gradient-text">
              Signal Ridge
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional investigative services delivering precision
              intelligence with unwavering discretion and integrity.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:signalridgehq@proton.me"
                className="w-10 h-10 rounded-lg bg-srgray hover:bg-sryellow/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-sryellow transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-gray-400 hover:text-sryellow transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-sryellow transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-sryellow transition-colors text-sm"
              >
                Contact
              </Link>
              <Link
                to="/portal"
                className="block text-gray-400 hover:text-sryellow transition-colors text-sm"
              >
                Client Portal
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-sryellow flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Mountain Home, ID</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 text-sryellow flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:signalridgehq@proton.me"
                  className="hover:text-sryellow transition-colors"
                >
                  signalridgehq@proton.me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-srgray/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="footer-note text-center md:text-left">
              © {currentYear} Signal Ridge. All rights reserved.
            </div>
            <div className="footer-note text-center md:text-right">
              Internal Use Only — Revision 1.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
