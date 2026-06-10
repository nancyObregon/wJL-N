import { motion } from "framer-motion";
import img1 from "../assets/img/AyN.jpeg";
import img2 from "../assets/img/JLyN.jpeg";
import fl2 from "../assets/img/flor2.png";

export default function SaveTheDate() {
  return (
    <section id="save-the-date" className="save-section">
      <div className="save-inner">
        <motion.div
          className="save-photo save-photo--couple"
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          <img src={img2} alt="Nancy y José Luis" />
        </motion.div>

        <motion.div
          className="save-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <h2 className="save-title"> Save the Date </h2>{" "}
          <img src={fl2} alt="deco2" className="flower-small" />
          <p className="save-date"> 10 Octubre 2026 </p>{" "}
          <p className="save-time"> 12: 00 PM </p>{" "}
        </motion.div>

        <motion.div
          className="save-photo save-photo--dogs"
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          <img src={img1} alt="Nuestros perros" />
        </motion.div>
      </div>{" "}
    </section>
  );
}
