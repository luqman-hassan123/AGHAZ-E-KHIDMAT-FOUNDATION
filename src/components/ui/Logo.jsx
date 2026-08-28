export default function Logo({ className = 'h-12 w-auto', ...props }) {
  return (
    <img
      src="/images/akf-logo.png"
      alt="Aghaz-e-Khidmat Foundation"
      className={className}
      {...props}
    />
  )
}
