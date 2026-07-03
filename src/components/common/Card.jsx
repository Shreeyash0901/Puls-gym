export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-[var(--panel)]
        border
        border-[var(--line)]
        rounded-lg
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}