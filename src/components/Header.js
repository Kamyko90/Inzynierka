import React from "react";
import "./style/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="link-logo" href="home"><h1 className="logo">Calo<span>.</span></h1></a>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Funkcje</a></li>
            <li><a href="#reviews">Opinie</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <li><a href="dashboard">Dashboard</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <a href="login" className="cta-button">Zaloguj się</a>
          <a href="register" className="cta-button secondary">Zarejestruj się</a>
        </div>
      </div>
    </header>
  );
}

export default Header;