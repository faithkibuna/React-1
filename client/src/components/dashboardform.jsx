import React, { useState, useEffect } from "react";
import StatCards from "./statscards";
import UserTable from "./usertable";

function DashboardForm() {
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <h1 className="text-3xl font-bold mb-6">Welcome Joy, to Charity Minds</h1>

      {/*  Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">70</h2>
          <p>Users</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">45</h2>
          <p>Children's Homes</p>
        </div>

        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">1000</h2>
          <p>Visitors</p>
        </div>

        <div className="bg-red-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-3xl font-bold">500000</h2>
          <p>Orphanage</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Group Users</h2>

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Phone Number</th>
              <th className="border p-2">Date of Birth</th>
              <th className="border p-2">Gender</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">June</td>
              <td className="border p-2">Justine</td>
              <td className="border p-2">junejustine9@gmail.com</td>
              <td className="border p-2">June</td>
              <td className="border p-2">0712345678</td>
              <td className="border p-2">10/05/2001</td>
              <td className="border p-2">Male</td>
            </tr>

            <tr>
              <td className="border p-2">Faith</td>
              <td className="border p-2">Kibuna</td>
              <td className="border p-2">faithkibuna254@gmail.com</td>
              <td className="border p-2">Zoey</td>
              <td className="border p-2">0798765432</td>
              <td className="border p-2">12/08/2002</td>
              <td className="border p-2">Female</td>
            </tr>

            <tr>
              <td className="border p-2">Amos</td>
              <td className="border p-2">Okello</td>
              <td className="border p-2">amosokello@gmail.com</td>
              <td className="border p-2">Amos</td>
              <td className="border p-2">0701234567</td>
              <td className="border p-2">10/07/2000</td>
              <td className="border p-2">Male</td>
            </tr>

            <tr>
              <td className="border p-2">James</td>
              <td className="border p-2">Muriuki</td>
              <td className="border p-2">james.muriuki@example.com</td>
              <td className="border p-2">James</td>
              <td className="border p-2">0719876543</td>
              <td className="border p-2">22/11/1992</td>
              <td className="border p-2">Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  function DashboardForm() {
    const [users, setUsers] = useState([]);

    // fetching users from API
    useEffect(() => {
      fetch("https://charity-minds-backend.onrender.com/api/v1/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.data || []))
        .catch((err) => console.error("Error fetching users:", err));
    }, []);

    // Add user handler
    const handleAddUser = () => {
      const newUser = {
        firstName: "New",
        lastName: "User",
        username: `user${users.length + 1}`,
        email: `new${users.length + 1}@example.com`,
        phone: "0700000000",
        dob: "2000-01-01",
        gender: "other",
        createdAt: new Date().toISOString().split("T")[0], // Todays date
      };
      setUsers([...users, newUser]);
    };

    // Stats
    const totalUsers = users.length;
    const currentMonth = new Date().getMonth();
    const currentThisYear = new Date().getFullYear();
    const newThisMonth = users.filter((u) => {
      const createdAt = new Date(u.createdAt);
      return (
        createdAt.getMonth() === currentMonth &&
        createdAt.getFullYear() === currentThisYear
      );
    }).length;

    return (
      <div className="p-6">
        {/*Pass stats+ add handler*/}
        <StatCards
          totalUsers={totalUsers}
          newThisMonth={newThisMonth}
          onAddUser={handleAddUser}
        />

        {/*Pass users  down to table*/}
        <UserTable users={users} />
      </div>
    );
  }
}

export default DashboardForm;
