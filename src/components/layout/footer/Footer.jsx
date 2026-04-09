import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Firoz Enterprises</h2>
          <p className="text-gray-400 mb-3">
            Trusted supplier of quality construction materials. We deliver
            reliability and excellence in every order.
          </p>

          {/* ✅ Marriage Hall Paragraph */}
          <p className="text-gray-400">
            Our premium marriage hall offers a perfect venue for weddings,
            receptions, and special occasions. With spacious interiors, elegant
            design, and modern facilities, we ensure your events are celebrated
            in style and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Hall</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Our Location</h2>
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.9360724482464!2d84.99137152846576!3d25.130950212759213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2cb016185e495%3A0xd16731b98f00f5f3!2sFiroz%20Trader!5e1!3m2!1sen!2sin!4v1775620995771!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Firoz Trader Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Firoz Enterprises. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
