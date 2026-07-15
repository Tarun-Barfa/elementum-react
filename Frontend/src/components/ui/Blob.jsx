export default function Blob({ className = "" }) {
  return (
    <svg
      className={`animate-blobPulse ${className}`}
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
    >
      <path
        d="M0,140 C0,60 40,0 120,0 L120,140 Z"
        fill="var(--color-purple)"
      />
    </svg>
  );
}