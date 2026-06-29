import { motion } from "motion/react";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { IMAGES } from "../../utils/constants";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 65;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hem"
      className="relative pt-24 pb-16 overflow-hidden bg-linear-to-b from-[#F2EAE0]/50 via-brand-bg to-brand-bg md:min-h-[calc(100vh-85px)] flex items-center"
    >
      {/* خلفية شبكية ناعمة تضفي لمسة تصميم تحريرية راقية */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#2B2B2B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10 w-full py-6 md:py-10">
        {/* التعديل الجوهري هنا: الانتقال المريح من cols-1 إلى cols-12 يبدأ من مقاس md (التابلت) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-center">
          {/* العمود الأيسر: النصوص والعناوين الرئيسية */}
          <div className="md:col-span-7 flex flex-col justify-center items-center md:items-start w-full mx-auto md:mx-0 max-w-2xl md:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-brand-white border border-brand-border px-4 py-1.5 rounded-full text-brand-primary text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-5 w-fit shadow-xs"
            >
              <Sparkles
                size={12}
                className="text-brand-primary animate-pulse"
              />
              <span>Samhällsförståelse &amp; trygg myndighetskontakt</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="title-font text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-brand-text font-medium leading-[1.15] tracking-tight uppercase"
            >
              KUNSKAP SOM STÄRKER.
              <span className="block italic text-brand-primary mt-1 font-light normal-case">
                Trygghet genom förståelse.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-sans text-brand-text-secondary text-sm sm:text-base md:text-sm lg:text-lg leading-relaxed mt-5 mb-4 max-w-xl font-light"
            >
              <span className="font-bold">R S Sociostöd</span> erbjuder
              kundanpassade föreläsningar och utbildningsinsatser som gör
              samhällsinformation mer tillgänglig och begriplig.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-sans text-brand-text-secondary text-sm sm:text-base md:text-sm lg:text-lg leading-relaxed mt-0 mb-6 max-w-xl font-light"
            >
              Genom pedagogiska utbildningar vill vi stärka människors
              förståelse för hur samhället fungerar och skapa större trygghet i
              mötet med myndigheter och offentliga verksamheter.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-sans text-brand-text-secondary text-sm sm:text-base md:text-sm lg:text-lg leading-relaxed mt-0 mb-6 max-w-xl font-light"
            >
              Målet är inte att deltagarna ska kunna allt, utan att de ska känna
              sig tryggare, veta vart de kan vända sig och våga ta nästa steg
              när de behöver information eller stöd.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo("kontakt")}
                className="group shadow-md md:py-3 md:px-5"
              >
                <span>Skicka intresseanmälan</span>
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("teman")}
                className="md:py-3 md:px-5"
              >
                <BookOpen size={18} className="mr-2" />
                <span>Våra teman</span>
              </Button>
            </motion.div>
          </div>

          {/* العمود الأيمن: حاوية صورة الهيرو التي تم ضبط أبعادها لتعطي مظهراً فخماً على التابلت */}
          <div className="md:col-span-5 h-full w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full aspect-square sm:aspect-4/5 md:aspect-4/5 rounded-3xl overflow-hidden border border-brand-border/80 shadow-md max-w-sm md:max-w-none"
            >
              <img
                src={IMAGES.heroLifestyle}
                alt="R S Sociostöd – Skandinavisk design för välkomnande miljö"
                className="w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
              />

              {/* البطاقة العائمة الأنيقة - تم تصغير الفراغات والنصوص برفق على مقاس التابلت لتجنب التكدس */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 backdrop-blur-md bg-brand-white/80 border border-brand-border rounded-2xl p-3 lg:p-4 flex gap-3 lg:gap-4 items-center shadow-lg"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <span className="text-lg lg:text-xl">♡</span>
                </div>
                <div>
                  <h4 className="title-font text-brand-text font-bold text-xs lg:text-sm tracking-wide">
                    Hjälp med allmän information
                  </h4>
                  <p className="font-sans text-[10px] lg:text-[11px] text-brand-text-secondary leading-normal mt-0.5">
                    Att göra information enklare, tydligare och mer tillgänglig.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
