import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, boxShadow: '0 20px 40px rgba(42, 107, 92, 0.35)' } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white border border-akf-steampunk rounded-2xl p-6 shadow-md ${
        hover
          ? 'transition-[border-color,box-shadow] duration-300 hover:border-akf-primary hover:shadow-xl'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
