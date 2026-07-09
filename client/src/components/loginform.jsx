import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../assets/api/api";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      <main className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">
            Login To Charity Mind
          </h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium mb-1"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium mb-1"
              >
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

            {error && (
              <p className="text-red-600 mb-2">{error}</p>
            )}

            <div className="mb-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-600 text-white text-xl py-2 rounded-lg disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <p className="text-center mb-2">
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="block w-full bg-pink-600 text-white text-center py-2 rounded-lg"
            >
              Register
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginForm;