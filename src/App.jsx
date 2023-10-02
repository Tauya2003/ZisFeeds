import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Brand from "./pages/Brand";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:brand" element={<Brand />} />
      </Routes>
    </>
  );
}

export default App;
