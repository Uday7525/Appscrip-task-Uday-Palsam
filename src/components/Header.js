import React from "react";
import "./Header.css";

const Header = () => {
    
  return (
    <header className="header">
      <h1 className="logo">ShopSmart</h1>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">About</a>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
