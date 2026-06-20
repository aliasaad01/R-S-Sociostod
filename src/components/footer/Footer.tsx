import React from "react";
import { Mail, Instagram, Facebook, Heart, ArrowUp } from "lucide-react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { BRAND_INFO } from "../../data/content";
import { NAV_LINKS } from "../../utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
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
    <footer className="bg-brand-white border-t border-brand-border py-14 relative overflow-hidden text-left">
      {/* هالة ضوئية خافتة بالخلفية لكسر الفراغ الأبيض الميت */}
      <div className="absolute left-1/2 bottom-37.5 -translate-x-1/2 w-150 h-75 rounded-full bg-brand-primary/3 filter blur-[80px] pointer-events-none select-none" />

      <Container className="relative z-10">
        {/* الجزء العلوي: الهوية والشعار ممتد بشكل مريح */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-10 border-b border-brand-border/50 mb-10">
          <div className="max-w-xl">
            <Logo showSubline={true} variant="gold" className="mb-4" />
            <p className="font-sans text-brand-text-secondary text-sm leading-relaxed font-light">
              Föreläsningar och studiematerial som förenklar samhällsinformation
              och ökar tryggheten i myndighetskontakter.
            </p>
          </div>

          {/* كبسولة البريد السريع في الجهة المقابلة لملء الفراغ بشكل وظيفي */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-brand-bg border border-brand-border text-sm font-sans text-brand-text hover:border-brand-primary/40 hover:bg-brand-white hover:shadow-xs transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-white border border-brand-borderflex items-center justify-center text-brand-primary transition-colors">
                <Mail size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-text-secondary">
                  Frågor? Maila oss
                </span>
                <span className="font-semibold text-xs mt-0.5">
                  {BRAND_INFO.email}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* الجزء الأوسط: روابط التنقل السريع وقنوات التواصل بشكل شريطي متماسك */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          {/* قائمة الروابط منسقة أفقياً Flex-row بدلاً من النزول العمودي المشتت */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm font-medium text-brand-text-secondary hover:text-brand-primary transition-colors focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-xs py-1 block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* أيقونات التواصل الاجتماعي مصممة كأزرار دائرية مدمجة تقضي على الفراغ */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-sans text-xs font-bold uppercase tracking-widest text-brand-text-secondary mr-2">
              Följ oss:
            </span>

            <a
              href="https://www.instagram.com/rs.sociostod"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-brand-border bg-brand-white hover:border-brand-primary text-brand-text-secondary hover:text-brand-primary transition-all hover:-translate-y-0.5 duration-300 flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://www.facebook.com/share/1EHYGunjbH/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-brand-border bg-brand-white hover:border-brand-primary text-brand-text-secondary hover:text-brand-primary transition-all hover:-translate-y-0.5 duration-300 flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* الشريط السفلي الأخير: حقوق الملكية وزر الصعود للأعلى (منظم ومحاذى بدقة) */}
        <div className="pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-brand-text-secondary font-light">
          <div>
            <p className="font-sans flex flex-wrap items-center gap-x-2 gap-y-1 justify-center sm:justify-start text-center sm:text-left">
              <span>
                © {currentYear} R S Sociostöd. Alla rättigheter förbehållna.
              </span>
              <span className="hidden sm:inline text-brand-border">•</span>
              <span className="flex items-center gap-1 text-[10px]">
                Skapad med{" "}
                <Heart
                  size={10}
                  className="text-brand-primary fill-brand-primary"
                />{" "}
                i Skandinavien
              </span>
            </p>
          </div>

          {/* زر الصعود السلس إلى أعلى الصفحة */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border hover:border-brand-primary hover:text-brand-primary transition-all duration-300 bg-brand-bg cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-primary hover:shadow-xs"
            aria-label="Skrolla upp till toppen"
          >
            <span className="font-sans font-semibold uppercase tracking-wider text-[10px]">
              Till toppen
            </span>
            <ArrowUp size={12} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
