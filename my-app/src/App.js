import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/NavbarComponent';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './app.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/project" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
