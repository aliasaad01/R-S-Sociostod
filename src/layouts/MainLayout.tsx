import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import WhatsAppAssistant from "../components/whatsapp/WhatsAppAssistant";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pageTitle =
    "R S Sociostöd | Föreläsningar, Samhällspedagogik & Myndighetskontakt";
  const pageDescription =
    "Professionell studievägledning, föreläsningar och studiematerial i samhällskunskap och integration av socionom Rascha Skef. Skapa trygghet hos er målgrupp.";
  const siteUrl = "https://rssociostod.se";

  // البيانات المنظمة المهيأة لمحركات البحث وجوجل (JSON-LD Schema)
  const ldJsonData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "R S Sociostöd",
    description: pageDescription,
    url: siteUrl,
    logo: "https://rssociostod.se/favicon.PNG",
    founder: {
      "@type": "Person",
      name: "Rascha Skef",
      jobTitle: "Socionom & Föreläsare",
      gender: "Female",
    },
    knowsAbout: [
      "Folkbildning",
      "Samhällspedagogik",
      "Myndighetskontakt",
      "Socialt arbete",
      "Svensk förvaltning",
    ],
    areaServed: "Sweden",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@rssociostod.se",
      contactType: "kundtjänst",
      availableLanguage: "Swedish",
    },
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] font-sans antialiased relative">
        {/* حقن وإدارة بيانات الميتا تاق والسيو عبر React Helmet Async */}
        <Helmet>
          <html lang="sv" />
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={siteUrl} />

          {/* إعدادات أبعاد الشاشة لضمان التوافقية والتجاوب المطلق مع الهواتف الذكية */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5"
          />

          {/* وسم الميتا الخاص بمواقع التواصل الاجتماعي (OpenGraph) */}
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:site_name" content="R S Sociostöd" />
          <meta property="og:locale" content="sv_SE" />

          {/* وسم الميتا المخصص لمنصة X (تويتر سابقاً) */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />

          {/* حقن مخطط الـ JSON-LD الموثق داخل الـ Head تلقائياً */}
          <script type="application/ld+json">
            {JSON.stringify(ldJsonData)}
          </script>
        </Helmet>

        {/* شريط التنقل العلوي الثابت والشفاف (Transparent Sticky Header) */}
        <Navbar />

        {/* الحاضن الرئيسي الدلالي لمحتوى صفحات الموقع المتغيرة */}
        <main id="main-content" className="relative z-10">
          {children}
        </main>

        {/* كتلة التذييل السفلية المتكاملة */}
        <Footer />

        {/* مساعد الواتساب العائم للتواصل الفوري السريع */}
        <WhatsAppAssistant />
      </div>
    </HelmetProvider>
  );
}
