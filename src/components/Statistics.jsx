import React, { useState, useRef } from "react";
import "./style/Statistics.css";
import { Line } from "react-chartjs-2";
import { BiLeftArrowCircle, BiRightArrowCircle  } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  // Dzisiejsza data
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const swiperRef = useRef(null);

  // Przykładowe dane
  const dailyData = {
    "2024-12-01": {
      labels: ["Śniadanie", "Lunch", "Obiad", "Kolacja", "Przekąski"],
      data: [300, 500, 600, 400, 200],
      protein: 50, // 50g białka
      fat: 40, // 40g tłuszczu
      carbs: 250, // 250g węglowodanów
    },
    "2024-11-30": {
      labels: ["Śniadanie", "Lunch", "Obiad", "Kolacja", "Przekąski"],
      data: [1250, 1450, 1550, 1350, 1180],
      protein: 80, // 80g białka
      fat: 60, // 60g tłuszczu
      carbs: 300, // 300g węglowodanów
    },
  };

  const generateLastThreeMonthsDates = () => {
    const today = new Date();
    const dates = [];
    const startDate = new Date();
    startDate.setMonth(today.getMonth() - 3);

    while (startDate <= today) {
      dates.push(startDate.toISOString().split("T")[0]);
      startDate.setDate(startDate.getDate() + 1);
    }

    return dates.reverse();
  };

  const weekDates = generateLastThreeMonthsDates().reverse();

  const data = {
    labels: dailyData[selectedDate]?.labels || [],
    datasets: [
      {
        label: "Kalorie",
        data: dailyData[selectedDate]?.data || [],
        borderColor: "#1abc9c",
        backgroundColor: "rgba(26, 188, 156, 0.2)",
        tension: 0.3,
        pointBackgroundColor: "#1abc9c",
        pointRadius: 5,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: `Kalorie dla dnia ${selectedDate}`,
        color: "#fff",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff",
        },
      },
    },
  };

  // Funkcje do obsługi strzałek
  const goToPreviousSlide = () => {
    const currentIndex = weekDates.indexOf(selectedDate);
    if (currentIndex > 0) {
      const previousDate = weekDates[currentIndex - 1];
      setSelectedDate(previousDate);
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    const currentIndex = weekDates.indexOf(selectedDate);
    if (currentIndex < weekDates.length - 1) {
      const nextDate = weekDates[currentIndex + 1];
      setSelectedDate(nextDate);
      swiperRef.current.swiper.slideNext();
    }
  };

  const renderProgressBar = (value, goal) => {
    const percentage = (value / goal) * 100;
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage}%`, backgroundColor: "#1abc9c" }}></div>
        <div className="progress-bar-text">{`${value} g`}</div>
      </div>
    );
  };

  return (
    <div className="statistics-content">
      <div className="date-slider date-sliderStatistics">
        <div
          className="swiper-navigation-prev"
          onClick={goToPreviousSlide}
        >
          <BiLeftArrowCircle className="iconStatystic" />
        </div>

        <Swiper
          ref={swiperRef} 
          spaceBetween={10}
          slidesPerView={7}
          navigation={false} 
          modules={[Navigation]}
          className="swiperStatistic"
          initialSlide={weekDates.length - 1}
        >
          {weekDates.map((date) => (
            <SwiperSlide
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`date-slide ${selectedDate === date ? "active" : ""}`}
            >
              <div>{date}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="swiper-navigation-next"
          onClick={goToNextSlide}
        >
          <BiRightArrowCircle className="iconStatystic" />
        </div>
      </div>

      <div className="stats-wrapper stats-wrapperDane">
        {/* Wykres */}
        <div className="stats-graph">
          <Line data={data} options={options} />
        </div>

        <div className="stats-macros">
          <h3>Makroskładniki</h3>
          <div className="macro-item">
            <div className="macro-label">Białko:</div>
            {renderProgressBar(dailyData[selectedDate]?.protein || 0, 100)}
          </div>
          <div className="macro-item">
            <div className="macro-label">Tłuszcz:</div>
            {renderProgressBar(dailyData[selectedDate]?.fat || 0, 70)}
          </div>
          <div className="macro-item">
            <div className="macro-label">Węglowodany:</div>
            {renderProgressBar(dailyData[selectedDate]?.carbs || 0, 300)} {/* Cel jest 300g */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
