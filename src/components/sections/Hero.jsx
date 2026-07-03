import { motion } from "framer-motion";
import Button from "../common/Button";
import Container from "../common/Container";
import PulseLine from "../common/PulseLine";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--bg-warm)] pt-36 pb-24"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[4px] text-[var(--ember)]"
            >
              LIVE • HEART RATE TRAINING
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mt-6"
            >
              Your Heart.
              <br />
              <span className="text-[var(--cobalt)]">
                Your Power.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-xl text-lg text-[var(--ink-soft)] leading-8"
            >
              Every workout is built around your heart-rate zones.
              Train smarter, recover faster, and become stronger with
              expert coaches and data-driven fitness.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Button href="#join">
                Start Free Trial
              </Button>

              <Button
                href="#programs"
                variant="secondary"
              >
                Explore Programs
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={hero}
              alt="Pulse Athlete"
              className="w-full rounded-2xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5">
              <p className="font-mono text-xs text-gray-500">
                LIVE HEART RATE
              </p>

              <h3 className="font-display text-4xl text-[var(--ember)]">
                168 BPM
              </h3>
            </div>
          </motion.div>
        </div>
      </Container>

      <PulseLine intensity={0.6} />
    </section>
  );
}