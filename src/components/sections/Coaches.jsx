import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import coaches from "../../data/coaches";

export default function Coaches() {
  return (
    <section
      id="coaches"
      className="py-24 bg-[var(--bg-warm)]"
    >
      <SectionTitle
        title="Coaches"
        description="Meet our experienced team dedicated to helping you reach your goals."
      />

      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="bg-[var(--panel)] border border-[var(--line)] p-8 rounded-lg"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--cobalt)] text-white flex items-center justify-center font-display text-2xl mb-6">
                {coach.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="font-display text-3xl uppercase">
                {coach.name}
              </h3>

              <p className="mt-2 text-[var(--ink-soft)]">
                {coach.role}
              </p>

              <p className="font-mono text-sm text-[var(--cobalt)] mt-5">
                {coach.speciality}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}