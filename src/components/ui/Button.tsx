import React from "react";
import { motion } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
  id,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-brand-primary)] active:scale-98 cursor-pointer tracking-wide whitespace-nowrap shrink-0";

  const variants = {
    primary:
      "bg-[var(--color-brand-primary)] text-[var(--color-brand-bg)] hover:bg-[var(--color-brand-primary-dark)] shadow-xs hover:shadow-md",
    secondary:
      "bg-[var(--color-brand-border)] text-[var(--color-brand-text)] hover:bg-opacity-80",
    outline:
      "bg-transparent border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-brand-white)]",
    white:
      "bg-[var(--color-brand-white)] text-[var(--color-brand-text)] hover:bg-[var(--color-brand-bg)] hover:text-[var(--color-brand-primary)] shadow-xs",
  };

  // تعديل ذكي ومستقر للأحجام لكي تتجاوب وتتقلص تلقائياً على الشاشات الوسط والصغيرة
  const sizes = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-5 py-2.5 text-xs sm:text-sm md:px-6 md:py-3 md:text-base",
    lg: "px-6 py-3 text-sm md:px-7 md:py-3.5 md:text-base lg:px-9 lg:py-4 lg:text-base",
  };

  return (
    <motion.button
      // whileHover={{ y: -2, scale: 1.01 }}
      // whileTap={{ scale: 0.98 }}
      id={id}
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
