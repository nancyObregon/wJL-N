// App.js
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800"
            alt="flowers"
            className="flower-image"
          />
        </div>

        <div className="hero-right">
          <h1>
            Nancy <span>&</span> José Luis
          </h1>

          <h2>Nuestra boda</h2>

          <p>
            Este día especial queremos compartirlo con nuestros seres queridos
          </p>

          <button>SAVE THE DATE</button>
        </div>
      </section>

      {/* SAVE THE DATE */}
      <section className="save-date">
        <div className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600"
            alt="couple"
          />
        </div>

        <div className="save-center">
          <h2>SAVE THE DATE</h2>

          <div className="mini-flower">🌼</div>

          <p>10 Octubre 2026</p>
          <p>12:00 PM</p>
        </div>

        <div className="photo-card">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600"
            alt="dogs"
          />
        </div>
      </section>

      {/* DETAILS */}
      <section className="details">
        <div className="timeline">
          <div>12:00 PM - Recepción</div>
          <div>13:00 PM - Ceremonia</div>
          <div>14:00 PM - Comida</div>
          <div>15:00 PM - Brindis</div>
          <div>16:00 PM - Fotos y despedida</div>
        </div>

        <div className="dress-code">
          <h3>DRESS CODE AND COLORS</h3>

          <p>Formal</p>

          <div className="colors">
            <span className="blue"></span>
            <span className="gold"></span>
            <span className="orange"></span>
            <span className="light"></span>
            <span className="red"></span>
          </div>

          <div className="info">
            <div>
              <h4>Ubicación</h4>
              <p>Casa Solar, Barrio Antiguo, MTY</p>
            </div>

            <div>
              <h4>Confirma tu asistencia aquí</h4>
            </div>
          </div>
        </div>

        <div className="flowers-side">🌿🌼</div>
      </section>
    </div>
  );
}

export default App;
