import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-4">
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
