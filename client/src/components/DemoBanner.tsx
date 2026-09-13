import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const DISMISS_KEY = "cropto_demo_banner_dismissed";

function readDismissed(): boolean {
  try {
    return localStorage.getItem(DISMISS_KEY) === "true";
  } catch {
    return false;
  }
}

export default function DemoBanner() {
  const [location, setLocation] = useLocation();
  const { t } = useTranslation();

  const isDemoMode = useMemo(() => {
    const mockEnv = (import.meta.env.VITE_MOCK_ONCHAIN || "").toLowerCase() === "true";
    const mintEnabled = (import.meta.env.VITE_ENABLE_MINT || "").toLowerCase() === "true";
    return mockEnv || !mintEnabled;
  }, []);

  const [dismissed, setDismissed] = useState<boolean>(() => readDismissed());

  // Hide on admin routes and auth pages (optional)
  if (
    location.startsWith("/admin") ||
    location.startsWith("/spike-monitor") ||
    location === "/login" ||
    location === "/register"
  ) {
    return null;
  }

  if (!isDemoMode || dismissed) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "true");
    } catch {
      // ignore
    }
    setDismissed(true);
  };

  return (
    <div className="w-full border-b border-amber-200/70 bg-gradient-to-r from-amber-50 to-lime-50 text-amber-950 dark:border-white/10 dark:from-amber-950/30 dark:to-lime-950/20 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-snug">
            <span className="font-semibold">Cropto</span> {t("demoBanner.message")}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => { window.location.href = "/#market-dashboard"; }}>
              {t("demoBanner.market")}
            </Button>
            <Button size="sm" variant="outline" onClick={() => setLocation("/feedback")}>
              {t("demoBanner.feedback")}
            </Button>
            <Button size="icon" variant="ghost" onClick={dismiss} aria-label={t("demoBanner.dismiss")}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

