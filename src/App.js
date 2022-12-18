import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderBar } from "./components/header-bar";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Home } from "./components/home";
import { WebResume } from "./components/web-resume";
import { PieceFocus } from "./components/piece-focus";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container-flex">
        <Router>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<WebResume />} />
            <Route path="/piece/:id" element={<PieceFocus />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
