import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "../components/HomeLogin/HomeLogin"

function HomePage() {
    return (
        <div>
          <Header />
          <Dashboard />
          <Footer />
        </div>
      );
}

export default HomePage;
