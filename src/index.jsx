// src/Index.jsx
import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Schools from "./pages/Schools";
import Ceramics from "./pages/Ceramics";
import NotFound from "./pages/NotFound";
import AOS from "aos";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 650,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/ceramics" element={<Ceramics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
