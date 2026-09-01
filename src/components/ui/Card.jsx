export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`bg-white border border-akf-steampunk rounded-2xl p-6 shadow-md ${
        hover
          ? 'transition-[border-color,box-shadow] duration-300 hover:border-akf-primary hover:shadow-xl'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
