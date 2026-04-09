import ServiceCard from "./ServiceCard";
import cementImg from "../assets/brand.png";

const products = [
  { title: "Premium Cement", img: cementImg },
  { title: "TMT Steel Rod", img: cementImg },
  { title: "River Sand", img: cementImg },
  { title: "Marriage Hall", img: cementImg },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-10">Our Services</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {products.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
