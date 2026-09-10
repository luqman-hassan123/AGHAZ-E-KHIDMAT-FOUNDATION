export default function Logo({ className = 'h-12 w-12 rounded-full overflow-hidden object-cover object-center scale-[1.12]', ...props }) {
  return (
    <img
      src="/images/akf-logo.png"
      alt="Aghaz-e-Khidmat Foundation"
      className={className}
      {...props}
    />
  )
}
