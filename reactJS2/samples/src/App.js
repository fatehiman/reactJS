import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <div style={{ display:'inline-block' , border: "1px solid #ffa0a0",marginBottom: "9px" }}>
        <nav>
          Choose sample:
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/profile"> Profile </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div style={{ marginTop: "10px", border:"1px solid #ffa0a0", display:"inline-block" }}> Foooter </div>
    </Router>
  );
}

export default App;
