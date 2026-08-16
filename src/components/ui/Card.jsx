import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 20px 40px rgba(123, 204, 181, 0.15)' } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white border border-akf-steampunk rounded-2xl p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  )
}
