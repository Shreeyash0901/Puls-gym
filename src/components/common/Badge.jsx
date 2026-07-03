export default function Badge({
  children,
  color = "var(--ember)",
}) {
  return (
    <span
      style={{ color }}
      className="font-mono text-xs tracking-widest uppercase"
    >
      {children}
    </span>
  );
}