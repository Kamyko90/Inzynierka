import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Opinions from "../components/Opinion";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div>
          <Header />
          <Hero />
          <Features />
          <Opinions />
          <Footer />
        </div>
      );
}

export default HomePage;
