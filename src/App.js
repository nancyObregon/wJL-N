// App.js
import "./assets/styles/App.css";
import { motion } from "framer-motion";
import img1 from "./assets/img/AyN.jpeg";
import img2 from "./assets/img/JLyN.jpeg";
import fl1 from "./assets/img/flor1.png";
import fl2 from "./assets/img/flor2.png";
import fl3 from "./assets/img/flor3.png";
import A1 from "./assets/img/A1.png"
import A2 from "./assets/img/A2.png"
import A3 from "./assets/img/A3.png"
import A4 from "./assets/img/A4.png"
import A5 from "./assets/img/A5.png"

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
    const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18 // 👈 efecto cascada
      }
    }
  };

  // const item = {
  //   hidden: {
  //     opacity: 0,
  //     y: 30
  //   },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut"
  //     }
  //   }
  // };

  return (
    <div className="app">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-flowers--left" aria-hidden="true">
          <img src={fl1} alt="decor1"/>
        </div>

        <div className="hero-content">
          <h1 className="hero-names">
            <span className="name-script">Nancy</span>
            <span className="ampersand">&amp;</span>
            <span className="name-script">José Luis</span>
          </h1>
          <h2 className="hero-subtitle">Nuestra boda</h2>
          <p className="hero-tagline">
            Este día especial queremos compartirlo con nuestros seres queridos
          </p>
          <a href="#save-the-date" className="btn-hero">
            Save the Date
          </a>
        </div>
      </section>

      {/* ── SAVE THE DATE ── */}
      <section id="save-the-date" className="save-section">
        <div className="save-inner">
          <div className="save-photo save-photo--couple">
            <img src={img2} alt="Nancy y José Luis" />
          </div>

          <div className="save-center">
            <h2 className="save-title">Save the Date</h2>
            <img src={fl2} alt="deco2" className="flower-small"/>
            <p className="save-date">10 Octubre 2026</p>
            <p className="save-time">12:00 PM</p>
          </div>

          <div className="save-photo save-photo--dogs">
            <img src={img1} alt="Nuestros perros" />
          </div>
        </div>
      </section>

      {/* ── DRESS CODE ── */}
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
                  transition={{ duration: 1.2 }}
                />

                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.time}
                    className="timeline-item"
                    variants={item}
                  >
                    <motion.div
                      className="timeline-dot"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    />

                    <motion.div
                      className="timeline-card"
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

          <div className="dress-center">
            <h3 className="dress-code-title">Dress Code &amp; Colors</h3>
            <p className="dress-formal">F o r m a l</p>
            <div className="color-swatches">
              {DRESS_COLORS.map((c) => (
                <div key={c.label} className="swatch-wrap">
                  <div
                    className="swatch"
                    style={{ background: c.color }}
                    title={c.label}
                  />
                  <span className="swatch-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dress-right" aria-hidden="true">
            <img src={fl3} alt="deco3"/>
          </div>
        </div>

        {/* Ubicación + RSVP */}
        <div className="location-row">
          <div className="location-block">
            <h3 className="location-heading">Ubicación</h3>
            <p className="location-name">Casa Solar</p>
            <p className="location-address">Barrio Antiguo, MTY</p>
            <a
              href="https://maps.google.com/?q=Casa+Solar+Barrio+Antiguo+Monterrey"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-location"
            >
              Ver en mapa ↗
            </a>
          </div>

          <div className="rsvp-block">
            <h3 className="rsvp-heading">Confirma tu asistencia</h3>
            <p className="rsvp-sub">Antes del 10 de septiembre de 2026</p>
            <a href="https://wa.me/528129411474?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20la%20boda.%20%F0%9F%92%92%20Respondo:%20%E2%9C%85%20SI%20/%20%E2%9D%8C%20NO" className="btn-rsvp">
              Confirmar ✉
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Nancy &amp; José Luis · 10·10·2026 · Monterrey</p>
      </footer>
    </div>
  );
}
