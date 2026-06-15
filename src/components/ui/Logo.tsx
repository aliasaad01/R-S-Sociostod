import React from "react";

interface LogoProps {
  showSubline?: boolean;
  className?: string;
  variant?: "dark" | "light" | "gold";
}

export default function Logo({
  showSubline = true,
  className = "",
  variant = "gold",
}: LogoProps) {
  // تحديد كلاس اللون بناءً على الـ variant الممرر ديناميكياً لتجنب التضارب البصري
  const textClass =
    variant === "light"
      ? "text-white"
      : variant === "gold"
        ? "text-[var(--color-brand-primary)]"
        : "text-[var(--color-brand-text)]";

  return (
    <div
      className={`inline-flex items-center gap-3 select-none pointer-events-none ${className}`}
    >
      {/* حاوية أيقونة الشعار مع تثبيت الأبعاد لمنع وميض أو اهتزاز العناصر أثناء التحميل */}
      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
        <img
          src="/favicon.PNG"
          alt="R S Sociostöd logotyp"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* النصوص الجانبية المرافقة للشعار */}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`title-font font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base leading-none ${textClass}`}
        >
          RS Sociostöd
        </span>

        {showSubline && (
          <span className="font-sans text-[8px] sm:text-[9px] tracking-wide text-[var(--color-brand-text-secondary)]/80 uppercase font-medium leading-none mt-1">
            Din guide vid myndighetskontakt
          </span>
        )}
      </div>
    </div>
  );
}
