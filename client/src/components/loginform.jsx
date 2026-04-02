import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../assets/api/api";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(formData);
      if (data && data.success) {
        navigate("/dashboard");
      } else {
        setError(data?.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
          <h1 className="font-bold text-xl mb-4">Login To Charity Mind</h1>
          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="**********"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            {error && <p className="text-red-600 mb-2">{error}</p>}

            <div className="mb-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-600 text-white text-xl py-2 rounded-lg disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <p className="text-center mb-2">Don't have an account?</p>
            <div>
              <Link
                to="/register"
                className="block w-full bg-pink-600 text-white text-center py-2 rounded-lg"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginForm;
