import React from "react";
import "./style/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="heroAll">
          <h2>Twoja droga do zdrowia i lepszej formy!</h2>
          <p>
            Rejestruj swoje posiłki, analizuj statystyki i osiągaj swoje cele
            dietetyczne na naszej platformie!
          </p>
          <div className="buttons">
            <a href="login" className="cta-button">
              Zaloguj się
            </a>
            <a href="register" className="cta-button secondary">
              Zarejestruj się
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
