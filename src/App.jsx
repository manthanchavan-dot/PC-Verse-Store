import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Product";
import BuildPC from "./pages/Buildpc";
import Contact from "./pages/Contact";

import "./App.css";

export function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/buildpc" element={<BuildPC />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
