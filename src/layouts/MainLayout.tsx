import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import WhatsAppAssistant from "../components/whatsapp/WhatsAppAssistant";
import CookieConsent from "../components/cookieConsent/CookieConsent";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pageTitle =
    "R S Sociostöd | Föreläsningar, Samhällspedagogik & Myndighetskontakt";
  const pageDescription =
    "Professionell studievägledning, föreläsningar och studiematerial i samhällskunskap och integration av socionom Rascha Skef. Skapa trygghet hos er målgrupp.";
  const siteUrl = "https://rssociostod.se";
  const ogImageUrl = `${siteUrl}/og-image.jpg`;

  const ldJsonData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "R S Sociostöd",
    description: pageDescription,
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
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
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans antialiased relative">
        {/* إدارة وسوم الميتا تاق بالكامل من مكان واحد مركزي وديناميكي */}
        <Helmet>
          <html lang="sv" />
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={siteUrl} />

          {/* وسم الميتا الخاص بمواقع التواصل الاجتماعي وعرض كروت الروابط الافتراضية للواتساب */}
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:site_name" content="R S Sociostöd" />
          <meta property="og:locale" content="sv_SE" />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="R S Sociostöd – Kunskap som stärker"
          />

          {/* وسم الميتا المخصص لمشاركات منصة X (تويتر سابقاً) */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={ogImageUrl} />

          {/* حقن البيانات المنظمة النظيفة داخل الـ <head> */}
          <script type="application/ld+json">
            {JSON.stringify(ldJsonData)}
          </script>
        </Helmet>

        {/* المكونات الهيكلية الرئيسية الثابتة للموقع */}
        <Navbar />

        {/* الحاضن الدلالي للمحتوى المتغير */}
        <main id="main-content" className="relative z-10 focus:outline-none">
          {children}
        </main>

        <Footer />
        <CookieConsent />

        {/* أداة التواصل العائمة */}
        <WhatsAppAssistant />
      </div>
    </HelmetProvider>
  );
}
