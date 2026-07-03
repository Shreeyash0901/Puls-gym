import { motion } from "framer-motion";
import CountUp from "react-countup";

import Container from "../common/Container";
import stats from "../../data/stats";

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 bg-[var(--ink)] text-white"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.15,
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                transition-all
                duration-300
              "
            >
             <h2 className="font-display text-5xl md:text-6xl text-[var(--ember)]">
  {item.number}
</h2>
              <div className="w-12 h-1 bg-[var(--cobalt)] mt-5 rounded-full" />

              <p className="mt-6 uppercase tracking-[3px] text-sm text-white/70">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}