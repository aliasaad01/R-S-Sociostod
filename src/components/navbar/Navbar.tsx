import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { NAV_LINKS } from "../../utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hem");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // حساب مكان السكرول لتحديد القسم النشط في القائمة تلقائياً
      const scrollPosition = window.scrollY + 200;
      const sections = [
        "hem",
        "om",
        "teman",
        "tjanster",
        "malgrupper",
        "kontakt",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 65; // المسافة الآمنة لتعويض ارتفاع الهيدر الثابت
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

  const handleCtaClick = () => {
    setIsOpen(false);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-brand-bg)]/90 backdrop-blur-md  border-[var(--color-brand-border)]/60 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* لوغو المؤسسة كرابط للرئيسية */}
          <a
            href="#hem"
            onClick={(e) => handleLinkClick(e, "#hem")}
            className="focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/50 rounded-xl"
            aria-label="R S Sociostöd Hem"
          >
            <Logo />
          </a>

          {/* القائمة العلوية لنسخة الشاشات الكبيرة Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const cleanedHref = link.href.replace("#", "");
              const isActive = activeSection === cleanedHref;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative font-sans text-sm tracking-wide font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]/50 px-1 py-1 rounded-sm ${
                    isActive
                      ? "text-[var(--color-brand-primary)]"
                      : "text-[var(--color-brand-text)]/80 hover:text-[var(--color-brand-primary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1 right-1 h-[1.5px] bg-[var(--color-brand-primary)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* زر طلب الخدمة لنسخة الـ Desktop */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" onClick={handleCtaClick}>
              Skicka intresseanmälan
            </Button>
          </div>

          {/* زر التحكم بالقائمة للهواتف الذكية Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl border border-[var(--color-brand-border)]/85 bg-[var(--color-brand-white)] text-[var(--color-brand-text)] hover:bg-[var(--color-brand-bg)] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/50"
            aria-label="Öppna meny"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* القائمة المنسدلة للهواتف الذكية Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-[var(--color-brand-bg)] border-b border-[var(--color-brand-border)] absolute top-full left-0 overflow-hidden shadow-lg"
          >
            <div className="px-5 py-6 flex flex-col gap-4 bg-[var(--color-brand-white)] border-t border-[var(--color-brand-border)]/50">
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const cleanedHref = link.href.replace("#", "");
                  const isActive = activeSection === cleanedHref;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between font-sans text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-[var(--color-brand-bg)] text-[var(--color-brand-primary)] pl-4"
                          : "text-[var(--color-brand-text)]/90 hover:bg-[var(--color-brand-bg)]/50 hover:text-[var(--color-brand-primary)]"
                      }`}
                    >
                      {link.label}
                      <ArrowRight
                        size={14}
                        className={`opacity-40 transition-transform ${isActive ? "translate-x-1 text-[var(--color-brand-primary)] opacity-100" : ""}`}
                      />
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-[var(--color-brand-border)]">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={handleCtaClick}
                >
                  Skicka intresseanmälan
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
