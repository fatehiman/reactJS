import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <div>
      <header id="header">
        <nav className="links" style={{'--items':'4'}} >
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/news">News</Link>
          <Link to="/xxx">NotFound</Link>
          <span className="line"></span>
        </nav>
      </header>
    </div>
  );
};

export default TopMenu;
