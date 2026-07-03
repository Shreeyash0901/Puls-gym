import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Join() {
  return (
    <section
      id="join"
      className="py-28 bg-[var(--cobalt)] text-white"
    >
      <Container className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl uppercase"
        >
          First Class
          <br />
          Is On Us
        </motion.h2>

        <p className="mt-8 max-w-xl mx-auto text-white/80">
          No commitment. Experience our training system before
          becoming a member.
        </p>

        <div className="mt-10">
          <Button variant="light">
            Book Your Trial
          </Button>
        </div>
      </Container>
    </section>
  );
}