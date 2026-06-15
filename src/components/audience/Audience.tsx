import React from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  HeartHandshake,
  GraduationCap,
  Award,
  Users2,
  Building2,
} from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { AUDIENCE_ITEMS } from "../../data/content";

export default function Audience() {
  // ربط أسماء الأيقونات القادمة من البيانات بمكونات لوكايد بشكل ديناميكي
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className={className} size={24} />;
      case "HeartHandshake":
        return <HeartHandshake className={className} size={24} />;
      case "GraduationCap":
        return <GraduationCap className={className} size={24} />;
      case "Award":
        return <Award className={className} size={24} />;
      case "Users2":
        return <Users2 className={className} size={24} />;
      case "Building2":
        return <Building2 className={className} size={24} />;
      default:
        return <BookOpen className={className} size={24} />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // إضافة as const لتفادي خطأ TypeScript
      },
    },
  };

  return (
    <section
      id="malgrupper"
      className="py-20 bg-[var(--color-brand-white)] relative overflow-hidden"
    >
      {/* عناصر الديكور الخلفية الناعمة المتناسقة مع الهوية */}
      <div className="absolute left-[-10%] top-[30%] w-[380px] h-[380px] rounded-full bg-[var(--color-brand-primary)]/4 filter blur-[120px] pointer-events-none select-none" />
      <div className="absolute right-[-5%] bottom-[10%] w-[340px] h-[340px] rounded-full bg-[var(--color-brand-border)]/15 filter blur-[100px] pointer-events-none select-none" />

      <Container>
        {/* عنوان القسم متطابق مع التصميم المعتمد */}
        <SectionTitle
          title="Målgrupper"
          subtitle="Vilka vi riktar oss till"
          showHeart={true}
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[var(--color-brand-text-secondary)] text-center text-lg max-w-2xl mx-auto mb-12 font-light"
        >
          R S Sociostöds föreläsningar och insatser är utformade för att stötta
          och berika bildning, utveckling samt integration inom en rad olika
          sektorer och verksamheter.
        </motion.p>

        {/* شبكة توزيع بطاقات الفئات المستهدفة مع الحركة المتتابعة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {AUDIENCE_ITEMS.map((audience) => (
            <motion.div key={audience.id} variants={itemVariants}>
              <Card
                hoverEffect={true}
                className="group h-full bg-[var(--color-brand-bg)]/45 border border-[var(--color-brand-border)]/70 flex flex-col items-start p-6 sm:p-8"
              >
                {/* حاوية الأيقونة الصغيرة المربعة تتفاعل بسلاسة عند مرور الماوس فوق البطاقة */}
                <div className="w-11 h-11 rounded-lg bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] flex items-center justify-center text-[var(--color-brand-primary)] mb-5 group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-white)] transition-all duration-300">
                  {getIcon(
                    audience.iconName,
                    "text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-white)] transition-colors duration-300",
                  )}
                </div>

                {/* عنوان المجموعات المستهدفة */}
                <h3 className="title-font text-xl font-bold text-[var(--color-brand-text)] mb-3">
                  {audience.title}
                </h3>

                {/* وصف واهتمامات كل فئة */}
                <p className="font-sans text-[var(--color-brand-text-secondary)] text-sm leading-relaxed font-light">
                  {audience.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* صندوق تعزيز الثقة والتخصيص لطلبات الفئات والبلديات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24 border border-dashed border-[var(--color-brand-primary)]/50 bg-[var(--color-brand-bg)]/30 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto"
        >
          <h4 className="title-font text-[var(--color-brand-primary)] text-xl font-medium mb-3">
            Hittade du inte er specifika verksamhet?
          </h4>
          <p className="font-sans text-[var(--color-brand-text-secondary)] text-sm leading-relaxed font-light mb-1">
            Vi kundanpassar alltid alla insatser utifrån deltagarnas
            förutsättningar, modersmål, och kunskapsnivå.
          </p>
          <span className="font-sans text-xs font-semibold text-[var(--color-brand-text)] uppercase tracking-wider block mt-3">
            Hör av dig så diskuterar vi era unika behov tillsammans!
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
