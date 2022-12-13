import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container-flex">
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
