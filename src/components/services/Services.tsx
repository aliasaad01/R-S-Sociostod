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

const boxs = [
  {
    id: "forelasningar",
    iconName: "Presentation",
    title: "Föreläsningar",
    description:
      "Föreläsningar som gör samhällets information lättare att förstå och stärker tryggheten i kontakt med myndigheter. Innehållet anpassas efter målgruppens behov.",
    features: [
      "Anpassat innehåll utifrån målgruppen",
      "Kunskap om rättigheter och skyldigheter",
      "Praktiska exempel från vardagen",
      "Möjlighet att ställa frågor",
    ],
    priceInfo:
      "Pris anpassas efter innehåll, omfattning och målgruppens behov. Kontakta oss för en offert.",
  },
  {
    id: "tematraffar",
    iconName: "Users",
    title: "Tematräffar & Workshops",
    description:
      "Träffar där deltagarna får samtala, dela erfarenheter och tillsammans fördjupa sin förståelse kring olika samhällsfrågor. \n\nUtgångspunkten är att skapa trygghet genom förståelse och att ta tillvara deltagarnas egna erfarenheter, frågor och perspektiv.",
    features: [
      "Samtal och erfarenhetsutbyte",
      "Reflektion och övningar",
      "Deltagarnas frågor i fokus",
      "Verktyg för ökad trygghet och förståelse",
    ],
    priceInfo:
      "Pris anpassas efter innehåll, omfattning och målgruppens behov. Kontakta oss för en offert.",
  },
  {
    id: "utbildningsmaterial",
    iconName: "Files",
    title: "Utbildningsmaterial",
    description:
      "Tydligt och lättillgängligt material som stärker förståelsen och hjälper deltagarna att ta med sig kunskapen vidare.",
    features: [
      "Deltagarguider och kompendier",
      "Sammanfattningar och stödmaterial",
      "Anpassat efter målgruppen",
      "Digitalt eller tryckt material",
    ],
    priceInfo:
      "Pris anpassas efter innehåll, omfattning och målgruppens behov. Kontakta oss för en offert.",
  },
];
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
      className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden"
    >
      {/* عناصر الديكور الخلفية التحريرية الهادئة */}
      <div className="absolute right-[-5%] top-[10%] w-87.5 h-87.5 rounded-full bg-brand-primary/5 filter blur-[100px] pointer-events-none select-none" />
      <div className="absolute left-[5%] bottom-[10%] w-75 h-75 rounded-full bg-brand-border/15 filter blur-[80px] pointer-events-none select-none" />

      <Container>
        {/* عنوان القسم الرئيسي */}
        <SectionTitle
          title="Våra Tjänster"
          subtitle="Utbildningar anpassade efter era behov"
          showHeart={true}
        />

        {/* شبكة توزيع الخدمات الثلاثة الأساسية */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {/* سنقوم بإنتاج البطاقات بالاعتماد على مصفوفة البيانات المحمية */}
          {boxs.map((service, index) => (
            <Card
              key={service.id}
              delay={index * 0.1}
              hoverEffect={true}
              className="group flex flex-col justify-between h-full bg-brand-white border border-brand-border text-left p-8 sm:p-9 relative overflow-hidden"
            >
              <div>
                {/* الرقم الخلفي الجمالي للبطاقة يتفاعل عند تمرير الماوس */}
                <span className="absolute top-6 right-8 font-serif text-brand-border/80 font-bold text-5xl select-none group-hover:text-brand-primary/10 transition-colors duration-300">
                  0{index + 1}
                </span>

                {/* حاوية الأيقونة الخاصة بالخدمة */}
                <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center text-brand-primary border border-brand-border group-hover:border-brand-primary transition-colors duration-300 mb-6 shrink-0">
                  {getIcon(service.iconName, "text-brand-primary")}
                </div>

                {/* عنوان الخدمة الرئيسي */}
                <h3 className="title-font text-2xl sm:text-3xl font-semibold text-brand-text mb-4">
                  {service.title}
                </h3>

                {/* وصف الخدمة */}
                <p className="whitespace-pre-line font-sans text-brand-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* نقاط ما يتضمنه العرض تفصيلياً */}
                <div className="mt-6 pt-6 border-t border-brand-border/40">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text mb-3">
                    Det här ingår:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-brand-text-secondary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2" />
                        <span className="font-sans font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* الجزء السفلي للبطاقة ويشمل تفاصيل التسعير وزر الاتصال */}
              <div className="mt-8 pt-6 border-t border-brand-border/40 flex flex-col gap-4">
                {service.priceInfo && (
                  <div className="flex items-start gap-2 bg-brand-bg/40 border border-brand-border/30 rounded-lg px-3 py-2 text-xs text-brand-text-secondary">
                    <HelpCircle
                      size={14}
                      className="text-brand-primary shrink-0 mt-0.5"
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primary-dark transition-colors text-left cursor-pointer border-b border-brand-primary/30 pb-0.5 w-fit focus:outline-none focus:ring-1 focus:ring-brand-primary focus:ring-offset-2"
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
        {/* <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-brand-white border border-brand-border flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
            <span className="text-3xl font-serif">”</span>
          </div>
          <div className="text-left flex-1">
            <p className="font-serif italic text-base sm:text-lg text-brand-text-secondary leading-relaxed font-light">
              "Raschas unika kombination av formell socionomkompetens och
              pedagogisk lyhördhet gör att hon når fram till alla. Hennes
              material och föreläsningar är enkla, strukturerade och fyllda med
              värme och respekt."
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="font-sans font-semibold text-xs text-brand-text uppercase tracking-widest">
                – Ann-Marie Lindgren,
              </span>
              <span className="font-sans text-xs text-brand-primary uppercase tracking-widest font-bold">
                Studieledare SFI
              </span>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
