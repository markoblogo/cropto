import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Web3Provider } from "@/contexts/Web3Context";
import { WaitlistProvider } from "@/contexts/WaitlistContext";
import DemoBanner from "@/components/DemoBanner";
import { AuthPromptGateway } from "@/components/AuthPromptGateway";
import GeoLanguageToast from "@/components/GeoLanguageToast";
import { lazy, Suspense, useEffect } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const OptionChain = lazy(() => import("@/pages/OptionChain"));
const SpotTrading = lazy(() => import("@/pages/SpotTrading"));
const MarketData = lazy(() => import("@/pages/MarketData"));
const DesignArchitecture = lazy(() => import("@/pages/DesignArchitecture"));
const PartnersContracts = lazy(() => import("@/pages/PartnersContracts"));
const OnchainTx = lazy(() => import("@/pages/OnchainTx"));
const Wallet = lazy(() => import("@/pages/Wallet"));
const Education = lazy(() => import("@/pages/Education"));
const Testing = lazy(() => import("@/pages/Testing"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Admin = lazy(() => import("@/pages/Admin"));
const AdminFeedback = lazy(() => import("@/pages/AdminFeedback"));
const AdminReconciliation = lazy(() => import("@/pages/AdminReconciliation"));
const AdminIndex = lazy(() => import("@/pages/AdminIndex"));
const RiskDashboard = lazy(() => import("@/pages/RiskDashboard"));
const AdminPartners = lazy(() => import("@/pages/AdminPartners"));
const AdminFees = lazy(() => import("@/pages/AdminFees"));
const AdminAudit = lazy(() => import("@/pages/AdminAudit"));
const IndexDetail = lazy(() => import("@/pages/IndexDetail"));
const Feedback = lazy(() => import("@/pages/Feedback"));
const ForwardMarket = lazy(() => import("@/pages/ForwardMarket"));
const OptionForwardChainPage = lazy(() => import("@/pages/OptionForwardChainPage"));
const AdminWaitlist = lazy(() => import("@/pages/AdminWaitlist"));
const Arbitrage = lazy(() => import("@/pages/Arbitrage"));
const NotFound = lazy(() => import("@/pages/not-found"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("@/pages/TermsOfUse"));
const RiskDisclosure = lazy(() => import("@/pages/RiskDisclosure"));
const DeckPage = lazy(() => import("@/pages/Deck"));
const MonitorPage = lazy(() => import("@/pages/Monitor"));
const MonitorV3Page = lazy(() => import("@/pages/MonitorV3"));
const SpikeMonitorPage = lazy(() => import("@/pages/SpikeMonitor"));
const Last30DaysPage = lazy(() => import("@/pages/Last30Days"));

function RedirectToEducation() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/education");
  }, [setLocation]);
  return null;
}

function RedirectToEducationFaq() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/education#faq");
  }, [setLocation]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/options" component={OptionChain} />
      <Route path="/spot-trading" component={SpotTrading} />
      <Route path="/market-data" component={MarketData} />
      <Route path="/arbitrage" component={Arbitrage} />
      <Route path="/forward-market" component={ForwardMarket} />
      <Route path="/markets/chain" component={OptionForwardChainPage} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/education" component={Education} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/design-architecture" component={DesignArchitecture} />
      <Route path="/partners-contracts" component={PartnersContracts} />
      <Route path="/onchain-tx" component={OnchainTx} />
      <Route path="/about" component={RedirectToEducation} />
      <Route path="/docs" component={RedirectToEducation} />
      <Route path="/faq" component={RedirectToEducationFaq} />
      <Route path="/testing" component={Testing} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/feedback" component={AdminFeedback} />
      <Route path="/admin/reconciliation" component={AdminReconciliation} />
      <Route path="/admin/risk" component={RiskDashboard} />
      <Route path="/admin/index" component={AdminIndex} />
      <Route path="/admin/partners" component={AdminPartners} />
      <Route path="/admin/fees" component={AdminFees} />
      <Route path="/admin/audit" component={AdminAudit} />
      <Route path="/admin/waitlist" component={AdminWaitlist} />
      <Route path="/index/:slug" component={IndexDetail} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfUse} />
      <Route path="/risk-disclosure" component={RiskDisclosure} />
      <Route path="/deck" component={DeckPage} />
      <Route path="/deck/" component={DeckPage} />
      <Route path="/monitor" component={MonitorV3Page} />
      <Route path="/monitor/" component={MonitorV3Page} />
      <Route path="/spike-monitor" component={SpikeMonitorPage} />
      <Route path="/spike-monitor/" component={SpikeMonitorPage} />
      <Route path="/last30days" component={Last30DaysPage} />
      <Route path="/last30days/" component={Last30DaysPage} />
      <Route path="/monitor-legacy" component={MonitorPage} />
      <Route path="/monitor-legacy/" component={MonitorPage} />
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Web3Provider>
          <WaitlistProvider>
            <Toaster />
            <GeoLanguageToast />
            <DemoBanner />
            <AuthPromptGateway />
            <Router />
          </WaitlistProvider>
        </Web3Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
