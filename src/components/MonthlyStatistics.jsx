import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Rejestracja komponentów Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyStatistics = () => {
  const [selectedMonth, setSelectedMonth] = useState("2024-12");

  // Przykładowe dane miesięczne (sumaryczne kalorie dla każdego dnia miesiąca)
  const monthlyData = {
    "2024-12": [
      300, 400, 500, 350, 450, 600, 700, 650, 500, 550, 600, 450, 700, 750, 650, 500, 450, 400, 450, 600, 700, 750, 800, 650, 600, 700, 750, 800, 850, 900, 950
    ],
    "2024-11": [
      250, 300, 350, 400, 450, 500, 450, 400, 550, 600, 450, 400, 350, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100
    ],
    "2024-10": [
      200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650
    ],
    // Dodaj dane dla pozostałych miesięcy
  };

  // Generowanie danych do wykresu
  const data = {
    labels: Array.from({ length: 31 }, (_, index) => `${index + 1}`), // Etkieta: dni miesiąca
    datasets: [
      {
        label: "Kalorie",
        data: monthlyData[selectedMonth], // Dostosowanie danych w zależności od wybranego miesiąca
        backgroundColor: "rgba(26, 188, 156, 0.5)", // Kolor słupków
        borderColor: "#1abc9c", // Kolor obramowania słupków
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff", // Kolor czcionki legendy
        },
      },
      title: {
        display: true,
        text: `Spożycie kalorii w miesiącu ${selectedMonth.split("-")[1]}`,
        color: "#fff", // Kolor czcionki tytułu
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dni miesiąca",
          color: "#fff", // Kolor czcionki osi X
        },
        ticks: {
          color: "#fff", // Kolor czcionki na osi X
        },
      },
      y: {
        title: {
          display: true,
          text: "Kalorie",
          color: "#fff", // Kolor czcionki osi Y
        },
        ticks: {
          color: "#fff", // Kolor czcionki na osi Y
        },
        beginAtZero: true,
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return `Kalorie: ${tooltipItem.raw}`;
        },
      },
      bodyColor: "#fff", // Kolor tekstu w tooltipach
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Tło w tooltipach
    },
  };

  // Tablica miesięcy po polsku
  const months = [
    { value: "2024-01", label: "Styczeń" },
    { value: "2024-02", label: "Luty" },
    { value: "2024-03", label: "Marzec" },
    { value: "2024-04", label: "Kwiecień" },
    { value: "2024-05", label: "Maj" },
    { value: "2024-06", label: "Czerwiec" },
    { value: "2024-07", label: "Lipiec" },
    { value: "2024-08", label: "Sierpień" },
    { value: "2024-09", label: "Wrzesień" },
    { value: "2024-10", label: "Październik" },
    { value: "2024-11", label: "Listopad" },
    { value: "2024-12", label: "Grudzień" },
  ];

  return (
    <div className="statistics-content">
      {/* Wybór miesiąca */}
      <div className="month-picker">
        <label htmlFor="month">Wybierz miesiąc z obecengo roku:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>

      {/* Wykres */}
      <div className="stats-graph">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyStatistics;
