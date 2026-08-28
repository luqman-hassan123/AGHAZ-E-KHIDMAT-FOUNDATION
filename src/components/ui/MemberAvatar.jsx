const defaultAvatars = {
  male: '/images/avatars/male-avatar.png',
  female: '/images/avatars/female-avatar.png',
}

const photoPositionClass = {
  top: 'object-top',
  center: 'object-center',
}

export default function MemberAvatar({ member, className = '' }) {
  const hasPhoto = Boolean(member.photo)
  const src = member.photo || defaultAvatars[member.gender] || defaultAvatars.male
  const objectPosition = photoPositionClass[member.photoPosition] || photoPositionClass.center

  if (hasPhoto) {
    return (
      <div
        className={`relative w-full h-full overflow-hidden bg-akf-primary-soft ${className}`}
      >
        <img
          src={src}
          alt={member.name}
          className={`absolute inset-0 h-full w-full object-cover ${objectPosition}`}
        />
      </div>
    )
  }

  return (
    <div
      className={`w-full h-full bg-akf-primary-soft flex items-center justify-center p-4 ${className}`}
    >
      <img
        src={src}
        alt={member.name}
        className="max-h-full max-w-[75%] w-auto h-auto object-contain drop-shadow-md"
      />
    </div>
  )
}
