import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import LoginForm from "../components/loginform";

function Login() {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />

      <Link to="/register">Register</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

export default Login;
