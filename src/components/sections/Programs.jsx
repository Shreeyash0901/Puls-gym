import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PulseLine from "../common/PulseLine";
import programs from "../../data/programs";

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-[var(--bg)]"
    >
      <SectionTitle
        title="Programs"
        description="Four different training styles designed around your heart-rate zones."
      />

      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-[var(--panel)] border border-[var(--line)] p-7 rounded-lg"
            >
              <p
                className="font-mono text-xs tracking-widest"
                style={{ color: program.color }}
              >
                {program.zone}
              </p>

              <h3 className="font-display text-3xl uppercase mt-4">
                {program.name}
              </h3>

              <p className="text-[var(--ink-soft)] mt-5 leading-7">
                {program.description}
              </p>

              <div
                className="w-12 h-1 mt-8"
                style={{
                  background: program.color,
                }}
              />
            </motion.div>
          ))}
        </div>
      </Container>

      <PulseLine
        intensity={1.2}
        color="var(--ember)"
      />
    </section>
  );
}