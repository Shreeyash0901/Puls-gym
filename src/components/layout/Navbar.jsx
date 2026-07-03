import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import navigation from "../../data/navigation";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--panel)]/90 backdrop-blur border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-5">

        <a
          href="#top"
          className="font-display text-2xl tracking-wide flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-[var(--ember)]"></span>

          PULSE
        </a>

        <nav className="hidden md:flex items-center gap-8">

          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] transition"
            >
              {item.label}
            </a>
          ))}

        </nav>

        <div className="hidden md:block">
          <Button href="#join">
            Start Trial
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

      </Container>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">

          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4"
            >
              {item.label}
            </a>
          ))}

        </div>
      )}
    </motion.header>
  );
}