import { motion } from "framer-motion";
import { TIMELINE } from "../data/data";
import { container, timelineItem } from "../animations/animations";

export default function Timeline() {
  return (
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
            <img src={item.icon} alt={item.label} className="timeline-icon" />

            <div className="timeline-info">
              <span className="timeline-time">{item.time}</span>
              <span className="timeline-label">{item.label}</span>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}