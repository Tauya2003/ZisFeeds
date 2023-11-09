import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Brand from "../pages/Brand";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:brand" element={<Brand />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
