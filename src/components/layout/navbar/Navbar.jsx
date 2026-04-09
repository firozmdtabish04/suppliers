import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faSignInAlt,
  faSignOutAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true",
  );

  const whatsappLink = "https://wa.me/919934261468";

  // 🔄 Sync auth
  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(localStorage.getItem("isAuth") === "true");
    };

    window.addEventListener("authChange", checkAuth);
    return () => window.removeEventListener("authChange", checkAuth);
  }, []);

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    window.dispatchEvent(new Event("authChange"));
  };

  const navLink = "hover:text-yellow-300 transition duration-300 font-medium";

  return (
    <>
      {/* 🔝 TOPBAR */}
      <div className="bg-black text-white text-xl py-2 px-6 flex justify-center sm:justify-between items-center">
        {/* 📍 DESKTOP LEFT */}
        <a
          href="https://maps.app.goo.gl/wtKXm94KDN1K7MYg9"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-2 hover:text-yellow-300"
        >
          <FontAwesomeIcon icon={faLocationDot} />
          Strore Location
        </a>

        {/* 📱 MOBILE CENTER */}
        <div className="flex items-center gap-6 sm:hidden">
          <a href="https://maps.app.goo.gl/wtKXm94KDN1K7MYg9" target="_blank">
            <FontAwesomeIcon icon={faLocationDot} />
          </a>

          <a href="tel:9934261468">
            <FontAwesomeIcon icon={faPhone} />
          </a>

          <a href={whatsappLink}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        {/* 📞 DESKTOP RIGHT */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:9934261468"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FontAwesomeIcon icon={faPhone} />
            9934261468
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-xl hover:bg-green-600 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* 🔵 NAVBAR */}
      <nav className="bg-indigo-600/95 backdrop-blur-md text-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="text-lg sm:text-2xl font-bold hover:scale-105 transition"
          >
            Firoz Enterprises
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 items-center text-xl">
            <Link to="/" className={navLink}>
              Home
            </Link>

            <Link to="/contact" className={navLink}>
              Contact
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-xl hover:bg-green-600 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        <div
          className={`md:hidden bg-indigo-700 transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-96 py-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            {isAuth ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-green-500 px-4 py-2 rounded">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
