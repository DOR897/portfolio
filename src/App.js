import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import './styles/components.css';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Resume />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
