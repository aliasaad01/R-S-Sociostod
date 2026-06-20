import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  showHeart?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  showHeart = true,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const flexAlign =
    align === "center" ? "items-center justify-center" : "items-start";

  return (
    <div className={`mb-10 ${alignClass}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-brand-primary font-sans font-semibold tracking-widest text-xs uppercase mb-2 sm:mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="title-font font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text leading-tight uppercase tracking-wide"
      >
        {title}
      </motion.h2>

      {showHeart && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex ${flexAlign} gap-2 mt-3 sm:mt-4`}
        >
          <div className="w-8 h-px bg-brand-border" />
          <span className="text-brand-primary text-sm font-light select-none">
            ♡
          </span>
          <div className="w-8 h-px bg-brand-border" />
        </motion.div>
      )}
    </div>
  );
}
