import "./assets/styles/App.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

import img1 from "./assets/img/AyN.jpeg";
import img2 from "./assets/img/JLyN.jpeg";
import fl1 from "./assets/img/flor1.png";
import fl2 from "./assets/img/flor2.png";
import fl3 from "./assets/img/flor3.png";
import A1 from "./assets/img/A1.png";
import A2 from "./assets/img/A2.png";
import A3 from "./assets/img/A3.png";
import A4 from "./assets/img/A4.png";
import A5 from "./assets/img/A5.png";

const DRESS_COLORS = [
  { color: "#1B3A6B", label: "Azul marino" },
  { color: "#C4952A", label: "Dorado" },
  { color: "#B5501E", label: "Teja" },
  { color: "#E8D5B0", label: "Crema" },
  { color: "#8B1A2A", label: "Borgoña" },
];

const TIMELINE = [
  { time: "12:00 PM", icon: A1, label: "Recepción" },
  { time: "13:00 PM", icon: A2, label: "Ceremonia" },
  { time: "14:00 PM", icon: A3, label: "Comida" },
  { time: "15:00 PM", icon: A4, label: "Brindis" },
  { time: "16:00 PM", icon: A5, label: "Fotos y Despedida" },
];

export default function App() {
  /* 🌿 Animaciones */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const timelineItem = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  /* 🌸 parallax suave */
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
      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-flowers--left"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <img src={fl1} alt="decor1" />
        </motion.div>

        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="hero-names" variants={fadeUp}>
            <span className="name-script">Nancy</span>
            <span className="ampersand">&amp;</span>
            <span className="name-script">José Luis</span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeUp}>
            Nuestra boda
          </motion.h2>

          <motion.p className="hero-tagline" variants={fadeUp}>
            Este día especial queremos compartirlo con nuestros seres queridos
          </motion.p>

          <motion.a
            href="#save-the-date"
            className="btn-hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Save the Date
          </motion.a>
        </motion.div>
      </section>

      {/* SAVE THE DATE */}
      <section id="save-the-date" className="save-section">
        <div className="save-inner">
          <motion.div
            className="save-photo save-photo--couple"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img src={img2} alt="Nancy y José Luis" />
          </motion.div>

          <motion.div
            className="save-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="save-title">Save the Date</h2>
            <img src={fl2} alt="deco2" className="flower-small" />
            <p className="save-date">10 Octubre 2026</p>
            <p className="save-time">12:00 PM</p>
          </motion.div>

          <motion.div
            className="save-photo save-photo--dogs"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img src={img1} alt="Nuestros perros" />
          </motion.div>
        </div>
      </section>

      {/* DRESS + TIMELINE */}
      <section className="dress-section">
        <div className="dress-inner">
          <div className="agenda-column">
            <h3 className="section-label">Programa del día</h3>

            <motion.div
              className="timeline"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                className="timeline-line"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />

              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.time}
                  className="timeline-item"
                  variants={timelineItem}
                >
                  <motion.div
                    className="timeline-dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />

                  <motion.div
                    className="timeline-card"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="timeline-icon"
                    />

                    <div className="timeline-info">
                      <span className="timeline-time">{item.time}</span>
                      <span className="timeline-label">{item.label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="dress-center"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="dress-code-title">Dress Code & Colors</h3>
            <p className="dress-formal">F o r m a l</p>

            <div className="color-swatches">
              {DRESS_COLORS.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="swatch-wrap"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="swatch"
                    style={{ background: c.color }}
                  />
                  <span className="swatch-label">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="dress-right">
            <img src={fl3} alt="deco3" />
          </div>
        </div>

        {/* UBICACIÓN + RSVP */}
        <div className="location-row">
          <div className="location-block">
            <h3 className="location-heading">Ubicación</h3>
            <p className="location-name">Casa Solar</p>
            <p className="location-address">Barrio Antiguo, MTY</p>

            <motion.a
              href="https://maps.google.com/?q=Casa+Solar+Barrio+Antiguo+Monterrey"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-location"
              whileHover={{ scale: 1.05 }}
            >
              Ver en mapa ↗
            </motion.a>
          </div>

          <div className="rsvp-block">
            <h3 className="rsvp-heading">Confirma tu asistencia</h3>
            <p className="rsvp-sub">
              Antes del 10 de septiembre de 2026
            </p>

            <motion.a
              href="https://wa.me/528129411474?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20la%20boda.%20%F0%9F%92%92%20Respondo:%20%E2%9C%85%20SI%20/%20%E2%9D%8C%20NO"
              className="btn-rsvp"
              whileHover={{ scale: 1.05 }}
            >
              Confirmar ✉
            </motion.a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Nancy & José Luis · 10·10·2026 · Monterrey</p>
      </footer>
    </div>
  );
}