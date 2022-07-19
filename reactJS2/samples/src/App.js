import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div>Hello!</div>
      <Routes path="/" elemenet={<Home />}/>
    </Router>
  );
}

export default App;
