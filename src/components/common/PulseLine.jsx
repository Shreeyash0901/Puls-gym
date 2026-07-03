import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PulseLine({
  intensity = 1,
  color = "var(--cobalt)",
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const spike = 18 * intensity;

  const path = `M0,30 L60,30 L75,30 L82,${30 - spike}
  L89,${30 + spike * 1.4}
  L96,30 L110,30 L400,30`;

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{ height: "60px" }}
    >
      <svg
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  pathLength: 1,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 1.1,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}