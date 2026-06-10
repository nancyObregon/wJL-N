import { motion } from "framer-motion";
import { container, fadeUp } from "../animations/animations";
import fl1 from "../assets/img/flor1.png";

export default function Hero() {
  return (
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
  );
}
