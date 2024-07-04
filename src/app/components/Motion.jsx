'use client'
import { motion } from 'framer-motion';

function Motion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0,scale: 0.8  }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: .5 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Motion;
