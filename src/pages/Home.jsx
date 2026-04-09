import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import cementImg from "../assets/brand.png";
import steelImg from "../assets/brand.png";
import sandImg from "../assets/brand.png";
import hallImg from "../assets/brand.png";

function Home() {
  const whatsappLink = "https://wa.me/919934261468";
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Firoz Enterprises | Construction Materials";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Best cement, steel, sand supplier and marriage hall booking service.";
  }, []);

  // 🔍 SEARCH
  const handleSearch = () => {
    const value = search.toLowerCase();

    if (value.includes("hall")) {
      navigate("/hall");
    } else {
      navigate("/price");
    }
  };

  const products = [
    { title: "Premium Cement", img: cementImg },
    { title: "TMT Steel Rod", img: steelImg },
    { title: "River Sand", img: sandImg },
    { title: "Marriage Hall", img: hallImg },
  ];

  return (
    <div className="font-sans">
      {/* 🔥 HERO */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-24 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
          Welcome to <br className="sm:hidden" /> Firoz Enterprises
        </h1>

        {/* 🚧 MARQUEE */}
        <div className="overflow-hidden whitespace-nowrap mb-6">
          <div className="animate-marquee-right">
            <span className="mr-10 font-bold text-white  text-xl">
              Cement • Steel • Sand • Hall Booking
            </span>
          </div>
        </div>

        {/* 🔍 SEARCH */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search cement, steel, hall..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded w-full sm:w-80 text-black focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-400 px-6 py-2 rounded text-black font-semibold hover:scale-105 transition"
          >
            Search
          </button>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition shadow-lg"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* 🔥 SERVICES */}
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl text-center font-bold mb-10">Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.img}
                className="w-full h-40 object-cover rounded-t-xl"
              />

              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{item.title}</h3>

                {item.title === "Marriage Hall" ? (
                  <Link
                    to="/hall"
                    className="block mt-3 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                  >
                    View Halls
                  </Link>
                ) : (
                  <Link
                    to="/price"
                    className="block mt-3 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                  >
                    View Prices
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Need Materials or Booking?
        </h2>

        <p className="mb-5 text-sm sm:text-base">
          Contact us for best prices and services
        </p>

        <Link
          to="/contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Home;
