import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  X,
  ChevronRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { WHATS_APP_PREFILLS } from "../../utils/constants";

export default function WhatsAppAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // إيقاف حركة النبض الأولية بمجرد تفاعل المستخدم وفتح الصندوق لأول مرة
    if (isOpen) {
      setPulse(false);
    }
  }, [isOpen]);

  const whatsappNumber = "46720444486"; // رقم الواتساب السويدي المعتمد للمؤسسة

  const assistantOptions = [
    {
      label: "Föreläsningar",
      text: WHATS_APP_PREFILLS.forelasningar,
      description: "Förfrågningar om föredrag & tillfällen",
    },
    {
      label: "Tematräffar",
      text: WHATS_APP_PREFILLS.tematraffar,
      description: "Frågor om interaktiva workshops",
    },
    {
      label: "Priser & offert",
      text: WHATS_APP_PREFILLS.priser,
      description: "Prisuppgifter för förening/skola",
    },
    {
      label: "Allmän kontakt",
      text: WHATS_APP_PREFILLS.kontakt,
      description: "Prata med Rascha Skef för rådgivning",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* صندوق المحادثة المساعد العائم مع مؤثرات الدخول والخروج الحركية */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 max-w-[calc(100vw-32px)] bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] rounded-3xl overflow-hidden shadow-2xl mb-4"
          >
            {/* ترويسة نافذة المساعد (Header) */}
            <div className="bg-[var(--color-brand-primary)] p-5 text-white text-left relative flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/25 shrink-0">
                <Sparkles size={18} className="text-white animate-pulse" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border border-[var(--color-brand-primary)]" />
              </div>

              <div className="flex-1">
                <h4 className="font-sans font-bold text-sm tracking-wide text-white leading-none">
                  Sociostöd-Guide
                </h4>
                <span className="font-sans text-[10px] text-white/80 leading-none block mt-1">
                  Svarar vanligtvis direkt
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer focus:outline-none"
                aria-label="Stäng assistent"
              >
                <X size={18} />
              </button>
            </div>

            {/* جسم نافذة المساعد ويحتوي على رسالة الترحيب والخيارات المتاحة (Body) */}
            <div className="p-5 bg-[var(--color-brand-bg)]/40 max-h-[350px] overflow-y-auto">
              {/* فقاعة الترحيب الذكية لـ بوت التوجيه */}
              <div className="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] rounded-2xl rounded-tl-none p-4 text-left shadow-xs mb-5">
                <p className="font-sans text-xs text-[var(--color-brand-text)] leading-relaxed">
                  Hej 👋
                </p>
                <p className="font-sans text-xs text-[var(--color-brand-text)] leading-relaxed mt-1">
                  Jag hjälper dig gärna att komma i kontakt med R S Sociostöd
                  direkt på WhatsApp. Vad är du nyfiken på idag?
                </p>
              </div>

              {/* أزرار مسارات التوجيه المسبقة الإعداد لفتح الواتساب مباشرة */}
              <div className="space-y-2">
                {assistantOptions.map((opt, idx) => {
                  const prefilledUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(opt.text)}`;
                  return (
                    <motion.a
                      key={idx}
                      href={prefilledUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        x: 3,
                        backgroundColor: "var(--color-brand-white)",
                      }}
                      className="flex items-center justify-between p-3 rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-white)]/60 hover:border-[var(--color-brand-primary)]/45 transition-colors text-left group focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
                    >
                      <div className="flex-1 pr-2">
                        <span className="block font-sans font-semibold text-xs text-[var(--color-brand-text)]">
                          {opt.label}
                        </span>
                        <span className="block font-sans text-[10px] text-[var(--color-brand-text-secondary)] mt-0.5">
                          {opt.description}
                        </span>
                      </div>
                      <ChevronRight
                        size={14}
                        className="text-[var(--color-brand-text-secondary)]/60 group-hover:text-[var(--color-brand-primary)] group-hover:translate-x-0.5 transition-all shrink-0"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* شريط ذيل النافذة لتأكيد الأمان الموثق */}
            <div className="px-5 py-3 border-t border-[var(--color-brand-border)] bg-[var(--color-brand-white)] flex items-center justify-between text-[10px] text-[var(--color-brand-text-secondary)]">
              <span className="flex items-center gap-1 font-sans">
                <HelpCircle size={11} /> Öppnas säkert i WhatsApp
              </span>
              <span className="font-sans font-semibold text-[var(--color-brand-primary)] uppercase">
                RS Sociostöd
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر الإطلاق الدائري الثابت بأسفل الشاشة والمزود بنبض إشعار جذب الانتباه */}
      <motion.button
        id="whatsapp-assistant-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={pulse && !isOpen ? { y: [0, -6, 0] } : {}}
        transition={
          pulse && !isOpen
            ? { repeat: Infinity, duration: 2.5, ease: "easeOut" }
            : {}
        }
        className="w-14 h-14 rounded-full bg-[var(--color-brand-primary)] text-white border border-[var(--color-brand-primary)]/20 flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2"
        aria-label="Öppna WhatsApp assistent"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageCircle size={24} className="animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] text-white font-bold items-center justify-center">
                1
              </span>
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}
