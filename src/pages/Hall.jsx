import { useEffect, useState } from "react";

// MUI
import { DataGrid } from "@mui/x-data-grid";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Hall() {
  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    capacity: "",
    eventType: "",
    timeSlot: "",
    contact: "",
    description: "",
    imageUrl: "",
    available: true,
  });

  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true",
  );

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(localStorage.getItem("isAuth") === "true");
    };

    window.addEventListener("authChange", checkAuth);
    return () => window.removeEventListener("authChange", checkAuth);
  }, []);

  const loadData = () => {
    getAllHalls()
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = () => {
    const payload = {
      ...form,
      price: Number(form.price),
      capacity: Number(form.capacity),
    };

    createHall(payload).then(() => {
      loadData();
      setForm({
        name: "",
        location: "",
        price: "",
        capacity: "",
        eventType: "",
        timeSlot: "",
        contact: "",
        description: "",
        imageUrl: "",
        available: true,
      });
    });
  };

  const handleDelete = (id) => {
    deleteHall(id).then(() => loadData());
  };

  // TABLE
  const columns = [
    { field: "name", headerName: "Hall", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "price", headerName: "Price ₹", flex: 1 },
    { field: "capacity", headerName: "Capacity", flex: 1 },
    { field: "eventType", headerName: "Event", flex: 1 },
    ...(isAuth
      ? [
          {
            field: "actions",
            headerName: "Delete",
            renderCell: (params) => (
              <button
                onClick={() => handleDelete(params.row.id)}
                className="text-red-500"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Hall Booking System
      </h1>

      {/* FORM */}
      {isAuth && (
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Add Hall</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              placeholder="Hall Name"
              className="border p-3 rounded-lg"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Location"
              className="border p-3 rounded-lg"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />

            <input
              placeholder="Price"
              className="border p-3 rounded-lg"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input
              placeholder="Capacity"
              className="border p-3 rounded-lg"
              value={form.capacity}
              onChange={(e) => setForm({ ...form, capacity: e.target.value })}
            />

            <select
              className="border p-3 rounded-lg"
              value={form.eventType}
              onChange={(e) => setForm({ ...form, eventType: e.target.value })}
            >
              <option value="">Event Type</option>
              <option value="WEDDING">Wedding</option>
              <option value="PARTY">Party</option>
              <option value="CONFERENCE">Conference</option>
            </select>

            <select
              className="border p-3 rounded-lg"
              value={form.timeSlot}
              onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
            >
              <option value="">Time Slot</option>
              <option value="MORNING">Morning</option>
              <option value="EVENING">Evening</option>
              <option value="FULL_DAY">Full Day</option>
            </select>

            <input
              placeholder="Contact"
              className="border p-3 rounded-lg"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />

            <textarea
              placeholder="Description"
              className="border p-3 rounded-lg col-span-2"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition"
            >
              Add Hall
            </button>
          </div>
        </div>
      )}

      {/* 🔥 CARD UI */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-6 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {item.name}
            </h2>

            <p className="text-gray-500 text-lg mb-2">📍 {item.location}</p>

            <p className="text-2xl font-bold text-green-600 mb-3">
              ₹ {item.price}
            </p>

            <div className="text-gray-700 text-base space-y-1 mb-4">
              <p>👥 Capacity: {item.capacity} people</p>
              <p>🎉 Event: {item.eventType}</p>
              <p>⏰ Time: {item.timeSlot}</p>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href={`tel:${item.contact}`}
                className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                <FontAwesomeIcon icon={faPhone} /> Call
              </a>

              <a
                href={`https://wa.me/${item.contact}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition font-semibold"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> Chat
              </a>

              {isAuth && (
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white p-4 rounded shadow">
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id}
          pageSize={5}
        />
      </div>
    </div>
  );
}

export default Hall;
