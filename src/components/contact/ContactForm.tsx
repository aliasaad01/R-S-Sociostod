import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { BRAND_INFO } from "../../data/content";

// مخطط Zod للتحقق الصارم من صحة مدخلات حقول الاستمارة باللغة السويدية
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Namn måste innehålla minst 2 bokstäver" })
    .max(50, { message: "Namn kan inte överstiga 50 bokstäver" }),
  email: z
    .string()
    .min(1, { message: "E-postadress är obligatorisk" })
    .email({ message: "Vänligen ange en giltig e-postadress" }),
  organisation: z
    .string()
    .min(2, { message: "Organisation måste innehålla minst 2 tecken" })
    .max(80, { message: "Organisationen kan inte vara så lång" }),
  message: z
    .string()
    .min(10, { message: "Meddelandet måste innehålla minst 10 tecken" })
    .max(1000, { message: "Max 1000 tecken tillåtet" }),
});

type ContactFormFields = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organisation: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormFields) => {
    // جدار حماية إضافي لمنع تكرار الإرسال في الخلفية
    if (isSubmitting) return;

    setIsSubmitting(true);

    // محاكاة تأخير زمني واقعي لاعتماد وإرسال البيانات عبر السيرفر
    await new Promise((resolve) => setTimeout(resolve, 1400));

    setIsSubmitting(false);
    setSuccessToast(true);
    reset();

    // إخفاء إشعار النجاح تلقائياً بعد مرور 5 ثوانٍ
    setTimeout(() => {
      setSuccessToast(false);
    }, 5000);
  };

  return (
    <section
      id="kontakt"
      className="py-20 bg-[var(--color-brand-bg)] relative overflow-hidden"
    >
      {/* هالات خلفية مضيئة تمنح التصميم مظهراً تحريرياً فاخراً */}
      <div className="absolute left-[-20%] bottom-[-20%] w-[500px] h-[500px] rounded-full bg-[var(--color-brand-primary)]/5 filter blur-3xl pointer-events-none select-none" />
      <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--color-brand-primary)]/5 filter blur-[100px] pointer-events-none select-none" />

      <Container>
        {/* عنوان القسم متوافق مع الهوية الرسمية للمؤسسة */}
        <SectionTitle
          title="Skicka en intresseanmälan"
          subtitle="Ta första steget mot en anpassad utbildningsinsats"
          showHeart={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* الجانب الأيسر: معلومات الاتصال وقنوات التواصل الاجتماعي */}
          <div className="col-span-1 lg:col-span-5 text-left">
            <h3 className="title-font text-2xl sm:text-3xl text-[var(--color-brand-text)] font-semibold mb-6">
              Låt oss samtala.
            </h3>

            <p className="font-sans text-[var(--color-brand-text-secondary)] text-base leading-relaxed mb-10 font-light">
              Fyll i formuläret så återkommer jag snarast för att diskutera ett
              skräddarsytt upplägg som passar perfekt för just er organisation
              och målgrupp.
            </p>

            {/* خلايا قنوات التواصل المهيكلة بعناية */}
            <div className="space-y-4">
              {/* خيار البريد الإلكتروني المباشر */}
              <motion.a
                whileHover={{ x: 4 }}
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-white)] shadow-xs hover:border-[var(--color-brand-primary)]/40 transition-colors group focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-white)] transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold text-[var(--color-brand-text)] uppercase tracking-widest">
                    Skriv direkt
                  </span>
                  <span className="block font-sans text-sm sm:text-base text-[var(--color-brand-text-secondary)] font-semibold mt-0.5">
                    {BRAND_INFO.email}
                  </span>
                </div>
              </motion.a>

              {/* حساب الإنستغرام */}
              <motion.a
                whileHover={{ x: 4 }}
                href="https://www.instagram.com/rs.sociostod"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-white)] shadow-xs hover:border-[var(--color-brand-primary)]/40 transition-colors group focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-white)] transition-colors shrink-0">
                  <Instagram size={18} />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold text-[var(--color-brand-text)] uppercase tracking-widest">
                    Följ på Instagram
                  </span>
                  <span className="block font-sans text-sm sm:text-base text-[var(--color-brand-text-secondary)] font-semibold mt-0.5">
                    {BRAND_INFO.instagram}
                  </span>
                </div>
              </motion.a>

              {/* صفحة الفيسبوك */}
              <motion.a
                whileHover={{ x: 4 }}
                href="https://www.facebook.com/share/1EHYGunjbH/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-white)] shadow-xs hover:border-[var(--color-brand-primary)]/40 transition-colors group focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-white)] transition-colors shrink-0">
                  <Facebook size={18} />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold text-[var(--color-brand-text)] uppercase tracking-widest">
                    Gilla på Facebook
                  </span>
                  <span className="block font-sans text-sm sm:text-base text-[var(--color-brand-text-secondary)] font-semibold mt-0.5">
                    {BRAND_INFO.facebook}
                  </span>
                </div>
              </motion.a>
            </div>

            {/* إشعار أمان البيانات الخاص بقواعد حماية الخصوصية GDPR */}
            <p className="font-sans text-xs text-[var(--color-brand-text-secondary)] italic mt-10 text-left">
              Vi hanterar personuppgifter säkert i enighet med gällande
              dataskyddsbestämmelser och raderar era data efter slutförd
              kontakt.
            </p>
          </div>

          {/* الجانب الأيمن: استمارة حقول المدخلات التفاعلية للعميل */}
          <div className="col-span-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] rounded-3xl p-6 sm:p-10 shadow-sm"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 text-left"
              >
                {/* حقل الاسم بالكامل */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] mb-2"
                  >
                    Ditt Namn{" "}
                    <span className="text-[var(--color-brand-primary)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    disabled={isSubmitting}
                    {...register("name")}
                    placeholder="För- och efternamn"
                    className={`w-full font-sans bg-[var(--color-brand-bg)] border rounded-xl px-4 py-3 text-[var(--color-brand-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/45 transition-all text-left placeholder:[var(--color-brand-text-secondary)]/50 disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.name
                        ? "border-red-400"
                        : "border-[var(--color-brand-border)] focus:border-[var(--color-brand-primary)]"
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5 font-medium">
                      <AlertCircle size={14} />
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* حقل البريد الإلكتروني */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] mb-2"
                  >
                    E-postadress{" "}
                    <span className="text-[var(--color-brand-primary)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    disabled={isSubmitting}
                    {...register("email")}
                    placeholder="exempel@organisation.se"
                    className={`w-full font-sans bg-[var(--color-brand-bg)] border rounded-xl px-4 py-3 text-[var(--color-brand-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/45 transition-all text-left placeholder:[var(--color-brand-text-secondary)]/50 disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.email
                        ? "border-red-400"
                        : "border-[var(--color-brand-border)] focus:border-[var(--color-brand-primary)]"
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5 font-medium">
                      <AlertCircle size={14} />
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* حقل اسم المنظمة أو الجهة التعليمية */}
                <div>
                  <label
                    htmlFor="organisation"
                    className="block font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] mb-2"
                  >
                    verksamhet / organisation{" "}
                    <span className="text-[var(--color-brand-primary)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    disabled={isSubmitting}
                    {...register("organisation")}
                    placeholder="T.ex. Studieförbundet, Komvux, etc."
                    className={`w-full font-sans bg-[var(--color-brand-bg)] border rounded-xl px-4 py-3 text-[var(--color-brand-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/45 transition-all text-left placeholder:[var(--color-brand-text-secondary)]/50 disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.organisation
                        ? "border-red-400"
                        : "border-[var(--color-brand-border)] focus:border-[var(--color-brand-primary)]"
                    }`}
                  />
                  {errors.organisation && (
                    <span className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5 font-medium">
                      <AlertCircle size={14} />
                      {errors.organisation.message}
                    </span>
                  )}
                </div>

                {/* حقل تفاصيل رسالة الطلب والاهتمام */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] mb-2"
                  >
                    Ditt Meddelande{" "}
                    <span className="text-[var(--color-brand-primary)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    disabled={isSubmitting}
                    {...register("message")}
                    placeholder="Berätta kortfattat om era önskemål, uppskattat antal deltagare och tidsram..."
                    className={`w-full font-sans bg-[var(--color-brand-bg)] border rounded-xl px-4 py-3 text-[var(--color-brand-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/45 transition-all text-left placeholder:[var(--color-brand-text-secondary)]/50 resize-y min-h-[120px] disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.message
                        ? "border-red-400"
                        : "border-[var(--color-brand-border)] focus:border-[var(--color-brand-primary)]"
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1.5 text-red-500 text-xs mt-1.5 font-medium">
                      <AlertCircle size={14} />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* زر الإرسال التفاعلي مع مؤشر التحميل الدائري */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center group disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--color-brand-white)]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Skickar intresseanmälan...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                        <span>Skicka intresseanmälan</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* نافذة نوتس النجاح المنبثقة السفلى مع دعم الحركات المتناهية الصغر AnimatePresence */}
      <AnimatePresence>
        {successToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 z-50 bg-[var(--color-brand-white)] border border-[var(--color-brand-primary)]/50 text-[var(--color-brand-text)] rounded-2xl p-4 max-w-sm flex items-start gap-4 shadow-xl"
            role="alert"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div className="text-left flex-1">
              <h5 className="font-sans font-bold text-sm text-[var(--color-brand-text)]">
                Anmälan mottagen!
              </h5>
              <p className="font-sans text-xs text-[var(--color-brand-text-secondary)] mt-0.5 leading-normal">
                Stort tack för ditt intresse! Jag kontaktar er via angiven
                e-postadress inom kort.
              </p>
            </div>
            <button
              onClick={() => setSuccessToast(false)}
              className="text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)] text-sm p-1 cursor-pointer focus:outline-none"
              aria-label="Stäng notis"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
