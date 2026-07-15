export default function Highlight({ children, color = "pink" }) {
  const bg = color === "pink" ? "bg-pink" : "bg-green";
  return (
    <span className={`${bg} px-2 py-0.5 rounded-full inline-block`}>
      {children}
    </span>
  );
}