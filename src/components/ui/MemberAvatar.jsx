const defaultAvatars = {
  male: '/images/avatars/male-avatar.png',
  female: '/images/avatars/female-avatar.png',
}

const photoPositionClass = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
}

export default function MemberAvatar({ member, className = '', imageClassName = '' }) {
  const hasPhoto = Boolean(member.photo)
  const src = member.photo?.startsWith('/')
    ? member.photo
    : member.photo
      ? `/${member.photo}`
      : null
  const resolvedSrc = src || defaultAvatars[member.gender] || defaultAvatars.male
  const objectPositionClass =
    photoPositionClass[member.photoPosition] || photoPositionClass.center
  const objectPositionStyle = member.photoObjectPosition
    ? { objectPosition: member.photoObjectPosition }
    : undefined

  if (hasPhoto) {
    return (
      <div
        className={`relative w-full h-full overflow-hidden bg-akf-primary-soft ${className}`}
      >
        <img
          src={resolvedSrc}
          alt={member.name}
          style={objectPositionStyle}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out ${objectPositionStyle ? '' : objectPositionClass} ${imageClassName}`}
        />
      </div>
    )
  }

  return (
    <div
      className={`w-full h-full bg-akf-primary-soft flex items-center justify-center p-4 ${className}`}
    >
      <img
        src={resolvedSrc}
        alt={member.name}
        className="max-h-full max-w-[75%] w-auto h-auto object-contain drop-shadow-md"
      />
    </div>
  )
}
