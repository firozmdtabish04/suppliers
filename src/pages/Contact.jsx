import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    formData.append("time", new Date().toLocaleString());

    emailjs
      .send(
        "service_xwbxwd4",
        "template_trped3n", // 🔁 replace
        Object.fromEntries(formData),
        "jbpNd-lB9-QGazFkH", // 🔁 replace
      )
      .then(
        () => {
          setPopup({
            show: true,
            type: "success",
            message: "Message sent successfully ",
          });
          setLoading(false);
          form.current.reset();
        },
        () => {
          setPopup({
            show: true,
            type: "error",
            message: "Failed to send ",
          });
          setLoading(false);
        },
      );

    setTimeout(() => {
      setPopup({ show: false, type: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center px-4 py-10">
      {/* POPUP */}
      {popup.show && (
        <div
          className={`fixed top-5 right-5 px-6 py-4 rounded-xl shadow-lg text-white z-50 ${
            popup.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {popup.message}
        </div>
      )}

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Contact Info
          </h2>

          <p className="text-gray-600 mb-6">
            Feel free to reach out anytime. We’d love to hear from you!
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <FontAwesomeIcon icon={faPhone} /> +91 9934261468
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> mdfirozakhtar314@gmail.com
            </p>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919934261468"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp Chat
          </a>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Send Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-xl h-32 focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
