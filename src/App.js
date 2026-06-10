import "./assets/styles/App.css";
import { useEffect } from "react";

import Hero from "./components/Hero";
import SaveTheDate from "./components/SaveTheDate";
import Timeline from "./components/Timeline";
import DressCode from "./components/DressCode";
import Location from "./components/Location";

export default function App() {

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const el = document.querySelector(".hero-flowers--left");
      if (el) el.style.transform = `translateY(${y * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Hero />
      <SaveTheDate />
      
      <section className="dress-section">
        <div className="dress-inner">
          <div className="agenda-column">
            <h3 className="section-label">Programa del día</h3>
            <Timeline />
          </div>

          <DressCode />
        </div>

        <Location />
      </section>

      <footer className="footer">
        <p>Nancy & José Luis · 10·10·2026 · Monterrey</p>
      </footer>
    </div>
  );
}
