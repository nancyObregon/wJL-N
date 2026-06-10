import { motion } from 'framer-motion';
import { DRESS_COLORS, AVOID_COLORS } from '../data/data';

export default function DressCode() {
  return (
    <motion.div
      className='dress-center'
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className='dress-code-title'>Dress Code & Colors</h3>
      <p className='dress-formal'>F o r m a l</p>

      <div className='color-swatches'>
        {DRESS_COLORS.map((c, i) => (
          <motion.div
            key={c.label}
            className='swatch-wrap'
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className='swatch' style={{ background: c.color }} />
            <span className='swatch-label'>{c.label}</span>
          </motion.div>
        ))}
      </div>

      <div className='avoid-section'>
        <p className='avoid-title'>Por favor evitar</p>
        <div className='color-swatches'>
          {AVOID_COLORS.map((c, i) => (
            <motion.div key={c.label} className='swatch-wrap avoid'
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.3 }}>
              <div className='swatch swatch--crossed' style={{ background: c.color }} />
              <span className='swatch-label'>{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}