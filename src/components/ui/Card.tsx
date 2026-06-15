import React from "react";
import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  id,
  hoverEffect = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={
        hoverEffect
          ? { y: -4, boxShadow: "0 12px 30px -10px rgba(201, 147, 59, 0.15)" }
          : undefined
      }
      className={`bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-2xl p-6 sm:p-8 transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
