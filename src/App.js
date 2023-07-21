import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Projects from "./screens/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
