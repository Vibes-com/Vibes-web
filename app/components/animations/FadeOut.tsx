"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
};

export default function FadeOut({ children, duration = 0.6 }: Props) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}
