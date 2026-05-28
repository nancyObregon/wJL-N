// App.js
import "./assets/styles/App.css";
import img1 from "./assets/img/AyN.jpeg";
import img2 from "./assets/img/JLyN.jpeg";

const DRESS_COLORS = [
  { color: "#1B3A6B", label: "Azul marino" },
  { color: "#C4952A", label: "Dorado" },
  { color: "#B5501E", label: "Teja" },
  { color: "#E8D5B0", label: "Crema" },
  { color: "#8B1A2A", label: "Borgoña" },
];

const TIMELINE = [
  { time: "12:00 PM", icon: "🏛️", label: "Recepción" },
  { time: "13:00 PM", icon: "💍", label: "Ceremonia" },
  { time: "14:00 PM", icon: "🍽️", label: "Comida" },
  { time: "15:00 PM", icon: "🥂", label: "Brindis" },
  { time: "16:00 PM", icon: "📸", label: "Fotos y Despedida" },
];

export default function App() {
  return (
    <div className="app">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-flowers--left" aria-hidden="true">
          <FlowerLeft />
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
            <FlowerSmall />
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
            <ol className="agenda-cards">
              {TIMELINE.map((item) => (
                <li key={item.time} className="agenda-card">
                  <span className="agenda-icon">{item.icon}</span>
                  <div className="agenda-info">
                    <span className="agenda-time">{item.time}</span>
                    <span className="agenda-label">{item.label}</span>
                  </div>
                </li>
              ))}
            </ol>
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
            <FlowerRight />
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
            <a href="mailto:nancy.joseluis2026@gmail.com" className="btn-rsvp">
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

/* ── SVG Decoraciones ── */
function FlowerLeft() {
  return (
    <svg
      viewBox="0 0 260 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.85">
        <ellipse
          cx="80"
          cy="200"
          rx="38"
          ry="18"
          fill="#3A5C3A"
          transform="rotate(-30 80 200)"
        />
        <ellipse
          cx="120"
          cy="220"
          rx="42"
          ry="16"
          fill="#2D4A2D"
          transform="rotate(15 120 220)"
        />
        <ellipse
          cx="60"
          cy="230"
          rx="30"
          ry="14"
          fill="#4A6E4A"
          transform="rotate(-50 60 230)"
        />
        <ellipse
          cx="150"
          cy="210"
          rx="35"
          ry="13"
          fill="#3A5C3A"
          transform="rotate(40 150 210)"
        />
        {[
          [100, 120],
          [140, 100],
          [80, 90],
          [160, 130],
          [120, 70],
        ].map(([cx, cy], i) => (
          <g key={i}>
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <ellipse
                key={deg}
                cx={cx + 16 * Math.cos((deg * Math.PI) / 180)}
                cy={cy + 16 * Math.sin((deg * Math.PI) / 180)}
                rx="10"
                ry="7"
                fill="#F5F0E8"
                transform={`rotate(${deg} ${
                  cx + 16 * Math.cos((deg * Math.PI) / 180)
                } ${cy + 16 * Math.sin((deg * Math.PI) / 180)})`}
              />
            ))}
            <circle cx={cx} cy={cy} r="7" fill="#E8C84A" />
          </g>
        ))}
        {[
          [190, 80],
          [200, 110],
          [185, 140],
        ].map(([x, y], i) => (
          <g key={i}>
            <line
              x1={x}
              y1={y}
              x2={x + 10}
              y2={y - 20}
              stroke="#C4952A"
              strokeWidth="2"
            />
            <circle cx={x + 10} cy={y - 20} r="4" fill="#E8C84A" />
            <circle cx={x + 6} cy={y - 10} r="3" fill="#E8C84A" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function FlowerSmall() {
  return (
    <svg
      viewBox="0 0 80 60"
      xmlns="http://www.w3.org/2000/svg"
      className="flower-small"
      aria-hidden="true"
    >
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx={40 + 14 * Math.cos((deg * Math.PI) / 180)}
          cy={30 + 14 * Math.sin((deg * Math.PI) / 180)}
          rx="9"
          ry="6"
          fill="#F5F0E8"
          transform={`rotate(${deg} ${
            40 + 14 * Math.cos((deg * Math.PI) / 180)
          } ${30 + 14 * Math.sin((deg * Math.PI) / 180)})`}
        />
      ))}
      <circle cx="40" cy="30" r="6" fill="#E8C84A" />
    </svg>
  );
}

function FlowerRight() {
  return (
    <svg
      viewBox="0 0 180 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.9">
        <path
          d="M90 300 Q85 240 95 180 Q100 120 88 60"
          stroke="#4A6E4A"
          strokeWidth="3"
          fill="none"
        />
        {[
          [90, 60],
          [75, 100],
          [105, 130],
          [80, 165],
          [100, 200],
        ].map(([cx, cy], i) => (
          <g key={i}>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <ellipse
                key={deg}
                cx={cx + 12 * Math.cos((deg * Math.PI) / 180)}
                cy={cy + 12 * Math.sin((deg * Math.PI) / 180)}
                rx="7"
                ry="4"
                fill="white"
                transform={`rotate(${deg} ${
                  cx + 12 * Math.cos((deg * Math.PI) / 180)
                } ${cy + 12 * Math.sin((deg * Math.PI) / 180)})`}
              />
            ))}
            <circle cx={cx} cy={cy} r="5" fill="#E8C84A" />
          </g>
        ))}
        <ellipse
          cx="70"
          cy="150"
          rx="25"
          ry="10"
          fill="#3A5C3A"
          transform="rotate(-40 70 150)"
        />
        <ellipse
          cx="110"
          cy="220"
          rx="22"
          ry="9"
          fill="#4A6E4A"
          transform="rotate(30 110 220)"
        />
        {[
          [60, 80],
          [115, 110],
          [65, 140],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#8B1A2A" />
        ))}
      </g>
    </svg>
  );
}
