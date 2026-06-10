import { motion } from "framer-motion";

export default function Location() {
  return (
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
          href="https://wa.me/528129411474?text=Hola%20💙✨%20Nos%20encantará%20celebrar%20contigo%20nuestro%20gran%20día%20💒%0A%0AConfirma%20tu%20asistencia:%0A✅%20Sí%20asistiré%0A❌%20No%20podré%20asistir%0A%0A¡Gracias%20por%20ser%20parte%20de%20este%20momento%20tan%20especial!%20🍂"
          className="btn-rsvp"
          target="_blank"
          whileHover={{ scale: 1.05 }}
        >
          Confirmar ✉
        </motion.a>
      </div>
    </div>
  );
}
