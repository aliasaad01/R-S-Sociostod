import React, { useState, useEffect } from "react";

type ConsentStatus = "granted" | "denied";

interface ConsentParams {
  analytics_storage: ConsentStatus;
  ad_storage: ConsentStatus;
  ad_user_data: ConsentStatus;
  ad_personalization: ConsentStatus;
}

type GtagCommand = "consent" | "config" | "event" | "js";

interface DataLayerEvent {
  event?: string;
  [key: string]: unknown;
}

// توسعة واجهزة Window بأنواع صارمة 100% بدون أي استخدام لـ any
declare global {
  interface Window {
    dataLayer?: (DataLayerEvent | unknown[])[];
    gtag?: {
      (
        command: "consent",
        action: "default" | "update",
        params: ConsentParams,
      ): void;
      (
        command: GtagCommand,
        action: string,
        params?: Record<string, unknown>,
      ): void;
    };
  }
}

const updateConsentState = (isAccepted: boolean): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];

    const status: ConsentStatus = isAccepted ? "granted" : "denied";

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    } else {
      // Fallback مباشر لـ dataLayer في حال عدم توفر gtag كـ function بعد
      window.dataLayer.push([
        "consent",
        "update",
        {
          analytics_storage: status,
          ad_storage: status,
          ad_user_data: status,
          ad_personalization: status,
        },
      ]);
    }

    window.dataLayer.push({
      event: isAccepted ? "cookie_consent_accepted" : "cookie_consent_declined",
    });
  }
};

export default function CookieConsent(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent: string | null = localStorage.getItem(
      "cookie_consent_rssociostod",
    );
    if (!consent) {
      setIsVisible(true);
    } else {
      updateConsentState(consent === "accepted");
    }
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem("cookie_consent_rssociostod", "accepted");
    updateConsentState(true);
    setIsVisible(false);
  };

  const handleDecline = (): void => {
    localStorage.setItem("cookie_consent_rssociostod", "declined");
    updateConsentState(false);
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
