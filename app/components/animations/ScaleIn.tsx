"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
};

export default function ScaleIn({ children, delay = 0, duration = 0.6 }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
       viewport={{ once: false }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
