export default function MarkerUnderline({ children, animate = true }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute left-0 -bottom-1 w-full"
        height="10"
        viewBox="0 0 200 10"
        preserveAspectRatio="none"
      >
        <path
          d="M2,6 Q50,2 100,6 T198,5"
          fill="none"
          stroke="var(--color-yellow)"
          strokeWidth="4"
          strokeLinecap="round"
          style={
            animate
              ? {
                  strokeDasharray: 400,
                  strokeDashoffset: 400,
                  animation: "drawLine 1s ease-out 0.3s forwards",
                }
              : {}
          }
        />
      </svg>
    </span>
  );
}