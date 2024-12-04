import React from "react";
import "./style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Calo. Wszystkie prawa zastrzeżone.</p>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
