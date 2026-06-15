import React from "react";
import { motion } from "motion/react";
import { Globe, ShieldCheck, FileText, Check } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { THEME_ITEMS } from "../../data/content";

export default function Themes() {
  // ربط أسماء الأيقونات القادمة من مصفوفة البيانات بمكونات لوكايد ديناميكياً
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className={className} size={30} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} size={30} />;
      case "FileText":
        return <FileText className={className} size={30} />;
      default:
        return <Globe className={className} size={30} />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const, // 👈 أضفنا "as const" هنا لحل الخطأ تماماً
      },
    },
  };

  return (
    <section
      id="teman"
      className="py-20 bg-[var(--color-brand-white)] relative overflow-hidden"
    >
      {/* عناصر زخرفية خلفية بألوان الهوية البصرية الناعمة */}
      <div className="absolute left-[3%] top-[10%] w-[330px] h-[330px] rounded-full bg-[#E6DDD1]/30 filter blur-3xl pointer-events-none select-none" />
      <div className="absolute right-[5%] bottom-[5%] w-[420px] h-[420px] rounded-full bg-[#C9933B]/3 filter blur-3xl pointer-events-none select-none" />

      <Container>
        {/* عنوان القسم متوافق مع الهوية التحريرية */}
        <SectionTitle
          title="Våra Teman"
          subtitle="Utbildningsområden som gör skillnad i vardagen"
          showHeart={true}
        />

        {/* النص التمهيدي المعتمد في الوثيقة الرسمية */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[var(--color-brand-text-secondary)] text-center text-lg max-w-2xl mx-auto mb-12 font-light"
        >
          Vi fokuserar på att göra komplicerad information lättillgänglig och
          tydlig. Våra insatser skapar trygghet och bygger starka broar för ökad
          integration och förståelse.
        </motion.p>

        {/* شبكة البطاقات مع تفعيل تأثير الحركة المتتابع ذو المظهر الاحترافي */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {THEME_ITEMS.map((theme) => (
            <motion.div
              key={theme.id}
              variants={itemVariants}
              className="h-full"
            >
              <Card
                hoverEffect={true}
                className="h-full flex flex-col justify-between border-[var(--color-brand-border)]/80 relative overflow-hidden group"
              >
                {/* خط علوي جمالي يتفاعل بلون الهوية الأساسي عند مرور الماوس */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-brand-primary)]/40 group-hover:bg-[var(--color-brand-primary)] transition-colors duration-300" />

                <div>
                  {/* حاوية الأيقونة العلوية للبطاقة */}
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-primary)] mb-6 border border-[var(--color-brand-border)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-white)] transition-all duration-300">
                    {getIcon(theme.iconName, "transition-colors duration-300")}
                  </div>

                  {/* العنوان والوصف التفصيلي للمحور */}
                  <h3 className="title-font text-2xl font-semibold text-[var(--color-brand-text)] mb-4">
                    {theme.title}
                  </h3>
                  <p className="font-sans text-[var(--color-brand-text-secondary)] text-[14px] sm:text-base leading-relaxed mb-6 font-light">
                    {theme.description}
                  </p>
                </div>

                {/* قائمة نقاط التركيز المركزية لكل محور تعليمي (Centrala fokusområden) */}
                <div className="pt-6 border-t border-[var(--color-brand-border)]/50">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] mb-4">
                    Centrala fokusområden:
                  </h4>
                  <ul className="space-y-3">
                    {theme.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-sm font-sans text-[var(--color-brand-text-secondary)]"
                      >
                        <span className="w-5 h-5 rounded-full bg-[var(--color-brand-primary)]/10 flex items-center justify-center text-[var(--color-brand-primary)] shrink-0 mt-0.5">
                          <Check size={11} className="stroke-[3]" />
                        </span>
                        <span className="font-normal">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
