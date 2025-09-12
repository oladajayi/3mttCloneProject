import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT 3MTT" },
  { path: "/apply", label: "HOW TO APPLY" },
  { path: "/hire", label: "HIRE A FELLOW" },
  { path: "/partnerships", label: "PARTNERSHIPS" },
  { path: "/deeptech", label: "DEEPTECH" },
];

const Navbar = () => {
  // 👇 Trigger to close offcanvas on nav click (for small screens)
  const closeOffcanvas = () => {
    if (window.innerWidth < 992) {
      const el = document.getElementById("mobileSidebar");
      const bootstrap = window.bootstrap || require("bootstrap");
      const offcanvas = bootstrap.Offcanvas.getInstance(el);
      if (offcanvas) offcanvas.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
      {/* Logo */}
      <NavLink className="navbar-brand me-3" to="/">
        <img src={logo} alt="3MTT Logo" width="50" />
      </NavLink>

      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Desktop Nav */}
      <div
        className="collapse navbar-collapse d-none d-lg-flex ms-lg-5"
        id="navbarNav"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {links.map(({ path, label }) => (
            <li className="nav-item me-3 rounded" key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link fw-semibold px-3 rounded transition-link ${
                    isActive ? "active-link text-white" : "text-dark"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/user" className="btn btn-outline-primary">
          Login
        </NavLink>
      </div>

      {/* Sidebar Offcanvas Nav */}
      <div
        className="offcanvas offcanvas-start d-lg-none w-75"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileSidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {links.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  className="nav-link text-dark fw-semibold"
                  onClick={closeOffcanvas}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/user" className="btn btn-outline-primary">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
