import React, { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const usersPerPage = 10;

  // Fetch users from backend
  useEffect(() => {
    setLoading(true);
    fetch("https://charity-minds-backend.onrender.com/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response;", data);
        setUsers(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users;", err);
        setError("Failed to fetch users!");
        setLoading(false);
      });
  }, []);

  // Filter and search logic

  const filteredUsers = (users || []).filter((user) => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(user.dob).toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(user.createdAt).toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMonth =
      monthFilter === "" ||
      new Date(user.createdAt).getMonth().toString() === monthFilter;

    return matchesSearch && matchesMonth;
  });

  // Pagination logic

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / usersPerPage),
  );
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="p-6">
      {/*Filters*/}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Active Accounts</h2>

        <div>
          <label className="font-semibold block mb-2 text-gray-700">
            Filter by Month
          </label>
          <select
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className="border rounded-lg p-2"
          >
            <option value="">-- Select Month--</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <option key={index} value={index.toString()}>
                {month}
              </option>
            ))}
          </select>

          <button
            onClick={() => setMonthFilter("")}
            className="ml-2 text-gray-700 bg-gray-400 hover:bg-gray-500 rounded-lg font-semibold px-4 py-2"
          >
            Reset
          </button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border bg-white text-black p-2 rounded-lg"
          ></input>
        </div>
      </div>

      {/*Table*/}

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        {loading ? (
          <div className="text-center py-6 font-semibold text-gray-500">
            {" "}
            Loading users...
          </div>
        ) : error ? (
          <div className="text-center py-6 font-semibold text-gray-500">
            {" "}
            {error}
          </div>
        ) : (
          <table className="min-w-full border-black border-2">
            <thead className="text-gray-700 bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">First Name</th>
                <th className="py-3 px-4 text-left">Last Name</th>
                <th className="py-3 px-4 text-left">User Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone Number</th>
                <th className="py-3 px-4 text-left">DOB</th>
                <th className="py-3 px-4 text-left">Gender</th>
                <th className="py-3 px-4 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{user.firstName} </td>
                    <td className="py-2 px-4 border-b">{user.lastName} </td>
                    <td className="py-2 px-4 border-b">{user.username} </td>
                    <td className="py-2 px-4 border-b">{user.email} </td>
                    <td className="py-2 px-4 border-b">{user.phone} </td>
                    <td className="py-2 px-4 border-b">{user.dob} </td>
                    <td className="py-2 px-4 border-b">{user.gender} </td>
                    <td className="py-2 px-4 border-b">{user.createdAt} </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-4 text-gray-500 font-semibold"
                  >
                    No users Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/*Pagination*/}
      {!loading && !error && (
        <div className="flex justify-center items-center text-blue-500 mt-4 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="border p-2 rounded hover:text-blue-600 disabled:opacity-50"
          >
            Previous
          </button>

          <span>
            page {currentPage} of {totalPages}{" "}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="border p-2 rounded hover:text-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
