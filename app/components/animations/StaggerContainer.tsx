"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
};

export default function StaggerContainer({children, delay = 0, stagger = 0.15,}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
       viewport={{ once: false }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
