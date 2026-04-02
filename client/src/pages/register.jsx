import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import RegisterForm from "../components/Registerform";

function Register() {
  return (
    <>
      <Header />
      <RegisterForm />
      <Footer />

      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

export default Register;