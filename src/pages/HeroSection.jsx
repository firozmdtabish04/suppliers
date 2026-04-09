import SearchBar from "./SearchBar";

const HeroSection = ({ whatsappLink }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-24 text-center px-4">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
        Welcome to <br className="sm:hidden" /> Firoz Enterprises
      </h1>

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="animate-marquee-right">
          <span className="mr-10 font-bold text-white text-xl">
            Cement • Steel • Sand • Bricks • Hall Booking
          </span>
        </div>
      </div>

      <SearchBar />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition shadow-lg"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default HeroSection;
