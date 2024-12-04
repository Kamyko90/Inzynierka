import React from "react";
import "./style/Features.css";

function Features() {
  const features = [
    { icon: "calories-icon.png", title: "Liczenie kalorii", description: "Śledź swoje codzienne spożycie kalorii dzięki naszej łatwej w obsłudze aplikacji. Wprowadź posiłki, przekąski i napoje, a system automatycznie obliczy ich wartość kaloryczną." },
    { icon: "diet-icon.png", title: "Wsparcie dietetyczne", description: "Uzyskaj pomoc w utrzymaniu zdrowej diety. Oferujemy spersonalizowane porady żywieniowe i wskazówki, które pomogą Ci osiągnąć Twoje cele." },
    { icon: "progress-icon.png", title: "Monitorowanie postępów", description: "Obserwuj swoje wyniki i motywuj się do działania. Analizuj zmiany w wadze, spożyciu kalorii i innych kluczowych wskaźnikach, aby skutecznie dążyć do sukcesu." },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h3>Co oferujemy?</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              {/* <img src={feature.icon} alt={feature.title} /> */}
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
