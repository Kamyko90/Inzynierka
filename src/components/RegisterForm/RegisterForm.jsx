import React from "react";
import "./RegisterForm.css";
import { FaUser, FaLock, FaEnvelope, FaWeight, FaRuler } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="RegisterFormAll">
      <div className="wrapper">
        <form action="">
          <h1>Rejestracja</h1>

          <div className="input-box">
            <input type="text" placeholder="Imię i nazwisko" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Adres e-mail" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Hasło" required />
            <FaLock className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Potwierdź hasło" required />
            <FaLock className="icon" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Waga (kg)" required min="1" />
            <FaWeight className="icon" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Wzrost (cm)" required min="1" />
            <FaRuler className="icon" />
          </div>

          <div className="checkbox-container">
            <label>
              <input type="checkbox" required />
              Akceptuję <a href="#">regulamin</a> i politykę prywatności
            </label>
          </div>

          <button type="submit">Zarejestruj się</button>

          <div className="register-link">
            <p>
              Masz już konto? <a href="#">Zaloguj się</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;