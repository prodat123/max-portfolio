import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Import the Navbar component
// import Home from "./pages/Home"; // Create Home, Contact, and Projects pages
// import Contact from "./Contact";
import Projects from "./Projects";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar /> {/* Navbar appears on all pages */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
