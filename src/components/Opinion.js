import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./style/Opinions.css";

function Opinion() {
  // Przykładowe dane opinii
  const opinions = [
    {
      id: 1,
      author: "Jan Kowalski",
      text: "Świetna usługa! Jestem bardzo zadowolony z jakości i szybkiej obsługi.",
      rating: 5,
    },
    {
      id: 2,
      author: "Anna Nowak",
      text: "Bardzo profesjonalne podejście, ale cena mogłaby być nieco niższa.",
      rating: 4,
    },
    {
      id: 3,
      author: "Piotr Wiśniewski",
      text: "Zdecydowanie polecam! Bardzo pomocna obsługa i szybko załatwiona sprawa.",
      rating: 5,
    },
    {
      id: 4,
      author: "Katarzyna Zielińska",
      text: "Produkt wysokiej jakości, ale dostawa mogłaby być szybsza.",
      rating: 4,
    },
    {
      id: 5,
      author: "Marek Wójcik",
      text: "Zdecydowanie warty swojej ceny. Obsługa również bardzo miła.",
      rating: 5,
    },
    {
      id: 6,
      author: "Joanna Kowalczyk",
      text: "Świetne doświadczenie! Polecam wszystkim.",
      rating: 5,
    },
    {
      id: 7,
      author: "Tomasz Nowicki",
      text: "Przyzwoita jakość, ale mogłoby być lepiej.",
      rating: 3,
    },
    {
      id: 8,
      author: "Ewa Jankowska",
      text: "Bardzo szybka realizacja, ale cena jest zbyt wysoka.",
      rating: 3,
    },
    {
      id: 9,
      author: "Kamil Szymański",
      text: "Zdecydowanie najlepszy produkt w tej kategorii.",
      rating: 5,
    },
    {
      id: 10,
      author: "Paweł Adamczyk",
      text: "Obsługa na wysokim poziomie, ale produkt mógłby być bardziej wydajny.",
      rating: 4,
    },
    {
      id: 11,
      author: "Magdalena Lewandowska",
      text: "Bardzo szybka pomoc i profesjonalne podejście do klienta.",
      rating: 5,
    },
    {
      id: 12,
      author: "Piotr Stolarz",
      text: "Zbyt mało opcji, ale w sumie ok.",
      rating: 3,
    },
  ];

  const limitedOpinions = opinions.slice(0, 10);

  return (
    <div className="container">
      <div className="opinions-section">
        <h2>Opinie naszych użytkowników</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          loop={true}
        >
          {limitedOpinions.map((opinion) => (
            <SwiperSlide key={opinion.id}>
              <div className="opinion">
                <h3>{opinion.author}</h3>
                <p>{opinion.text}</p>
                <div className="rating">
                  {Array(opinion.rating)
                    .fill("★")
                    .map((star, index) => (
                      <span key={index} className="star">
                        {star}
                      </span>
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Opinion;
