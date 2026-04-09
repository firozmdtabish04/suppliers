import ServiceCard from "./ServiceCard";
import cementImg from "../assets/brand.png";
import cement from "../assets/Cement.jpg";
import tmt from "../assets/tmt.jpeg";
import sand from "../assets/sand.jpeg";
import store from "../assets/store.png";
import tmtSquare from "../assets/tmtSquare.png";
import brick from "../assets/brick.png";
import jute from "../assets/jute.png";
import marriage from "../assets/marriage.png";
const products = [
  { title: "Premium Cement", img: cement },
  { title: "TMT Steel Rod", img: tmt },
  { title: "River Sand", img: sand },
  { title: "Marriage Hall", img: marriage },
  { title: "Store", img: store },
  { title: "TMT Square", img: tmtSquare },
  { title: "Jute Rope", img: jute },
  { title: "Bricks", img: brick },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">Products Available</h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {products.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
