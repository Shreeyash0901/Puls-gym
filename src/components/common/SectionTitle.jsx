import Container from "./Container";

export default function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <Container className="mb-12">
      {eyebrow && (
        <p className="font-mono text-xs tracking-widest text-[var(--ember)] mb-3">
          {eyebrow}
        </p>
      )}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <h2 className="font-display text-5xl md:text-6xl uppercase">
          {title}
        </h2>

        {description && (
          <p className="max-w-md text-[var(--ink-soft)]">
            {description}
          </p>
        )}
      </div>
    </Container>
  );
}