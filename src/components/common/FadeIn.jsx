import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function FadeIn({
  children,
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}