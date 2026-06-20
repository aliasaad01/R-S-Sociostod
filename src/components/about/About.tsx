import { Accessibility, BookOpen, Heart } from "lucide-react";
import { motion } from "motion/react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { BRAND_INFO } from "../../data/content";
import { IMAGES } from "../../utils/constants";

export default function About() {
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Accessibility":
        return <Accessibility className={className} size={28} />;
      case "BookOpen":
        return <BookOpen className={className} size={28} />;
      case "Heart":
        return <Heart className={className} size={28} />;
      default:
        return <Accessibility className={className} size={28} />;
    }
  };

  return (
    <section id="om" className="py-12 bg-brand-bg relative overflow-hidden">
      {/* عناصر الديكور الخلفية المدمجة بلمسة ناعمة وفخمة */}
      <div className="absolute right-[-10%] top-[20%] w-100 h-100 rounded-full bg-brand-primary/5 filter blur-3xl pointer-events-none select-none" />
      <div className="absolute left-[-5%] bottom-[10%] w-75 h-75 rounded-full bg-brand-border/10 filter blur-2xl pointer-events-none select-none" />

      <Container>
        {/* عنوان القسم متوافق مع الهوية البصرية */}
        <SectionTitle
          title="Om R S Sociostöd"
          subtitle="Bakgrunden till R S Sociostöd"
          showHeart={true}
        />

        {/* كتلة العرض والتعريف الشخصي بالمؤسسة */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* العمود الأيسر: الصورة الشخصية مع أنيميشن التلاشي والصعود */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* حدود زخرفية خلفية فخمة تلتف حول الصورة */}
              <div className="absolute -inset-4 rounded-3xl border bg-brand-primary/5 transform rotate-1 scale-102 pointer-events-none" />
              <div className="absolute inset-0 bg-brand-primary/5 rounded-3xl transform -rotate-2 translate-x-3 translate-y-3 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border border-brand-border bg-brand-white shadow-md aspect-4/5">
                <img
                  src={IMAGES.raschaPortrait}
                  alt="Rascha Skef – Socionom och grundare av R S Sociostöd"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* العمود الأيمن: النص التحريري مع أنيميشن التلاشي الجانبي التدريجي */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-7 text-left flex flex-col justify-center"
          >
            <h3 className="title-font text-2xl sm:text-3xl md:text-4xl text-brand-text font-medium leading-tight mb-6">
              Kunskap som gör skillnad.
            </h3>

            <div className="font-sans text-brand-text-secondary text-base sm:text-lg leading-relaxed space-y-5 font-light">
              <p>
                Jag heter{" "}
                <strong className="font-medium text-brand-text">
                  Rascha Skef
                </strong>{" "}
                och är socionom samt grundare av R S Sociostöd. Genom min
                erfarenhet av myndighetsutövning och socialt arbete har jag mött
                många människor som upplever att samhällsinformation och
                kontakten med myndigheter kan vara svår att förstå.
              </p>
              <p>
                Det väckte en vilja hos mig att bidra till ökad kunskap,
                trygghet och förståelse. Därför startade jag R S Sociostöd för
                att göra samhällsinformation more tillgänglig och stärka
                människors möjligheter att känna sig trygga och delaktiga i
                samhället.
              </p>
              <p>
                Genom föreläsningar, tematräffar och utbildningsmaterial
                erbjuder jag allmän samhällsinformation som hjälper deltagare
                att bättre förstå hur samhället fungerar och känna större
                trygghet inför möten med myndigheter.
              </p>
            </div>

            {/* منطقة التوقيع والمسمى الوظيفي */}
            <div className="mt-8 pt-6 border-t border-brand-border/60">
              <span className="block font-serif italic text-2xl text-brand-primary font-light">
                {BRAND_INFO.founder}
              </span>
              <span className="block text-xs uppercase tracking-wider text-brand-text-secondary mt-1">
                {BRAND_INFO.role}
              </span>
            </div>

            {/* التنبيه القانوني الإلزامي */}
            <div className="mt-8 bg-brand-border/30 border border-brand-border rounded-xl p-4 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <p className="font-sans text-xs text-brand-text-secondary leading-normal">
                <strong>Viktigt förtydligande:</strong> R S Sociostöd erbjuder
                utbildning, kunskapsspridning och generell samhällsinformation.
                Verksamheten erbjuder <strong>inte</strong> individuell
                rådgivning eller stöd i enskilda ärenden.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
