import { useEffect, useState } from "react";
import {
  getAllConcrete,
  createConcrete,
  updateConcrete,
  deleteConcrete,
} from "../services/concreteService";

function PriceList() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    brand: "",
    rating: "",
    type: "",
  });
  const [editId, setEditId] = useState(null);
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true",
  );
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(false);

  // Fetch
  const fetchData = async () => {
    setLoading(true);
    const res = await getAllConcrete();
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(localStorage.getItem("isAuth") === "true");
    };
    window.addEventListener("authChange", checkAuth);
    return () => window.removeEventListener("authChange", checkAuth);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.rating < 1 || form.rating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }

    const payload = {
      ...form,
      price: Number(form.price),
      rating: Number(form.rating),
    };

    if (editId) {
      await updateConcrete(editId, payload);
      setEditId(null);
      alert("Material updated successfully!");
    } else {
      await createConcrete(payload);
      alert("Material added successfully!");
    }

    setForm({ name: "", price: "", brand: "", rating: "", type: "" });
    fetchData();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      await deleteConcrete(id);
      alert("Material deleted successfully!");
      fetchData();
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "CEMENT":
        return "bg-blue-100 text-blue-700";
      case "STEEL":
        return "bg-gray-200 text-gray-800";
      case "SAND":
        return "bg-yellow-100 text-yellow-700";
      case "STONE":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  // Filter + Sort
  const filteredData = data
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Material Price List
      </h1>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg flex-1"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* FORM */}
      {isAuth && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-xl mb-10 grid md:grid-cols-2 gap-5"
        >
          <input
            name="name"
            placeholder="Material Name"
            value={form.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            name="rating"
            type="number"
            placeholder="Rating (1-5)"
            value={form.rating}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          >
            <option value="">Select Type</option>
            <option value="CEMENT">Cement</option>
            <option value="STEEL">Steel</option>
            <option value="SAND">Sand</option>
            <option value="STONE">Stone</option>
          </select>

          <button className="md:col-span-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
            {editId ? "Update Material" : "Add Material"}
          </button>
        </form>
      )}

      {/* LOADING */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No materials available
          </p>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-6 border"
            >
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>

              <span
                className={`inline-block px-3 py-1 text-sm rounded-full mb-3 font-semibold ${getTypeColor(
                  item.type,
                )}`}
              >
                {item.type}
              </span>

              <p className="text-2xl font-bold text-green-600 mb-2">
                ₹{item.price}
              </p>

              <p className="text-gray-600 mb-1 text-lg">🏢 {item.brand}</p>

              <div className="text-yellow-500 text-lg mb-4">
                {"⭐".repeat(Math.round(item.rating || 0))}
              </div>

              {isAuth && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-yellow-400 py-2 rounded-lg hover:bg-yellow-500 font-semibold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PriceList;
