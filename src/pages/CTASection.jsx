import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">
        Need Materials or Booking?
      </h2>

      <p className="mb-5">Contact us for best prices and services</p>

      <Link
        to="/contact"
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default CTASection;
