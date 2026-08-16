import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-akf-primary hover:bg-akf-primary-dark text-white',
  outline: 'border-2 border-akf-primary text-akf-primary hover:bg-akf-primary hover:text-white',
  white: 'bg-white text-akf-primary-dark hover:bg-akf-steampunk-light',
  ghost: 'text-akf-primary-dark hover:bg-akf-steampunk-light',
}

export default function Button({ children, variant = 'primary', to, href, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>
  if (href) return <a href={href} className={classes} {...props}>{children}</a>
  return <button className={classes} {...props}>{children}</button>
}
