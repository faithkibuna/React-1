import { Link } from "react-router-dom";
import DashboardForm from "../components/dashboardform";
import Footer from "../components/footer";
import Header from "../components/Header";

function Dashboard() {
  return (
    <>
      <Header />
      <DashboardForm />
      <Footer />
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>``
    </>
  );
}

export default Dashboard;
