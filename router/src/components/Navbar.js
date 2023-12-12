import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
import { themeContext } from "../App";
import { useContext } from "react";
import ReactSwitch from "react-switch";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  const auth = useAuth();

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <nav className="primary-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.user && <NavLink to="/login">Login</NavLink>}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </nav>
    </themeContext.Provider>
  );
};
