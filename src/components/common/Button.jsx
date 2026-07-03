export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 rounded-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-[var(--ink)] text-white hover:bg-[var(--cobalt)]",

    secondary:
      "border border-[var(--ink)] text-[var(--ink)] hover:bg-white",

    light:
      "bg-white text-[var(--ink)] hover:bg-[var(--ember)] hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}