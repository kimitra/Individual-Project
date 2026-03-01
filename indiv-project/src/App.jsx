import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}  />
          <Route path="/projects/:id" element={<ProjectDetail />}  />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
