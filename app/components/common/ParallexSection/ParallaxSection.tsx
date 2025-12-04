"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({
  children,
  offset = -150, // how much it moves
}: {
  children: React.ReactNode;
  offset?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }} className="h-screen">
      {children}
    </motion.div>
  );
}
