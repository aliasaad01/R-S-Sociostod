import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  X,
  ChevronRight,
  HelpCircle,
  Sparkles,
  Presentation,
  Users2,
  FileText,
  Sliders,
  BookOpen,
  HelpCircle as QuestionIcon,
} from "lucide-react";
import { WHATS_APP_PREFILLS } from "../../utils/constants";

export default function EmailAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setPulse(false);
    }
  }, [isOpen]);

  // البريد الإلكتروني الرسمي المعتمد للمؤسسة
  const companyEmail = "info@rssociostod.se";

  const assistantOptions = [
    {
      label: "Föreläsningar",
      text: WHATS_APP_PREFILLS.forelasningar,
      subject: "Fråga om föreläsningar - R S Sociostöd",
      description: "Frågor om föreläsningar och utbildningsupplägg",
      icon: <Presentation size={16} className="text-brand-primary" />,
    },
    {
      label: "Tematräffar & workshops",
      text: WHATS_APP_PREFILLS.tematraffar,
      subject: "Fråga om tematräffar - R S Sociostöd",
      description: "Dialogbaserade träffar och gruppaktiviteter",
      icon: <Users2 size={16} className="text-brand-primary" />,
    },
    {
      label: "Offert & prisförslag",
      text: WHATS_APP_PREFILLS.priser,
      subject: "Förfrågan om offert - R S Sociostöd",
      description: "Begär offert eller ställ frågor om kostnader",
      icon: <FileText size={16} className="text-brand-primary" />,
    },
    {
      label: "Anpassat upplägg",
      text: WHATS_APP_PREFILLS.anpassat,
      subject: "Fråga om anpassat upplägg - R S Sociostöd",
      description:
        "Vi hjälper er att hitta rätt upplägg utifrån målgrupp och behov",
      icon: <Sliders size={16} className="text-brand-primary" />,
    },
    {
      label: "Utbildningsmaterial",
      text: WHATS_APP_PREFILLS.utbildningsmaterial,
      subject: "Fråga om utbildningsmaterial - R S Sociostöd",
      description: "Frågor om kompendier, deltagarguider och stödmaterial",
      icon: <BookOpen size={16} className="text-brand-primary" />,
    },
    {
      label: "Övriga frågor",
      text: WHATS_APP_PREFILLS.frågor,
      subject: "Allmän förfrågan - R S Sociostöd",
      description: "Har du en annan fråga? Skicka ett meddelande till oss.",
      icon: <QuestionIcon size={16} className="text-brand-primary" />,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* صندوق المحادثة المساعد العائم */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 max-w-[calc(100vw-32px)] bg-brand-white border border-brand-border rounded-3xl overflow-hidden shadow-2xl mb-4"
          >
            {/* ترويسة نافذة المساعد (Header) */}
            <div className="bg-brand-primary p-5 text-white text-left relative flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/25 shrink-0">
                <Sparkles size={18} className="text-white animate-pulse" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-blue-400 border border-brand-primary" />
              </div>

              <div className="flex-1">
                <h4 className="font-sans font-bold text-sm tracking-wide text-white leading-none">
                  Sociostöd-Guide
                </h4>
                <span className="font-sans text-[10px] text-white/80 leading-none block mt-1">
                  Svarar vanligtvis snabbt via e-post
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

            {/* جسم نافذة المساعد يحتوي على الرسالة والخيارات (Body) */}
            <div className="p-5 bg-brand-bg/40 max-h-87.5 overflow-y-auto">
              {/* فقاعة الترحيب الذكية */}
              <div className="bg-brand-white border border-brand-border rounded-2xl rounded-tl-none p-4 text-left shadow-xs mb-5">
                <p className="font-sans text-xs text-brand-text leading-relaxed">
                  Hej 👋
                </p>
                <p className="font-sans text-xs text-brand-text leading-relaxed mt-1">
                  Jag hjälper dig gärna att komma i kontakt med R S Sociostöd
                  via e-post. Välj ett ämne nedan så förbereder vi ditt
                  meddelande direkt. <br />
                  Svarar vanligtvis inom 1-2 dagar
                </p>
              </div>

              {/* أزرار مسارات التوجيه عبر البريد الإلكتروني */}
              <div className="space-y-2">
                {assistantOptions.map((opt, idx) => {
                  // بناء هيكل الإيميل التلقائي مع ملء الفراغات ديناميكياً
                  const defaultBody = opt.text
                    ? opt.text
                    : `Hej R S Sociostöd,\n\nJag är intresserad av ert upplägg gällande "${opt.label}" och skulle vilja ha mer information.\n\nMed vänliga hälsningar,`;

                  const mailtoUrl = `mailto:${companyEmail}?subject=${encodeURIComponent(opt.subject)}&body=${encodeURIComponent(defaultBody)}`;

                  return (
                    <motion.a
                      key={idx}
                      href={mailtoUrl}
                      whileHover={{
                        x: 3,
                        backgroundColor: "var(--color-brand-white)",
                      }}
                      className="flex items-center justify-between p-3 rounded-xl border border-brand-border bg-brand-white/60 hover:border-brand-primary/45 transition-colors text-left group focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    >
                      {/* الأيقونة المخصصة الذكية المضافة حديثاً */}
                      <div className="w-8 h-8 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center shrink-0 mr-3 transition-colors">
                        {opt.icon}
                      </div>

                      <div className="flex-1 pr-2">
                        <span className="block font-sans font-semibold text-xs text-brand-text">
                          {opt.label}
                        </span>
                        <span className="block font-sans text-[10px] text-brand-text-secondary mt-0.5">
                          {opt.description}
                        </span>
                      </div>

                      <ChevronRight
                        size={14}
                        className="text-brand-text-secondary/60 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all shrink-0"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* شريط ذيل النافذة */}
            <div className="px-5 py-3 border-t border-brand-border bg-brand-white flex items-center justify-between text-[10px] text-brand-text-secondary">
              <span className="flex items-center gap-1 font-sans">
                <HelpCircle size={11} /> Öppnas i ditt e-postprogram
              </span>
              <span className="font-sans font-semibold text-brand-primary uppercase">
                RS Sociostöd
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر الإطلاق الدائري المحدث بأيقونة الـ Mail */}
      <motion.button
        id="email-assistant-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={pulse && !isOpen ? { y: [0, -6, 0] } : {}}
        transition={
          pulse && !isOpen
            ? { repeat: Infinity, duration: 2.5, ease: "easeOut" }
            : {}
        }
        className="w-14 h-14 rounded-full bg-brand-primary text-white border border-brand-primary/20 flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
        aria-label="Öppna e-post assistent"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <Mail size={24} className="animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 text-[9px] text-white font-bold items-center justify-center">
                1
              </span>
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}
