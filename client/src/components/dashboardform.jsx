import React, { useState, useEffect } from "react";
import StatCards from "./statscards";
import UserTable from "./usertable";
import StatsCard from "./statscard";

export default function DashboardForm() {
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
