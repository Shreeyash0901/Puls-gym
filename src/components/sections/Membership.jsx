import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import membership from "../../data/membership";

export default function Membership() {
  return (
    <section
      id="membership"
      className="py-24 bg-[var(--bg)]"
    >
      <SectionTitle
        title="Membership"
        description="Choose the plan that matches your fitness journey."
      />

      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {membership.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className={`p-8 rounded-lg ${
                plan.featured
                  ? "bg-[var(--ink)] text-white"
                  : "bg-[var(--panel)] border border-[var(--line)]"
              }`}
            >
              <h3 className="font-display text-3xl uppercase">
                {plan.name}
              </h3>

              <div className="mt-6">
                <span className="font-mono text-5xl">
                  {plan.price}
                </span>

                <span className="ml-2 opacity-70">
                  {plan.duration}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    • {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={plan.featured ? "light" : "primary"}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}