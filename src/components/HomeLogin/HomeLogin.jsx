import React from "react";
import "./HomeLogin.css";
import Statistics from "../Statistics";
import MonthlyStatistics from "../MonthlyStatistics";
import { FaSignOutAlt, FaPlusCircle, FaCog } from "react-icons/fa";

const Dashboard = () => {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Witaj, [Imię Użytkownika]!</h1>
          <button className="logout-btn">
            <FaSignOutAlt /> Wyloguj się
          </button>
        </header>
  
        <main className="dashboard-content">
          {/* Informacje użytkownika */}
          <section className="user-info">
            <h2>Twoje dane</h2>
            <p>Dzienne spożycie: 1200 / 2000 kcal</p>
            <p>Cel kaloryczny: 2000 kcal</p>
          </section>
  
          {/* Kalkulator kalorii */}
          <section className="add-calories">
            <h2>Dodaj posiłek</h2>
            <button className="add-btn">
              <FaPlusCircle /> Dodaj nowy posiłek
            </button>
          </section>
  
          {/* Statystyki */}
          <section className="statistics">
            <h2>Statystyki</h2>
            <Statistics />
            <MonthlyStatistics />
              <p>Wykres tygodniowego spożycia kalorii</p>
          </section>
  
          {/* Ustawienia */}
          <section className="settings">
            <h2>Ustawienia</h2>
            <button className="settings-btn">
              <FaCog /> Przejdź do ustawień
            </button>
          </section>
        </main>
      </div>
    );
  };
  
  export default Dashboard;