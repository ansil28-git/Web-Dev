import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/services/Service";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
