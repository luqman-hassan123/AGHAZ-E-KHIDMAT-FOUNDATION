export default function BrandLockup({ variant = 'light', className = '', showTagline = true, compact = false, largeLogo = false }) {
  const isDark = variant === 'dark'

  const frameClass = compact
    ? 'h-[3.25rem] w-[3.25rem] sm:h-[3.75rem] sm:w-[3.75rem]'
    : largeLogo
      ? 'h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24'
      : 'h-10 w-10 sm:h-12 sm:w-12'

  const titleClass = compact
    ? 'text-xs sm:text-base leading-tight'
    : 'text-base sm:text-lg leading-tight'

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 min-w-0 ${className}`}>
      <div
        className={`${frameClass} shrink-0 rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-akf-primary/10`}
      >
        <img
          src="/images/akf-logo.png"
          alt="Aghaz-e-Khidmat Foundation"
          className="h-full w-full object-cover object-center scale-[1.12]"
        />
      </div>

      <div className="min-w-0">
        <p
          className={`font-bold ${titleClass} ${
            isDark ? 'text-white' : 'text-akf-primary-dark'
          }`}
        >
          <span className="block sm:inline">Aghaz-e-Khidmat</span>{' '}
          <span className="block sm:inline">Foundation</span>
        </p>
        {showTagline && !compact && (
          <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? 'text-akf-primary-soft' : 'text-akf-primary'}`}>
            &ldquo;Aghaz&rdquo; means a new beginning
          </p>
        )}
      </div>
    </div>
  )
}
