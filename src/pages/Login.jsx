import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "mdtabishfiroz@gmail.com" && password === "Akhil@04") {
      localStorage.setItem("isAuth", "true");

      // trigger navbar update
      window.dispatchEvent(new Event("authChange"));

      navigate("/price");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-96 transition-all"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
