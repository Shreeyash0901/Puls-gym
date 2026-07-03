import { motion } from "framer-motion";
import Container from "../common/Container";

export default function ThePulse() {
  return (
    <section
      id="the-pulse"
      className="bg-[var(--ink)] text-white py-28 overflow-hidden"
    >
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-widest text-[var(--ember)]"
        >
          THE SESSION IN ONE LINE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl uppercase mt-5 leading-tight"
        >
          Warm-up.
          <br />
          Work Set.
          <br />
          Redline.
          <br />
          Cooldown.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-1 bg-[var(--ember)] mt-12 origin-left"
        />

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-mono text-6xl text-[var(--cobalt)] mt-10"
        >
          72 BPM
        </motion.h3>
      </Container>
    </section>
  );
}