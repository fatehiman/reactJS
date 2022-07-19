import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Hello from "./pages/hello";

function App() {
  return (
    <Router>
      <div>Welcome home!</div>
      <Routes>
        <Route path="/" elemenet={<Home />} />
        <Route path="/hello" elemenet={<Hello/>} />
      </Routes>
    </Router>
  );
}

export default App;
