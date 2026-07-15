export default function AvatarCluster({ avatars }) {
  return (
    <div className="relative w-full h-full">
      {avatars.map((avatar, i) => (
        <img
          key={i}
          src={avatar.src}
          alt=""
          className="absolute rounded-full object-cover shadow-md animate-floaty"
          style={{
            width: avatar.size,
            height: avatar.size,
            top: avatar.top,
            left: avatar.left,
            zIndex: avatar.z || 1,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}