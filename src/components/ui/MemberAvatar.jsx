const defaultAvatars = {
  male: '/images/avatars/male-avatar.png',
  female: '/images/avatars/female-avatar.png',
}

export default function MemberAvatar({ member, className = '' }) {
  const src = member.photo || defaultAvatars[member.gender] || defaultAvatars.male

  return (
    <div className={`w-full h-full bg-akf-primary-soft flex items-center justify-center p-4 ${className}`}>
      <img
        src={src}
        alt={member.name}
        className="max-h-full max-w-[75%] w-auto h-auto object-contain drop-shadow-md"
      />
    </div>
  )
}
