import { Suspense, lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/hero/Hero";

// Lazy loading sub-components for enhanced core bundling speed (Lighthouse optimization)
const About = lazy(() => import("../components/about/About"));
const Themes = lazy(() => import("../components/themes/Themes"));
const Services = lazy(() => import("../components/services/Services"));
const Audience = lazy(() => import("../components/audience/Audience"));
const ContactForm = lazy(() => import("../components/contact/ContactForm"));

// Lightweight skeleton skeleton loading state to ensure smooth loading transition metrics
function SectionLoader() {
  return (
    <div className="w-full h-80 flex items-center justify-center bg-brand-bg/40 animate-pulse">
      <div className="w-10 h-10 rounded-full border-2 border-brand-primary/20 border-t-brand-primary animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <MainLayout>
      {/* 1. Hero banner: loaded immediately to optimize LCP (Largest Contentful Paint) */}
      <Hero />

      {/* Lazy-loaded sections inside Suspense bound guards */}
      <Suspense fallback={<SectionLoader />}>
        {/* 2. About Rascha and core value cards */}
        <section id="om">
          <About />
        </section>

        {/* 3. Education topics / themes cards layout */}
        <section id="teman">
          <Themes />
        </section>

        {/* 4. Services cards - lecture packages & modules with pricing guidance */}
        <section id="tjanster">
          <Services />
        </section>

        {/* 5. Target Audience categories with customizable support reminders */}
        <section id="malgrupper">
          <Audience />
        </section>

        {/* 6. Contact Form validated with Zod schemas plus toast feedback */}
        <section id="kontakt">
          <ContactForm />
        </section>
      </Suspense>
    </MainLayout>
  );
}
