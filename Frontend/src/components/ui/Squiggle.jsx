export default function Squiggle({ className = "" }) {
  return (
    <svg
      className={className}
      width="100"
      height="260"
      viewBox="0 0 100 260"
      fill="none"
    >
      <path
        d="M80,10 C20,40 20,80 60,110 C100,140 100,180 40,210 C0,230 0,245 20,260"
        stroke="var(--color-coral)"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M60,0 C0,30 0,70 40,100 C80,130 80,170 20,200 C-10,220 -10,240 10,255"
        stroke="#111111"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}