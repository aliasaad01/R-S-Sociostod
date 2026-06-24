import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent_rs");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_rs", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent_rs", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-white border-t border-brand-border z-50 p-4 shadow-xl font-sans text-left animate-fade-in">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-brand-text-secondary leading-relaxed">
          Vi använder cookies för att förbättra din upplevelse, analysera trafik
          och förstå hur webbplatsen används. Genom att klicka på "Acceptera"
          godkänner du vår användning av cookies.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-xs font-medium text-brand-text-secondary hover:text-brand-text px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Neka
          </button>
          <button
            onClick={handleAccept}
            className="text-xs font-semibold bg-brand-primary text-white px-4 py-2 rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
          >
            Acceptera
          </button>
        </div>
      </div>
    </div>
  );
}
