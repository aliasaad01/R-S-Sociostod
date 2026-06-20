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
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="teman"
      className="py-20 bg-brand-white relative overflow-hidden"
    >
      {/* عناصر زخرفية خلفية بألوان الهوية البصرية الناعمة */}
      <div className="absolute left-[3%] top-[10%] w-82.5 h-82.5 rounded-full bg-[#E6DDD1]/30 filter blur-3xl pointer-events-none select-none" />
      <div className="absolute right-[5%] bottom-[5%] w-105 h-105 rounded-full bg-[#C9933B]/3 filter blur-3xl pointer-events-none select-none" />

      <Container>
        {/* عنوان القسم متوافق مع الهوية التحريرية */}
        <SectionTitle
          title="Våra Teman"
          subtitle="Det här hjälper vi dig att förstå"
          showHeart={true}
        />

        {/* النص التمهيدي المعتمد في الوثيقة الرسمية */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-brand-text-secondary text-center text-lg max-w-2xl mx-auto mb-12 font-light"
        >
          Vi förklarar viktig information på ett enkelt och tydligt sätt. Vårt
          mål är att skapa trygghet, öka förståelsen och göra det lättare att
          hitta rätt stöd och information.
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
                className="h-full flex flex-col justify-between border-brand-border/80 relative overflow-hidden group"
              >
                {/* خط علوي جمالي يتفاعل بلون الهوية الأساسي عند مرور الماوس */}
                <div className="absolute top-0 left-0 right-0 h-0.75 bg-brand-primary/40 group-hover:bg-brand-primary transition-colors duration-300" />

                <div>
                  {/* حاوية الأيقونة العلوية للبطاقة */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary mb-6 border border-brand-border group-hover:bg-brand-primary group-hover:text-brand-white transition-all duration-300">
                    {getIcon(theme.iconName, "transition-colors duration-300")}
                  </div>

                  {/* العنوان والوصف التفصيلي للمحور */}
                  <h3 className="title-font text-2xl font-semibold text-brand-text mb-4">
                    {theme.title}
                  </h3>
                  <p className="font-sans text-brand-text-secondary text-[14px] sm:text-base leading-relaxed mb-6 font-light">
                    {theme.description}
                  </p>
                </div>

                {/* قائمة نقاط التركيز المركزية لكل محور تعليمي (Centrala fokusområden) */}
                <div className="pt-6 border-t border-brand-border/50">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text mb-4">
                    Centrala fokusområden:
                  </h4>
                  <ul className="space-y-3">
                    {theme.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-sm font-sans text-brand-text-secondary"
                      >
                        <span className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                          <Check size={11} className="stroke-3" />
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
