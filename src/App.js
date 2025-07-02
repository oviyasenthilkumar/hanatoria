import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import OurServices from "./components/Pages/OurServices.jsx";
import OurWorks from "./components/Pages/OurWorks.jsx";
import ContactForm from "./components/Pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Tracking from "./components/Tracking.jsx";


const App = () => {
  return (
    <Router>
      <Tracking/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/works" element={<OurWorks />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;