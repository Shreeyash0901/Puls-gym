import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white py-12">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <h2 className="font-display text-2xl">
            PULSE
          </h2>

          <p className="text-white/60 mt-2">
            Athletic Club • Pune
          </p>
        </div>

        <p className="text-sm text-white/50">
          © 2026 Pulse Athletic Club.
          All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}