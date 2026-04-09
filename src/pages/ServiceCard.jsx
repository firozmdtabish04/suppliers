import { Link } from "react-router-dom";

const ServiceCard = ({ title, img }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition">
      <img src={img} className="w-full h-40 object-cover rounded-t-xl" />

      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{title}</h3>

        <Link
          to="/items"
          className="block mt-3 bg-indigo-600 text-white py-2 rounded"
        >
          {title === "Marriage Hall" ? "View Halls" : "View Prices"}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
