import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/NavbarComponent';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
       <Routes>
         <Route></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
