import { Gallery } from "./components/gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container-flex">
        <Router>
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
