export default function BrandLockup({ variant = 'light', className = '', showTagline = true, compact = false }) {
  const isDark = variant === 'dark'

  const frameClass = compact
    ? 'h-[3.125rem] w-[3.125rem] sm:h-14 sm:w-14'
    : 'h-9 w-9 sm:h-11 sm:w-11'

  const emblemClass = compact ? 'w-[175%] top-[3%]' : 'w-[170%] top-[3%]'

  const titleClass = compact
    ? 'text-xs sm:text-base leading-tight'
    : 'text-base sm:text-lg leading-tight'

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 overflow-visible ${className}`}>
      <div
        className={`${frameClass} shrink-0 relative overflow-hidden rounded-full bg-white`}
      >
        <img
          src="/images/akf-logo.png"
          alt="Aghaz-e-Khidmat Foundation"
          className={`absolute left-1/2 -translate-x-1/2 max-w-none h-auto ${emblemClass}`}
        />
      </div>

      <div className="min-w-0 overflow-visible">
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
