
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortalStub from "./components/PortalStub";
import Lab7 from "./pages/Lab7";
import WhisperLock from "./pages/WhisperLock";

export default function App() {
  return (
    <div className="min-h-screen bg-srblack text-neutral-200">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portal" element={<PortalStub/>} />
          <Route path="/lab7" element={<Lab7/>} />
          <Route path="/whisperlock" element={<WhisperLock/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
