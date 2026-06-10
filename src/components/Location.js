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
          href="https://wa.me/528129411474?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20la%20boda.%20💒%20Respondo:%20✅%20SI%20/%20❌%20NO"
          className="btn-rsvp"
          whileHover={{ scale: 1.05 }}
        >
          Confirmar ✉
        </motion.a>
      </div>
    </div>
  );
}
