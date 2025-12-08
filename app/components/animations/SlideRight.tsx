"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
};

export default function SlideRight({ children, delay = 0, duration = 0.6 }: Props) {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
