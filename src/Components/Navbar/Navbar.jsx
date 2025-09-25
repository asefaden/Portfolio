import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div className="navbar">
      <img src="/asse.jpg" alt="logo" className="logo" />
      <ul className={active ? "nav-menu-active" : "nav-menu"}>
        <Link to="/">
          {" "}
          <li onClick={() => setActive(!active)}>ABOUT</li>{" "}
        </Link>
        <Link to="/experience">
          {" "}
          <li>EXPERIENCE</li>{" "}
        </Link>
        <Link to="/projects">
          {" "}
          <li>PROJECTS</li>{" "}
        </Link>
        <Link to="/skills">
          {" "}
          <li>SKILLS</li>{" "}
        </Link>
        <Link to="/blogs">
          {" "}
          <li>BLOGS</li>{" "}
        </Link>
      </ul>
      <button><a href="tel:+251-919133701">Call Me</a></button>
    </div>
  );
};

export default Navbar;
