import { Button } from "@/components/ui/button";
import { BarChart3, FileText, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

interface HeroProps {
  onCreateOption: () => void;
  onConnectWallet?: () => void;
  walletAddress?: string | null;
  onOpenLogin?: () => void;
  onOpenWalletModal?: () => void;
}

export function Hero({
  onCreateOption: _onCreateOption,
  onConnectWallet: _onConnectWallet,
  walletAddress: _walletAddress,
  onOpenLogin: _onOpenLogin,
  onOpenWalletModal: _onOpenWalletModal,
}: HeroProps) {
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();

  // View Markets → scroll to Market Dashboard section on homepage (or navigate to home if not on home)
  const navigateToMarketDashboard = () => {
    if (location === "/") {
      // Already on homepage, scroll to Market Dashboard section
      const marketSection = document.getElementById("market-dashboard");
      if (marketSection) {
        marketSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to homepage - Market Dashboard section will be visible
      setLocation("/");
      // Scroll after navigation (use setTimeout to allow page render)
      setTimeout(() => {
        const marketSection = document.getElementById("market-dashboard");
        if (marketSection) {
          marketSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Image with Semi-Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/designs/cropto-cover.png)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-11 sm:py-14 lg:py-18">
        <div className="flex flex-col gap-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-4">
                <img
                  src="/CroptoBlackLogo-removebg-preview.png"
                  alt="Cropto logo"
                  className="h-16 w-auto md:h-20"
                  data-testid="img-hero-logo"
                />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight text-center md:text-left" data-testid="text-hero-headline">
                  {t('home.hero.title')}
                </h1>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl md:pl-[7rem]">
                {t('home.hero.subtitle')}
              </p>
              <p className="text-sm sm:text-base text-white/75 max-w-3xl md:pl-[7rem]">
                {t('home.hero.body')}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white/95 max-w-3xl md:pl-[7rem]">
                {t('home.hero.lifecycle')}
              </p>
              <p className="max-w-3xl rounded-lg border border-white/20 bg-black/25 p-3 text-sm leading-6 text-white/85 backdrop-blur-sm md:ml-[7rem]">
                {t('home.hero.blockchainClarification')}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:pl-[7rem]">
            <Button
              size="lg"
              className="w-full sm:w-auto font-semibold bg-amber-200 text-amber-950 hover:bg-amber-300 shadow-sm"
              onClick={navigateToMarketDashboard}
              data-testid="button-hero-view-markets"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              {t('home.hero.cta.viewMarkets')}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-black/25 text-white hover:bg-white/10 hover:text-white sm:w-auto"
              onClick={() => setLocation("/deck")}
              data-testid="button-hero-view-deck"
            >
              <FileText className="mr-2 h-5 w-5" />
              {t('home.hero.cta.viewDeck')}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-black/25 text-white hover:bg-white/10 hover:text-white sm:w-auto"
              onClick={() => setLocation("/feedback")}
              data-testid="button-hero-feedback"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              {t('home.hero.cta.feedback')}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
