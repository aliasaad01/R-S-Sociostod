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
    <footer className="bg-[var(--color-brand-white)] border-t border-[var(--color-brand-border)] py-16 relative overflow-hidden text-left">
      <Container>
        {/* الهيكل التوجيهي الرئيسي العلوي للتذييل */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-14">
          {/* العمود الأول: تقديم الشعار والهوية التعريفية للمؤسسة */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo showSubline={true} variant="gold" className="mb-4" />
            <p className="font-sans text-[var(--color-brand-text-secondary)] text-sm leading-relaxed max-w-sm mt-2 font-light">
              Pedagogiska utbildningsinsatser, föreläsningar och strukturerat
              studiematerial som förenklar samhällsinformation och skapar trygga
              relationer till svenska myndigheter.
            </p>
          </div>

          {/* العمود الثاني: دليل الروابط السريعة للتنقل الداخلي */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)] mb-5">
              Snabblänkar
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-sm text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] px-1 py-0.5 rounded-xs"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: قنوات التواصل والروابط الاجتماعية الرسمية */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)] mb-5">
              Kontakt &amp; Kanaler
            </h4>
            <ul className="space-y-4">
              {/* البريد الإلكتروني */}
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-3 font-sans text-sm text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] p-0.5 rounded-md"
                >
                  <Mail
                    size={16}
                    className="text-[var(--color-brand-primary)]"
                  />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              {/* إنستغرام */}
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-sans text-sm text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] p-0.5 rounded-md"
                >
                  <Instagram
                    size={16}
                    className="text-[var(--color-brand-primary)]"
                  />
                  <span>{BRAND_INFO.instagram}</span>
                </a>
              </li>
              {/* فيسبوك */}
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-sans text-sm text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] p-0.5 rounded-md"
                >
                  <Facebook
                    size={16}
                    className="text-[var(--color-brand-primary)]"
                  />
                  <span>{BRAND_INFO.facebook}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* الشريط السفلي الأخير: حقوق الملكية وزر الصعود للأعلى */}
        <div className="pt-8 border-t border-[var(--color-brand-border)]/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-[var(--color-brand-text-secondary)] font-light">
          <div>
            <p className="font-sans flex items-center gap-1.5 justify-center sm:justify-start">
              <span>
                © {currentYear} R S Sociostöd. Alla rättigheter förbehållna.
              </span>
              <span className="hidden sm:inline text-[var(--color-brand-border)]">
                •
              </span>
              <span className="flex items-center gap-0.5 text-[10px]">
                Skapad med{" "}
                <Heart
                  size={10}
                  className="text-[var(--color-brand-primary)] fill-[var(--color-brand-primary)]"
                />{" "}
                i Skandinavien
              </span>
            </p>
          </div>

          {/* زر الصعود السلس إلى أعلى الصفحة */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] transition-all duration-300 bg-[var(--color-brand-bg)] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
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
