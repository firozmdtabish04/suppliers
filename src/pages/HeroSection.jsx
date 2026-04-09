import { useEffect, useState } from "react";
import dealerImg from "../assets/HERO.jpeg";

import bg2 from "../assets/jute.png";
import bg3 from "../assets/sand.jpeg";
import bg4 from "../assets/store.png";
import bg5 from "../assets/Cement.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HeroSection = ({ whatsappLink }) => {
  const images = [bg2, bg3, bg4, bg5];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white overflow-hidden">
      {/* 🔥 BACKGROUND SLIDES (FADE + ZOOM) */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            i === index ? "opacity-100 scale-110" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* 🌑 PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>

      {/* ✨ LIGHT GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-30 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 opacity-30 blur-[120px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-4">
          <p className="text-sm bg-white/20 inline-block px-3 py-1 rounded backdrop-blur">
            Quality & Precision
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Strong Foundations <br />
            <span className="text-yellow-400">Forever</span>
          </h1>

          <p className="text-gray-200 max-w-md">
            Delivering high-quality construction materials with trust and
            reliability.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap mt-6">
            <a
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              Explore Products →
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-6 py-3 rounded-xl hover:bg-green-600 transition flex items-center gap-2 hover:scale-105 hover:shadow-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center w-72 shadow-2xl hover:scale-105 transition duration-500">
            <img
              src={dealerImg}
              alt="Dealer"
              className="w-36 h-36 mx-auto rounded-full border-4 border-yellow-400 object-cover mb-4 shadow-lg"
            />

            <h3 className="text-xl font-bold">Mohammad Firoz Akhtar</h3>

            <p className="text-yellow-400 text- mb-2">
              Construction Material Dealer
            </p>

            <p className="text-gray-300 text-l italic">
              “Strong foundations build lasting relationships”
            </p>

            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition"
            >
              <FontAwesomeIcon icon={faPhone} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
