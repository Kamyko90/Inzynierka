import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="LoginFormAll">
      <div className="wrapper">
        <from action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Imię i nazwisko" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Hasło" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              {" "}
              <input type="checkbox" />
              Zapamiętaj mnie
            </label>
            <a href="#">Zapomniałem hasła?</a>
          </div>
          <button type="submit">Zaloguj się</button>
          <div className="register-link">
            <p>
              Nie mam konta? <a href="#">Załóż konto</a>
            </p>
          </div>
        </from>
      </div>
    </div>
  );
};

export default LoginForm;
