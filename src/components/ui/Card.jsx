export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`bg-white border border-akf-steampunk rounded-2xl p-4 sm:p-6 shadow-md ${
        hover ? 'card-interactive' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
