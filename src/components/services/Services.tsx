import React from "react";
import {
  Presentation,
  Users,
  Files,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Services() {
  // ربط أسماء الأيقونات بمكونات Lucide ديناميكياً
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Presentation":
        return <Presentation className={className} size={28} />;
      case "Users":
        return <Users className={className} size={28} />;
      case "Files":
        return <Files className={className} size={28} />;
      default:
        return <Presentation className={className} size={28} />;
    }
  };

  const handleCtaClick = () => {
    const element = document.getElementById("kontakt");
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
      id="tjanster"
      className="py-20 sm:py-28 bg-[var(--color-brand-bg)] relative overflow-hidden"
    >
      {/* عناصر الديكور الخلفية التحريرية الهادئة */}
      <div className="absolute right-[-5%] top-[10%] w-[350px] h-[350px] rounded-full bg-[var(--color-brand-primary)]/5 filter blur-[100px] pointer-events-none select-none" />
      <div className="absolute left-[5%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-[var(--color-brand-border)]/15 filter blur-[80px] pointer-events-none select-none" />

      <Container>
        {/* عنوان القسم الرئيسي */}
        <SectionTitle
          title="Våra Tjänster"
          subtitle="Professionella utbildningsinsatser för er verksamhet"
          showHeart={true}
        />

        {/* شبكة توزيع الخدمات الثلاثة الأساسية */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {/* سنقوم بإنتاج البطاقات بالاعتماد على مصفوفة البيانات المحمية */}
          {[
            {
              id: "forelasningar",
              iconName: "Presentation",
              title: "Föreläsningar",
              description:
                "Kunskapsbaserade föreläsningar som anpassas efter målgruppens behov och syftar till att stärka förståelse, delaktighet och trygghet i samhället.",
              features: [
                "Målgruppsanpassat innehåll",
                "Fokus på rättigheter & skyldigheter",
                "Interaktiva diskussioner",
              ],
              priceInfo: "Pris baseras på omfattning, tidsåtgång och målgrupp.",
            },
            {
              id: "tematraffar",
              iconName: "Users",
              title: "Tematräffar & Workshops",
              description:
                "Dialogbaserade träffar som skapar reflektion, kunskapsutbyte och nya perspektiv genom samtal och gruppdiskussioner.",
              features: [
                "Praktiska gruppövningar",
                "Fokus på vardagsnära frågor",
                "Erfarenhetsutbyte",
              ],
              priceInfo: "Pris baseras på omfattning, tidsåtgång och målgrupp.",
            },
            {
              id: "utbildningsmaterial",
              iconName: "Files",
              title: "Utbildningsmaterial",
              description:
                "Kompendier, deltagarguider och stödmaterial som stärker lärandet före, under och efter utbildningstillfället.",
              features: [
                "Klarspråk och enkel svenska",
                "Anpassat för målgruppen",
                "Digitalt eller tryckt format",
              ],
              priceInfo: "Pris baseras på omfattning och komplexitet.",
            },
          ].map((service, index) => (
            <Card
              key={service.id}
              delay={index * 0.1}
              hoverEffect={true}
              className="group flex flex-col justify-between h-full bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] text-left p-8 sm:p-9 relative"
            >
              <div>
                {/* الرقم الخلفي الجمالي للبطاقة يتفاعل عند تمرير الماوس */}
                <span className="absolute top-6 right-8 font-serif text-[var(--color-brand-border)]/80 font-bold text-5xl select-none group-hover:text-[var(--color-brand-primary)]/10 transition-colors duration-300">
                  0{index + 1}
                </span>

                {/* حاوية الأيقونة الخاصة بالخدمة */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-bg)] flex items-center justify-center text-[var(--color-brand-primary)] border border-[var(--color-brand-border)] group-hover:border-[var(--color-brand-primary)] transition-colors duration-300 mb-6 shrink-0">
                  {getIcon(
                    service.iconName,
                    "text-[var(--color-brand-primary)]",
                  )}
                </div>

                {/* عنوان الخدمة الرئيسي */}
                <h3 className="title-font text-2xl sm:text-3xl font-semibold text-[var(--color-brand-text)] mb-4">
                  {service.title}
                </h3>

                {/* وصف الخدمة */}
                <p className="font-sans text-[var(--color-brand-text-secondary)] text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* نقاط ما يتضمنه العرض تفصيلياً */}
                <div className="mt-6 pt-6 border-t border-[var(--color-brand-border)]/40">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text)] mb-3">
                    Vad som ingår:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-[var(--color-brand-text-secondary)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] shrink-0 mt-2" />
                        <span className="font-sans font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* الجزء السفلي للبطاقة ويشمل تفاصيل التسعير وزر الاتصال */}
              <div className="mt-8 pt-6 border-t border-[var(--color-brand-border)]/40 flex flex-col gap-4">
                {service.priceInfo && (
                  <div className="flex items-start gap-2 bg-[var(--color-brand-bg)]/40 border border-[var(--color-brand-border)]/30 rounded-lg px-3 py-2 text-xs text-[var(--color-brand-text-secondary)]">
                    <HelpCircle
                      size={14}
                      className="text-[var(--color-brand-primary)] shrink-0 mt-0.5"
                    />
                    <span className="font-sans leading-snug">
                      {service.priceInfo}
                    </span>
                  </div>
                )}

                {/* رابط حجز وإرسال طلب الاهتمام بالخدمة */}
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-dark)] transition-colors text-left cursor-pointer border-b border-[var(--color-brand-primary)]/30 pb-0.5 w-fit focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2"
                >
                  <span>Boka intresseanmälan</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* صندوق اقتباس وتوصية العملاء الشركاء لرفع مستوى الموثوقية العالية */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[var(--color-brand-white)] border border-[var(--color-brand-border)] flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[var(--color-brand-primary)]/10 flex items-center justify-center text-[var(--color-brand-primary)] shrink-0">
            <span className="text-3xl font-serif">”</span>
          </div>
          <div className="text-left flex-1">
            <p className="font-serif italic text-base sm:text-lg text-[var(--color-brand-text-secondary)] leading-relaxed font-light">
              "Raschas unika kombination av formell socionomkompetens och
              pedagogisk lyhördhet gör att hon når fram till alla. Hennes
              material och föreläsningar är enkla, strukturerade och fyllda med
              värme och respekt."
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="font-sans font-semibold text-xs text-[var(--color-brand-text)] uppercase tracking-widest">
                – Ann-Marie Lindgren,
              </span>
              <span className="font-sans text-xs text-[var(--color-brand-primary)] uppercase tracking-widest font-bold">
                Studieledare SFI
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
