import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./componets/Header";
import Footer from "./componets/footer";
import Regesterform from "./componets/Regesterform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Regesterform />
      <Footer />
    </>
  );
}

export default App;
